import{s as t,u as d,r as o,j as e}from"./index-e39e86df.js";import{r as c}from"./index-1c1ba236.js";import{u as l}from"./useWindowSize-e7d51486.js";import{H as h,i as p}from"./FooterLayout-f27fc287.js";const u=t.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  flex: 1;
`,g=t.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  background: #121314;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`,x=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 632px;
  min-width: 200px;
  border: 20px solid #262626;
  border-radius: 20px;
  overflow: hidden;
  margin: 30px 0;
  height: 100%;
`;t.div`
  width: 100%;
  aspect-ratio: 1;
  
  background-size: cover;
  background-repeat: no-repeat;
  //background-image: linear-gradient(transparent 50%, #131313), url("${i=>i.src}");
  background-image: linear-gradient(360deg, #121314 5%, rgba(18, 19, 20, 0) 32.92%), url("${i=>i.src}");
  background-position: center top 45%;
`;const f=t.div`
  width: 100%;
  aspect-ratio: 1;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("${i=>i.src}");
  background-position: center top 45%;
  border-radius: 10px;
  overflow: hidden;
`,w=t.h1`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  /* 100 = viewport width, as 1vw = 1/100th of that
     So if the container is 50% of viewport (as here)
     then factor that into how you want it to size.
     Let's say you like 5vw if it were the whole width,
     then for this container, size it at 2.5vw (5 * .5 [i.e. 50%])
  */
  font-size: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,m=t.h2`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
`,b=t.p`
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
`,v=t.div`
  min-height: 200px;
`,j=t.div`
  height: 100px;
  justify-content: center;
`,k=t.img`
  width: 100%;
  height: auto;
  opacity: 0.05;
`;function C(){var a;const{username:i}=d(),[r,s]=o.useState(null);return o.useState(!0),o.useState(null),l(),o.useEffect(()=>{c.fetchProfile(i).then(n=>{n.error||(console.log(n),s(n))})},[i]),e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(h,{})}),e.jsxs(g,{children:[e.jsx(x,{children:e.jsx(f,{src:(a=r==null?void 0:r.avatarMedia)==null?void 0:a.fileUrl})}),e.jsxs(v,{children:[e.jsx(w,{children:i}),e.jsx(m,{children:r==null?void 0:r.fullName}),e.jsx(b,{children:r==null?void 0:r.bio}),e.jsx(k,{src:"/assets/SnoopProfilePosts.png",alt:"Snoop profile posts",width:"100%"}),"Todo: Add Download snooper"]})]}),e.jsx(p,{})]})}export{C as default};
