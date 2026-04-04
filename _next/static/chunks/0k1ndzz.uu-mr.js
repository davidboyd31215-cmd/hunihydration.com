(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var s in r)Object.defineProperty(i,s,{enumerable:!0,get:r[s]});let a=e.r(90809)._(e.r(98183)),n=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:i}=e,r=e.protocol||"",s=e.pathname||"",o=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:i&&(c=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let m=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||n.test(r))&&!1!==c?(c="//"+(c||""),s&&"/"!==s[0]&&(s="/"+s)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),m&&"?"!==m[0]&&(m="?"+m),s=s.replace(/[?#]/g,encodeURIComponent),m=m.replace("#","%23"),`${r}${c}${s}${m}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return s}});let r=e.r(71645);function s(e,t){let i=(0,r.useRef)(null),s=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(i.current=a(e,r)),t&&(s.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(18967),s=e.r(52817);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,s.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return y},useLinkStatus:function(){return v}};for(var s in r)Object.defineProperty(i,s,{enumerable:!0,get:r[s]});let a=e.r(90809),n=e.r(43476),o=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),m=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let u=e.r(88540),h=e.r(91949),f=e.r(73668),x=e.r(9396);function y(t){var i,r;let s,a,y,[v,b]=(0,o.useOptimistic)(h.IDLE_LINK_STATUS),j=(0,o.useRef)(null),{href:w,as:k,children:N,prefetch:M=null,passHref:A,replace:C,shallow:E,scroll:G,onClick:O,onMouseEnter:S,onTouchStart:Q,legacyBehavior:$=!1,onNavigate:P,transitionTypes:W,ref:_,unstable_dynamicOnHover:z,...R}=t;s=N,$&&("string"==typeof s||"number"==typeof s)&&(s=(0,n.jsx)("a",{children:s}));let T=o.default.useContext(c.AppRouterContext),L=!1!==M,F=!1!==M?null===(r=M)||"auto"===r?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,I="string"==typeof(i=k||w)?i:(0,l.formatUrl)(i);if($){if(s?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=o.default.Children.only(s)}let U=$?a&&"object"==typeof a&&a.ref:_,B=o.default.useCallback(e=>(null!==T&&(j.current=(0,h.mountLinkInstance)(e,I,T,F,L,b)),()=>{j.current&&((0,h.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,h.unmountPrefetchableInstance)(e)}),[L,I,T,F,b]),Y={ref:(0,m.useMergedRef)(B,U),onClick(t){$||"function"!=typeof O||O(t),$&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!T||t.defaultPrevented||function(t,i,r,s,a,n,l){if("u">typeof window){let c,{nodeName:m}=t.currentTarget;if("A"===m.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(i)){s&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),n){let e=!1;if(n({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);o.default.startTransition(()=>{d(i,s?"replace":"push",!1===a?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,r.current,l)})}}(t,I,j,C,G,P,W)},onMouseEnter(e){$||"function"!=typeof S||S(e),$&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),T&&L&&(0,h.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){$||"function"!=typeof Q||Q(e),$&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),T&&L&&(0,h.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,d.isAbsoluteUrl)(I)?Y.href=I:$&&!A&&("a"!==a.type||"href"in a.props)||(Y.href=(0,p.addBasePath)(I)),y=$?o.default.cloneElement(a,Y):(0,n.jsx)("a",{...R,...Y,children:s}),(0,n.jsx)(g.Provider,{value:v,children:y})}e.r(84508);let g=(0,o.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,o.useContext)(g);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},43698,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(22016);e.s(["default",0,function(){let[e,s]=(0,i.useState)(new Set([0])),[a,n]=(0,i.useState)(0),[o,l]=(0,i.useState)(0),c=(0,i.useRef)(null),m=(0,i.useRef)([]),d=(0,i.useRef)([]),p=(0,i.useRef)(0);(0,i.useEffect)(()=>{let e=()=>{let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;n(e),l(t>0?e/t:0)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,i.useEffect)(()=>{let e=new IntersectionObserver(e=>{s(t=>{let i=new Set(t);return e.forEach(e=>{let t=Number(e.target.getAttribute("data-idx"));e.isIntersecting&&i.add(t)}),i})},{threshold:.3});return m.current.forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[]),(0,i.useEffect)(()=>{let e=c.current;if(!e)return;let t=e.getContext("2d");if(!t)return;let i=window.innerWidth,r=window.innerHeight;if(e.width=i,e.height=r,0===d.current.length)for(let e=0;e<80;e++)d.current.push({x:Math.random()*i,y:Math.random()*r,tx:.5*i+(Math.random()-.5)*120,ty:.5*r+(Math.random()-.5)*200,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:2*Math.random()+.5,phase:Math.random()*Math.PI*2,color:Math.random()>.5?"#4A9EBF":"#5AC48A"});let s=()=>{i=window.innerWidth,r=window.innerHeight,e.width=i,e.height=r};window.addEventListener("resize",s);let a=0,n=()=>{t.clearRect(0,0,i,r),a+=.01;let e=document.documentElement.scrollHeight-window.innerHeight,s=Math.min(1,Math.max(0,((e>0?window.scrollY/e:0)-.15)/.4));d.current.forEach((e,n)=>{if(s<.1)e.x+=e.vx+.15*Math.sin(a+e.phase),e.y+=e.vy+.15*Math.cos(.7*a+e.phase),e.x<-10&&(e.x=i+10),e.x>i+10&&(e.x=-10),e.y<-10&&(e.y=r+10),e.y>r+10&&(e.y=-10);else{let t=.02+.03*s;e.x+=(e.tx-e.x)*t+Math.sin(2*a+e.phase)*(1-s)*2,e.y+=(e.ty-e.y)*t+Math.cos(1.5*a+e.phase)*(1-s)*2}let o=.15+.5*s+.1*Math.sin(2*a+e.phase);t.beginPath(),t.arc(e.x,e.y,e.r*(1+.5*s),0,2*Math.PI),t.fillStyle=e.color,t.globalAlpha=Math.max(.05,Math.min(.8,o)),t.fill(),s>.3&&(t.beginPath(),t.arc(e.x,e.y,4*e.r,0,2*Math.PI),t.fillStyle=e.color,t.globalAlpha=(s-.3)*.15,t.fill())}),t.globalAlpha=1,p.current=requestAnimationFrame(n)};return n(),()=>{cancelAnimationFrame(p.current),window.removeEventListener("resize",s)}},[]);let u=Math.min(1,Math.max(0,(o-.12)/.5)),h=Math.min(1,Math.max(0,(o-.45)/.3));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');

        html { scroll-behavior: smooth; }

        .imm-root {
          background: #060e12;
          color: #c8dde5;
          font-family: 'Outfit', system-ui, sans-serif;
          min-height: 100vh;
        }

        /* Fixed background layers */
        .imm-canvas {
          position: fixed; inset: 0; z-index: 1;
          pointer-events: none;
        }
        .imm-vignette {
          position: fixed; inset: 0; z-index: 2; pointer-events: none;
          background: radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, rgba(6,14,18,0.4) 50%, rgba(6,14,18,0.92) 100%);
        }

        /* Letterbox */
        .imm-bar { position: fixed; left: 0; right: 0; z-index: 50; background: #060e12; height: clamp(24px, 3.5vh, 44px); pointer-events: none; }
        .imm-bar-t { top: 0; }
        .imm-bar-b { bottom: 0; }

        /* Nav */
        .imm-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 60;
          display: flex; justify-content: space-between; align-items: center;
          padding: clamp(32px, 4.5vh, 52px) clamp(24px, 4vw, 48px);
          pointer-events: none;
        }
        .imm-nav a { pointer-events: auto; text-decoration: none; }
        .imm-logo {
          font-family: 'Cormorant Garamond', serif; font-size: 15px;
          font-weight: 600; letter-spacing: 4px; color: #4A9EBF;
          opacity: 0.5; transition: opacity 0.3s;
        }
        .imm-logo:hover { opacity: 0.8; }
        .imm-home {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(200,221,229,0.25); font-weight: 400; transition: color 0.3s;
        }
        .imm-home:hover { color: rgba(200,221,229,0.5); }

        /* SVG body (fixed center) */
        .imm-body-wrap {
          position: fixed; top: 50%; left: 50%; z-index: 3;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: opacity 1.2s ease;
        }
        .imm-body-svg {
          width: clamp(140px, 18vw, 220px);
          height: auto;
          filter: drop-shadow(0 0 0px rgba(74,158,191,0));
          transition: filter 1.5s ease, opacity 1.5s ease;
        }
        .imm-body-svg.glow {
          filter: drop-shadow(0 0 20px rgba(74,158,191,0.4)) drop-shadow(0 0 60px rgba(74,158,191,0.15));
        }
        .imm-body-svg.repair {
          filter: drop-shadow(0 0 30px rgba(90,196,138,0.5)) drop-shadow(0 0 80px rgba(74,158,191,0.3)) drop-shadow(0 0 120px rgba(196,154,42,0.15));
        }

        /* Sections */
        .imm-section {
          position: relative; z-index: 10;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: clamp(60px, 10vh, 120px) clamp(24px, 6vw, 80px);
        }

        /* Section types */
        .imm-title-wrap { text-align: center; }
        .imm-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 9vw, 100px);
          font-weight: 300; letter-spacing: 0.18em;
          color: #eaf3f7;
          opacity: 0; transform: scale(0.94) translateY(12px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .imm-title.vis { opacity: 1; transform: scale(1) translateY(0); }
        .imm-title-sub {
          margin-top: 20px;
          font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(200,221,229,0.22); max-width: 420px; margin-left: auto; margin-right: auto;
          line-height: 1.8;
          opacity: 0; transition: opacity 1s ease 0.6s;
        }
        .imm-title-sub.vis { opacity: 1; }

        /* Scene text (beside body) */
        .imm-scene { max-width: 420px; }
        .imm-scene-left { margin-right: auto; }
        .imm-scene-right { margin-left: auto; }

        .imm-scene-label {
          font-size: 9px; font-weight: 500; letter-spacing: 3.5px;
          text-transform: uppercase; color: #4A9EBF; margin-bottom: 14px;
          opacity: 0; transform: translateY(10px);
          transition: all 0.6s ease;
        }
        .imm-scene-label.vis { opacity: 0.55; transform: translateY(0); }

        .imm-scene-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4.5vw, 50px);
          font-weight: 300; line-height: 1.08; letter-spacing: -0.02em;
          color: #eaf3f7; white-space: pre-line; margin-bottom: 18px;
          opacity: 0; transform: translateY(20px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s;
        }
        .imm-scene-heading.vis { opacity: 1; transform: translateY(0); }

        .imm-scene-rule {
          width: 0; height: 1px; background: #4A9EBF;
          margin-bottom: 18px; transition: width 0.8s ease 0.25s;
        }
        .imm-scene-rule.vis { width: 36px; }

        .imm-scene-body {
          font-size: 13.5px; line-height: 1.85; font-weight: 300;
          color: rgba(200,221,229,0.4);
          opacity: 0; transform: translateY(12px);
          transition: all 0.7s ease 0.35s;
        }
        .imm-scene-body.vis { opacity: 1; transform: translateY(0); }

        /* Fulltext */
        .imm-fulltext { text-align: center; max-width: 700px; }
        .imm-fulltext-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 300; line-height: 1.08; letter-spacing: -0.02em;
          color: #eaf3f7; white-space: pre-line;
          opacity: 0; transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .imm-fulltext-main.vis { opacity: 1; transform: translateY(0); }
        .imm-fulltext-sub {
          margin-top: 20px; font-size: 14px;
          color: rgba(200,221,229,0.3); line-height: 1.7;
          opacity: 0; transition: opacity 0.8s ease 0.5s;
        }
        .imm-fulltext-sub.vis { opacity: 1; }

        /* Finale */
        .imm-finale { text-align: center; }
        .imm-finale-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(60px, 11vw, 110px);
          font-weight: 600; letter-spacing: 0.1em;
          color: #C49A2A;
          opacity: 0; transform: scale(0.93);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .imm-finale-brand.vis { opacity: 1; transform: scale(1); }
        .imm-finale-sub {
          font-size: 14px; color: rgba(200,221,229,0.4);
          line-height: 1.75; white-space: pre-line; max-width: 380px;
          margin: 0 auto 32px;
          opacity: 0; transition: opacity 0.8s ease 0.4s;
        }
        .imm-finale-sub.vis { opacity: 1; }
        .imm-cta {
          display: inline-block; padding: 15px 40px;
          border: 1px solid rgba(196,154,42,0.35); color: #C49A2A;
          font-size: 10px; font-weight: 500; letter-spacing: 2.8px;
          text-transform: uppercase; text-decoration: none;
          opacity: 0; transform: translateY(10px);
          transition: all 0.5s ease 0.6s;
        }
        .imm-cta.vis { opacity: 1; transform: translateY(0); }
        .imm-cta:hover { background: rgba(196,154,42,0.08); border-color: #C49A2A; }

        /* Progress */
        .imm-progress {
          position: fixed; bottom: clamp(24px, 3.5vh, 44px); left: 0; right: 0;
          z-index: 55; height: 1px; pointer-events: none;
        }
        .imm-progress-fill {
          height: 100%; background: linear-gradient(90deg, #4A9EBF, #C49A2A);
          transition: width 0.08s linear;
        }

        .imm-scroll-hint {
          position: fixed; bottom: clamp(36px, 4.5vh, 60px); left: 50%;
          transform: translateX(-50%); z-index: 55;
          font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(200,221,229,0.18); pointer-events: none;
          transition: opacity 0.6s;
          animation: imm-pulse 2.5s ease-in-out infinite;
        }
        .imm-scroll-hint.hidden { opacity: 0; }

        @keyframes imm-pulse {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.35; }
        }

        /* Muscle highlight lines on body */
        .imm-muscle-lines {
          position: absolute; inset: 0;
          opacity: 0; transition: opacity 1.5s ease;
        }
        .imm-muscle-lines.active { opacity: 1; }

        @media (max-width: 768px) {
          .imm-scene-left, .imm-scene-right { margin: 0 auto; text-align: center; }
          .imm-scene-rule.vis { margin-left: auto; margin-right: auto; }
        }
      `}),(0,t.jsxs)("div",{className:"imm-root",children:[(0,t.jsx)("canvas",{ref:c,className:"imm-canvas"}),(0,t.jsx)("div",{className:"imm-vignette"}),(0,t.jsx)("div",{className:"imm-bar imm-bar-t"}),(0,t.jsx)("div",{className:"imm-bar imm-bar-b"}),(0,t.jsxs)("nav",{className:"imm-nav",children:[(0,t.jsx)(r.default,{href:"/",className:"imm-logo",children:"HUNI"}),(0,t.jsx)(r.default,{href:"/",className:"imm-home",children:"Home"})]}),(0,t.jsx)("div",{className:"imm-body-wrap",style:{opacity:+(o>.08&&o<.88)},children:(0,t.jsxs)("svg",{className:`imm-body-svg${u>.1?" glow":""}${h>.5?" repair":""}`,viewBox:"0 0 200 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"bodyGrad",x1:"100",y1:"0",x2:"100",y2:"500",gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#4A9EBF",stopOpacity:.15+.4*u}),(0,t.jsx)("stop",{offset:"50%",stopColor:"#5AC48A",stopOpacity:.1+.35*h}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#4A9EBF",stopOpacity:.1+.3*u})]}),(0,t.jsxs)("linearGradient",{id:"muscleGrad",x1:"100",y1:"0",x2:"100",y2:"500",gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#5AC48A",stopOpacity:.7*h}),(0,t.jsx)("stop",{offset:"50%",stopColor:"#4A9EBF",stopOpacity:.6*h}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#C49A2A",stopOpacity:.4*h})]})]}),(0,t.jsx)("ellipse",{cx:"100",cy:"38",rx:"24",ry:"28",stroke:"url(#bodyGrad)",strokeWidth:"1.2",opacity:.3+.5*u}),(0,t.jsx)("line",{x1:"100",y1:"66",x2:"100",y2:"82",stroke:"url(#bodyGrad)",strokeWidth:"1",opacity:.25+.4*u}),(0,t.jsx)("path",{d:"M68 82 Q60 85 58 120 Q56 160 62 195 L80 200 Q90 202 100 202 Q110 202 120 200 L138 195 Q144 160 142 120 Q140 85 132 82 Z",stroke:"url(#bodyGrad)",strokeWidth:"1.2",fill:"none",opacity:.3+.5*u}),(0,t.jsx)("path",{d:"M68 82 Q50 84 38 95 Q28 108 24 135 Q22 148 25 168 Q27 178 32 188",stroke:"url(#bodyGrad)",strokeWidth:"1.1",opacity:.25+.45*u}),(0,t.jsx)("path",{d:"M132 82 Q150 84 162 95 Q172 108 176 135 Q178 148 175 168 Q173 178 168 188",stroke:"url(#bodyGrad)",strokeWidth:"1.1",opacity:.25+.45*u}),(0,t.jsx)("ellipse",{cx:"30",cy:"194",rx:"8",ry:"10",stroke:"url(#bodyGrad)",strokeWidth:"0.8",opacity:.2+.3*u}),(0,t.jsx)("ellipse",{cx:"170",cy:"194",rx:"8",ry:"10",stroke:"url(#bodyGrad)",strokeWidth:"0.8",opacity:.2+.3*u}),(0,t.jsx)("path",{d:"M62 195 Q70 215 75 225 L100 230 L125 225 Q130 215 138 195",stroke:"url(#bodyGrad)",strokeWidth:"1.1",fill:"none",opacity:.25+.4*u}),(0,t.jsx)("path",{d:"M75 225 Q72 260 70 300 Q68 340 66 370 Q64 395 68 420 Q70 435 72 450",stroke:"url(#bodyGrad)",strokeWidth:"1.2",opacity:.3+.45*u}),(0,t.jsx)("path",{d:"M125 225 Q128 260 130 300 Q132 340 134 370 Q136 395 132 420 Q130 435 128 450",stroke:"url(#bodyGrad)",strokeWidth:"1.2",opacity:.3+.45*u}),(0,t.jsx)("path",{d:"M72 450 Q70 460 60 468 Q55 470 52 468",stroke:"url(#bodyGrad)",strokeWidth:"0.9",opacity:.2+.3*u}),(0,t.jsx)("path",{d:"M128 450 Q130 460 140 468 Q145 470 148 468",stroke:"url(#bodyGrad)",strokeWidth:"0.9",opacity:.2+.3*u}),(0,t.jsx)("line",{x1:"74",y1:"240",x2:"70",y2:"310",stroke:"url(#muscleGrad)",strokeWidth:"1.5",opacity:.6*h}),(0,t.jsx)("line",{x1:"78",y1:"245",x2:"72",y2:"305",stroke:"url(#muscleGrad)",strokeWidth:"1",opacity:.4*h}),(0,t.jsx)("line",{x1:"126",y1:"240",x2:"130",y2:"310",stroke:"url(#muscleGrad)",strokeWidth:"1.5",opacity:.6*h}),(0,t.jsx)("line",{x1:"122",y1:"245",x2:"128",y2:"305",stroke:"url(#muscleGrad)",strokeWidth:"1",opacity:.4*h}),(0,t.jsx)("line",{x1:"40",y1:"110",x2:"30",y2:"155",stroke:"url(#muscleGrad)",strokeWidth:"1.3",opacity:.5*h}),(0,t.jsx)("line",{x1:"160",y1:"110",x2:"170",y2:"155",stroke:"url(#muscleGrad)",strokeWidth:"1.3",opacity:.5*h}),(0,t.jsx)("line",{x1:"90",y1:"120",x2:"88",y2:"180",stroke:"url(#muscleGrad)",strokeWidth:"1",opacity:.35*h}),(0,t.jsx)("line",{x1:"110",y1:"120",x2:"112",y2:"180",stroke:"url(#muscleGrad)",strokeWidth:"1",opacity:.35*h}),(0,t.jsx)("line",{x1:"100",y1:"115",x2:"100",y2:"185",stroke:"url(#muscleGrad)",strokeWidth:"0.8",opacity:.25*h}),(0,t.jsx)("line",{x1:"68",y1:"350",x2:"66",y2:"410",stroke:"url(#muscleGrad)",strokeWidth:"1.2",opacity:.5*h}),(0,t.jsx)("line",{x1:"132",y1:"350",x2:"134",y2:"410",stroke:"url(#muscleGrad)",strokeWidth:"1.2",opacity:.5*h}),(0,t.jsx)("path",{d:"M75 95 Q85 105 100 108 Q115 105 125 95",stroke:"url(#muscleGrad)",strokeWidth:"1",fill:"none",opacity:.4*h}),(0,t.jsx)("path",{d:"M78 105 Q90 115 100 117 Q110 115 122 105",stroke:"url(#muscleGrad)",strokeWidth:"0.8",fill:"none",opacity:.3*h}),(0,t.jsx)("circle",{cx:"100",cy:"110",r:3+4*u,fill:"#4A9EBF",opacity:.4*u+.3*h}),(0,t.jsx)("circle",{cx:"100",cy:"110",r:8+12*u,fill:"#4A9EBF",opacity:.08*u})]})}),(0,t.jsx)("div",{className:"imm-progress",children:(0,t.jsx)("div",{className:"imm-progress-fill",style:{width:`${100*o}%`}})}),(0,t.jsx)("div",{className:`imm-scroll-hint${o>.03?" hidden":""}`,children:"Scroll to watch"}),(0,t.jsx)("div",{ref:e=>{m.current[0]=e},"data-idx":"0",className:"imm-section",children:(0,t.jsxs)("div",{className:"imm-title-wrap",children:[(0,t.jsx)("h1",{className:`imm-title${e.has(0)?" vis":""}`,children:"RECOVER"}),(0,t.jsx)("p",{className:`imm-title-sub${e.has(0)?" vis":""}`,children:"A short film about what happens after you push your limits"})]})}),(0,t.jsx)("div",{ref:e=>{m.current[1]=e},"data-idx":"1",className:"imm-section",children:(0,t.jsxs)("div",{className:"imm-scene imm-scene-left",children:[(0,t.jsx)("div",{className:`imm-scene-label${e.has(1)?" vis":""}`,children:"Act I"}),(0,t.jsx)("h2",{className:`imm-scene-heading${e.has(1)?" vis":""}`,children:"You gave\neverything."}),(0,t.jsx)("div",{className:`imm-scene-rule${e.has(1)?" vis":""}`}),(0,t.jsx)("p",{className:`imm-scene-body${e.has(1)?" vis":""}`,children:"Your muscles fired thousands of contractions. You sweated out sodium, potassium, magnesium, calcium — the ions that carry every electrical signal in your body."})]})}),(0,t.jsx)("div",{ref:e=>{m.current[2]=e},"data-idx":"2",className:"imm-section",children:(0,t.jsxs)("div",{className:"imm-scene imm-scene-right",children:[(0,t.jsx)("div",{className:`imm-scene-label${e.has(2)?" vis":""}`,children:"Act II"}),(0,t.jsx)("h2",{className:`imm-scene-heading${e.has(2)?" vis":""}`,children:"The pump\nnever stops."}),(0,t.jsx)("div",{className:`imm-scene-rule${e.has(2)?" vis":""}`}),(0,t.jsx)("p",{className:`imm-scene-body${e.has(2)?" vis":""}`,children:"Three sodium ions out. Two potassium in. The sodium-potassium pump runs in every cell, consuming 25% of your resting energy just to maintain the voltage that makes movement possible."})]})}),(0,t.jsx)("div",{ref:e=>{m.current[3]=e},"data-idx":"3",className:"imm-section",children:(0,t.jsxs)("div",{className:"imm-fulltext",children:[(0,t.jsx)("h2",{className:`imm-fulltext-main${e.has(3)?" vis":""}`,children:"Your muscles\nare electrical."}),(0,t.jsx)("p",{className:`imm-fulltext-sub${e.has(3)?" vis":""}`,children:"Every contraction is a spark. Every recovery is a recharge."})]})}),(0,t.jsx)("div",{ref:e=>{m.current[4]=e},"data-idx":"4",className:"imm-section",children:(0,t.jsxs)("div",{className:"imm-scene imm-scene-left",children:[(0,t.jsx)("div",{className:`imm-scene-label${e.has(4)?" vis":""}`,children:"Act III"}),(0,t.jsx)("h2",{className:`imm-scene-heading${e.has(4)?" vis":""}`,children:"Fiber by fiber,\nyou rebuild."}),(0,t.jsx)("div",{className:`imm-scene-rule${e.has(4)?" vis":""}`}),(0,t.jsx)("p",{className:`imm-scene-body${e.has(4)?" vis":""}`,children:"Calcium re-enables contraction signaling. Magnesium relaxes overworked tissue. Your muscle fibers knit back together, stronger than before."})]})}),(0,t.jsx)("div",{ref:e=>{m.current[5]=e},"data-idx":"5",className:"imm-section",children:(0,t.jsx)("div",{className:"imm-fulltext",children:(0,t.jsx)("h2",{className:`imm-fulltext-main${e.has(5)?" vis":""}`,children:"This is what\nrecovery\nlooks like."})})}),(0,t.jsx)("div",{ref:e=>{m.current[6]=e},"data-idx":"6",className:"imm-section",children:(0,t.jsxs)("div",{className:"imm-finale",children:[(0,t.jsx)("h1",{className:`imm-finale-brand${e.has(6)?" vis":""}`,children:"HUNI"}),(0,t.jsx)("p",{className:`imm-finale-sub${e.has(6)?" vis":""}`,children:"Five organic electrolytes. Zero compromise.\nWhat your body was built to run on."}),(0,t.jsx)(r.default,{href:"/",className:`imm-cta${e.has(6)?" vis":""}`,children:"Join the Waitlist"})]})})]})]})}])}]);