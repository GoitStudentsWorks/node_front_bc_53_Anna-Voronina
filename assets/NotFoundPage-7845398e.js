import{s as t,t as i,j as o,o as s,q as a}from"./index-3a9d84e6.js";import{C as r}from"./Container-8a0827b1.js";const e="/node_front_bc_53_Anna-Voronina/assets/not-found@1x-9c84cef6.png",c="/node_front_bc_53_Anna-Voronina/assets/not-found@2x-a7dba45b.png",d="/node_front_bc_53_Anna-Voronina/assets/not-found@1x-ed487dab.webp",l="/node_front_bc_53_Anna-Voronina/assets/not-found@2x-ba8f55ce.webp",p=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,f=t.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: ${({theme:n})=>n.spacing(20)};

  text-align: center;
  font-family: ${({theme:n})=>n.fonts.manrope.extraBold};
  font-weight: ${({theme:n})=>n.fontWeights.extraBold};
  font-size: ${({theme:n})=>n.fontSizes.xl};
  color: #000000;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${({theme:n})=>n.spacing(1.5)};

    font-family: ${({theme:n})=>n.fonts.manrope.bold};
    font-weight: ${({theme:n})=>n.fontWeights.bold};
    font-size: 32px;
    line-height: 1.3;
  }
`,g=t.picture`
  display: block;
  margin-bottom: ${({theme:n})=>n.spacing(15)};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({theme:n})=>n.spacing(17.5)};
  }
`,x=t(i)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 248px;
  padding: 8px 28px;
  gap: ${({theme:n})=>n.spacing(3)};

  border-radius: ${({theme:n})=>n.radii.l};
  background-color: ${({theme:n})=>n.colors.blue};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({theme:n})=>n.colors.blueGradient};
    border-radius: ${({theme:n})=>n.radii.l};
    opacity: 0;
    z-index: -1;

    transition: opacity ${({theme:n})=>n.transitions.regular};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`,m=t.span`
  font-family: ${({theme:n})=>n.fonts.manrope.bold};
  font-weight: ${({theme:n})=>n.fontWeights.bold};
  font-size: ${({theme:n})=>n.fontSizes.m};
  letter-spacing: 0.64px;

  color: ${({theme:n})=>n.colors.lightPink};
`,u=t.svg`
  fill: ${({theme:n})=>n.colors.lightPink};
`,$=()=>o.jsx(s,{$variant:"notFound",children:o.jsx(r,{children:o.jsxs(p,{children:[o.jsxs(f,{children:[o.jsx("span",{children:"Ooops!"}),o.jsx("span",{children:"This page not found :("})]}),o.jsxs(g,{children:[o.jsx("source",{srcSet:`${e} 1x, ${c} 2x`,type:"image/png"}),o.jsx("source",{srcSet:`${d} 1x, ${l} 2x`,type:"image/webp"}),o.jsx("img",{src:e,alt:"404 - not found"})]}),o.jsxs(x,{to:"/",children:[o.jsx(m,{children:"To main page"}),o.jsx(u,{width:"24",height:"24",children:o.jsx("use",{href:a+"#pawprint"})})]})]})})});export{$ as default};
