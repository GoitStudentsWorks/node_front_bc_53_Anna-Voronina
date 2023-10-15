import{s as i,n as B,P as h,k as l,y as ke,z as I,A as ee,j as t,M as te,B as z,C as ze,t as ne,x as d,u as W,D as ie,E as Se,G as se,H as oe,q as m,I as Ce,Q as P,J as Pe,K as re,N as _,O as ae,R as le,T as ce,U as de,V as Be,W as Ie,X as Oe,Y as We,Z as Le,_ as Fe,$ as Te,a0 as Ne,a1 as Ae,L as Me}from"./index-3a9d84e6.js";import{D as De}from"./DeleteModal-3dc4f370.js";import{P as Ee,S as Ge}from"./Searchbar-b4a0c466.js";import{C as Re}from"./Container-8a0827b1.js";import{P as Ve}from"./PageTitle-2223246b.js";import{P as _e}from"./Pagination-835d78e4.js";const Ue=e=>{if(e<1)return e*10+" m.";if(e===1)return e+" year";if(e>=2)return e+" years"},qe=e=>e<=1?"1":e<=2?"2":e>2?">2":void 0,Qe=e=>{const s=e.split(" ");return s[0]=s[0][0].toUpperCase()+s[0].slice(1),s.join(" ")},Ye=i.div`
  padding-top: ${({theme:e})=>e.spacing(8)};

  @media screen and (min-width: 768px) {
    padding-top: ${({theme:e})=>e.spacing(2)};
    padding-left: ${({theme:e})=>e.spacing(2)};
    padding-right: ${({theme:e})=>e.spacing(2)};
  }
`,He=i.div`
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    margin-bottom: 28px;
  }
`,Je=i.div`
  position: relative;
  height: 240px;
  width: 240px;
  margin: auto;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin: 0;
    height: 298px;
    width: 262px;
  }
`,Ke=i.span`
  position: absolute;
  top: 16px;
  display: block;
  border-radius: 0px 14px 14px 0px;
  width: 126px;
  padding: 11px 12px;
  text-align: center;

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.s};

  background: ${({theme:e})=>e.colors.lightBlue};
`,Xe=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 0px 0px 40px 40px;
`,Ze=i.div`
  width: 256px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 321px;
  }
`,et=i.h3`
  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${({theme:e})=>e.colors.black};
  margin-bottom: 20px;
  &::first-letter {
    text-transform: uppercase;
  }
  /* word-break: break-all; */
  @media screen and (min-width: 768px) {
    width: 268px;
    font-size: 28px;
  }
`,tt=i.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,k=i.li`
  /* position: relative; */
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.s};
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${({theme:e})=>e.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.m};
  }
`,C=i.span`
  width: 65%;

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.m};
  }
`,M=i.a`
  width: 65%;

  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.black};
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.m};
  }

  transition: color ${({theme:e})=>e.transitions.regular};

  ${({$variant:e})=>e==="yellow"&&B`
      color: ${({theme:s})=>s.colors.yellow};
    `}

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.blue};
  }
`,nt=i.p`
  max-width: 256px;
  margin: 0 auto;
  margin-bottom: ${({theme:e})=>e.spacing(3)};

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.s};
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin-bottom: ${({theme:e})=>e.spacing(17.5)};
    font-size: ${({theme:e})=>e.fontSizes.m};
    line-height: 1.5;
    letter-spacing: 0.64px;
  }
`,it=i.span`
  font-family: ${({theme:e})=>e.fonts.manrope.semiBold};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
`,st=i.div`
  margin-left: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 17px;
    justify-content: flex-end;
    flex-direction: row;
  }
