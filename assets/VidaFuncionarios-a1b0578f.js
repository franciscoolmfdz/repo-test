import{r as n,d as S,o as V,f as I,w as l,_ as $,b as t,a as f,s as A,j as H,m as k}from"./index-af54f42b.js";import{_ as M}from"./CHeaderBar-5e3101d4.js";import{d as J,_ as O,a as T,b as B}from"./dimensiones-0bcec69c.js";import{s as P,f as u,D as R,_ as U,a as g,b as E}from"./files-62bb96e2.js";import{_ as j}from"./CTable-10aae1cf.js";import{c as q,d as w}from"./dimensionHistory-a722060f.js";import"./api-7944baea.js";const L=f("i",{class:"large material-icons"},"arrow_upward",-1),z={class:"content-document__section"},m=2,G=1,oe={__name:"VidaFuncionarios",setup(K){const p=P(),D=n("Calidad de vida de los funcionarios"),i=n(!1),_=n(p.documentData),b=n([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),F=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],h=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const o={download:!0},s=await u.getFiles(e,o);window.open(s,"_blank")}else a.actionName==="borrar"&&(await u.deleteFiles(e),await w.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},v=n(),r=n(null),c=n(null),N=()=>{},x=async()=>{i.value=!0;try{if(r.value&&c.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=B(a,m,c.value),o=new FormData;o.append("archivo",r.value.fileElement),o.append("categoryId",m),o.append("usrId",G),o.append("extendedData",JSON.stringify({period:c.value}));const s={ignoreHeader:!0},d=await u.postFiles(o,s);d!=null&&d.id&&(e.fileId=d.id,await w.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},C=()=>{v.value.open()},y=async()=>{let a=await u.getFiles({categoryId:m});a=a.map(e=>{var s;e.actions=F();let o=R.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=o,e.period=(s=e==null?void 0:e.extendedData)==null?void 0:s.period,e}),_.value=a};return S(async()=>{await y();const a=await q.getCarceles(),e=await J.getDimensiones({categoryId:m});p.mountParameters(e,a)}),(a,e)=>(V(),I($,null,{default:l(()=>[t(O,{"active-spin":i.value},null,8,["active-spin"]),t(M,{title:D.value},null,8,["title"]),f("button",{onClick:C,class:"btn agregar__archivo"},[A("Agregar registro "),L]),t(E,{ref_key:"modalForm",ref:v,title:"Subir documento",onClose:N,onSubmit:x},{default:l(()=>[t(U,{title:""},{default:l(()=>[t(g,{title:"Archivo"},{default:l(()=>[t(T,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value=o)},null,8,["modelValue"])]),_:1}),t(g,{title:"Periodo",class:"c-periodo"},{default:l(()=>[H(f("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=o=>c.value=o)},null,512),[[k,c.value]])]),_:1})]),_:1})]),_:1},512),f("div",z,[t(j,{columns:b.value,rows:_.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])])]),_:1}))}};export{oe as default};
