(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in o)Object.defineProperty(n,i,{enumerable:!0,get:o[i]});let r=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,o=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${o}${c}${i}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let o=e.r(71645);function i(e,t){let n=(0,o.useRef)(null),i=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=r(e,o)),t&&(i.current=r(t,o))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return r}});let o=e.r(18967),i=e.r(52817);function r(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={default:function(){return g},useLinkStatus:function(){return x}};for(var i in o)Object.defineProperty(n,i,{enumerable:!0,get:o[i]});let r=e.r(90809),a=e.r(43476),s=r._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),h=e.r(18967),u=e.r(5550);e.r(33525);let p=e.r(88540),f=e.r(91949),m=e.r(73668),y=e.r(9396);function g(t){var n,o;let i,r,g,[x,w]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:b,as:S,children:P,prefetch:j=null,passHref:C,replace:E,shallow:z,scroll:T,onClick:O,onMouseEnter:I,onTouchStart:R,legacyBehavior:N=!1,onNavigate:k,transitionTypes:_,ref:D,unstable_dynamicOnHover:A,...L}=t;i=P,N&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let U=s.default.useContext(c.AppRouterContext),F=!1!==j,B=!1!==j?null===(o=j)||"auto"===o?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,H="string"==typeof(n=S||b)?n:(0,l.formatUrl)(n);if(N){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=s.default.Children.only(i)}let $=N?r&&"object"==typeof r&&r.ref:D,G=s.default.useCallback(e=>(null!==U&&(v.current=(0,f.mountLinkInstance)(e,H,U,B,F,w)),()=>{v.current&&((0,f.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,f.unmountPrefetchableInstance)(e)}),[F,H,U,B,w]),K={ref:(0,d.useMergedRef)(G,$),onClick(t){N||"function"!=typeof O||O(t),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!U||t.defaultPrevented||function(t,n,o,i,r,a,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:h}=e.r(99781);s.default.startTransition(()=>{h(n,i?"replace":"push",!1===r?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,o.current,l)})}}(t,H,v,E,T,k,_)},onMouseEnter(e){N||"function"!=typeof I||I(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),U&&F&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){N||"function"!=typeof R||R(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),U&&F&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,h.isAbsoluteUrl)(H)?K.href=H:N&&!C&&("a"!==r.type||"href"in r.props)||(K.href=(0,u.addBasePath)(H)),g=N?s.default.cloneElement(r,K):(0,a.jsx)("a",{...L,...K,children:i}),(0,a.jsx)(M.Provider,{value:x,children:g})}e.r(84508);let M=(0,s.createContext)(f.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(M);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},43698,e=>{"use strict";var t=e.i(43476),n=e.i(71645),o=e.i(22016);let i={sodium:{symbol:"Na+",color:0xd4a843,size:.18,glow:"#D4A843"},potassium:{symbol:"K+",color:0xf5d78e,size:.22,glow:"#F5D78E"},magnesium:{symbol:"Mg2+",color:9159498,size:.25,glow:"#8BC34A"},calcium:{symbol:"Ca2+",color:0xffffff,size:.2,glow:"#FFFFFF"},chloride:{symbol:"Cl-",color:6600182,size:.16,glow:"#64B5F6"}},r=[{id:"intro",title:"YOUR MUSCLES RUN ON ELECTRICITY",body:"Every muscle contraction starts with a spark — an electrical signal carried by charged ions across cell membranes. Without electrolytes, your muscles literally can't fire."},{id:"sodium-potassium",title:"THE SODIUM-POTASSIUM PUMP",body:"3 sodium ions out, 2 potassium ions in. This molecular pump runs 24/7, maintaining the electrical gradient that makes every heartbeat and every step possible. It consumes ~25% of your body's ATP."},{id:"contraction",title:"MUSCLE CONTRACTION",body:"Calcium floods the muscle fiber, triggering actin and myosin to slide past each other. Magnesium then helps the muscle relax. Without this balance, cramps and fatigue take over."},{id:"huni",title:"5 INGREDIENTS. ZERO COMPROMISE.",body:"Huni delivers the exact electrolytes your muscles need — sodium, potassium, magnesium, calcium — sweetened only by USDA Organic honey. No synthetic junk. Just what your body was built to use."}];e.s(["default",0,function(){let e=(0,n.useRef)(null),[a,s]=(0,n.useState)(0),[l,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(window.THREE)return void c(!0);let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",e.onload=()=>c(!0),document.head.appendChild(e)},[]),(0,n.useEffect)(()=>{if(!l||!e.current)return;let t=window.THREE,n=e.current,o=new t.WebGLRenderer({canvas:n,antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0);let r=new t.Scene;r.fog=new t.FogExp2(657928,.03);let a=new t.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,100);a.position.set(0,0,8);let s=new t.AmbientLight(1709328,.4);r.add(s);let c=new t.PointLight(0xd4a843,2.5,30);c.position.set(3,3,5),r.add(c);let h=new t.PointLight(6600182,1.2,20);h.position.set(-4,-2,3),r.add(h);let u=new t.DirectionalLight(0xf5d78e,.6);u.position.set(-5,5,-5),r.add(u);let p=new t.TorusGeometry(3.5,.12,16,100),f=new t.MeshPhysicalMaterial({color:4008735,transparent:!0,opacity:.25,roughness:.3,metalness:.1,side:t.DoubleSide}),m=new t.Mesh(p,f);m.rotation.x=.5*Math.PI,r.add(m);let y=new t.Mesh(new t.TorusGeometry(3,.08,16,100),new t.MeshPhysicalMaterial({color:2759183,transparent:!0,opacity:.15,roughness:.5}));y.rotation.x=.5*Math.PI,r.add(y);let g=[];for(let e=0;e<6;e++){let n=e/6*Math.PI*2,o=new t.CylinderGeometry(.15,.15,.8,8),i=new t.MeshPhysicalMaterial({color:0xd4a843,transparent:!0,opacity:.6,metalness:.4,roughness:.2,emissive:0xd4a843,emissiveIntensity:.15}),a=new t.Mesh(o,i);a.position.set(3.25*Math.cos(n),0,3.25*Math.sin(n)),a.lookAt(0,0,0),a.rotateX(.5*Math.PI),r.add(a),g.push({mesh:a,angle:n,phase:Math.random()*Math.PI*2})}let M=[];for(let e=0;e<12;e++){let e=new t.CylinderGeometry(.04,.04,4+2*Math.random(),6),n=new t.MeshPhysicalMaterial({color:9127187,transparent:!0,opacity:.3+.2*Math.random(),roughness:.8}),o=new t.Mesh(e,n),i=2*Math.random(),a=Math.random()*Math.PI*2;o.position.set(Math.cos(a)*i,0,Math.sin(a)*i),o.rotation.x=.5*Math.PI+(Math.random()-.5)*.3,o.rotation.z=(Math.random()-.5)*.3,r.add(o),M.push({mesh:o,baseOpacity:.3+.2*Math.random(),phase:Math.random()*Math.PI*2})}let x=[],w=Object.entries(i);for(let e=0;e<50;e++){let[e,n]=w[Math.floor(Math.random()*w.length)];x.push(function(e,n){let o=new t.SphereGeometry(n.size,16,16),i=new t.MeshPhysicalMaterial({color:n.color,emissive:n.color,emissiveIntensity:.5,transparent:!0,opacity:.85,metalness:.3,roughness:.1}),s=new t.Mesh(o,i),l=Math.random()>.5,c=l?2.5*Math.random():3.5+3*Math.random(),d=Math.random()*Math.PI*2,h=(Math.random()-.5)*3;s.position.set(Math.cos(d)*c,h,Math.sin(d)*c),r.add(s);let u=new t.RingGeometry(1.3*n.size,2*n.size,16),p=new t.MeshBasicMaterial({color:n.color,transparent:!0,opacity:.15,side:t.DoubleSide}),f=new t.Mesh(u,p);return s.add(f),f.lookAt(a.position),{mesh:s,glow:f,type:e,config:n,inside:l,velocity:new t.Vector3((Math.random()-.5)*.02,(Math.random()-.5)*.01,(Math.random()-.5)*.02),phase:Math.random()*Math.PI*2,orbitSpeed:.001+.003*Math.random(),flowSpeed:.005+.01*Math.random()}}(e,n))}let v=new t.Group;r.add(v);let b=0,S=0,P=0,j=0;function C(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)}return d.current={setSection:e=>{S=e},triggerContraction:()=>{j=1}},!function e(){requestAnimationFrame(e),P+=.016,b+=(S-b)*.03,j*=.97;let n=2*Math.sin(.5*b),i=1.5*Math.cos(.3*b)+.3*b,s=8-.8*b;a.position.lerp(new t.Vector3(n,i,s),.02),a.lookAt(0,0,0),m.rotation.y+=.002,y.rotation.y-=.001,g.forEach(e=>{let t=.5*Math.sin(2*P+e.phase)+.5;e.mesh.material.emissiveIntensity=.1+.4*t;let n=1+.15*t;e.mesh.scale.set(n,1,n)}),M.forEach(e=>{let n=S>=2?.3+.5*j:0,o=Math.sin(3*P+e.phase)*n;e.mesh.scale.x=1+.8*o,e.mesh.scale.z=1+.8*o,e.mesh.scale.y=1-.15*o,e.mesh.material.opacity=e.baseOpacity+.3*n,e.mesh.material.emissive=new t.Color(0xd4a843),e.mesh.material.emissiveIntensity=.3*n}),x.forEach(e=>{let t=e.mesh.position,n=Math.atan2(t.z,t.x),o=Math.sqrt(t.x*t.x+t.z*t.z);if(1===S)if("sodium"===e.type&&e.inside){let i=o+e.flowSpeed;t.x=Math.cos(n+e.orbitSpeed)*i,t.z=Math.sin(n+e.orbitSpeed)*i,o>5&&(t.x=1.5*Math.cos(n),t.z=1.5*Math.sin(n),e.inside=!0)}else if("potassium"!==e.type||e.inside)t.x+=.005*Math.sin(P+e.phase),t.z+=.005*Math.cos(P+1.3*e.phase);else{let i=o-e.flowSpeed;t.x=Math.cos(n+e.orbitSpeed)*Math.max(i,.5),t.z=Math.sin(n+e.orbitSpeed)*Math.max(i,.5),o<1&&(t.x=5*Math.cos(n),t.z=5*Math.sin(n),e.inside=!1)}else if(2===S)if("calcium"===e.type){let i=o-2*e.flowSpeed;t.x=Math.cos(n+3*e.orbitSpeed)*Math.max(i,.3),t.z=Math.sin(n+3*e.orbitSpeed)*Math.max(i,.3),o<.5&&(t.x=5*Math.cos(Math.random()*Math.PI*2),t.z=5*Math.sin(Math.random()*Math.PI*2))}else t.x+=.01*Math.sin(2*P+e.phase),t.z+=.01*Math.cos(2*P+e.phase);else t.x=Math.cos(n+e.orbitSpeed)*o,t.z=Math.sin(n+e.orbitSpeed)*o,t.y+=.002*Math.sin(P+e.phase);e.glow.lookAt(a.position),e.glow.material.opacity=.1+.08*Math.sin(3*P+e.phase);let i=1+.15*Math.sin(2*P+e.phase);e.mesh.scale.set(i,i,i)}),Math.random()<.03+.08*(2===S)&&function(){let e=[],n=Math.random()*Math.PI*2,o=.3+.8*Math.random();for(let i=0;i<=20;i++){let r=n+i/20*o,a=3.25+(Math.random()-.5)*.3,s=(Math.random()-.5)*.4;e.push(new t.Vector3(Math.cos(r)*a,s,Math.sin(r)*a))}let i=new t.CatmullRomCurve3(e),r=new t.TubeGeometry(i,20,.015,4,!1),a=new t.MeshBasicMaterial({color:0xd4a843,transparent:!0,opacity:.8}),s=new t.Mesh(r,a);v.add(s),setTimeout(()=>{v.remove(s),r.dispose(),a.dispose()},200+300*Math.random())}(),c.position.x=a.position.x+2,c.position.y=a.position.y+2,o.render(r,a)}(),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),o.dispose()}},[l]),(0,n.useEffect)(()=>{let e=h.current;if(e)return e.addEventListener("scroll",t,{passive:!0}),()=>e.removeEventListener("scroll",t);function t(){let t=e.scrollTop,n=window.innerHeight,o=Math.min(r.length-1,Math.floor(t/n+.4));s(o),d.current&&(d.current.setSection(o),2===o&&d.current.triggerContraction())}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;700&display=swap');

        .immersive-body {
          background: #0a0a08;
          color: #e8dcc8;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
          width: 100vw;
          height: 100vh;
        }

        .immersive-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .immersive-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(10,10,8,0.7) 100%);
        }

        .immersive-scroll {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .immersive-scroll::-webkit-scrollbar { display: none; }

        .immersive-section {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          align-items: center;
          padding: 0 8vw;
          position: relative;
        }

        .section-content {
          max-width: 480px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }

        .section-content.active {
          opacity: 1;
          transform: translateY(0);
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #D4A843;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #fff;
          letter-spacing: -1px;
        }

        .section-body {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(232, 220, 200, 0.7);
          font-weight: 300;
        }

        .section-content:nth-child(1) { /* right-align even sections */ }

        .immersive-section:nth-child(even) {
          justify-content: flex-end;
        }

        .ion-legend {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .ion-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(232, 220, 200, 0.5);
          font-weight: 500;
        }

        .ion-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .nav-back {
          position: fixed;
          top: 20px;
          left: 24px;
          z-index: 10;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #D4A843;
          text-decoration: none;
          letter-spacing: 2px;
          pointer-events: auto;
        }

        .scroll-indicator {
          position: fixed;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: auto;
        }

        .scroll-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(212, 168, 67, 0.2);
          border: 1px solid rgba(212, 168, 67, 0.3);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .scroll-dot.active {
          background: #D4A843;
          box-shadow: 0 0 12px rgba(212, 168, 67, 0.5);
          transform: scale(1.3);
        }

        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .cta-button {
          display: inline-block;
          margin-top: 24px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #D4A843, #F5D78E);
          color: #3D2B1F;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
          pointer-events: auto;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 168, 67, 0.4);
        }
      `}),(0,t.jsxs)("div",{className:"immersive-body",children:[(0,t.jsx)("canvas",{ref:e,className:"immersive-canvas"}),(0,t.jsx)("div",{className:"immersive-overlay"}),(0,t.jsx)("div",{className:"grain-overlay"}),(0,t.jsx)(o.default,{href:"/",className:"nav-back",children:"HUNI"}),(0,t.jsx)("div",{className:"scroll-indicator",children:r.map((e,n)=>(0,t.jsx)("div",{className:`scroll-dot ${a===n?"active":""}`,onClick:()=>{h.current?.scrollTo({top:n*window.innerHeight,behavior:"smooth"})}},n))}),(0,t.jsx)("div",{ref:h,className:"immersive-scroll",children:r.map((e,n)=>(0,t.jsx)("div",{className:"immersive-section",children:(0,t.jsxs)("div",{className:`section-content ${a===n?"active":""}`,children:[(0,t.jsx)("div",{className:"section-label",children:0===n?"The Science":3===n?"Huni Hydration":`Step ${n}`}),(0,t.jsx)("h2",{className:"section-title",children:e.title}),(0,t.jsx)("p",{className:"section-body",children:e.body}),0===n&&(0,t.jsx)("div",{className:"ion-legend",children:Object.entries(i).map(([e,n])=>(0,t.jsxs)("div",{className:"ion-badge",children:[(0,t.jsx)("div",{className:"ion-dot",style:{background:n.glow,boxShadow:`0 0 6px ${n.glow}`}}),n.symbol]},e))}),3===n&&(0,t.jsx)(o.default,{href:"/#waitlist",className:"cta-button",children:"Join the Waitlist"})]})},e.id))})]})]})}])}]);