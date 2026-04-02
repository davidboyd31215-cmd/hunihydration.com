(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${i}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(71645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),i=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return b}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(88540),h=e.r(91949),x=e.r(73668),m=e.r(9396);function g(t){var r,n;let i,o,g,[b,w]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:j,as:M,children:A,prefetch:C=null,passHref:P,replace:S,shallow:T,scroll:_,onClick:k,onMouseEnter:E,onTouchStart:N,legacyBehavior:O=!1,onNavigate:R,transitionTypes:z,ref:L,unstable_dynamicOnHover:B,...U}=t;i=A,O&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let $=s.default.useContext(c.AppRouterContext),F=!1!==C,I=!1!==C?null===(n=C)||"auto"===n?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,H="string"==typeof(r=M||j)?r:(0,l.formatUrl)(r);if(O){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(i)}let W=O?o&&"object"==typeof o&&o.ref:L,Y=s.default.useCallback(e=>(null!==$&&(v.current=(0,h.mountLinkInstance)(e,H,$,I,F,w)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[F,H,$,I,w]),K={ref:(0,u.useMergedRef)(Y,W),onClick(t){O||"function"!=typeof k||k(t),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!$||t.defaultPrevented||function(t,r,n,i,o,a,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,i?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,n.current,l)})}}(t,H,v,S,_,R,z)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),$&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){O||"function"!=typeof N||N(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),$&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,d.isAbsoluteUrl)(H)?K.href=H:O&&!P&&("a"!==o.type||"href"in o.props)||(K.href=(0,p.addBasePath)(H)),g=O?s.default.cloneElement(o,K):(0,a.jsx)("a",{...U,...K,children:i}),(0,a.jsx)(y.Provider,{value:b,children:g})}e.r(84508);let y=(0,s.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},43698,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016);let i=[{label:"The Science",title:"Your muscles run\non electricity",body:'Every contraction starts with a spark — charged ions flowing across cell membranes. Without electrolytes, your muscles can"t fire.'},{label:"Step 01",title:"The sodium–\npotassium pump",body:'Three sodium ions out, two potassium in. This molecular engine runs constantly, consuming 25% of your body"s ATP to maintain the electrical gradient that powers movement.'},{label:"Step 02",title:"Calcium triggers\ncontraction",body:"Calcium floods the muscle fiber, triggering contraction. Magnesium releases the grip. Without this balance, cramping takes over."},{label:"The Solution",title:"Five ingredients.\nZero compromise.",body:"Organic buckwheat honey, sea salt, coconut water, magnesium, and lemon. The electrolytes your muscles need — delivered the way nature intended."}];e.s(["default",0,function(){let e=(0,r.useRef)(null),o=(0,r.useRef)(null),a=(0,r.useRef)(null),[s,l]=(0,r.useState)(0),[c,u]=(0,r.useState)(0),[d,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(window.THREE)return void p(!0);let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",e.onload=()=>p(!0),document.head.appendChild(e)},[]),(0,r.useEffect)(()=>{if(!d||!e.current)return;let t=window.THREE,r=e.current,n=new t.WebGLRenderer({canvas:r,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(657672);let i=new t.Scene;i.fog=new t.FogExp2(657672,.012);let o=new t.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,200);o.position.set(0,0,30),i.add(new t.AmbientLight(1709328,.5));let s=new Float32Array(600),l=new Float32Array(600),c=new Float32Array(200),u=new Float32Array(200),p=new t.Color(0xc49a2a),f=new t.Color(0xf5d78e),h=new t.Color(0xffffff);for(let e=0;e<200;e++){s[3*e]=(Math.random()-.5)*50,s[3*e+1]=(Math.random()-.5)*40,s[3*e+2]=(Math.random()-.5)*40;let t=Math.random(),r=t<.5?p:t<.8?f:h;l[3*e]=r.r,l[3*e+1]=r.g,l[3*e+2]=r.b,c[e]=.15+.35*Math.random(),u[e]=Math.random()*Math.PI*2}let x=new t.BufferGeometry;x.setAttribute("position",new t.BufferAttribute(s,3)),x.setAttribute("color",new t.BufferAttribute(l,3));let m=new t.PointsMaterial({size:.25,vertexColors:!0,transparent:!0,opacity:.7,blending:t.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),g=new t.Points(x,m);i.add(g);let y=new Float32Array(900);for(let e=0;e<300;e++)y[3*e]=(Math.random()-.5)*120,y[3*e+1]=(Math.random()-.5)*120,y[3*e+2]=(Math.random()-.5)*120;let b=new t.BufferGeometry;b.setAttribute("position",new t.BufferAttribute(y,3));let w=new t.PointsMaterial({color:5588019,size:.06,transparent:!0,opacity:.3,blending:t.AdditiveBlending,depthWrite:!1});i.add(new t.Points(b,w));let v=new t.IcosahedronGeometry(2,3),j=new t.MeshBasicMaterial({color:0xc49a2a,transparent:!0,opacity:.04,wireframe:!0}),M=new t.Mesh(v,j);i.add(M);let A=0,C=0,P=0,S=!1;function T(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}return a.current={setProgress:e=>{P=e}},!function e(){if(S)return;requestAnimationFrame(e),A+=.008;let t=Math.floor(Math.min(3,C+=(P-C)*.03));o.position.z=30-4*C,o.position.x=1.5*Math.sin(.15*A),o.position.y=.8*Math.cos(.1*A)+.5*C,o.lookAt(0,0,0),M.rotation.y=.2*A,M.rotation.x=.1*A;let r=1+.05*Math.sin(.6*A);M.scale.setScalar(r),j.opacity+=((2===t?.08:.04)-j.opacity)*.02;let a=x.attributes.position,s=a.array;for(let e=0;e<200;e++){let r=u[e],n=.002+e%5*.001,i=s[3*e],o=s[3*e+2],a=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),c=a+n*(2===t?2.5:1);if(s[3*e]=Math.cos(c)*l,s[3*e+2]=Math.sin(c)*l,s[3*e+1]+=.008*Math.sin(1.5*A+r),1===t&&e%3==0){let t=l+.01;s[3*e]=Math.cos(c)*t,s[3*e+2]=Math.sin(c)*t,t>28&&(s[3*e]=2*Math.cos(c),s[3*e+2]=2*Math.sin(c))}2===t&&l>1&&(s[3*e]*=.9995,s[3*e+2]*=.9995),3===t&&l<20&&(s[3*e]*=1.0003,s[3*e+2]*=1.0003)}a.needsUpdate=!0,m.opacity=.5+.15*Math.sin(1.2*A),n.render(i,o)}(),window.addEventListener("resize",T),()=>{S=!0,window.removeEventListener("resize",T),n.dispose()}},[d]);let f=(0,r.useCallback)(()=>{let e=o.current;if(!e)return;let t=e.scrollHeight-e.clientHeight;if(t<=0)return;let r=e.scrollTop/t,n=3*r;u(r),l(Math.min(3,Math.round(n))),a.current&&a.current.setProgress(n)},[]);return(0,r.useEffect)(()=>{let e=o.current;if(e)return e.addEventListener("scroll",f,{passive:!0}),()=>e.removeEventListener("scroll",f)},[f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Outfit:wght@300;400;500&display=swap');

        .ix-root {
          background: #0a0908;
          color: #d8cfc2;
          font-family: 'Outfit', system-ui, sans-serif;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          position: relative;
        }

        .ix-canvas {
          position: fixed;
          inset: 0;
          z-index: 1;
        }

        .ix-vignette {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, rgba(10,9,8,0.5) 55%, rgba(10,9,8,0.92) 100%);
        }

        .ix-scroll {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .ix-scroll::-webkit-scrollbar { display: none; }

        .ix-scroll-inner { height: 400vh; }

        .ix-section {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 clamp(28px, 6vw, 80px);
          pointer-events: none;
        }

        .ix-content {
          max-width: 460px;
          pointer-events: auto;
        }

        .ix-section[data-pos="right"] {
          justify-content: flex-end;
        }

        .ix-section[data-pos="center"] {
          justify-content: center;
          text-align: center;
        }
        .ix-section[data-pos="center"] .ix-content {
          max-width: 500px;
        }
        .ix-section[data-pos="center"] .ix-rule {
          margin-left: auto;
          margin-right: auto;
        }

        .ix-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C49A2A;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.1s;
        }
        .ix-label.show { opacity: 0.7; transform: translateY(0); }

        .ix-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #f5f0e8;
          white-space: pre-line;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }
        .ix-title.show { opacity: 1; transform: translateY(0); }

        .ix-rule {
          width: 0;
          height: 1px;
          background: #C49A2A;
          margin-bottom: 20px;
          transition: width 0.8s ease 0.3s;
        }
        .ix-rule.show { width: 40px; }

        .ix-body {
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
          color: rgba(216, 207, 194, 0.5);
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s ease 0.35s;
        }
        .ix-body.show { opacity: 1; transform: translateY(0); }

        .ix-cta {
          display: inline-block;
          margin-top: 28px;
          padding: 14px 36px;
          border: 1px solid rgba(196, 154, 42, 0.35);
          color: #C49A2A;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(10px);
        }
        .ix-cta.show {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.45s;
        }
        .ix-cta:hover {
          background: rgba(196, 154, 42, 0.08);
          border-color: #C49A2A;
        }

        /* Nav */
        .ix-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px clamp(24px, 4vw, 48px);
          pointer-events: none;
        }
        .ix-nav a {
          pointer-events: auto;
          text-decoration: none;
        }
        .ix-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 4px;
          color: #C49A2A;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        .ix-logo:hover { opacity: 1; }
        .ix-back {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(216, 207, 194, 0.35);
          font-weight: 400;
          transition: color 0.3s;
        }
        .ix-back:hover { color: rgba(216, 207, 194, 0.6); }

        /* Dots */
        .ix-dots {
          position: fixed;
          right: clamp(20px, 3vw, 36px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 14px;
          pointer-events: auto;
        }
        .ix-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(196, 154, 42, 0.15);
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .ix-dot.on {
          background: #C49A2A;
          box-shadow: 0 0 8px rgba(196, 154, 42, 0.3);
        }

        /* Scroll hint */
        .ix-hint {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(216, 207, 194, 0.25);
          pointer-events: none;
          transition: opacity 0.5s;
        }
        .ix-hint.gone { opacity: 0; }

        @media (max-width: 768px) {
          .ix-section[data-pos="right"] {
            justify-content: flex-start;
          }
        }
      `}),(0,t.jsxs)("div",{className:"ix-root",children:[(0,t.jsx)("canvas",{ref:e,className:"ix-canvas"}),(0,t.jsx)("div",{className:"ix-vignette"}),(0,t.jsxs)("nav",{className:"ix-nav",children:[(0,t.jsx)(n.default,{href:"/",className:"ix-logo",children:"HUNI"}),(0,t.jsx)(n.default,{href:"/",className:"ix-back",children:"Home"})]}),(0,t.jsx)("div",{className:"ix-dots",children:i.map((e,r)=>(0,t.jsx)("div",{className:`ix-dot ${s===r?"on":""}`,onClick:()=>{let e=o.current;if(!e)return;let t=e.scrollHeight-e.clientHeight;e.scrollTo({top:r/3*t,behavior:"smooth"})}},r))}),(0,t.jsx)("div",{className:`ix-hint ${c>.08?"gone":""}`,children:"Scroll to explore"}),(0,t.jsx)("div",{ref:o,className:"ix-scroll",children:(0,t.jsx)("div",{className:"ix-scroll-inner",children:i.map((e,r)=>{let i=s===r;return(0,t.jsx)("div",{className:"ix-section","data-pos":0===r?"left":1===r?"right":2===r?"left":"center",children:(0,t.jsxs)("div",{className:"ix-content",children:[(0,t.jsx)("div",{className:`ix-label ${i?"show":""}`,children:e.label}),(0,t.jsx)("h2",{className:`ix-title ${i?"show":""}`,children:e.title}),(0,t.jsx)("div",{className:`ix-rule ${i?"show":""}`}),(0,t.jsx)("p",{className:`ix-body ${i?"show":""}`,children:e.body}),3===r&&(0,t.jsx)(n.default,{href:"/#waitlist",className:`ix-cta ${i?"show":""}`,children:"Join the Waitlist"})]})},r)})})})]})]})}])}]);