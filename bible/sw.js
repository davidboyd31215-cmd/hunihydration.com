// Scripture Link service worker
// Bump CACHE_VERSION on every deploy so old caches are evicted by the
// activate handler and users pick up the latest assets.
const CACHE_VERSION = 'scripture-v3-iter104';
const DATA_CACHE = 'scripture-data-v1';

// SHELL is what gets precached on service-worker install. Keep this MINIMAL —
// every byte here is shipped to 100% of installs whether the user uses the
// feature or not. JSON data files (red_letter, book_backgrounds, sermons,
// cross_refs, commentary, commentary_chapter) are runtime-cached by the fetch
// handler below the first time they are requested. red_letter.json moved out
// of SHELL iter 91 — only ~15% of users enable Jesus's-words-in-red.
// book_backgrounds.json also dropped — only used for the chapter byline,
// runtime-cache covers that on first chapter load.
const SHELL = [
  '/bible/',
  '/bible/index.html',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(SHELL).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => !k.startsWith('scripture')).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Only handle same-origin GETs under /bible/
  if (e.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith('/bible/')) return;

  // For data files (JSON) — cache-first with background update
  if (url.pathname.endsWith('.json')) {
    e.respondWith(
      caches.open(DATA_CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const fetched = fetch(e.request).then(res => {
            if (res && res.status === 200) cache.put(e.request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || fetched;
        })
      )
    );
    return;
  }

  // For HTML/other — network-first, fall back to cache
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE_VERSION).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
