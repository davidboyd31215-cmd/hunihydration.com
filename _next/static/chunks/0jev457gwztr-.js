(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7887,e=>{"use strict";var t=e.i(43476),a=e.i(71645);e.s(["HeroSection",0,function(){let[e,i]=(0,a.useState)(""),[n,r]=(0,a.useState)(!1),[o,s]=(0,a.useState)(""),[l,c]=(0,a.useState)(!1),d=(0,a.useRef)(null);async function h(t){if(t.preventDefault(),s(""),!e)return void s("Please enter your email.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return void s("Please enter a valid email.");c(!0);try{let t=new URLSearchParams(window.location.search),a={email:e,source:"website",page_url:window.location.href,referrer:document.referrer||"(direct)",utm_source:t.get("utm_source")||"",utm_medium:t.get("utm_medium")||"",utm_campaign:t.get("utm_campaign")||"",utm_term:t.get("utm_term")||"",utm_content:t.get("utm_content")||"",user_agent:navigator.userAgent,language:navigator.language,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,screen_width:window.screen.width,screen_height:window.screen.height,viewport_width:window.innerWidth,viewport_height:window.innerHeight,device_pixel_ratio:window.devicePixelRatio,platform:navigator.platform,cookie_enabled:navigator.cookieEnabled,online:navigator.onLine},i=await fetch("https://script.google.com/macros/s/AKfycby34nKmGCRXdMLQ_VXHV6kkUI7NIYwKAI6AYk1Vjo-c6XTULW7eqLHhcDM0i7iFHLfJ/exec",{method:"POST",body:JSON.stringify(a)}),n=await i.json();"success"===n.status||"duplicate"===n.status?r(!0):s("Something went wrong. Please try again.")}catch{s("Something went wrong. Please try again.")}finally{c(!1)}}return(0,a.useEffect)(()=>{let e,t=d.current;if(!t)return;let a=t.getContext("2d");if(!a)return;let i=t.width=window.innerWidth,n=t.height=window.innerHeight,r=[];for(let e=0;e<60;e++)r.push({x:Math.random()*i,y:Math.random()*n,r:2.2*Math.random()+.5,vx:(Math.random()-.5)*.3,vy:-(.25*Math.random())-.05,a:.5*Math.random()+.1,da:(Math.random()-.5)*.008});!function t(){for(let e of(a.clearRect(0,0,i,n),r))e.x+=e.vx,e.y+=e.vy,e.a+=e.da,e.a>.6&&(e.da=-Math.abs(e.da)),e.a<.05&&(e.da=Math.abs(e.da)),e.y<-10&&(e.y=n+10),e.x<-10&&(e.x=i+10),e.x>i+10&&(e.x=-10),a.beginPath(),a.arc(e.x,e.y,e.r,0,2*Math.PI),a.fillStyle=`rgba(212, 168, 67, ${e.a})`,a.fill();e=requestAnimationFrame(t)}();let o=()=>{i=t.width=window.innerWidth,n=t.height=window.innerHeight};return window.addEventListener("resize",o),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",o)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

        html, body { overflow:hidden !important; height:100% !important; margin:0 !important; }

        .hl-root {
          position: relative; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          height: 100vh; width: 100vw;
          background: linear-gradient(165deg, #0c1a1f 0%, #0f1e24 30%, #111f26 60%, #0e1920 100%);
          overflow: hidden;
        }

        /* Warm ambient glow behind content */
        .hl-glow {
          position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
          width: 700px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(196,154,42,0.08) 0%, rgba(196,154,42,0.03) 40%, transparent 70%);
          pointer-events: none; filter: blur(40px);
          animation: hl-breathe 6s ease-in-out infinite;
        }
        .hl-glow2 {
          position: absolute; top: 65%; left: 55%; transform: translate(-50%, -50%);
          width: 500px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(74,158,191,0.05) 0%, transparent 60%);
          pointer-events: none; filter: blur(50px);
          animation: hl-breathe 8s ease-in-out 2s infinite;
        }

        @keyframes hl-breathe {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        /* Grain overlay */
        .hl-grain {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }

        /* Vignette */
        .hl-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(6,14,18,0.6) 100%);
        }

        /* Canvas for particles */
        .hl-canvas {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
        }

        /* Content */
        .hl-content {
          position: relative; z-index: 2; text-align: center;
          max-width: 560px; padding: 24px;
        }

        /* Thin gold line */
        .hl-line {
          width: 0; height: 1px; margin: 0 auto 28px;
          background: linear-gradient(90deg, transparent, #C49A2A, transparent);
          animation: hl-line-grow 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s forwards;
        }
        @keyframes hl-line-grow { to { width: 64px; } }

        /* HUNI title */
        .hl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(64px, 14vw, 120px);
          font-weight: 300;
          letter-spacing: 12px;
          color: #e8dcc8;
          line-height: 1;
          margin-bottom: 20px;
          opacity: 0;
          animation: hl-title-in 1.4s cubic-bezier(0.16,1,0.3,1) 0.1s forwards;
        }
        @keyframes hl-title-in {
          from { opacity: 0; transform: translateY(20px) scale(0.97); letter-spacing: 24px; }
          to { opacity: 1; transform: translateY(0) scale(1); letter-spacing: 12px; }
        }

        /* Tagline */
        .hl-tagline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16px, 2.8vw, 22px);
          font-weight: 300;
          font-style: italic;
          color: rgba(196,154,42,0.7);
          line-height: 1.6;
          margin-bottom: 6px;
          opacity: 0;
          animation: hl-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards;
        }

        .hl-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(12px, 1.6vw, 14px);
          font-weight: 400;
          color: rgba(140,160,170,0.6);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 36px;
          opacity: 0;
          animation: hl-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.55s forwards;
        }

        @keyframes hl-fade-up {
          from { opacity:0; transform:translateY(14px); }
          to { opacity:1; transform:translateY(0); }
        }

        /* Form area */
        .hl-form-wrap {
          opacity: 0;
          animation: hl-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards;
        }

        .hl-form {
          display: flex; gap: 0; max-width: 420px; margin: 0 auto;
          border: 1px solid rgba(196,154,42,0.2);
          border-radius: 2px;
          overflow: hidden;
          transition: border-color 0.4s;
        }
        .hl-form:focus-within {
          border-color: rgba(196,154,42,0.45);
        }

        .hl-input {
          flex: 1; padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          border: none; outline: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px; color: #d4cbb8;
          letter-spacing: 0.5px;
        }
        .hl-input::placeholder { color: rgba(140,160,170,0.35); }

        .hl-btn {
          padding: 14px 24px; border: none;
          background: rgba(196,154,42,0.15);
          color: #C49A2A;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer;
          transition: background 0.4s, color 0.4s;
        }
        .hl-btn:hover {
          background: rgba(196,154,42,0.9);
          color: #0c1a1f;
        }

        .hl-error { color: #c44; font-size: 13px; margin-top: 10px; font-family: 'Cormorant Garamond', serif; }

        .hl-success-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 20px; font-weight: 300; font-style: italic;
          color: #C49A2A; margin-bottom: 6px;
        }
        .hl-success-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 14px; color: rgba(140,160,170,0.5);
          letter-spacing: 1px;
        }

        /* Bottom whisper */
        .hl-bottom {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(140,160,170,0.2);
          opacity: 0;
          animation: hl-fade-up 1s cubic-bezier(0.16,1,0.3,1) 1.2s forwards;
          z-index: 2;
        }

        /* Horizontal lines accent */
        .hl-accent-line-l, .hl-accent-line-r {
          position: absolute; top: 50%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,42,0.08));
          pointer-events: none; z-index: 1;
          animation: hl-fade-up 2s ease 1s forwards; opacity: 0;
        }
        .hl-accent-line-l { left: 0; width: 20%; }
        .hl-accent-line-r { right: 0; width: 20%; background: linear-gradient(270deg, transparent, rgba(196,154,42,0.08)); }

        @media (max-width: 520px) {
          .hl-form { flex-direction: column; }
          .hl-btn { padding: 14px; }
        }
      `}),(0,t.jsxs)("div",{className:"hl-root",children:[(0,t.jsx)("div",{className:"hl-glow"}),(0,t.jsx)("div",{className:"hl-glow2"}),(0,t.jsx)("div",{className:"hl-grain"}),(0,t.jsx)("div",{className:"hl-vignette"}),(0,t.jsx)("div",{className:"hl-accent-line-l"}),(0,t.jsx)("div",{className:"hl-accent-line-r"}),(0,t.jsx)("canvas",{ref:d,className:"hl-canvas"}),(0,t.jsxs)("div",{className:"hl-content",children:[(0,t.jsx)("h1",{className:"hl-title",children:"HUNI"}),(0,t.jsx)("div",{className:"hl-line"}),(0,t.jsx)("p",{className:"hl-tagline",children:"The world's first honey-sweetened electrolyte."}),(0,t.jsx)("p",{className:"hl-sub",children:"Five organic ingredients · Nothing artificial"}),(0,t.jsx)("div",{className:"hl-form-wrap",children:n?(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"hl-success-title",children:"You're in."}),(0,t.jsx)("p",{className:"hl-success-sub",children:"We'll be in touch when it's time."})]}):(0,t.jsxs)("div",{children:[(0,t.jsxs)("form",{onSubmit:h,className:"hl-form",children:[(0,t.jsx)("input",{type:"email",placeholder:"Your email",value:e,onChange:e=>{i(e.target.value),o&&s("")},className:"hl-input"}),(0,t.jsx)("button",{type:"submit",disabled:l,className:"hl-btn",children:l?"Joining...":"Join"})]}),o&&(0,t.jsx)("p",{className:"hl-error",children:o})]})})]}),(0,t.jsx)("p",{className:"hl-bottom",children:"Sweetened by nature"})]})]})}])}]);