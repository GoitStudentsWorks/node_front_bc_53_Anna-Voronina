import{s as t,ar as u,P as n,j as i,x as d,u as w,k as h,$ as b,aC as $,aD as y,Q as j,L as v}from"./index-9f0bcc96.js";import{r as k,P}from"./Pagination-eb908c55.js";import{P as S,L as R,S as q}from"./Searchbar-c350b6f6.js";import{C as z}from"./Container-e4b2e149.js";import{P as D}from"./PageTitle-ab345a70.js";const L=t.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - (2 * 31px)) / 3);
  }
`,N=t.div`
  height: ${({theme:e})=>e.spacing(2)};
  margin-bottom: ${({theme:e})=>e.spacing(3)};

  border-radius: ${({theme:e})=>e.radii.l};
  background: ${({theme:e})=>e.colors.blueGradient};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({theme:e})=>e.spacing(3.5)};
  }
`,T=t.div`
  border-radius: ${({theme:e})=>e.radii.s};
  box-shadow: ${({theme:e})=>e.shadows.primary};
  background: ${({theme:e})=>e.colors.white};
`,C=t.img`
  object-fit: cover;
  height: ${({theme:e})=>e.spacing(63)};
  width: 100%;
  border-radius: ${({theme:e})=>e.radii.s};
`,E=t.div`
  padding: 16px 12px 12px 12px;
`,I=t.h3`
  height: ${({theme:e})=>e.spacing(16.5)};
  margin-bottom: ${({theme:e})=>e.spacing(4)};

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  line-height: normal;
  letter-spacing: -0.24px;
`,M=t.p`
  height: ${({theme:e})=>e.spacing(38.5)};
  margin-bottom: ${({theme:e})=>e.spacing(10)};

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;

  @media screen and (min-width: 768px) {
    height: ${({theme:e})=>e.spacing(33)};
    -webkit-line-clamp: 6;
  }

  @media screen and (min-width: 1280px) {
    height: ${({theme:e})=>e.spacing(33)};
    -webkit-line-clamp: 6;
  }
`,Q=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,W=t.span`
  color: ${({theme:e})=>e.colors.grey};
  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;
`,B=t.a`
  color: ${({theme:e})=>e.colors.blue};
  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: normal;
  transition: color ${({theme:e})=>e.transitions.regular};

  &:focus,
  &:hover {
    color: ${({theme:e})=>e.colors.yellow};
  }
`,O=e=>{if(e)return u(new Date(e),"dd/MM/yy")},g=({imgUrl:e,title:s,text:a,date:l,url:r})=>{const c=k.useMediaQuery({query:"(min-width: 1280px)"});return i.jsxs(L,{children:[i.jsx(N,{}),i.jsxs(T,{children:[i.jsx(C,{src:e,alt:s,width:c?395:336,height:252}),i.jsxs(E,{children:[i.jsx(I,{children:s}),i.jsx(M,{children:a}),i.jsxs(Q,{children:[i.jsx(W,{children:O(l)}),i.jsx(B,{href:r,target:"_blanck",rel:"noopener noreferrer nofollow",children:"Read more"})]})]})]})]})};g.propTypes={date:n.string.isRequired,imgUrl:n.string.isRequired,text:n.string.isRequired,title:n.string.isRequired,url:n.string.isRequired};const p=({newsSort:e})=>i.jsx(i.Fragment,{children:e.length===0?i.jsx(S,{children:"There are no news matching your search query."}):i.jsx(R,{children:e.map(s=>i.jsx(g,{...s},s.id))})});p.propTypes={newsSort:n.arrayOf(n.shape({}))};const H=()=>{const[e,s]=d.useState(1),a=w(),l=h(b),r=h($),[c,m]=d.useState("");d.useEffect(()=>{a(y({page:e,limit:6,searchQuery:c})).unwrap().catch(o=>j.error(o))},[a,e,c]);const f=o=>{m(o),s(1)},x=o=>{s(o)};return i.jsxs(z,{children:[i.jsx(D,{title:"News"}),i.jsx(q,{onSubmit:f}),l?i.jsx(v,{}):i.jsx(p,{newsSort:r==null?void 0:r.data}),i.jsx(P,{onPageChange:x,currentPage:e,perPage:6,totalItems:r==null?void 0:r.total,variant:l?"hidden":"visible"})]})};export{H as default};
