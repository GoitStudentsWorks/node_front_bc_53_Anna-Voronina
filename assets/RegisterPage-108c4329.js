import{c as C,s as c,n as W,P as S,j as e,a as q,b as m,d as A,e as R,p as I,f as L,u as B,g as v,F as M,h as g,B as N,r as V,l as E,i as D,Q as b,k as G,m as z,L as O,o as Q}from"./index-e43a8372.js";import{W as $,u as H,F as J,a as h,b as p,g as x,c as w,d as u,e as F,T as y,f as K,h as U,G as X,R as Y}from"./RegisterPage.styled-b90376c0.js";import{T as Z}from"./Title-33d9b022.js";const _=()=>({getPasswordStrengthWidth:t=>{const a=((t==null?void 0:t.length)||0)/10*100;return`${Math.min(a,87)}%`},getPasswordStrengthColor:t=>{const d=[{length:1,color:"#CC0000"},{length:3,color:"#FF0000"},{length:4,color:"#FF2A00"},{length:5,color:"#FF5500"},{length:6,color:"#FFAA00"},{length:7,color:"#FFC107"},{length:8,color:"#B39500"},{length:9,color:"#5DBA00"},{length:10,color:"#12B000"},{length:1/0,color:"#2A8000"}],{color:l}=d.find(a=>(t==null?void 0:t.length)<=a.length)||{color:"transparent"};return l},getPasswordStrengthText:t=>{const d=[{min:1,max:1,text:"Invalid Password"},{min:2,max:2,text:"Very Weak Password"},{min:3,max:3,text:"Weak Password"},{min:4,max:4,text:"Below Average Password"},{min:5,max:5,text:"Average Password"},{min:6,max:6,text:"Moderate Password"},{min:7,max:7,text:"Invalid Password"},{min:8,max:8,text:"Strong Password"},{min:9,max:9,text:"Very Strong Password"},{min:10,max:10,text:"Robust Password"},{min:11,max:1/0,text:"Secure!!!"}],{text:l}=d.find(a=>(t==null?void 0:t.length)>=a.min&&(t==null?void 0:t.length)<=a.max)||{text:""};return l}}),ee=C`
  from {
    width: 0%;
    background-color: transparent;
  }
  to {
    width:100%;
    background-color: ${s=>s.color};
  }
`,se=c.div`
  height: ${({theme:s})=>s.spacing(.5)};
  background-color: transparent;
  border-radius: 5px;
  animation: ${ee} 0.5s ease;
  width: ${s=>s.width};
  background-color: ${s=>s.color};
  transition: all 0.4s ease-out;
  ${s=>W`
    background-color: ${s.color};
  `};
`,te=c.p`
  color: ${s=>s.color};
  font-size: 10px;
  font-weight: bold;
`,T=({values:s})=>{const{getPasswordStrengthWidth:i,getPasswordStrengthColor:n,getPasswordStrengthText:t}=_();return e.jsxs(e.Fragment,{children:[e.jsx(se,{width:i(s.password),color:n(s.password)}),e.jsx(te,{color:n(s.password),children:t(s.password)})]})};T.propTypes={values:S.shape({password:S.string}).isRequired};const ae=c.div`
  height: ${({theme:s})=>s.spacing(.5)};
  background-color: ${s=>s.$passwordsMatch?"green":"red"};
  transition: all 0.4s ease-out;
`,k=({passwordsMatch:s,values:{confirmPassword:i}})=>{const n=s?"87%":"50%";return i&&e.jsx(ae,{$passwordsMatch:s,style:{width:n}})};k.propTypes={passwordsMatch:S.bool.isRequired};c($)`
  padding: 60px 62px;
`;const re=c.div`
  display: flex;
  gap: ${({theme:s})=>s.spacing(3.5)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({theme:s})=>s.spacing(10)};
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: ${({theme:s})=>s.spacing(8)};
    margin-bottom: ${({theme:s})=>s.spacing(13)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${({theme:s})=>s.spacing(10)};
  }
`,oe=q().shape({name:m().required("required field").matches(A,"the name must contain only letters").min(2,"the name must contain a minimum of 2 characters").max(16,"the name must contain a maximum of 16 characters"),email:m().matches(R,"Please enter a valid email address").required("required field"),password:m().required("required field").min(6,"Password must contain at least 6 characters").max(12,"maximum 12 characters possible").matches(I,"Minimum 1 uppercase letter, 1 lowercase letter and 1 number"),confirmPassword:m().oneOf([L("password"),null],"Passwords must match").required("Confirm Password is required")}),ne=()=>{const{showPasswords:s,togglePasswordVisibility:i}=H(["password1","password2"]),n=B(),t=v(),d={name:"",email:"",password:"",confirmPassword:""},l=(a,{resetForm:P})=>{const{name:f,email:r,password:o}=a;n(V({name:f.trim(),email:r.trim(),password:o.trim()})).unwrap().then(()=>{n(E({email:r.trim(),password:o.trim()})).unwrap().then(()=>{n(D(!0)),t("/user")}).catch(j=>{b.error(j)})}).catch(j=>{b.error(j)}),P()};return e.jsxs($,{children:[e.jsx(Z,{text:"Registration"}),e.jsx(M,{initialValues:d,validationSchema:oe,onSubmit:l,children:({values:a,handleChange:P,handleBlur:f,touched:r,errors:o})=>e.jsxs(J,{autoComplete:"off",children:[e.jsxs(re,{children:[e.jsxs(h,{children:[e.jsx(p,{type:"text",name:"name",placeholder:"Name",autoComplete:"off",required:!0,className:x(r.name,o.name)}),e.jsx(w,{touched:r.name,error:o.name}),e.jsx(u,{children:e.jsx(g,{name:"name",touched:r,errors:o})})]}),e.jsxs(h,{children:[e.jsx(p,{type:"email",name:"email",placeholder:"Email",autoComplete:"off",required:!0,className:x(r.email,o.email)}),e.jsx(w,{touched:r.email,error:o.email}),e.jsx(u,{children:e.jsx(g,{name:"email",touched:r,errors:o})})]}),e.jsxs(h,{children:[e.jsxs(F,{children:[e.jsx(p,{type:s.password1?"text":"password",name:"password",title:"Enter the password more difficult, letter, digit, capital letter.",placeholder:"Password",required:!0,value:a.password,onChange:P,onBlur:f,autoComplete:"off",className:x(r.password,o.password)}),e.jsx(w,{touched:r.password,error:o.password,right:"52px"}),e.jsx(y,{showPassword:s.password1,onToggle:()=>i("password1")})]}),e.jsxs(u,{children:[e.jsx(T,{values:a}),e.jsx(g,{name:"password",touched:r,errors:o})]})]}),e.jsxs(h,{children:[e.jsxs(F,{children:[e.jsx(p,{type:s.password2?"text":"password",name:"confirmPassword",title:"Enter the password more difficult, letter, digit, capital letter.",placeholder:"Confirm Password",autoComplete:"off",required:!0,className:x(r.confirmPassword,o.confirmPassword)}),e.jsx(w,{touched:r.confirmPassword,error:o.confirmPassword,right:"52px"}),e.jsx(y,{showPassword:s.password2,onToggle:()=>i("password2")})]}),e.jsxs(u,{children:[e.jsx(k,{values:a,passwordsMatch:a.password===a.confirmPassword&&a.confirmPassword!==""}),e.jsx(g,{name:"confirmPassword"})]})]})]}),e.jsxs(K,{children:[e.jsx(N,{type:"submit",text:"Registration",variant:"authButton"}),e.jsx(U,{text:"Already have an account?  ",linkText:"Login",linkTo:"/login"})]}),e.jsx(X,{})]})})]})},ce=()=>{const s=G(z);return e.jsx(e.Fragment,{children:s?e.jsx(O,{}):e.jsx(Q,{children:e.jsx(Y,{children:e.jsx(ne,{})})})})};export{ce as default};
