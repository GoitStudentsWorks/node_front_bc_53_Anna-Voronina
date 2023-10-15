import{s as n,P as l,x as g,j as e,q as a}from"./index-ac4b763e.js";const y=n.h3`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  font-family: ${({theme:t})=>t.fonts.manrope.bold};
  font-size: ${({theme:t})=>t.fontSizes.xl};
  font-weight: ${({theme:t})=>t.fontWeights.bold};
  line-height: normal;
  letter-spacing: -0.24px;
`,w=n.ul`
  margin-top: ${({theme:t})=>t.spacing(6)};
  margin-bottom: ${({theme:t})=>t.spacing(10)};
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: ${({theme:t})=>t.spacing(10)};
    margin-bottom: ${({theme:t})=>t.spacing(15)};
    column-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({theme:t})=>t.spacing(15)};
    margin-bottom: ${({theme:t})=>t.spacing(17)};
    column-gap: 31px;
  }
`,d=n.form`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  height: ${({theme:t})=>t.spacing(11)};
  background-color: ${({theme:t})=>t.colors.white};
  border-radius: ${({theme:t})=>t.spacing(6)};
  box-shadow: ${({theme:t})=>t.shadows.primary};

  padding: 10px 12px 10px 20px;

  @media screen and (min-width: 768px) {
    width: ${({theme:t})=>t.spacing(152)};
    border-radius: ${({theme:t})=>t.spacing(5)};
    padding: 10px 20px;
  }
`,u=n.input`
  display: block;
  width: 100%;
  color: ${({theme:t})=>t.colors.grey};

  font-family: ${({theme:t})=>t.fonts.inter.regular};
  font-size: ${({theme:t})=>t.fontSizes.s};
  font-weight: ${({theme:t})=>t.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.56px;

  padding: 0;

  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: ${({theme:t})=>t.fontSizes.l};
    letter-spacing: 0.8px;
  }
`,h=n.button`
  display: block;
  height: ${({theme:t})=>t.spacing(6)};

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`,m=n.svg`
  width: ${({theme:t})=>t.spacing(6)};
  height: ${({theme:t})=>t.spacing(6)};
  fill: ${({theme:t})=>t.colors.blue};
`,x=n.button`
  display: block;
  height: ${({theme:t})=>t.spacing(6)};

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`,f=n.svg`
  width: ${({theme:t})=>t.spacing(6)};
  height: ${({theme:t})=>t.spacing(6)};
  stroke: ${({theme:t})=>t.colors.yellow};
`,b=({onSubmit:t})=>{const[i,s]=g.useState(""),r=o=>{s(o.target.value)},p=o=>{o.preventDefault(),t(i.trim())},c=()=>{s("")};return e.jsxs(d,{onSubmit:p,children:[e.jsx(u,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:i,onChange:r}),e.jsx(h,{type:"submit","aria-label":"search button",children:e.jsx(m,{children:e.jsx("use",{href:a+"#search"})})}),i.trim()!==""&&e.jsx(x,{type:"button","aria-label":"delete button",onClick:c,children:e.jsx(f,{children:e.jsx("use",{href:a+"#cross-small"})})})]})};b.propTypes={onSubmit:l.func.isRequired};export{w as L,y as P,b as S};
