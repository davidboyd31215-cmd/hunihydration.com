(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let a=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:i}=e,r=e.protocol||"",n=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:i&&(c=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let f=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||o.test(r))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),f&&"?"!==f[0]&&(f="?"+f),n=n.replace(/[?#]/g,encodeURIComponent),f=f.replace("#","%23"),`${r}${c}${n}${f}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return n}});let r=e.r(71645);function n(e,t){let i=(0,r.useRef)(null),n=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(i.current=a(e,r)),t&&(n.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(18967),n=e.r(52817);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,n.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return g}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let a=e.r(90809),o=e.r(43476),l=a._(e.r(71645)),s=e.r(95057),c=e.r(8372),f=e.r(18581),p=e.r(18967),u=e.r(5550);e.r(33525);let m=e.r(88540),d=e.r(91949),h=e.r(73668),y=e.r(9396);function x(t){var i,r;let n,a,x,[g,w]=(0,l.useOptimistic)(d.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:j,as:M,children:C,prefetch:z=null,passHref:E,replace:P,shallow:A,scroll:N,onClick:S,onMouseEnter:k,onTouchStart:T,legacyBehavior:_=!1,onNavigate:G,transitionTypes:R,ref:O,unstable_dynamicOnHover:L,...$}=t;n=C,_&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let B=l.default.useContext(c.AppRouterContext),F=!1!==z,I=!1!==z?null===(r=z)||"auto"===r?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,U="string"==typeof(i=M||j)?i:(0,s.formatUrl)(i);if(_){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(n)}let Y=_?a&&"object"==typeof a&&a.ref:O,H=l.default.useCallback(e=>(null!==B&&(v.current=(0,d.mountLinkInstance)(e,U,B,I,F,w)),()=>{v.current&&((0,d.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,d.unmountPrefetchableInstance)(e)}),[F,U,B,I,w]),D={ref:(0,f.useMergedRef)(H,Y),onClick(t){_||"function"!=typeof S||S(t),_&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!B||t.defaultPrevented||function(t,i,r,n,a,o,s){if("u">typeof window){let c,{nodeName:f}=t.currentTarget;if("A"===f.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(i)){n&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);l.default.startTransition(()=>{p(i,n?"replace":"push",!1===a?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,r.current,s)})}}(t,U,v,P,N,G,R)},onMouseEnter(e){_||"function"!=typeof k||k(e),_&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),B&&F&&(0,d.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){_||"function"!=typeof T||T(e),_&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),B&&F&&(0,d.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,p.isAbsoluteUrl)(U)?D.href=U:_&&!E&&("a"!==a.type||"href"in a.props)||(D.href=(0,u.addBasePath)(U)),x=_?l.default.cloneElement(a,D):(0,o.jsx)("a",{...$,...D,children:n}),(0,o.jsx)(b.Provider,{value:g,children:x})}e.r(84508);let b=(0,l.createContext)(d.IDLE_LINK_STATUS),g=()=>(0,l.useContext)(b);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},43698,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(22016);let n=[{type:"title",text:"RECOVER",sub:"A short film about what happens after you push your limits"},{type:"scene",label:"Act I",title:"You gave\neverything.",body:"Your muscles fired thousands of contractions. You sweated out sodium, potassium, magnesium, calcium — the ions that carry every electrical signal in your body."},{type:"scene",label:"Act II",title:"The pump\nnever stops.",body:"Three sodium ions out. Two potassium in. The sodium-potassium pump runs in every cell, consuming 25% of your energy just to maintain the voltage that makes movement possible."},{type:"fulltext",text:"Your muscles\nare electrical.",sub:"Every contraction is a spark. Every recovery is a recharge."},{type:"scene",label:"Act III",title:"Fiber by fiber,\nyou rebuild.",body:"Calcium re-enables contraction signaling. Magnesium relaxes overworked tissue and stops the cramping. Your muscle fibers knit back together, stronger than before."},{type:"fulltext",text:"This is what\nrecovery\nlooks like.",sub:""},{type:"finale",text:"HUNI",sub:"Five organic ingredients. Zero compromise.\nThe electrolytes your body was built to use."}];e.s(["default",0,function(){let e=(0,i.useRef)(null),a=(0,i.useRef)(null),o=(0,i.useRef)(null),[l,s]=(0,i.useState)(0),[c,f]=(0,i.useState)(0),[p,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(window.THREE)return void u(!0);let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",e.onload=()=>u(!0),document.head.appendChild(e)},[]),(0,i.useEffect)(()=>{if(!p||!e.current)return;let t=window.THREE,i=e.current,r=new t.WebGLRenderer({canvas:i,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(396818);let n=new t.Scene;n.fog=new t.FogExp2(396818,.012);let a=new t.PerspectiveCamera(40,window.innerWidth/window.innerHeight,.1,200);a.position.set(0,0,18),n.add(new t.AmbientLight(858658,.6));let l=new t.PointLight(4890303,2,40);l.position.set(5,8,10),n.add(l);let s=new t.PointLight(2846346,1,30);s.position.set(-6,-2,8),n.add(s);let c=new t.PointLight(0xc49a2a,.4,20);c.position.set(0,5,-8),n.add(c);let f=new t.Group;n.add(f);let u=new t.MeshPhysicalMaterial({color:992560,transparent:!0,opacity:.25,roughness:.4,metalness:.1,side:t.DoubleSide}),m=new t.MeshBasicMaterial({color:4890303,wireframe:!0,transparent:!0,opacity:.05});function d(e,i,r,n,a=0,o=0){let l=new t.Mesh(e,u.clone());l.position.set(i,r,n),l.rotation.x=a,l.rotation.z=o,f.add(l);let s=new t.Mesh(e,m.clone());return s.position.copy(l.position),s.rotation.copy(l.rotation),f.add(s),l}d(new t.SphereGeometry(.45,12,10),0,4.8,0),d(new t.CylinderGeometry(.18,.22,.5,8),0,4.25,0),d(new t.CylinderGeometry(.95,.8,1.6,8),0,3.2,0),d(new t.CylinderGeometry(.8,.7,1.4,8),0,1.8,0),d(new t.CylinderGeometry(.7,.75,.6,8),0,.9,0),d(new t.SphereGeometry(.28,8,8),-1.2,3.8,0),d(new t.SphereGeometry(.28,8,8),1.2,3.8,0),d(new t.CylinderGeometry(.18,.16,1.4,6),-1.35,3,0,0,.12),d(new t.CylinderGeometry(.18,.16,1.4,6),1.35,3,0,0,-.12),d(new t.SphereGeometry(.16,6,6),-1.45,2.2,0),d(new t.SphereGeometry(.16,6,6),1.45,2.2,0),d(new t.CylinderGeometry(.14,.11,1.3,6),-1.5,1.45,0,0,.06),d(new t.CylinderGeometry(.14,.11,1.3,6),1.5,1.45,0,0,-.06),d(new t.CylinderGeometry(.28,.22,2,6),-.4,-.3,0,0,.03),d(new t.CylinderGeometry(.28,.22,2,6),.4,-.3,0,0,-.03),d(new t.SphereGeometry(.2,6,6),-.42,-1.4,0),d(new t.SphereGeometry(.2,6,6),.42,-1.4,0),d(new t.CylinderGeometry(.2,.13,2,6),-.44,-2.6,0,0,.02),d(new t.CylinderGeometry(.2,.13,2,6),.44,-2.6,0,0,-.02),f.position.y=-.8;let h=[];function y(e,i,r,n,a,o,l,s,c){let p=[],u=new t.Color(l);for(let c=0;c<a;c++){let a=new t.CylinderGeometry(.015,.015,n,3),c=new t.MeshBasicMaterial({color:l,transparent:!0,opacity:0,blending:t.AdditiveBlending}),u=new t.Mesh(a,c);u.position.set(e+(Math.random()-.5)*o,i+(Math.random()-.5)*o*.3,r+(Math.random()-.5)*o+.05),u.rotation.z=s+(Math.random()-.5)*.08,f.add(u),p.push(u)}h.push({fibers:p,color:u,section:c})}y(-.4,-.3,.15,1.8,14,.25,4890303,.03,4),y(.4,-.3,.15,1.8,14,.25,4890303,-.03,4),y(-.44,-2.5,.1,1.6,10,.18,8111321,.02,4),y(.44,-2.5,.1,1.6,10,.18,8111321,-.02,4),y(-1.35,3,.1,1.2,8,.15,0xc49a2a,.12,2),y(1.35,3,.1,1.2,8,.15,0xc49a2a,-.12,2),y(-1.5,1.5,.08,1.1,6,.12,0xc49a2a,.06,2),y(1.5,1.5,.08,1.1,6,.12,0xc49a2a,-.06,2),y(0,1.9,.4,1.2,16,.5,4890303,0,4),y(-.35,3.3,.45,.8,8,.4,8111321,.3,2),y(.35,3.3,.45,.8,8,.4,8111321,-.3,2),y(-1.15,3.75,.1,.5,6,.2,4890303,.4,5),y(1.15,3.75,.1,.5,6,.2,4890303,-.4,5);let x=new Float32Array(300),b=new Float32Array(300),g=new Float32Array(100),w=new Float32Array(300),v=[new t.Color(4890303),new t.Color(8111321),new t.Color(0xc49a2a),new t.Color(5948554),new t.Color(0xeeeeee)];for(let e=0;e<100;e++){let t=Math.random()*Math.PI*2,i=6+8*Math.random();x[3*e]=Math.cos(t)*i,x[3*e+1]=(Math.random()-.5)*10,x[3*e+2]=Math.sin(t)*i,w[3*e]=(Math.random()-.5)*1.6,w[3*e+1]=-3+8.5*Math.random(),w[3*e+2]=(Math.random()-.5)*.8;let r=v[Math.floor(Math.random()*v.length)];b[3*e]=r.r,b[3*e+1]=r.g,b[3*e+2]=r.b,g[e]=Math.random()*Math.PI*2}let j=new t.BufferGeometry;j.setAttribute("position",new t.BufferAttribute(x,3)),j.setAttribute("color",new t.BufferAttribute(b,3));let M=new t.PointsMaterial({size:.12,vertexColors:!0,transparent:!0,opacity:.5,blending:t.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0});n.add(new t.Points(j,M));let C=0,z=0,E=0,P=!1;o.current={setProgress:e=>{E=e}};let A=[{z:24,y:2,x:0},{z:16,y:1.5,x:2},{z:12,y:2.5,x:-3},{z:20,y:2,x:0},{z:8,y:0,x:1},{z:18,y:1,x:0},{z:20,y:2,x:0}];function N(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}return!function e(){var i,o,s;if(P)return;requestAnimationFrame(e),C+=.008;let c=Math.min(6,Math.floor(z+=(E-z)*.035)),p=z-c,u=Math.min(6,c+1),m=A[c],d=A[u],y=p*p*(3-2*p);a.position.x=(i=m.x,i+(d.x-i)*y+.3*Math.sin(.12*C)),a.position.y=(o=m.y,o+(d.y-o)*y+.15*Math.cos(.08*C)),a.position.z=(s=m.z,s+(d.z-s)*y),a.lookAt(0,.5,0);let x=.3*(c>=1);f.children.forEach(e=>{e.material&&void 0!==e.material.opacity&&(e.material.wireframe?e.material.opacity+=(.06*(c>=1)-e.material.opacity)*.02:e.material.opacity+=(x-e.material.opacity)*.02)}),f.rotation.y=.06*Math.sin(.08*C),c>=5&&f.children.forEach(e=>{e.material&&!e.material.wireframe&&void 0!==e.material.opacity&&(e.material.opacity+=(.45-e.material.opacity)*.01)}),h.forEach(e=>{let t=c>=e.section,i=c===e.section,r=t?i?.6:.3:.02;e.fibers.forEach((n,a)=>{if(n.material.opacity+=(r-n.material.opacity)*.025,i){n.material.opacity+=.1*Math.sin(3*C+.5*a);let e=1+.12*Math.sin(4*C+.3*a);n.scale.x=e,n.scale.z=e}else n.scale.x+=(1-n.scale.x)*.04,n.scale.z+=(1-n.scale.z)*.04;t&&n.material.color.lerp(e.color,.02)})});let b=j.attributes.position,v=b.array;for(let e=0;e<100;e++){let t=v[3*e],i=v[3*e+1],r=v[3*e+2],n=w[3*e],a=w[3*e+1],o=w[3*e+2],l=g[e];if(c<=1){let i=Math.atan2(r,t),n=Math.sqrt(t*t+r*r),a=i+.001;v[3*e]=Math.cos(a)*(n<14?1.0002*n:n),v[3*e+2]=Math.sin(a)*n,v[3*e+1]+=.004*Math.sin(C+l)}else if(c<=3){let s=.008+e%5*.002;v[3*e]+=(n-t)*s+.01*Math.sin(2*C+l),v[3*e+1]+=(a-i)*s+.008*Math.cos(1.5*C+l),v[3*e+2]+=(o-r)*s}else v[3*e]+=(n-t)*.02+.002*Math.sin(1.5*C+l),v[3*e+1]+=(a-i)*.02+.002*Math.cos(C+l),v[3*e+2]+=(o-r)*.02}b.needsUpdate=!0,M.opacity=(c>=1?.45:.15)+.08*Math.sin(C),l.color.lerp(new t.Color([1716288,2846346,4890303,3829904,5948554,4890303,0xc49a2a][c]),.01),l.intensity+=([1,2,3,1.5,4,2,2.5][c]-l.intensity)*.015,r.render(n,a)}(),window.addEventListener("resize",N),()=>{P=!0,window.removeEventListener("resize",N),r.dispose()}},[p]);let m=(0,i.useCallback)(()=>{let e=a.current;if(!e)return;let t=e.scrollHeight-e.clientHeight;if(t<=0)return;let i=e.scrollTop/t,r=6*i;f(i),s(Math.min(6,Math.round(r))),o.current&&o.current.setProgress(r)},[]);return(0,i.useEffect)(()=>{let e=a.current;if(e)return e.addEventListener("scroll",m,{passive:!0}),()=>e.removeEventListener("scroll",m)},[m]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');

        .film-root {
          background: #060e12; color: #c8dde5;
          font-family: 'Outfit', system-ui, sans-serif;
          width: 100vw; height: 100vh; overflow: hidden; position: relative;
        }
        .film-canvas { position: fixed; inset: 0; z-index: 1; }
        .film-vignette {
          position: fixed; inset: 0; z-index: 2; pointer-events: none;
          background: radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(6,14,18,0.5) 50%, rgba(6,14,18,0.95) 100%);
        }

        /* Cinematic letterbox bars */
        .film-bar-top, .film-bar-bottom {
          position: fixed; left: 0; right: 0; z-index: 5;
          background: #060e12; pointer-events: none;
          height: clamp(30px, 4vh, 50px);
        }
        .film-bar-top { top: 0; }
        .film-bar-bottom { bottom: 0; }

        .film-scroll {
          position: relative; z-index: 3; width: 100%; height: 100vh;
          overflow-y: auto; scrollbar-width: none;
        }
        .film-scroll::-webkit-scrollbar { display: none; }
        .film-scroll-inner { height: 700vh; }

        /* ── Beat overlays ── */
        .film-beat {
          position: sticky; top: 0; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }

        /* Title card */
        .film-title-card {
          text-align: center;
        }
        .film-title-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 8vw, 90px);
          font-weight: 300; letter-spacing: 0.15em;
          color: #eaf3f7; margin-bottom: 16px;
          opacity: 0; transform: scale(0.96);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-title-main.show { opacity: 1; transform: scale(1); }

        .film-title-sub {
          font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(200, 221, 229, 0.3); max-width: 400px; margin: 0 auto;
          opacity: 0; transition: opacity 0.8s ease 0.4s;
        }
        .film-title-sub.show { opacity: 1; }

        /* Scene beat (3D body visible, text on side) */
        .film-scene {
          max-width: 380px; padding: 0 clamp(28px, 5vw, 60px);
          pointer-events: auto;
        }
        .film-beat[data-align="left"] { justify-content: flex-start; }
        .film-beat[data-align="right"] { justify-content: flex-end; }

        .film-scene-label {
          font-size: 10px; font-weight: 500; letter-spacing: 3px;
          text-transform: uppercase; color: #4A9EBF; margin-bottom: 12px;
          opacity: 0; transform: translateY(8px);
          transition: all 0.5s ease 0.1s;
        }
        .film-scene-label.show { opacity: 0.6; transform: translateY(0); }

        .film-scene-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 300; line-height: 1.1; letter-spacing: -0.02em;
          color: #eaf3f7; white-space: pre-line; margin-bottom: 16px;
          opacity: 0; transform: translateY(16px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }
        .film-scene-title.show { opacity: 1; transform: translateY(0); }

        .film-scene-rule {
          width: 0; height: 1px; background: #4A9EBF;
          margin-bottom: 16px; transition: width 0.7s ease 0.3s;
        }
        .film-scene-rule.show { width: 32px; }

        .film-scene-body {
          font-size: 13px; line-height: 1.8; font-weight: 300;
          color: rgba(200, 221, 229, 0.45);
          opacity: 0; transform: translateY(10px);
          transition: all 0.6s ease 0.35s;
        }
        .film-scene-body.show { opacity: 1; transform: translateY(0); }

        /* Full-screen text beat */
        .film-fulltext {
          text-align: center; max-width: 700px; padding: 0 24px;
        }
        .film-fulltext-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 300; line-height: 1.1; letter-spacing: -0.02em;
          color: #eaf3f7; white-space: pre-line;
          opacity: 0; transform: translateY(24px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-fulltext-main.show { opacity: 1; transform: translateY(0); }

        .film-fulltext-sub {
          font-size: 14px; color: rgba(200, 221, 229, 0.35);
          margin-top: 20px; line-height: 1.7;
          opacity: 0; transition: opacity 0.8s ease 0.4s;
        }
        .film-fulltext-sub.show { opacity: 1; }

        /* Finale */
        .film-finale { text-align: center; }
        .film-finale-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(56px, 10vw, 100px);
          font-weight: 600; letter-spacing: 0.1em;
          color: #C49A2A; margin-bottom: 20px;
          opacity: 0; transform: scale(0.95);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-finale-brand.show { opacity: 1; transform: scale(1); }

        .film-finale-sub {
          font-size: 14px; color: rgba(200, 221, 229, 0.45);
          line-height: 1.7; white-space: pre-line; max-width: 400px; margin: 0 auto 28px;
          opacity: 0; transition: opacity 0.8s ease 0.3s;
        }
        .film-finale-sub.show { opacity: 1; }

        .film-cta {
          display: inline-block; padding: 14px 36px;
          border: 1px solid rgba(196, 154, 42, 0.4); color: #C49A2A;
          font-size: 11px; font-weight: 500; letter-spacing: 2.5px;
          text-transform: uppercase; text-decoration: none;
          transition: all 0.4s ease; pointer-events: auto;
          opacity: 0; transform: translateY(8px);
        }
        .film-cta.show { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
        .film-cta:hover { background: rgba(196, 154, 42, 0.08); border-color: #C49A2A; }

        /* Nav */
        .film-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 20;
          display: flex; justify-content: space-between; align-items: center;
          padding: clamp(36px, 5vh, 56px) clamp(24px, 4vw, 48px);
          pointer-events: none;
        }
        .film-nav a { pointer-events: auto; text-decoration: none; }
        .film-logo {
          font-family: 'Cormorant Garamond', serif; font-size: 16px;
          font-weight: 600; letter-spacing: 4px; color: #4A9EBF;
          opacity: 0.5; transition: opacity 0.3s;
        }
        .film-logo:hover { opacity: 0.8; }
        .film-back {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(200, 221, 229, 0.25); font-weight: 400; transition: color 0.3s;
        }
        .film-back:hover { color: rgba(200, 221, 229, 0.5); }

        /* Progress bar at bottom */
        .film-progress {
          position: fixed; bottom: clamp(30px, 4vh, 50px); left: 0; right: 0;
          z-index: 10; height: 1px; pointer-events: none;
        }
        .film-progress-bar {
          height: 100%; background: #4A9EBF; opacity: 0.3;
          transition: width 0.1s linear;
        }

        .film-hint {
          position: fixed; bottom: clamp(40px, 5vh, 65px); left: 50%;
          transform: translateX(-50%); z-index: 10;
          font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(200, 221, 229, 0.2); pointer-events: none;
          transition: opacity 0.5s;
        }
        .film-hint.gone { opacity: 0; }

        @media (max-width: 768px) {
          .film-beat[data-align="right"] { justify-content: flex-start; }
        }
      `}),(0,t.jsxs)("div",{className:"film-root",children:[(0,t.jsx)("canvas",{ref:e,className:"film-canvas"}),(0,t.jsx)("div",{className:"film-vignette"}),(0,t.jsx)("div",{className:"film-bar-top"}),(0,t.jsx)("div",{className:"film-bar-bottom"}),(0,t.jsxs)("nav",{className:"film-nav",children:[(0,t.jsx)(r.default,{href:"/",className:"film-logo",children:"HUNI"}),(0,t.jsx)(r.default,{href:"/",className:"film-back",children:"Home"})]}),(0,t.jsx)("div",{className:"film-progress",children:(0,t.jsx)("div",{className:"film-progress-bar",style:{width:`${100*c}%`}})}),(0,t.jsx)("div",{className:`film-hint ${c>.05?"gone":""}`,children:"Scroll to watch"}),(0,t.jsx)("div",{ref:a,className:"film-scroll",children:(0,t.jsx)("div",{className:"film-scroll-inner",children:n.map((e,i)=>{let n=l===i,a="scene"===e.type?1===i?"left":2===i?"right":"left":"center";return(0,t.jsxs)("div",{className:"film-beat","data-align":a,children:["title"===e.type&&(0,t.jsxs)("div",{className:"film-title-card",children:[(0,t.jsx)("h1",{className:`film-title-main ${n?"show":""}`,children:e.text}),(0,t.jsx)("p",{className:`film-title-sub ${n?"show":""}`,children:e.sub})]}),"scene"===e.type&&(0,t.jsxs)("div",{className:"film-scene",children:[(0,t.jsx)("div",{className:`film-scene-label ${n?"show":""}`,children:e.label}),(0,t.jsx)("h2",{className:`film-scene-title ${n?"show":""}`,children:e.title}),(0,t.jsx)("div",{className:`film-scene-rule ${n?"show":""}`}),(0,t.jsx)("p",{className:`film-scene-body ${n?"show":""}`,children:e.body})]}),"fulltext"===e.type&&(0,t.jsxs)("div",{className:"film-fulltext",children:[(0,t.jsx)("h2",{className:`film-fulltext-main ${n?"show":""}`,children:e.text}),e.sub&&(0,t.jsx)("p",{className:`film-fulltext-sub ${n?"show":""}`,children:e.sub})]}),"finale"===e.type&&(0,t.jsxs)("div",{className:"film-finale",children:[(0,t.jsx)("h1",{className:`film-finale-brand ${n?"show":""}`,children:e.text}),(0,t.jsx)("p",{className:`film-finale-sub ${n?"show":""}`,children:e.sub}),(0,t.jsx)(r.default,{href:"/#waitlist",className:`film-cta ${n?"show":""}`,children:"Join the Waitlist"})]})]},i)})})})]})]})}])}]);