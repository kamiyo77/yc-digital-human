import{ar as R,ew as d,ex as f,c8 as s,a6 as U,d as m,c as n,al as D,i as T,e as p,aJ as $,o as u,C as V,w as c,a as O,Y as H,t as v,G as b,U as h,p as I,bk as L,bD as z,ap as F,ey as G,aw as J}from"./index-CCrR8gz-.js";const K=R({trigger:d.trigger,placement:f.placement,disabled:d.disabled,visible:s.visible,transition:s.transition,popperOptions:f.popperOptions,tabindex:f.tabindex,content:s.content,popperStyle:s.popperStyle,popperClass:s.popperClass,enterable:{...s.enterable,default:!0},effect:{...s.effect,default:"light"},teleported:s.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Y={"update:visible":t=>U(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},j="onUpdate:visible",q=m({name:"ElPopover"}),M=m({...q,props:K,emits:Y,setup(t,{expose:r,emit:a}){const o=t,g=n(()=>o[j]),i=D("popover"),l=T(),y=n(()=>{var e;return(e=p(l))==null?void 0:e.popperRef}),C=n(()=>[{width:$(o.width)},o.popperStyle]),P=n(()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}]),E=n(()=>o.transition===`${i.namespace.value}-fade-in-linear`),S=()=>{var e;(e=l.value)==null||e.hide()},k=()=>{a("before-enter")},B=()=>{a("before-leave")},N=()=>{a("after-enter")},A=()=>{a("update:visible",!1),a("after-leave")};return r({popperRef:y,hide:S}),(e,_)=>(u(),V(p(z),L({ref_key:"tooltipRef",ref:l},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(P),"popper-style":p(C),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(E),"onUpdate:visible":p(g),onBeforeShow:k,onBeforeHide:B,onShow:N,onHide:A}),{content:c(()=>[e.title?(u(),O("div",{key:0,class:H(p(i).e("title")),role:"title"},v(e.title),3)):b("v-if",!0),h(e.$slots,"default",{},()=>[I(v(e.content),1)])]),default:c(()=>[e.$slots.reference?h(e.$slots,"reference",{key:0}):b("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Q=F(M,[["__file","popover.vue"]]);const w=(t,r)=>{const a=r.arg||r.value,o=a==null?void 0:a.popperRef;o&&(o.triggerRef=t)};var W={mounted(t,r){w(t,r)},updated(t,r){w(t,r)}};const X="popover",Z=G(W,X),ee=J(Q,{directive:Z});export{ee as E};
