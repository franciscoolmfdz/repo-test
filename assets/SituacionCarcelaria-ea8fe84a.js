import{s as F,f as i,D as $,_ as h,a as x,b as S}from"./files-b73964fa.js";import{r as s,d as I,q as V,o as _,e as f,w as r,_ as k,b as o,a as l,s as A,K as M}from"./index-cc1eb3c0.js";import{_ as B}from"./CHeaderBar-aa2eeb2f.js";import{_ as H}from"./CFileManagement-6be98488.js";import{_ as T}from"./CTable-29b3c2c4.js";import"./api-7944baea.js";const q=l("i",{class:"large material-icons"},"arrow_upward",-1),E={class:"content-document__section"},p=3,K=1,G={__name:"SituacionCarcelaria",setup(O){const v=s("Estado situación carcelaria"),u=s(),c=s(null),g=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=F(),m=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",K),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{u.value.open()},N=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=$.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),m.value=e};return I(async()=>{await d()}),(e,a)=>{const t=V("router-view");return _(),f(k,null,{default:r(()=>[o(B,{title:v.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[A("Agregar registro "),q]),o(S,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o(h,null,{default:r(()=>[o(x,null,{default:r(()=>[o(H,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",E,[o(t,null,{default:r(({Component:n})=>[(_(),f(M,null,[o(T,{columns:g.value,rows:m.value,"actions-active":"",onExecuteActionlist:N},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