`,ot=i.a`
  position: relative;
  width: ${({theme:e})=>e.spacing(64)};
  height: ${({theme:e})=>e.spacing(10)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing(2)};

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeights.bold};

  letter-spacing: 0.64px;

  border: ${({theme:e})=>e.borders.medium};
  color: ${({theme:e})=>e.colors.blue};

  border-radius: ${({theme:e})=>e.radii.l};
  padding: 8px 20px;

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>e.colors.blueGradient};
    border-radius: ${({theme:e})=>e.radii.l};
    opacity: 0;
    z-index: -1;

    transition: opacity ${({theme:e})=>e.transitions.regular};
  }

  cursor: pointer;
  transition: color ${({theme:e})=>e.transitions.regular},
    border-color ${({theme:e})=>e.transitions.regular};

  &:focus,
  &:hover {
    border-color: transparent;
    color: ${({theme:e})=>e.colors.white};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  @media only screen and (min-width: 768px) {
    width: ${({theme:e})=>e.spacing(32.25)};
  }
`,pe=({setIsModalOpen:e,handleToggleFavorite:s})=>{const n=l(ke),r=l(I),a=l(ee);return t.jsx(te,{onClose:()=>e(!1),variant:"petsModal",children:t.jsxs(Ye,{children:[t.jsxs(He,{children:[t.jsxs(Je,{children:[t.jsx(Ke,{children:n==null?void 0:n.category}),t.jsx(Xe,{src:n==null?void 0:n.file,alt:n==null?void 0:n.title})]}),t.jsxs(Ze,{children:[t.jsx(et,{children:n==null?void 0:n.title}),t.jsxs(tt,{children:[t.jsxs(k,{children:["Name:",t.jsx(C,{children:n==null?void 0:n.name})]}),t.jsxs(k,{children:["Birthday:",t.jsx(C,{children:n==null?void 0:n.date})]}),t.jsxs(k,{children:["Type:",t.jsxs(C,{children:[" ",n==null?void 0:n.type]})]}),(n==null?void 0:n.category)==="sell"&&t.jsxs(k,{children:["Price:",t.jsxs(C,{children:[" ",n==null?void 0:n.price]})]}),t.jsxs(k,{children:["Place:",t.jsx(M,{href:`https://www.google.com/maps/place/${n==null?void 0:n.location}`,target:"_blank",rel:"noopener noreferrer nofollow",children:n==null?void 0:n.location})]}),t.jsxs(k,{children:["The sex:",t.jsx(C,{children:n==null?void 0:n.sex})]}),t.jsxs(k,{children:["Email:",t.jsx(M,{href:`mailto:${n==null?void 0:n.email}`,$variant:"yellow",children:n==null?void 0:n.email})]}),t.jsxs(k,{children:["Phone:",t.jsx(M,{href:`tel:${n==null?void 0:n.phone}`,$variant:"yellow",children:n==null?void 0:n.phone})]})]})]})]}),t.jsxs(nt,{children:[t.jsx(it,{children:"Comments: "}),n==null?void 0:n.comments]}),t.jsxs(st,{children:[t.jsx(z,{text:r&&(a!=null&&a.favorites.some(c=>c._id===(n==null?void 0:n._id)))?"Remove":"Add to",variant:"logoutButton",iconVariant:r&&(a!=null&&a.favorites.some(c=>c._id===(n==null?void 0:n._id)))?"favorite":"transparent",iconPosition:"right",icon:"heart",onClick:()=>s(n==null?void 0:n._id)}),t.jsx(ot,{href:`tel:${n==null?void 0:n.phone}`,children:"Contact"})]})]},n==null?void 0:n._id)})};pe.propTypes={handleToggleFavorite:h.func,setIsModalOpen:h.func};const rt=i.div`
  padding-top: ${({theme:e})=>e.spacing(11)};
  padding-bottom: ${({theme:e})=>e.spacing(11)};
  padding-left: ${({theme:e})=>e.spacing(2)};
  padding-right: ${({theme:e})=>e.spacing(2)};

  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-left: ${({theme:e})=>e.spacing(4)};
    padding-right: ${({theme:e})=>e.spacing(4)};
  }
`,at=i.h3`
  margin-bottom: ${({theme:e})=>e.spacing(5)};

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.spacing(6)};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  letter-spacing: 0.96px;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({theme:e})=>e.spacing(10)};

    font-size: ${({theme:e})=>e.spacing(9)};
    letter-spacing: 1.44px;
  }
