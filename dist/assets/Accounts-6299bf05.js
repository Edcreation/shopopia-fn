import{j as s,L as r,r as l,R as c,a as n,_ as o}from"./index-1216165d.js";const x=e=>{const{text:t}=e;return s.jsx("button",{children:t||"Click Here"})},i=e=>{const{type:t}=e;return s.jsx("input",{type:t||"text"})},a=()=>s.jsx("img",{src:r,alt:"logo"});function _(){return s.jsx("div",{className:"container__loading",children:s.jsx(a,{})})}function j(){return s.jsxs("div",{className:"container__login",children:[s.jsxs("div",{className:"login__title",children:[s.jsx(a,{})," Sign Up"]}),s.jsxs("div",{className:"login__input",children:[s.jsx("label",{htmlFor:"",children:"Email"}),s.jsx(i,{type:"email"})]}),s.jsxs("div",{className:"login__input",children:[s.jsx("label",{htmlFor:"",children:"Username"}),s.jsx(i,{})]}),s.jsxs("div",{className:"login__input",children:[s.jsx("label",{htmlFor:"",children:"Password"}),s.jsx(i,{type:"password"})]}),s.jsx("div",{className:"login__input",children:s.jsx(x,{text:"Sign Up"})})]})}const d=l.lazy(()=>o(()=>import("./Tfa-937b347c.js"),["assets/Tfa-937b347c.js","assets/index-1216165d.js","assets/index-885f4c1e.css","assets/constants-e3bed711.js"])),u=l.lazy(()=>o(()=>import("./Login_Main-8e0d3eec.js"),["assets/Login_Main-8e0d3eec.js","assets/index-1216165d.js","assets/index-885f4c1e.css"]));function p(){return s.jsx("div",{className:"login__container",children:s.jsx(l.Suspense,{fallback:s.jsx(_,{}),children:s.jsxs(c,{children:[s.jsx(n,{path:"/login",element:s.jsx(u,{})}),s.jsx(n,{path:"/signup",element:s.jsx(j,{})}),s.jsx(n,{path:"/tfa",element:s.jsx(d,{})})]})})})}const g=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));export{g as A,x as B,i as I,a as L};