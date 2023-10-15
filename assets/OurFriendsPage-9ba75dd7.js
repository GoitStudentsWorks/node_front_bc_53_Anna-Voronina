import{s as i,P as s,j as n,x as g,k as u,aA as z,u as L,$ as T,aB as W,Q as k,L as v}from"./index-ac4b763e.js";import{C as O}from"./Container-3d2b75e3.js";import{P as F}from"./PageTitle-c4251183.js";const P=i.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding-top: ${({theme:e})=>e.spacing(4)};
  padding-bottom: ${({theme:e})=>e.spacing(4)};
  padding-left: ${({theme:e})=>e.spacing(3)};
  padding-right: ${({theme:e})=>e.spacing(3)};
  width: 280px;
  min-height: 300px;
  border-radius: 40px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadows.primary};

  @media only screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
    max-width: 100%;
    min-height: 350px;
  }
  @media only screen and (min-width: 1280px) {
    width: calc((100% - 64px) / 3);
  }
`,A=i.h2`
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  color: ${({theme:e})=>e.colors.blue};
  text-align: center;

  font-size: ${({theme:e})=>e.fontSizes.l};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,C=i.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-left: 12px;
`,I=i.address`
  max-width: 50%;
`,p=i.h3`
  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  font-style: normal;
  text-align: left;
  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.s};
  }
`,x=i.a`
  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  font-style: normal;
  word-break: break-word;

  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.s};
  }
  @media only screen and (min-width: 1280) {
    font-size: ${({theme:e})=>e.fontSizes.m};
  }
`,d=i.p`
  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  font-style: normal;

  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.s};
  }
  @media only screen and (min-width: 1280) {
    font-size: ${({theme:e})=>e.fontSizes.m};
  }
`,E=i.a`
  width: 120px;

  transition: transform ${({theme:e})=>e.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`,B=i.a`
  color: ${({theme:e})=>e.colors.blue};
  transition: color ${({theme:e})=>e.transitions.regular};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.yellow};
  }
`,U=i.img`
  max-height: 200px;
  margin: 0 auto;
  object-fit: contain;

  @media only screen and (min-width: 1280px) {
  }
`;i.button`
  border: 1px solid red;
  width: 100px;
  height: 100px;
`;const _=i.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};
`,h=i.li`
  &:hover {
    color: ${({theme:e})=>e.colors.blue};
    transition: ${({theme:e})=>e.transitions.regular};
  }
`,H=i.ul`
  padding: ${({theme:e})=>e.spacing(3)};

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-style: normal;
  width: ${({theme:e})=>e.spacing(30)};

  position: absolute;
  width: ${({theme:e,$isActive:t})=>t&&e.spacing(30)};
  height: ${({theme:e,$isActive:t})=>t&&e.spacing(40)};
  top: 10%;
  left: -80%;

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  border-radius: ${({theme:e,$isActive:t})=>t&&e.spacing(2)};
  background-color: ${({theme:e,$isActive:t})=>t&&e.colors.white};
  color: ${({theme:e,$isActive:t})=>t&&e.colors.black};
  box-shadow: ${({theme:e,$isActive:t})=>t&&e.shadows.primary};
  border: ${({theme:e,$isActive:t})=>t&&e.borders.normal};
  border-color: ${({theme:e,$isActive:t})=>t&&e.colors.blue};

  @media only screen and (min-width: 768px) {
    top: 10%;
    left: -55%;
  }
  @media only screen and (min-width: 1280px) {
    top: 10%;
    left: -30%;
  }
`,R=i.div`
  position: relative;
`,M=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,N=["MN","TU","WE","TH","FR","SA","SU"],$=({days:e,isActive:t})=>{var o,c;return n.jsx(R,{children:t?n.jsx(H,{$isActive:t,children:e.map((r,l)=>n.jsxs(M,{children:[n.jsx("span",{children:N[l]}),n.jsxs("span",{children:[r.from,"-",r.to]})]},l))}):n.jsxs(d,{children:[(o=e[0])==null?void 0:o.from," - ",(c=e[0])==null?void 0:c.to]})})};$.propTypes={days:s.array,isActive:s.bool};const y=({title:e,imageUrl:t,addressUrl:o,address:c,email:r,phone:l,workDays:a,url:m})=>{const[j,w]=g.useState(!1),b=()=>{w(f=>!f)},S=a==null?void 0:a.filter(f=>f.isOpen);return n.jsxs(P,{children:[n.jsx(A,{children:n.jsx(B,{href:m,target:"_blank",rel:"noopener noreferrer nofollow",children:e})}),n.jsxs(C,{children:[n.jsx(E,{href:m,target:"_blank",rel:"noopener noreferrer nofollow",children:n.jsx(U,{src:t,alt:e})}),n.jsx(I,{children:n.jsxs(_,{children:[n.jsx(h,{children:n.jsxs("button",{onClick:b,children:[n.jsx(p,{children:"Time:"}),a!=null&&a.length?n.jsx($,{days:S,isActive:j}):n.jsx(d,{children:"day and night"})]})}),n.jsxs(h,{children:[n.jsx(p,{children:"Address:"}),o?n.jsx(x,{href:o,target:"_blank",rel:"noopener noreferrer nofollow",children:c}):n.jsx(d,{children:"website only"})]}),n.jsxs(h,{children:[n.jsx(p,{children:"Email:"}),r?n.jsx(x,{href:`mailto:${r}`,children:r}):n.jsx(d,{children:"website only"})]}),n.jsxs(h,{children:[n.jsx(p,{children:"Phone:"}),l?n.jsx(x,{href:`tel:${l}`,children:l}):n.jsx(d,{children:"website only"})]})]})})]})]})};y.propTypes={imageUrl:s.string,title:s.string,addressUrl:s.string,address:s.string,url:s.string,email:s.string,phone:s.string,workDays:s.array};const Q=i.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`,q=()=>{const e=u(z);return n.jsx(Q,{children:e==null?void 0:e.data.map((t,o)=>n.jsx(y,{...t},o))})},V=()=>{const e=L(),t=u(T);return g.useEffect(()=>{e(W({page:1,limit:10})).unwrap().catch(o=>k.error(o))},[e]),n.jsxs(O,{children:[n.jsx(F,{title:"Our Friends"}),t?n.jsx(v,{}):n.jsx(q,{})]})};export{V as default};
