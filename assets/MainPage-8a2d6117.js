import{s as l,j as e,m as U,r as x,R as X}from"./index-e39e86df.js";import{G as Y,H as V,F as J,a as G,C as q,b as W,M as K,B as Q,c as Z,d as ee,S as ne,T as te,e as ie,f as se,J as oe,g as ae,D as ce,h as re,i as ue}from"./FooterLayout-f27fc287.js";import{u as le}from"./useWindowSize-e7d51486.js";function B(n){return Y({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}},{tag:"path",attr:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}}]})(n)}const de=l.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
`,he=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: rgba(49,49,49,0.5);
  backdrop-filter: blur(4px);
  
  z-index: 1000;
  
  @media (min-width:1100px){
    display: none;
  }
`,H=l.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
`,L=l.div`
  margin: 10px;
  font-size: 20px;
`,pe=l.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
`,I=l.a`
  margin: 0 10px;
`,ge=l.div`
  display: flex;
  margin-bottom: 15px;
`;function xe({onMenuClose:n}){return e.jsxs(he,{children:[e.jsx(V,{onMenuButtonClick:n,isOpen:!0}),e.jsxs(de,{children:[e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx(B,{}),e.jsx(L,{children:"Terms of Service"})]}),e.jsxs(H,{children:[e.jsx(B,{}),e.jsx(L,{children:"Privacy Policy"})]})]}),e.jsxs(pe,{children:[e.jsxs(ge,{children:[e.jsx(I,{href:"https://discord.gg/aPj8syaBwV",target:"_blank",children:e.jsx(J,{color:"white",size:26})}),e.jsx(I,{href:"https://twitter.com/snoopernetwork",target:"_blank",children:e.jsx(G,{color:"white",size:26})})]}),e.jsx("div",{children:"contact@snoopernetwork.com"}),e.jsx("div",{children:"© 2022 Snooper"})]})]})]})}const fe=l(U.h1)`
  font-size: 100px;
  margin: 0;
  padding: 0;
  opacity: 0;
  
  @media (min-width:1100px) and (max-width:1400px){
    font-size: 80px;
  }

  @media (max-width:700px){
    font-size: 64px;
  }

  @media (max-width:450px){
    font-size: 54px;
  }

  @media (max-width:380px){
    font-size: 48px;
  }
`,me=l(U.h2)`
  font-size: 60px;
  color: #B1A9A9;
  margin: 0;
  padding: 0;
  opacity: 0;
  
  @media (min-width:1100px) and (max-width:1400px){
    font-size: 32px;
  }

  @media (max-width:700px){
    font-size: 28px;
  }
`,je=l.p`
  font-weight: bold;
  font-size: 20px;
`,k=[{title:"Unique",subtitle:"chronological feed"},{title:"Follow",subtitle:"your interests"},{title:"Explore",subtitle:"new daily trends"},{title:"Communicate",subtitle:"with people"},{title:"Share",subtitle:"your experience"}],we=["/assets/screenshots/Home.jpeg","/assets/screenshots/Search.jpg","/assets/screenshots/Charts.jpg","/assets/screenshots/Inbox.jpg","/assets/screenshots/Profile.jpg"],be="Left",Se="Right",Oe="Up",ve="Down",w={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},D={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},R="mousemove",A="mouseup",Me="touchend",ye="touchmove",ke="touchstart";function Te(n,c,r,o){return n>c?r>0?Se:be:o>0?ve:Oe}function _(n,c){if(c===0)return n;const r=Math.PI/180*c,o=n[0]*Math.cos(r)+n[1]*Math.sin(r),h=n[1]*Math.cos(r)-n[0]*Math.sin(r);return[o,h]}function Ce(n,c){const r=t=>{const i="touches"in t;i&&t.touches.length>1||n((s,a)=>{a.trackMouse&&!i&&(document.addEventListener(R,o),document.addEventListener(A,f));const{clientX:u,clientY:g}=i?t.touches[0]:t,m=_([u,g],a.rotationAngle);return a.onTouchStartOrOnMouseDown&&a.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},s),D),{initial:m.slice(),xy:m,start:t.timeStamp||0})})},o=t=>{n((i,s)=>{const a="touches"in t;if(a&&t.touches.length>1)return i;if(t.timeStamp-i.start>s.swipeDuration)return i.swiping?Object.assign(Object.assign({},i),{swiping:!1}):i;const{clientX:u,clientY:g}=a?t.touches[0]:t,[m,T]=_([u,g],s.rotationAngle),v=m-i.xy[0],M=T-i.xy[1],S=Math.abs(v),O=Math.abs(M),C=(t.timeStamp||0)-i.start,$=Math.sqrt(S*S+O*O)/(C||1),N=[v/(C||1),M/(C||1)],E=Te(S,O,v,M),z=typeof s.delta=="number"?s.delta:s.delta[E.toLowerCase()]||w.delta;if(S<z&&O<z&&!i.swiping)return i;const y={absX:S,absY:O,deltaX:v,deltaY:M,dir:E,event:t,first:i.first,initial:i.initial,velocity:$,vxvy:N};y.first&&s.onSwipeStart&&s.onSwipeStart(y),s.onSwiping&&s.onSwiping(y);let P=!1;return(s.onSwiping||s.onSwiped||s[`onSwiped${E}`])&&(P=!0),P&&s.preventScrollOnSwipe&&s.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},i),{first:!1,eventData:y,swiping:!0})})},h=t=>{n((i,s)=>{let a;if(i.swiping&&i.eventData){if(t.timeStamp-i.start<s.swipeDuration){a=Object.assign(Object.assign({},i.eventData),{event:t}),s.onSwiped&&s.onSwiped(a);const u=s[`onSwiped${a.dir}`];u&&u(a)}}else s.onTap&&s.onTap({event:t});return s.onTouchEndOrOnMouseUp&&s.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},i),D),{eventData:a})})},p=()=>{document.removeEventListener(R,o),document.removeEventListener(A,f)},f=t=>{p(),h(t)},d=(t,i)=>{let s=()=>{};if(t&&t.addEventListener){const a=Object.assign(Object.assign({},w.touchEventOptions),i.touchEventOptions),u=[[ke,r,a],[ye,o,Object.assign(Object.assign({},a),i.preventScrollOnSwipe?{passive:!1}:{})],[Me,h,a]];u.forEach(([g,m,T])=>t.addEventListener(g,m,T)),s=()=>u.forEach(([g,m])=>t.removeEventListener(g,m))}return s},j={ref:t=>{t!==null&&n((i,s)=>{if(i.el===t)return i;const a={};return i.el&&i.el!==t&&i.cleanUpTouch&&(i.cleanUpTouch(),a.cleanUpTouch=void 0),s.trackTouch&&t&&(a.cleanUpTouch=d(t,s)),Object.assign(Object.assign(Object.assign({},i),{el:t}),a)})}};return c.trackMouse&&(j.onMouseDown=r),[j,d]}function Ee(n,c,r,o){return!c.trackTouch||!n.el?(n.cleanUpTouch&&n.cleanUpTouch(),Object.assign(Object.assign({},n),{cleanUpTouch:void 0})):n.cleanUpTouch?c.preventScrollOnSwipe!==r.preventScrollOnSwipe||c.touchEventOptions.passive!==r.touchEventOptions.passive?(n.cleanUpTouch(),Object.assign(Object.assign({},n),{cleanUpTouch:o(n.el,c)})):n:Object.assign(Object.assign({},n),{cleanUpTouch:o(n.el,c)})}function De(n){const{trackMouse:c}=n,r=x.useRef(Object.assign({},D)),o=x.useRef(Object.assign({},w)),h=x.useRef(Object.assign({},o.current));h.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},w),n);let p;for(p in w)o.current[p]===void 0&&(o.current[p]=w[p]);const[f,d]=x.useMemo(()=>Ce(b=>r.current=b(r.current,o.current),{trackMouse:c}),[c]);return r.current=Ee(r.current,o.current,h.current,d),f}const Ue=l.figure`
  @media only screen and (max-width: 1100px) {
    margin: 40px 0;
  }

  margin-left: 80px;
  margin-right: 20px;

  width: 283px;
  height: 565px;

  position: relative;
`,ze=l.figure`
  background-image: url("/resources/img/iphone_13_pro_silver_large_2x.png");
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  position: absolute;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`,Pe=l.picture`
  top: 13.2px;
  left: 18px;
  width: 248px;
  height: 537px;
  
  display: block;
  position: absolute;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: black;
`;function F({currentSlide:n,...c}){return e.jsxs(Ue,{className:"device-iphone-13-pro-silver-container device-medium-for-small device-wrap",...c,children:[e.jsx(Pe,{children:e.jsx(U.img,{animate:{opacity:[0,1,1,1,0]},transition:{repeat:0,duration:6,ease:"easeInOut",times:[0,.2,.5,.8,1]},src:we[n],width:"100%",alt:"An iPhone displaying Snooper screenshots","aria-label":"An iPhone displaying Snooper screenshots"},`PH_${n}`)}),e.jsx(ze,{})]})}function Ie(){const{width:n}=le(),[c,r]=x.useState(!0),[o,h]=x.useState(n<=1100);x.useEffect(()=>{n<=1100&&!o?h(!0):n>1100&&o&&(h(!1),f(!1))},[n,o]);const[p,f]=x.useState(!1),[d,b]=x.useState(0),j=De({onSwipedLeft:()=>t(),onSwipedRight:()=>i(),swipeDuration:500,preventScrollOnSwipe:!0,trackMouse:!0});function t(){b(u=>u+1>k.length-1?0:u+1)}function i(){b(u=>u-1<0?0:u-1)}function s(){f(!0),r(!1)}function a(){f(!1)}return e.jsxs(X.Fragment,{children:[e.jsxs(q,{menuOpen:p,children:[e.jsx(V,{onMenuButtonClick:s,isOpen:p,staticMenuButton:c}),e.jsxs(W,{children:[e.jsxs(K,{children:[e.jsx(Q,{children:e.jsx(Z,{src:"/assets/Black-Background.png"})}),e.jsxs(ee,{children:[!o&&e.jsx(F,{currentSlide:d,...j}),e.jsxs(ne,{children:[e.jsxs(te,{...j,children:[e.jsx(fe,{onAnimationComplete:t,animate:{scale:[.5,1,1,1,1],x:[0,0,0,0,50],opacity:[0,1,1,1,0]},transition:{repeat:0,duration:6,ease:"easeInOut",times:[0,.2,.5,.8,1]},children:k[d].title},`H1_${d}`),e.jsx(me,{animate:{x:[0,0,0,0,-100],opacity:[0,1,1,1,0]},transition:{repeat:0,duration:6,ease:"easeInOut",times:[0,.2,.5,.8,1]},children:k[d].subtitle},`H2_${d}`),e.jsx(ie,{children:k.map((u,g)=>e.jsx(se,{active:g===d}))})]}),o&&e.jsx(F,{currentSlide:d,...j}),e.jsxs(oe,{children:[e.jsx(je,{children:"Join Snooper Now"}),e.jsx(ae,{children:e.jsxs(ce,{whileHover:{backgroundColor:"#363636"},children:[e.jsx(re,{src:"/assets/Apple.svg"}),"App Store"]})})]})]})]})]}),e.jsx(ue,{})]})]}),p&&e.jsx(xe,{onMenuClose:a})]})}export{Ie as default};
