import{d as q,c as V,o as v,a as w,m as e,w as t,b as a,p as h,e as m,Y as A,t as y,G,F as J,I as x,q as L,E as M,J as O,v as R}from"./index-CCrR8gz-.js";import{E as Y,a as H}from"./el-form-DkAfNPH3.js";import{_ as K}from"./index-CqfWg3vM.js";import{_ as Q}from"./picker-ciopFYgI.js";import{D as W,_ as X}from"./picker-QZ-1jHxh.js";import"./el-form-item-l0sNRNKZ.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-CHUxIMFD.js";import{E as ee}from"./el-card-D8ZdqwP3.js";const le={class:"mb-[18px] max-w-[400px]"},oe={class:"bg-fill-light w-full p-4 mt-4"},te={class:"upload-btn w-[60px] h-[60px]"},ae={class:"upload-btn w-[60px] h-[60px]"},se={class:"flex-1 flex items-center"},ne={class:"drag-move cursor-move ml-auto"},de={key:0,class:"mt-4"},c=5,p=2,xe=q({__name:"attr",props:{modelValue:{type:Object,default:()=>({list:[],style:{}})}},emits:["update:modelValue"],setup(k,{emit:E}){const U=k,C=E,n=V({get(){return U.modelValue},set(s){C("update:modelValue",s)}}),$=V(()=>{var s;return((s=n.value.list)==null?void 0:s.filter(l=>l.is_show=="1"))||[]}),z=()=>{var s;((s=n.value.list)==null?void 0:s.length)<c?n.value.list.push({name:"",selected:"",unselected:"",is_show:1,link:{}}):x.msgError(`最多添加${c}个`)},B=s=>{var l;if(((l=n.value.list)==null?void 0:l.length)<=p)return x.msgError(`最少保留${p}个`);n.value.list.splice(s,1)},D=s=>s.relatedContext.index!=0,F=s=>{if($.value.length<p)return s.is_show=1,x.msgError(`最少显示${p}个`)};return(s,l)=>{const _=ee,b=Z,i=Y,f=L,g=X,N=M,I=Q,S=O,P=K,T=R,j=H;return v(),w(J,null,[e(_,{shadow:"never",class:"!border-none flex"},{default:t(()=>l[3]||(l[3]=[a("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2 text-xl font-medium"},[h(" 底部导航设置 "),a("span",{class:"form-tips ml-[10px] !mt-0"}," 至少添加2个导航，最多添加5个导航 ")],-1)])),_:1}),e(j,{"label-width":"70px"},{default:t(()=>[e(_,{shadow:"never",class:"!border-none flex mt-2"},{default:t(()=>[l[4]||(l[4]=a("div",{class:"flex items-end mb-4"},[a("div",{class:"text-base text-[#101010] font-medium"},"展示样式")],-1)),e(i,{label:"默认颜色"},{default:t(()=>[e(b,{class:"max-w-[400px]",modelValue:m(n).style.default_color,"onUpdate:modelValue":l[0]||(l[0]=r=>m(n).style.default_color=r),"default-color":"#999999"},null,8,["modelValue"])]),_:1}),e(i,{label:"选中颜色",style:{"margin-bottom":"0"}},{default:t(()=>[e(b,{class:"max-w-[400px]",modelValue:m(n).style.selected_color,"onUpdate:modelValue":l[1]||(l[1]=r=>m(n).style.selected_color=r),"default-color":"#4173ff"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{shadow:"never",class:"!border-none flex mt-2"},{default:t(()=>{var r;return[l[7]||(l[7]=a("div",{class:"flex items-end mb-4"},[a("div",{class:"text-base text-[#101010] font-medium"},"菜单设置"),a("div",{class:"text-xs text-tx-secondary ml-2"},"建议图片尺寸：100px*100px")],-1)),a("div",le,[e(m(W),{class:"draggable",modelValue:m(n).list,"onUpdate:modelValue":l[2]||(l[2]=o=>m(n).list=o),animation:"300",draggable:".draggable",handle:".drag-move",move:D,"item-key":"index"},{item:t(({element:o,index:u})=>[e(P,{onClose:d=>B(u),class:A(["max-w-[400px]",{draggable:u!=0}]),"show-close":u!==0},{default:t(()=>[a("div",oe,[e(i,{label:"导航图标"},{default:t(()=>[e(g,{modelValue:o.unselected,"onUpdate:modelValue":d=>o.unselected=d,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:t(()=>[a("div",te,[e(f,{name:"el-icon-Plus",size:16}),l[5]||(l[5]=a("span",{class:"text-xs leading-5"}," 未选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(g,{modelValue:o.selected,"onUpdate:modelValue":d=>o.selected=d,"exclude-domain":"","upload-class":"bg-body",size:"60px"},{upload:t(()=>[a("div",ae,[e(f,{name:"el-icon-Plus",size:16}),l[6]||(l[6]=a("span",{class:"text-xs leading-5"}," 选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"导航名称"},{default:t(()=>[e(N,{modelValue:o.name,"onUpdate:modelValue":d=>o.name=d,placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"链接地址"},{default:t(()=>[e(I,{"is-tab":!0,disabled:u===0,modelValue:o.link,"onUpdate:modelValue":d=>o.link=d},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"是否显示"},{default:t(()=>[a("div",se,[e(S,{disabled:u==0,modelValue:o.is_show,"onUpdate:modelValue":d=>o.is_show=d,"active-value":1,"inactive-value":0,onChange:d=>F(o)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"]),a("div",ne,[e(f,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])]),_:2},1032,["onClose","show-close","class"])]),_:1},8,["modelValue"])]),((r=m(n).list)==null?void 0:r.length)<c?(v(),w("div",de,[e(T,{class:"w-full",type:"primary",onClick:z},{default:t(()=>{var o;return[h(" 添加导航 "+y((o=m(n).list)==null?void 0:o.length)+" / "+y(c),1)]}),_:1})])):G("",!0)]}),_:1})]),_:1})],64)}}});export{xe as _};
