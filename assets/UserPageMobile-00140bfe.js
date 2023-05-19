import{s as a,u as d,r as n,j as e}from"./index-e39e86df.js";import{r as c,u as l}from"./index-1c1ba236.js";import{u}from"./useWindowSize-e7d51486.js";const m=a.div`
  position: relative;
  display: flex;
  flex: 1;
  min-height: 100vh;
`,g=a(l)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: red;
  opacity: .25;
`,w=a.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 632px;
  min-width: 200px;
  background: #131313;
  height: 100%;
`,x=a.div`
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(transparent 50%, #131313), url("${i=>i.src}");
  background-size: cover;
`,f=a.h1`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 42px;
  /* 100 = viewport width, as 1vw = 1/100th of that
     So if the container is 50% of viewport (as here)
     then factor that into how you want it to size.
     Let's say you like 5vw if it were the whole width,
     then for this container, size it at 2.5vw (5 * .5 [i.e. 50%])
  */
  //font-size: 3vw;
  margin-top: -30px;
`,p=a.h2`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
`,v=a.p`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
`;function S(){var o;const{username:i}=d(),[t,s]=n.useState(null);n.useState(!0),n.useState(null);const{width:h}=u();return n.useEffect(()=>{c.fetchProfile(i).then(r=>{r.error||(console.log(r),s(r))})},[i]),e.jsxs(m,{children:[(t==null?void 0:t.avatarMedia)&&e.jsx(g,{hash:t.avatarMedia.placeholderHash,width:h,height:1500}),e.jsxs(w,{children:[e.jsx(x,{src:(o=t==null?void 0:t.avatarMedia)==null?void 0:o.fileUrl}),e.jsx(f,{children:t==null?void 0:t.username}),e.jsx(p,{children:t==null?void 0:t.fullName}),e.jsx(v,{children:t==null?void 0:t.bio}),"TOOD: Add Snooper download and migrate it into the normal user page"]})]})}export{S as default};
