import{_ as v}from"./PageContainer-0b2bc577.js";import{u as b,r as p,o as x,c as V,w as a,a as s,b as o,e as w,bS as E,E as f,g as y}from"./index-03b327db.js";import{_ as U,E as m,a as _}from"./_plugin-vue_export-helper-f78f4bee.js";import{a as F,E as d}from"./index-97b5a597.js";const k={__name:"UserPassword",setup(q){const i=b(),n=p(null),r=p({oldPassword:"",newPassword:"",confirmPassword:""}),g={oldPassword:[{required:!0,message:"请输入原密码",trigger:"blur"},{min:6,max:15,message:"原密码长度应为 6-15 位",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:15,message:"新密码长度应为 6-15 位",trigger:"blur"},{validator:(u,e,l)=>{if(e===r.value.oldPassword)return l(new Error("新密码不能与原密码相同"));l()},trigger:"blur"}],confirmPassword:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{min:6,max:15,message:"确认密码长度应为 6-15 位",trigger:"blur"},{validator:(u,e,l)=>{if(e!==r.value.newPassword)return l(new Error("两次输入的密码不一致"));l()},trigger:"blur"}]},c=()=>{n.value.validate(async u=>{if(u){const e=await E(r.value);f.success(e.message),i.setToken(""),i.setUser({}),y.push("/login")}else return f.error("表单验证失败"),!1})},P=()=>{n.value.resetFields()};return(u,e)=>{const l=v;return x(),V(l,{title:"重置密码"},{default:a(()=>[s(o(F),{ref_key:"formRef",ref:n,model:r.value,rules:g,"label-width":"100px"},{default:a(()=>[s(o(d),{label:"原密码",prop:"oldPassword"},{default:a(()=>[s(o(m),{modelValue:r.value.oldPassword,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value.oldPassword=t),type:"password"},null,8,["modelValue"])]),_:1}),s(o(d),{label:"新密码",prop:"newPassword"},{default:a(()=>[s(o(m),{modelValue:r.value.newPassword,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value.newPassword=t),type:"password"},null,8,["modelValue"])]),_:1}),s(o(d),{label:"确认新密码",prop:"confirmPassword"},{default:a(()=>[s(o(m),{modelValue:r.value.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=t=>r.value.confirmPassword=t),type:"password"},null,8,["modelValue"])]),_:1}),s(o(d),null,{default:a(()=>[s(o(_),{type:"primary",onClick:c},{default:a(()=>[w("修改密码")]),_:1}),s(o(_),{onClick:P},{default:a(()=>[w("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}},N=U(k,[["__scopeId","data-v-3ce985be"]]);export{N as default};
