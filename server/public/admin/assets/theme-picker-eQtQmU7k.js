import{d as m,eN as x,o as a,a as t,F as _,r as h,Y as f,e as n,b as r,aq as g,t as k,x as v}from"./index-CCrR8gz-.js";const C={class:"flex flex-wrap"},y=["onClick"],V={class:"ml-[14px]"},b=m({__name:"theme-picker",props:{themeColors:{},modelValue:{}},emits:["update:modelValue","change"],setup(c,{emit:d}){const p=c,l=d,o=x(p,"modelValue",l),i=s=>{o.value=s.id,l("change",s)};return(s,w)=>(a(),t("div",C,[(a(!0),t(_,null,h(s.themeColors,(e,u)=>(a(),t("div",{class:f(["py-[18px] px-[20px] flex items-center text-[14px] shadow rounded-lg mr-[20px] mb-[20px] cursor-pointer",{"is-select":n(o)==e.id,unselect:n(o)!=e.id}]),key:u,onClick:B=>i(e)},[r("div",{class:"rounded-full h-[34px] w-[34px]",style:g(`background: linear-gradient(to right, ${e.color1}, ${e.color2})`)},null,4),r("div",V,k(e.name),1)],10,y))),128))]))}}),$=v(b,[["__scopeId","data-v-cdbe1703"]]);export{$ as default};
