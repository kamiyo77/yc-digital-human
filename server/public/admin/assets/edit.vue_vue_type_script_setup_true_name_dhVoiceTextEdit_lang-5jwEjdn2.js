import{y as u,d as g,s as h,i as C,c as q,j as x,o as F,a as I,m as n,w as i,e as l,E as U,L as j}from"./index-CCrR8gz-.js";import{E as B,a as L}from"./el-form-DkAfNPH3.js";import"./el-form-item-l0sNRNKZ.js";import{P as N}from"./index-DHgbyyKv.js";function M(o){return u.get({url:"/digitalhuman.dh_voice_text/lists",params:o})}function P(o){return u.post({url:"/digitalhuman.dh_voice_text/add",params:o})}function A(o){return u.post({url:"/digitalhuman.dh_voice_text/edit",params:o})}function Q(o){return u.post({url:"/digitalhuman.dh_voice_text/delete",params:o})}function O(o){return u.get({url:"/digitalhuman.dh_voice_text/detail",params:o})}const S={class:"edit-popup"},z=g({name:"dhVoiceTextEdit"}),W=g({...z,props:{dictData:{type:Object,default:()=>({})}},emits:["success","close"],setup(o,{expose:V,emit:b}){const m=b,_=h(),d=h(),c=C("add"),v=q(()=>c.value=="edit"?"编辑文本":"新增文本"),a=x({id:"",name:"",content:"",sort:""}),D=x({name:[{required:!0,message:"请输入",trigger:["blur"]}],content:[{required:!0,message:"请输入",trigger:["blur"]}],sort:[{required:!0,message:"请输入",trigger:["blur"]}]}),f=async t=>{for(const e in a)t[e]!=null&&t[e]!=null&&(a[e]=t[e])},y=async t=>{const e=await O({id:t.id});f(e)},w=async()=>{var e,r;await((e=_.value)==null?void 0:e.validate());const t={...a};c.value=="edit"?await A(t):await P(t),(r=d.value)==null||r.close(),m("success")},E=(t="add")=>{var e;c.value=t,(e=d.value)==null||e.open()},T=()=>{m("close")};return V({open:E,setFormData:f,getDetail:y}),(t,e)=>{const r=U,p=B,R=j,k=L;return F(),I("div",S,[n(N,{ref_key:"popupRef",ref:d,title:l(v),async:!0,width:"550px",onConfirm:w,onClose:T},{default:i(()=>[n(k,{ref_key:"formRef",ref:_,model:l(a),"label-width":"90px",rules:l(D)},{default:i(()=>[n(p,{label:"标题",prop:"name"},{default:i(()=>[n(r,{modelValue:l(a).name,"onUpdate:modelValue":e[0]||(e[0]=s=>l(a).name=s),clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),n(p,{label:"文本内容",prop:"content"},{default:i(()=>[n(r,{modelValue:l(a).content,"onUpdate:modelValue":e[1]||(e[1]=s=>l(a).content=s),type:"textarea",clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),n(p,{label:"排序",prop:"sort"},{default:i(()=>[n(R,{modelValue:l(a).sort,"onUpdate:modelValue":e[2]||(e[2]=s=>l(a).sort=s),clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{W as _,Q as a,M as b};