`,lt=i.p`
  margin-bottom: ${({theme:e})=>e.spacing(10)};

  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.spacing(3.5)};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 1.29;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 768px) {
    font-size: ${({theme:e})=>e.spacing(5)};
    line-height: 1.4;
    letter-spacing: 0.8px;
  }
`,G=({onClose:e})=>t.jsx(te,{variant:"bigPadding",onClose:e,children:t.jsxs(rt,{children:[t.jsx(at,{children:"Attention"}),t.jsx(lt,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),t.jsx(ze,{variant:"attentionModal"})]})});G.propTypes={onClose:h.func};const ct=i.ul`
  display: grid;

  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
  max-width: 450px;
  margin-top: 40px;
  margin-bottom: ${({theme:e})=>e.spacing(10)};

  @media screen and (min-width: 450px) {
    max-width: initial;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 4fr);
    margin-bottom: ${({theme:e})=>e.spacing(15)};
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 4fr);
    margin-bottom: ${({theme:e})=>e.spacing(17)};
  }
`,dt=i.li`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  /* display: grid;
  align-items: end; */
  height: 100%;
  margin: auto;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadows.primary};
  border-radius: 0px 0px 20px 20px;
  @media screen and (min-width: 768px) {
    border-radius: 0px 0px 40px 40px;
  }
  /* display: grid;
  align-items: end; */
`,pt=i.div`
  position: relative;
`,ht=i.span`
  position: absolute;
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.s};
  line-height: normal;
  font-family: ${({theme:e})=>e.fonts.medium} !important;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${({theme:e})=>e.colors.black};
  background: ${({theme:e})=>e.colors.lightBlue};
  backdrop-filter: blur(2px);
  padding: 6px 53px 6px 20px;
  border-top-right-radius: ${({theme:e})=>e.fontSizes.s};
  border-bottom-right-radius: ${({theme:e})=>e.fontSizes.s};
  top: ${({theme:e})=>e.fontSizes.l};
`,he=i.button`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: transparent;
  color: transparent;
  fill: transparent;
  transition: 250ms;
  width: 44px;
  height: 44px;
  top: 12px;
  right: 12px;
  background: ${({theme:e})=>e.colors.lightBlue};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  color: ${({theme:e})=>e.colors.blue};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.blue};
    fill: ${({theme:e})=>e.colors.blue};
  }

  &:disabled {
    opacity: 0.7;
  }
`,gt=i(he)`
  top: 68px;

  &:hover,
  &:focus {
    fill: ${({theme:e})=>e.colors.blue};
  }
`,U=i.svg`
  height: 28px;
  width: 28px;
  stroke: ${({theme:e})=>e.colors.blue};

  transition: fill ${({theme:e})=>e.transitions.regular};

  &:hover,
  &:focus {
    fill: ${({theme:e})=>e.colors.blue};
  }

  ${({$variant:e})=>e==="favorite"&&B`
      fill: ${({theme:s})=>s.colors.blue};
    `}

  ${({$variant:e})=>e==="default"&&B`
      fill: transparent;
    `}
`,ft=i.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 288px;
    object-fit: cover;
  }
`,xt=i.div`
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
`,ut=i.h3`
  height: 66px;
  margin-bottom: 20px;

  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  line-height: normal;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.colors.black};

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,mt=i.div`
  display: inline-flex;
  justify-content: center;
`,$t=i.ul`
  position: absolute;
  bottom: 12px;
  left: 5%;
  display: inline-flex;
  justify-content: center;
  gap: ${({theme:e})=>e.fontSizes.xs};

  @media screen and (min-width: 768px) {
    left: 24px;
    gap: ${({theme:e})=>e.fontSizes.xl};
  }

  @media screen and (min-width: 1280px) {
    left: 12px;
    gap: ${({theme:e})=>e.fontSizes.xs};
  }
