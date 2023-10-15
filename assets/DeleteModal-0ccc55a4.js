import{s as n,P as s,u as y,k as c,H as w,G as j,E as b,j as t,M as v,L as T,B as d,av as k,Q as i,aw as B,a0 as D}from"./index-8d9dd412.js";const F=n.div`
  padding-top: ${({theme:e})=>e.spacing(12)};
  padding-bottom: ${({theme:e})=>e.spacing(12)};

  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-top: ${({theme:e})=>e.spacing(9)};
    padding-bottom: ${({theme:e})=>e.spacing(9)};
    padding-left: ${({theme:e})=>e.spacing(21.5)};
    padding-right: ${({theme:e})=>e.spacing(20.25)};
  }
`,z=n.div`
  height: ${({theme:e})=>e.spacing(14.25)};
  padding-left: ${({theme:e})=>e.spacing(2)};
  padding-right: ${({theme:e})=>e.spacing(2)};
  margin-bottom: ${({theme:e})=>e.spacing(11)};
  @media only screen and (min-width: 768px) {
    height: ${({theme:e})=>e.spacing(16.5)};
    padding: 0;
    margin-bottom: ${({theme:e})=>e.spacing(12)};
  }
`,p=n.h3`
  margin-bottom: ${({theme:e})=>e.spacing(3.5)};

  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  font-size: ${({theme:e})=>e.spacing(6)};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  letter-spacing: 0.96px;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({theme:e})=>e.spacing(10)};

    font-size: ${({theme:e})=>e.spacing(7)};
    letter-spacing: -0.28px;
  }
`,g=n.p`
  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.spacing(3.5)};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  letter-spacing: -0.14px;

  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.spacing(4)};
    letter-spacing: -0.16px;
  }
`,L=n.span`
  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  font-size: ${({theme:e})=>e.spacing(3.5)};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  letter-spacing: -0.14px;

  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.spacing(4)};
    letter-spacing: -0.16px;
  }
`,P=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 17px;
  }
`,W=({onClose:e,title:m,type:l,id:r})=>{const a=y(),h=c(w),x=c(j),f=c(b),u=()=>{document.body.style.overflow="auto",l==="own"?a(k(r)).unwrap().then(()=>{e(),i.success("Deleting completed successfully")}).catch(o=>{i.error(o)}):a(B(r)).unwrap().then(()=>{e(),a(D({page:1,limit:12,age:h,sex:x})),i.success("Deleting completed successfully")}).catch(o=>{i.error(o)})},$=()=>{document.body.style.overflow="auto",e()};return t.jsx(v,{onClose:e,children:t.jsx(F,{children:f?t.jsxs(t.Fragment,{children:[t.jsx(p,{children:"Almost done. Wait for a moment..."}),t.jsx(T,{type:"small"})]}):t.jsxs(t.Fragment,{children:[t.jsxs(p,{children:["Delete ",l==="own"?"your pet":"advertisement","?"]}),t.jsxs(z,{children:[t.jsxs(g,{children:["Are you sure you want to delete",t.jsxs(L,{children:[" “",m,"”? "]})]}),t.jsx(g,{children:"You can`t undo this action."})]}),t.jsxs(P,{children:[t.jsx(d,{onClick:$,text:"Cancel",variant:"cancel"}),t.jsx(d,{text:"Yes",variant:"logoutButton",icon:"trash-2",iconPosition:"right",iconVariant:"transparent",onClick:u})]})]})})})};W.propTypes={id:s.string,onClose:s.func.isRequired,title:s.string.isRequired,type:s.string};export{W as D};
