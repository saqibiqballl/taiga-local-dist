import{g as M,f as D,k as h,s as m,h as o,_ as l,i as x,r as N,l as z,m as T,n as U,j as n,o as O,p as w,q as A,t as E,b as K,B as $,T as X}from"./index.js";function S(r){return M("MuiLinearProgress",r)}D("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const W=["className","color","value","valueBuffer","variant"];let c=r=>r,L,k,B,_,j,I;const v=4,F=h(L||(L=c`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),G=h(k||(k=c`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),H=h(B||(B=c`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),J=r=>{const{classes:e,variant:a,color:t}=r,g={root:["root",`color${o(t)}`,a],dashed:["dashed",`dashedColor${o(t)}`],bar1:["bar",`barColor${o(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${o(t)}`,a==="buffer"&&`color${o(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return w(g,S,e)},y=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?A(r.palette[e].main,.62):E(r.palette[e].main,.5),Q=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${o(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:y(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),V=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${o(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=y(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},x(_||(_=c`
    animation: ${0} 3s infinite linear;
  `),H)),Y=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${v}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&x(j||(j=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),F)),Z=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:y(e,r.color),transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&x(I||(I=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),G)),rr=N.forwardRef(function(e,a){const t=z({props:e,name:"MuiLinearProgress"}),{className:g,color:R="primary",value:p,valueBuffer:C,variant:s="indeterminate"}=t,q=T(t,W),f=l({},t,{color:R,variant:s}),u=J(f),P=U(),d={},b={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&p!==void 0){d["aria-valuenow"]=Math.round(p),d["aria-valuemin"]=0,d["aria-valuemax"]=100;let i=p-100;P&&(i=-i),b.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&C!==void 0){let i=(C||0)-100;P&&(i=-i),b.bar2.transform=`translateX(${i}%)`}return n.jsxs(Q,l({className:O(u.root,g),ownerState:f,role:"progressbar"},d,{ref:a},q,{children:[s==="buffer"?n.jsx(V,{className:u.dashed,ownerState:f}):null,n.jsx(Y,{className:u.bar1,ownerState:f,style:b.bar1}),s==="determinate"?null:n.jsx(Z,{className:u.bar2,ownerState:f,style:b.bar2})]}))}),er=rr;function tr(){const r=K();return N.useEffect(()=>{r("/")},[]),n.jsxs($,{className:"flex flex-col items-center justify-center h-screen",children:[n.jsx(X,{variant:"h6",children:"Loading..."}),n.jsx($,{sx:{width:"10%"},className:"mt-2",children:n.jsx(er,{sx:{"& .MuiLinearProgress-bar":{bgcolor:"gray"}}})})]})}export{tr as default};
