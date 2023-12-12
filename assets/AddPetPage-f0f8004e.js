import{s as i,k as n,ax as l,ay as a,j as o,o as p,az as x}from"./index-9f0bcc96.js";const h=i.div`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 8px 20px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.white};

  width: ${({theme:e})=>e.spacing(70)};

  border-radius: ${({theme:e})=>e.radii.l};
  box-shadow: ${({theme:e})=>e.shadows.primary};

  @media screen and (min-width: 768px) {
    margin-top: 68px;
    padding: 20px 33px;
    width: ${({$step:e,$categoryWidth:t})=>e===3&&t!=="own"?"704px":"458px"};
    border-radius: ${({theme:e})=>e.radii.l};
    background-color: ${({theme:e})=>e.colors.white};
  }

  @media screen and (min-width: 1280px) {
    width: ${({$step:e,$categoryWidth:t})=>e===3&&t!=="own"?"822px":"458px"};
    padding: ${({$step:e,$categoryWidth:t})=>e===3&&t!=="own"?"20px 73px":"20px 33px"};
    background-color: ${({theme:e})=>e.colors.white};
  }
`,u=i.h1`
  margin-bottom: ${({theme:e})=>e.spacing(4)};
  color: ${({theme:e})=>e.colors.black};
  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.spacing(5)};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: normal;
  letter-spacing: 1.44px;
  text-align: left;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    font-size: ${({theme:e})=>e.spacing(7)};
    &.centered {
      text-align: center;
    }
  }
`,m=()=>{const e=n(l),t=n(a),r=e==null?void 0:e.category,c=t===3,d=g=>{switch(g){case"own":return"Add Your Pet";case"sell":return"Add Pet For Sell";case"lost-found":return"Lost/Found Pet";case"in-good-hands":return"In Good Hands";default:return"Add Pet"}};return o.jsx(u,{className:c&&(e==null?void 0:e.category)!=="own"?"centered":"",children:d(r)})},f=i.div`
  white-space: nowrap;
  margin: 0 auto;
`,s=i.div`
  display: inline-block;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.fontSizes.xxs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: normal;

  color: ${({theme:e,color:t})=>e.colors[t]};

  &::after {
    margin-top: 12px;
    content: "";
    display: block;
    bottom: 0;
    left: 0;
    right: 0, position absolute;
    width: 80px;
    height: 8px;
    background-color: ${({theme:e,color:t})=>t==="grey"?e.colors.lightBlue:e.colors[t]};
    border-radius: ${({theme:e})=>e.radii.xxs};
  }
  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.m};
    line-height: 26px;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
    &::after {
      margin-top: 12px;
      content: "";
      display: block;
      bottom: 0;
      left: 0;
      right: 0, position absolute;
      width: 120px;
      height: 8px;
      background-color: ${({theme:e,color:t})=>t==="grey"?e.colors.lightBlue:e.colors[t]};
      border-radius: ${({theme:e})=>e.radii.xxs};
    }
  }
`,$=()=>{const e=n(a),t=r=>{if(e===1)return r===0?"blue":"grey";if(e===2)return r===0?"green":r===1?"blue":"grey";if(e===3)return r===0||r===1?"green":"blue"};return o.jsxs(f,{children:[o.jsx(s,{color:t(0),children:"Choose option"}),o.jsx(s,{color:t(1),children:"Personal details"}),o.jsx(s,{color:t(2),children:"More info"})]})},b=()=>{const e=n(a),t=n(l);return o.jsx(p,{$variant:"addPet",children:o.jsxs(h,{$step:e,$categoryWidth:t==null?void 0:t.category,children:[o.jsx(m,{}),o.jsx($,{}),o.jsx(x,{})]})})};export{b as default};
