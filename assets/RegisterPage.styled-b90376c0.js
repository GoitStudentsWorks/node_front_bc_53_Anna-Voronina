import{s as t,P as s,j as n,q as a,t as c,v as p,w as h,n as u,x as m,S as f}from"./index-e43a8372.js";const x=t.svg`
  position: absolute;
  right: ${({theme:e})=>e.spacing(4)};
  top: 25%;
  cursor: pointer;
  fill: transparent;
  stroke: ${({theme:e})=>e.colors.blue};
`,$=({showPassword:e,onToggle:o})=>n.jsx(x,{onClick:o,width:"24",height:"24",children:e?n.jsx("use",{href:a+"#eye-open"}):n.jsx("use",{href:a+"#eye-closed"})});$.propTypes={onToggle:s.func.isRequired,showPassword:s.bool.isRequired};const y=t.p`
  width: 100%;
  color: ${({theme:e})=>e.colors.grey};
  text-align: center;
  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.48px;
`,w=t(c)`
  display: inline;
  color: ${({theme:e})=>e.colors.blue};

  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,b=({text:e,linkText:o,linkTo:i})=>n.jsxs(y,{children:[e,n.jsx(w,{to:i,children:o})]});b.propTypes={linkText:s.string.isRequired,linkTo:s.string.isRequired,text:s.string.isRequired};const R=t.div`
  padding: 40px 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.white};

  width: ${({theme:e})=>e.spacing(70)};

  flex-shrink: 0;
  border-radius: ${({theme:e})=>e.radii.s};
  box-shadow: ${({theme:e})=>e.shadows.primary};

  @media screen and (min-width: 768px) {
    width: ${({theme:e})=>e.spacing(152)};
    padding: 60px 75px;
    border-radius: ${({theme:e})=>e.radii.l};
    background-color: ${({theme:e})=>e.colors.white};
  }
  @media screen and (min-width: 1280px) {
    width: ${({theme:e})=>e.spacing(152)};
    background-color: ${({theme:e})=>e.colors.white};
  }
`,q=t(p)`
  margin-top: ${({theme:e})=>e.spacing(10)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: ${({theme:e})=>e.spacing(9)};
`,z=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3.5)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing(27.5)};
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: ${({theme:e})=>e.spacing(8)};
    margin-bottom: ${({theme:e})=>e.spacing(15)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${({theme:e})=>e.spacing(15)};
  }
`,G=t(h)`
  display: block;

  padding: 12px 16px;
  width: 100%;

  outline: none;
  border-radius: ${({theme:e})=>e.radii.l};
  border: ${({theme:e})=>e.borders.normal};
  border-color: ${({theme:e})=>e.colors.blue};

  color: ${({theme:e})=>e.colors.grey};

  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0.64px;

  &.error {
    border-color: ${({theme:e})=>e.colors.red}; // Красный бордер при ошибке
  }

  &.success {
    border-color: ${({theme:e})=>e.colors.green}; // Зеленый бордер при успешной валидации
  }
`,L=t.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2.5)};

  @media screen and (min-width: 768px) {
    gap: ${({theme:e})=>e.spacing(4)};
  }
`,C=t.div`
  position: relative;
  width: 100%;
`,E=t.div`
  position: relative;
  width: 100%;
`,I=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`,d=u`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({$right:e})=>e||"16px"};
`,j=t.svg`
  ${d}

  stroke: ${({theme:e})=>e.colors.red};
`,k=t.svg`
  ${d}
  fill:transparent;
  stroke: ${({theme:e})=>e.colors.green};
`,S=({touched:e,error:o,right:i})=>e&&o?n.jsx(j,{$right:i,width:"24",height:"24",children:n.jsx("use",{href:a+"#cross-small"})}):e&&!o?n.jsx(k,{$right:i,width:"24",height:"24",children:n.jsx("use",{href:a+"#check"})}):null;S.propTypes={error:s.string,right:s.string,touched:s.bool};const A=(e,o)=>e&&o?"error":e&&!o?"success":"";function V(e=[]){const o=e.reduce((r,l)=>(r[l]=!1,r),{}),[i,g]=m.useState(o);return{showPasswords:i,togglePasswordVisibility:r=>{g(l=>({...l,[r]:!l[r]}))}}}const v=t(c)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({theme:e})=>e.spacing(2.5)};

  font-family: ${({theme:e})=>e.fonts.manrope.regular};
  font-weight: ${({theme:e})=>e.fontWeights.regular};

  color: ${({theme:e})=>e.colors.grey};

  transition: color ${({theme:e})=>e.transitions.regular};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.blue};
  }
`,T=t.span`
  margin-right: ${({theme:e})=>e.spacing(1)};
`,W=t.span`
  text-decoration: underline;
`,B=()=>n.jsxs(v,{to:"https://petgrammers-backend.onrender.com/api/auth/google",children:[n.jsx(T,{children:"Continue with"}),n.jsx("svg",{width:24,height:24,children:n.jsx("use",{href:a+"#google"})}),n.jsx(W,{children:"oogle"})]}),M=t(f)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${({theme:e})=>e.spacing(10)};
  padding-bottom: ${({theme:e})=>e.spacing(10)};

  @media only screen and (min-width: 768px) {
    padding-top: ${({theme:e})=>e.spacing(20)};
    padding-bottom: ${({theme:e})=>e.spacing(20)};
  }
`;export{q as F,B as G,M as R,$ as T,R as W,E as a,G as b,S as c,I as d,C as e,L as f,A as g,b as h,z as i,V as u};
