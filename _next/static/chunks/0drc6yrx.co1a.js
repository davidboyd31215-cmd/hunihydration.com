(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${r}${c}${i}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(71645);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),i=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return g},useLinkStatus:function(){return w}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(88540),h=e.r(91949),x=e.r(73668),m=e.r(9396);function g(t){var n,r;let i,o,g,[w,b]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:j,as:M,children:P,prefetch:C=null,passHref:E,replace:S,shallow:A,scroll:T,onClick:k,onMouseEnter:_,onTouchStart:R,legacyBehavior:N=!1,onNavigate:O,transitionTypes:z,ref:B,unstable_dynamicOnHover:L,...F}=t;i=P,N&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let U=s.default.useContext(c.AppRouterContext),$=!1!==C,H=!1!==C?null===(r=C)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,I="string"==typeof(n=M||j)?n:(0,l.formatUrl)(n);if(N){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(i)}let W=N?o&&"object"==typeof o&&o.ref:B,K=s.default.useCallback(e=>(null!==U&&(v.current=(0,h.mountLinkInstance)(e,I,U,H,$,b)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[$,I,U,H,b]),Y={ref:(0,u.useMergedRef)(K,W),onClick(t){N||"function"!=typeof k||k(t),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,n,r,i,o,a,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(n,i?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,r.current,l)})}}(t,I,v,S,T,O,z)},onMouseEnter(e){N||"function"!=typeof _||_(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&$&&(0,h.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){N||"function"!=typeof R||R(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&$&&(0,h.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)(I)?Y.href=I:N&&!E&&("a"!==o.type||"href"in o.props)||(Y.href=(0,p.addBasePath)(I)),g=N?s.default.cloneElement(o,Y):(0,a.jsx)("a",{...F,...Y,children:i}),(0,a.jsx)(y.Provider,{value:w,children:g})}e.r(84508);let y=(0,s.createContext)(h.IDLE_LINK_STATUS),w=()=>(0,s.useContext)(y);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},43698,e=>{"use strict";var t=e.i(43476),n=e.i(71645),r=e.i(22016);let i=[{label:"The Science of Sweat",title:"When you move,\nyou lose charge",body:"Every drop of sweat carries sodium, potassium, magnesium, and calcium out of your body. These aren’t just minerals — they’re the electrical signals your muscles need to fire."},{label:"Step 01 — The Pump",title:"Sodium out,\npotassium in",body:"The sodium-potassium pump runs in every cell, every second. Three sodium ions out, two potassium in — consuming 25% of your body’s energy just to maintain the voltage gradient that powers movement."},{label:"Step 02 — The Signal",title:"Calcium triggers\nthe contraction",body:"When your brain says move, calcium floods the muscle fiber and triggers contraction. Magnesium releases the grip. Without balance between the two, cramping takes over mid-rep."},{label:"Replenish",title:"Rehydrate with\nwhat you lost",body:"Huni replaces exactly what sweat takes — sodium, potassium, magnesium, calcium — sweetened with organic buckwheat honey. No dyes, no sucralose, no fake anything. Just real hydration."}];e.s(["default",0,function(){let e=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useRef)(null),[s,l]=(0,n.useState)(0),[c,u]=(0,n.useState)(0),[d,p]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(window.THREE)return void p(!0);let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",e.onload=()=>p(!0),document.head.appendChild(e)},[]),(0,n.useEffect)(()=>{if(!d||!e.current)return;let t=window.THREE,n=e.current,r=new t.WebGLRenderer({canvas:n,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(662050);let i=new t.Scene;i.fog=new t.FogExp2(662050,.01);let o=new t.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,200);o.position.set(0,0,30),i.add(new t.AmbientLight(1716288,.6));let s=new Float32Array(540),l=new Float32Array(540),c=new Float32Array(180),u=new t.Color(4890303),p=new t.Color(8111321),f=new t.Color(2846346),h=new t.Color(0xc49a2a);for(let e=0;e<180;e++){s[3*e]=(Math.random()-.5)*50,s[3*e+1]=(Math.random()-.5)*40,s[3*e+2]=(Math.random()-.5)*40;let t=Math.random(),n=t<.35?u:t<.6?p:t<.85?f:h;l[3*e]=n.r,l[3*e+1]=n.g,l[3*e+2]=n.b,c[e]=Math.random()*Math.PI*2}let x=new t.BufferGeometry;x.setAttribute("position",new t.BufferAttribute(s,3)),x.setAttribute("color",new t.BufferAttribute(l,3));let m=new t.PointsMaterial({size:.28,vertexColors:!0,transparent:!0,opacity:.65,blending:t.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),g=new t.Points(x,m);i.add(g);let y=new Float32Array(750);for(let e=0;e<250;e++)y[3*e]=(Math.random()-.5)*120,y[3*e+1]=(Math.random()-.5)*120,y[3*e+2]=(Math.random()-.5)*120;let w=new t.BufferGeometry;w.setAttribute("position",new t.BufferAttribute(y,3)),i.add(new t.Points(w,new t.PointsMaterial({color:2837082,size:.05,transparent:!0,opacity:.25,blending:t.AdditiveBlending,depthWrite:!1})));let b=new t.IcosahedronGeometry(2.5,2),v=new t.MeshBasicMaterial({color:4890303,transparent:!0,opacity:.03,wireframe:!0}),j=new t.Mesh(b,v);i.add(j);let M=0,P=0,C=0,E=!1;function S(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}return a.current={setProgress:e=>{C=e}},!function e(){if(E)return;requestAnimationFrame(e),M+=.008;let t=Math.floor(Math.min(3,P+=(C-P)*.03));o.position.z=30-4*P,o.position.x=1.8*Math.sin(.12*M),o.position.y=.8*Math.cos(.08*M)+.4*P,o.lookAt(0,0,0),j.rotation.y=.15*M,j.rotation.x=.08*M,j.scale.setScalar(1+.04*Math.sin(.5*M)),v.opacity+=((2===t?.06:.03)-v.opacity)*.02;let n=x.attributes.position,a=n.array;for(let e=0;e<180;e++){let n=c[e],r=.0015+e%7*5e-4,i=a[3*e];a[3*e+1];let o=a[3*e+2],s=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),u=s+r*(2===t?2:1);if(a[3*e]=Math.cos(u)*l,a[3*e+2]=Math.sin(u)*l,a[3*e+1]+=.006*Math.sin(1.2*M+n),a[3*e+1]+=.003*Math.cos(.7*M+1.5*n),0===t)e%4==0&&l<28&&(a[3*e]*=1.0002,a[3*e+2]*=1.0002);else if(1===t){if(e%3==0){let t=l+.008;a[3*e]=Math.cos(u)*t,a[3*e+2]=Math.sin(u)*t,t>26&&(a[3*e]=2*Math.cos(u),a[3*e+2]=2*Math.sin(u))}else if(e%3==1){let t=Math.max(.5,l-.006);a[3*e]=Math.cos(u)*t,a[3*e+2]=Math.sin(u)*t,l<.8&&(a[3*e]=18*Math.cos(u),a[3*e+2]=18*Math.sin(u))}}else 2===t?l>.8&&(a[3*e]*=.9992,a[3*e+2]*=.9992):l<22&&(a[3*e]*=1.0002,a[3*e+2]*=1.0002)}n.needsUpdate=!0,m.opacity=.45+.15*Math.sin(+M),r.render(i,o)}(),window.addEventListener("resize",S),()=>{E=!0,window.removeEventListener("resize",S),r.dispose()}},[d]);let f=(0,n.useCallback)(()=>{let e=o.current;if(!e)return;let t=e.scrollHeight-e.clientHeight;if(t<=0)return;let n=e.scrollTop/t,r=3*n;u(n),l(Math.min(3,Math.round(r))),a.current&&a.current.setProgress(r)},[]);return(0,n.useEffect)(()=>{let e=o.current;if(e)return e.addEventListener("scroll",f,{passive:!0}),()=>e.removeEventListener("scroll",f)},[f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Outfit:wght@300;400;500&display=swap');

        .ix-root {
          background: #0a1a22;
          color: #c8dde5;
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
          background: radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, rgba(10,26,34,0.5) 55%, rgba(10,26,34,0.92) 100%);
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

        .ix-section[data-pos="right"] { justify-content: flex-end; }
        .ix-section[data-pos="center"] { justify-content: center; text-align: center; }
        .ix-section[data-pos="center"] .ix-content { max-width: 500px; }
        .ix-section[data-pos="center"] .ix-rule { margin-left: auto; margin-right: auto; }

        .ix-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4A9EBF;
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
          color: #eaf3f7;
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
          background: #4A9EBF;
          margin-bottom: 20px;
          transition: width 0.8s ease 0.3s;
        }
        .ix-rule.show { width: 40px; }

        .ix-body {
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
          color: rgba(200, 221, 229, 0.5);
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s ease 0.35s;
        }
        .ix-body.show { opacity: 1; transform: translateY(0); }

        .ix-cta {
          display: inline-block;
          margin-top: 28px;
          padding: 14px 36px;
          border: 1px solid rgba(74, 158, 191, 0.35);
          color: #4A9EBF;
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
          background: rgba(74, 158, 191, 0.08);
          border-color: #4A9EBF;
        }

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
        .ix-nav a { pointer-events: auto; text-decoration: none; }
        .ix-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 4px;
          color: #4A9EBF;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        .ix-logo:hover { opacity: 1; }
        .ix-back {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(200, 221, 229, 0.35);
          font-weight: 400;
          transition: color 0.3s;
        }
        .ix-back:hover { color: rgba(200, 221, 229, 0.6); }

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
          background: rgba(74, 158, 191, 0.15);
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .ix-dot.on {
          background: #4A9EBF;
          box-shadow: 0 0 8px rgba(74, 158, 191, 0.3);
        }

        .ix-hint {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(200, 221, 229, 0.25);
          pointer-events: none;
          transition: opacity 0.5s;
        }
        .ix-hint.gone { opacity: 0; }

        @media (max-width: 768px) {
          .ix-section[data-pos="right"] { justify-content: flex-start; }
        }
      `}),(0,t.jsxs)("div",{className:"ix-root",children:[(0,t.jsx)("canvas",{ref:e,className:"ix-canvas"}),(0,t.jsx)("div",{className:"ix-vignette"}),(0,t.jsxs)("nav",{className:"ix-nav",children:[(0,t.jsx)(r.default,{href:"/",className:"ix-logo",children:"HUNI"}),(0,t.jsx)(r.default,{href:"/",className:"ix-back",children:"Home"})]}),(0,t.jsx)("div",{className:"ix-dots",children:i.map((e,n)=>(0,t.jsx)("div",{className:`ix-dot ${s===n?"on":""}`,onClick:()=>{let e=o.current;if(!e)return;let t=e.scrollHeight-e.clientHeight;e.scrollTo({top:n/3*t,behavior:"smooth"})}},n))}),(0,t.jsx)("div",{className:`ix-hint ${c>.08?"gone":""}`,children:"Scroll to explore"}),(0,t.jsx)("div",{ref:o,className:"ix-scroll",children:(0,t.jsx)("div",{className:"ix-scroll-inner",children:i.map((e,n)=>{let i=s===n;return(0,t.jsx)("div",{className:"ix-section","data-pos":0===n?"left":1===n?"right":2===n?"left":"center",children:(0,t.jsxs)("div",{className:"ix-content",children:[(0,t.jsx)("div",{className:`ix-label ${i?"show":""}`,children:e.label}),(0,t.jsx)("h2",{className:`ix-title ${i?"show":""}`,children:e.title}),(0,t.jsx)("div",{className:`ix-rule ${i?"show":""}`}),(0,t.jsx)("p",{className:`ix-body ${i?"show":""}`,children:e.body}),3===n&&(0,t.jsx)(r.default,{href:"/#waitlist",className:`ix-cta ${i?"show":""}`,children:"Join the Waitlist"})]})},n)})})})]})]})}])}]);