`,D=i.li`
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: normal;
  width: 80px;

  display: flex;
  align-items: center;
  gap: 4px;
  letter-spacing: 0.48px;

  color: ${({theme:e})=>e.colors.black};
  background: ${({theme:e})=>e.colors.lightBlue};
  backdrop-filter: blur(2px);
  padding: 2px 3px;
  border-radius: ${({theme:e})=>e.radii.xs};
  border-color: ${({theme:e})=>e.colors.blue};
  transition: transform ${({theme:e})=>e.transitions.regular};
  cursor: default;

  ${({$filtered:e})=>e==="yes"&&B`
      background: ${({theme:s})=>s.colors.blueGradient};
      color: ${({theme:s})=>s.colors.white};

      svg {
        stroke: ${({theme:s})=>s.colors.white};
      }
    `};

  ${({$type:e})=>e==="location"&&B`
      cursor: pointer;

      &:hover,
      &:focus {
        background: ${({theme:s})=>s.colors.blueGradient};
        color: ${({theme:s})=>s.colors.white};

        svg {
          stroke: ${({theme:s})=>s.colors.white};
        }
      }
    `};
`,bt=i.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({theme:e})=>e.spacing(1)};
`,E=i.svg`
  height: 24px;
  width: 24px;
  stroke: ${({theme:e})=>e.colors.blue};
  fill: transparent;
`,wt=i.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 6ch;
`,yt=i(ne)`
  position: fixed;
  top: 75%;
  right: 20px;
  height: ${({theme:e})=>e.spacing(20)};
  width: ${({theme:e})=>e.spacing(20)};
  padding: ${({theme:e})=>e.spacing(4)};
  padding-top: ${({theme:e})=>e.spacing(5)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing(1)};
  flex-direction: column;

  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.xs};

  color: ${({theme:e})=>e.colors.white};
  background-image: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
  border-radius: ${({theme:e})=>e.radii.round};

  svg {
    stroke: ${({theme:e})=>e.colors.white};
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`,ge=({notices:e,categoryType:s})=>{const[n,r]=d.useState(!1),[a,c]=d.useState(!1),[p,g]=d.useState(!1),[f,x]=d.useState(""),[o,$]=d.useState(""),y=W(),L=ie(),S=l(I),b=l(ee),w=l(Se),F=l(se),T=l(oe),me=u=>{r(!0),document.body.style.overflow="hidden",y(Ce(u)).unwrap().catch(j=>P.error(j))},$e=()=>{g(u=>!u)},R=u=>{S?(x(u),y(Pe(u)).unwrap().then(()=>{s==="favorite"&&y(re({page:1,limit:12})),y(s==="sale"||s==="lost-found"||s==="in-good-hands"?_():_())}).catch(j=>P.error(j))):(g(!0),document.body.style.overflow="hidden")},be=({id:u,title:j})=>{c(v=>!v),x(u),$(j)},we=()=>{c(u=>!u)},ye=()=>{S||g(!0)};return t.jsxs(t.Fragment,{children:[e!=null&&e.length?t.jsx(ct,{children:e==null?void 0:e.map(({category:u,age:j,_id:v,title:N,location:V,file:je,sex:A})=>t.jsxs(dt,{children:[t.jsxs(pt,{children:[t.jsx(ht,{children:u}),t.jsx(he,{onClick:()=>R(v),disabled:w&&f===v,children:t.jsx(U,{$variant:S&&(b!=null&&b.favorites.some(ve=>ve._id===v))?"favorite":"default",children:t.jsx("use",{href:m+"#heart"})})}),s==="own"&&t.jsx(gt,{onClick:()=>be({id:v,title:N}),children:t.jsx(U,{$variant:"default",children:t.jsx("use",{href:m+"#trash-2"})})}),t.jsx(ft,{loading:"lazy",src:je,alt:N,width:288,height:288}),t.jsxs($t,{children:[t.jsx(D,{$type:"location",children:t.jsxs(bt,{href:`https://www.google.com/maps/place/${V}`,target:"_blank",rel:"noopener noreferrer nofollow",children:[t.jsx(E,{children:t.jsx("use",{href:m+"#location-1"})}),t.jsx(wt,{children:V})]})}),t.jsxs(D,{$filtered:T!=null&&T.includes(qe(j))?"yes":"no",children:[t.jsx(E,{children:t.jsx("use",{href:m+"#clock"})}),Ue(j)]}),t.jsxs(D,{$filtered:F!=null&&F.includes(A)?"yes":"no",children:[t.jsx(E,{children:t.jsx("use",{href:A==="female"?m+"#female":m+"#male"})}),A]})]})]}),t.jsxs(xt,{children:[t.jsx(ut,{children:Qe(N)}),t.jsx(mt,{children:t.jsx(z,{type:"button",text:"Learn more",variant:"bigButtonFirst",onClick:()=>me(v)})})]})]},v))}):t.jsx(Ee,{children:"There are no notices matching your search query."}),t.jsxs(yt,{to:S&&"/add-pet",state:{from:L},onClick:ye,children:[t.jsx("svg",{width:24,height:24,children:t.jsx("use",{href:m+"#plus"})}),t.jsx("span",{children:"Add Pet"})]}),n&&t.jsx(pe,{setIsModalOpen:r,handleToggleFavorite:R}),p&&t.jsx(G,{onClose:$e}),a&&t.jsx(De,{onClose:we,title:o,id:f})]})};ge.propTypes={categoryType:h.string,notices:h.arrayOf(h.shape({category:h.string,age:h.number,_id:h.string,title:h.string,location:h.string,file:h.string,sex:h.string})).isRequired};const q=e=>{switch(e){case"up to 1 year":return"1 year";case"up to 2 years":return"2 years";case"from 2 years":return"2+ years";default:return e}},jt=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 12px;
`,fe=[{name:"up to 1 year",value:"up to 1 year"},{name:"up to 2 years",value:"up to 2 years"},{name:"from 2 years",value:"from 2 years"}],xe=[{name:"female",value:"female"},{name:"male",value:"male"}],ue=e=>{switch(e){case"up to 1 year":return"1";case"up to 2 years":return"2";case"from 2 years":return">2";default:return e}},vt=()=>{const e=l(ae),s=W(),n=(r,a)=>{s(r==="age"?le(a):ce(a)),s(de({optionType:r,filterName:ue(a)}))};return t.jsxs(jt,{children:[fe.map(r=>t.jsx("div",{children:e.ageOptions[r.value]&&t.jsx(z,{text:q(r.value),variant:"filterCheck",icon:"cross-small",iconVariant:"filterbutton",iconOnClick:()=>n("age",r.value),iconPosition:"right"})},r.value)),xe.map(r=>t.jsx("div",{children:e.sexOptions[r.value]&&t.jsx(z,{text:q(r.value),variant:"filterCheck",icon:"cross-small",iconVariant:"filterbutton",iconOnClick:()=>n("sex",r.value),iconPosition:"right"})},r.value))]})},kt=i.div`
  position: relative;
  display: flex;
  justify-content: end;
`,zt=i.div`
  z-index: 8;
  top: 43px;
  position: absolute;
  width: ${({theme:e})=>e.spacing(38)};
  padding: ${({theme:e})=>e.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing(2)};
  background-color: ${({theme:e})=>e.colors.white};

  border-radius: ${({theme:e})=>e.radii.s};
`,St=i.p`
  font-family: ${({theme:e})=>e.fonts.inter.bold};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  line-height: normal;
  letter-spacing: 0.64px;
  color: ${({theme:e})=>e.colors.blue};
  z-index: 1;
`,Q=i.div`
  width: 100%;
  border-radius: ${({theme:e})=>e.radii.s};
  background-color: ${({theme:e})=>e.colors.lightBlue};
  transition: transform ${({theme:e})=>e.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    transform: scale(1.07);
  }
`,Y=i.div`
  width: 100%;
  display: flex;
  padding: 8px 14px 14px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${({theme:e})=>e.radii.s};

  background-color: ${({theme:e})=>e.colors.lightBlue};
`,H=i.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  font-family: ${({theme:e})=>e.fonts.inter.regular};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 15.6px;
  letter-spacing: normal;
  color: ${({theme:e})=>e.colors.blue};
  transition: transform ${({theme:e})=>e.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    transform: scale(1.07);
  }
`,J=i.input`
  cursor: pointer;
`,O=i.svg`
  position: absolute;
  top: 50%;
  background-color: ${({theme:e})=>e.colors.lightBlue};

  transform: translateY(-50%);

  fill: transparent;
  stroke: ${({theme:e})=>e.colors.blue};
  cursor: pointer;
`,Ct=()=>{const[e,s]=d.useState(window.innerWidth<768?" ":"Filter"),[n,r]=d.useState(!1),a=l(ae),c=d.useRef(null),p=W();d.useEffect(()=>{const o=$=>{n&&c.current&&!c.current.contains($.target)&&r(!1)};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[n]),d.useEffect(()=>{const o=()=>{s(window.innerWidth<768?" ":"Filter")};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const g=()=>{r(!n)},f=o=>{p(o==="age"?Be():Ie())},x=(o,$)=>{p(o==="age"?le($):ce($)),p(de({optionType:o,filterName:ue($)}))};return t.jsxs(kt,{ref:c,children:[t.jsx(z,{onClick:g,text:e,variant:"filter",icon:"filters-3",iconVariant:"transparent",iconPosition:"right",isButtonsVisible:n}),n&&t.jsxs(zt,{children:[t.jsx(St,{children:"Filters"}),t.jsxs(Q,{children:[t.jsx(z,{text:"By age",variant:"filterBySelect",icon:a.showCheckboxByAge?"chevron-up":"chevron-down",iconVariant:"transparent",iconPosition:"left",onClick:()=>f("age")}),a.showCheckboxByAge&&t.jsx(Y,{children:fe.map(o=>t.jsxs(H,{children:[t.jsx(J,{type:"checkbox",name:"age",value:o.value,checked:a.ageOptions[o.value],onChange:()=>x("age",o.value)}),o.name,a.ageOptions[o.value]?t.jsx(O,{width:"24",height:"24",children:t.jsx("use",{href:m+"#check-round"})}):t.jsx(O,{width:"24",height:"24",children:t.jsx("use",{href:m+"#round"})})]},o.value))})]}),t.jsxs(Q,{children:[t.jsx(z,{text:"By Gender",variant:"filterBySelect",icon:a.showCheckboxByGender?"chevron-up":"chevron-down",iconVariant:"transparent",iconPosition:"left",onClick:()=>f("sex")}),a.showCheckboxByGender&&t.jsx(Y,{children:xe.map(o=>t.jsxs(H,{children:[t.jsx(J,{type:"checkbox",name:"sex",value:o.value,checked:a.sexOptions[o.value],onChange:()=>x("sex",o.value)}),o.name,a.sexOptions[o.value]?t.jsx(O,{width:"24",height:"24",children:t.jsx("use",{href:m+"#check-round"})}):t.jsx(O,{width:"24",height:"24",children:t.jsx("use",{href:m+"#round"})})]},o.value))})]})]})]})},K=i.li`
  position: relative;
`,X=i(Oe)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.manrope.medium};
  font-size: ${({theme:e})=>e.fontSizes.s};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: normal;
  letter-spacing: 0.56px;

  color: ${({theme:e})=>e.colors.blue};
  background-color: ${({theme:e})=>e.colors.lightBlue};

  border-radius: ${({theme:e})=>e.radii.l};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    background: ${({theme:e})=>e.colors.blueGradient};
    transform: scale(1.07);
    color: ${({theme:e})=>e.colors.white};
  }

  &.active {
    background-color: ${({theme:e})=>e.colors.blue};
    color: ${({theme:e})=>e.colors.white};
  }
`,Z=i.ul`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  flex-wrap: wrap;
`,Pt=[{label:"sell",path:"sell"},{label:"lost/found",path:"lost-found"},{label:"in good hands",path:"in-good-hands"}],Bt=[{label:"sell",path:"sell"},{label:"lost/found",path:"lost-found"},{label:"in good hands",path:"in-good-hands"},{label:"favorite ads",path:"favorite"},{label:"my ads",path:"own"}],It=()=>{const e=l(I);return t.jsx(t.Fragment,{children:e?t.jsx(Z,{children:Bt.map(({label:s,path:n})=>t.jsx(K,{children:t.jsx(X,{to:`/notices/${n}`,children:s})},s))}):t.jsx(Z,{children:Pt.map(({label:s,path:n})=>t.jsx(K,{children:t.jsx(X,{to:`/notices/${n}`,children:s})},s))})})},Ot=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing(5)};

  @media only screen and (min-width: 768px) {
    margin-top: ${({theme:e})=>e.spacing(10)};
  }
`,Wt=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: baseline;
  justify-content: end;
  flex-wrap: wrap-reverse;

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap-reverse;
  }
  @media only screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`,Lt=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
  justify-content: center;
`,Ft=i(ne)`
  position: relative;
  display: none;
  height: ${({theme:e})=>e.spacing(10)};

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.manrope.bold};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeights.bold};

  color: ${({theme:e})=>e.colors.white};
  background-color: ${({theme:e})=>e.colors.blue};

  letter-spacing: 0.64px;

  border-radius: ${({theme:e})=>e.radii.l};
  border: none;
  padding: 8px 20px;

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>e.colors.blueGradient};
    border-radius: ${({theme:e})=>e.radii.l};
    opacity: 0;
    z-index: -1;

    transition: opacity ${({theme:e})=>e.transitions.regular};
  }

  cursor: pointer;
  outline: none;
  transition: transform ${({theme:e})=>e.transitions.regular},
    color ${({theme:e})=>e.transitions.regular},
    background-color ${({theme:e})=>e.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    background: ${({theme:e})=>e.colors.blueGradient};
    transform: scale(1.07);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: ${({theme:e})=>e.spacing(32.25)};
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing(2)};
    padding: 8px 16px;
  }

  svg {
    stroke: ${({theme:e})=>e.colors.white};
  }
`,Tt=()=>{const[e,s]=d.useState(!1),n=ie(),r=l(I),a=()=>{s(p=>!p)},c=()=>{r||(s(!0),document.body.style.overflow="hidden")};return t.jsxs(t.Fragment,{children:[t.jsxs(Ot,{children:[t.jsx(It,{}),t.jsxs(Wt,{children:[t.jsx(vt,{}),t.jsxs(Lt,{children:[t.jsx(Ct,{}),t.jsxs(Ft,{to:r&&"/add-pet",state:{from:n},onClick:c,children:[t.jsx("span",{children:"Add Pet"}),t.jsx("svg",{width:24,height:24,children:t.jsx("use",{href:m+"#plus-small"})})]})]})]})]}),e&&t.jsx(G,{onClose:a})]})},Rt=()=>{const[e,s]=d.useState(1),[n,r]=d.useState(""),[a,c]=We(),p=W(),{category:g}=Le(),f=l(Fe),x=l(oe),o=l(se),$=l(I),y=l(Te);d.useEffect(()=>{s(1)},[n,x,o,g]),d.useEffect(()=>{const b=new URLSearchParams;x.forEach(w=>{b.append("age",w)}),o.forEach(w=>{b.append("sex",w)}),c(b),$&&g==="favorite"?p(re({page:e,limit:12,age:x,sex:o,searchQuery:n})).unwrap().catch(w=>P.error(w)):$&&g==="own"?p(Ne({page:e,limit:12,age:x,sex:o,searchQuery:n})).unwrap().catch(w=>P.error(w)):p(Ae({page:e,limit:12,age:x,sex:o.join(","),category:g,searchQuery:n})).unwrap().catch(w=>P.error(w))},[x,g,p,$,e,n,c,o]);const L=b=>{s(b)},S=b=>{r(b)};return t.jsxs(Re,{children:[t.jsx(Ve,{title:"Find your favorite pet"}),t.jsx(Ge,{onSubmit:S}),t.jsx(Tt,{}),y?t.jsx(Me,{}):t.jsx(ge,{notices:f==null?void 0:f.data,categoryType:g}),t.jsx(_e,{onPageChange:L,currentPage:e,perPage:12,totalItems:f==null?void 0:f.total,variant:y?"hidden":"visible"})]})};export{Rt as default};
