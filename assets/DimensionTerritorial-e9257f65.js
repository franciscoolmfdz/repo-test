import{s as $,f as c,D as h,_ as x,a as I,b as V}from"./files-b73964fa.js";import{r as t,d as k,q as A,o as _,e as f,w as r,_ as S,b as o,a as l,s as T,K as M}from"./index-cc1eb3c0.js";import{_ as B}from"./CHeaderBar-aa2eeb2f.js";import{_ as H}from"./CFileManagement-6be98488.js";import{_ as q}from"./CTable-29b3c2c4.js";import"./api-7944baea.js";const K=l("i",{class:"large material-icons"},"arrow_upward",-1),O={class:"content-document__section"},p=6,G={__name:"DimensionTerritorial",setup(R){const v=t("Dimensión territorial"),g=t(1),m=t(),i=t(null),w=t([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=$(),u=t(y.documentData),b=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],D=()=>{},C=async()=>{const e=new FormData;e.append("archivo",i.value),e.append("categoryId",p),e.append("usrId",g),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await c.postFiles(e,a),await d()},N=()=>{m.value.open()},F=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},n={download:!0},s=await c.getFiles(a,n);window.open(s,"_blank")}else e.actionName},d=async()=>{let e=await c.getFiles({categoryId:p});e=e.map(a=>{let n=h.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=n,a.actions=b(),a}),u.value=e};return k(async()=>{await d()}),(e,a)=>{const n=A("router-view");return _(),f(S,null,{default:r(()=>[o(B,{title:v.value},null,8,["title"]),l("button",{onClick:N,class:"btn agregar__archivo"},[T("Agregar registro "),K]),o(V,{ref_key:"modalForm",ref:m,title:"Subir documento",onClose:D,onSubmit:a[1]||(a[1]=s=>C())},{default:r(()=>[o(x,null,{default:r(()=>[o(I,null,{default:r(()=>[o(H,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",O,[o(n,null,{default:r(({Component:s})=>[(_(),f(M,null,[o(q,{columns:w.value,rows:u.value,"actions-active":"",onExecuteActionlist:F},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
