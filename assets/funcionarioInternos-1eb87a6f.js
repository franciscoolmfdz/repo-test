import{r as o,d as b,o as I,f as F,w as l,_ as w,b as i,a as t}from"./index-af54f42b.js";import{_ as P}from"./CHeaderBar-5e3101d4.js";import{u as q,_ as A,a as p}from"./CCard-ecc4dd49.js";import{_ as $}from"./CColunmChart-fd6c9b97.js";import{g as C}from"./dimensionHistory-a722060f.js";import"./exporting-282e35a5.js";import"./api-7944baea.js";const D={class:"regimen-carcel"},S={class:"chart-section"},k=t("span",{class:"card-title"},"Frecuencia respuestas respeto y relación con los internos",-1),B=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),E=t("span",{class:"card-title"},"Preguntas",-1),L=t("span",{class:"question--value"},"fp31 En general, me preocupo por los internos/as",-1),M=t("span",{class:"question--value"},"fp32 Creo que el tema carcelario tiene raíces sociales",-1),u=2,V={__name:"funcionarioInternos",setup(O){const s=q(),_=o("Calidad de vida de los funcionarios / Respeto y relación con los internos"),f=o({categories:["fp31","fp32"],crosshair:!1}),m=o({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),h=o({column:{pointPadding:.2,borderWidth:3}}),y=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=o([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),c=async()=>{var r;try{const n=((r=s==null?void 0:s.penitenciaria)==null?void 0:r.id)??null,d=s.historyId;if(d&&n){let v=await C({historyId:d,carcelId:n,categoryId:2,subCategoryId:18});a.value[0].name=s.penitenciaria.description;let g=v.filter(e=>e.poundUsed===1);a.value[0].data=[],g.map(e=>{const x=e!=null&&e.promPound?Math.round((e==null?void 0:e.promPound)*100)/100:0;a.value[0].data.push(x)})}else a.value[0].data=[]}catch(n){console.log(n)}};return b(async()=>{await c()}),(r,n)=>(I(),F(w,null,{default:l(()=>[i(P,{title:_.value,"section-value":u},null,8,["title"]),i(A,{baseFilter:u,onExecuteAction:c}),t("div",D,[t("div",S,[i(p,{class:"card-information"},{default:l(()=>[k,B]),_:1}),i($,{optionsAxisX:f.value,optionsAxisY:m.value,plotOptions:h.value,tooltip:y.value,series:a.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),i(p,{class:"card-preguntas"},{default:l(()=>[E,L,M]),_:1})])]),_:1}))}};export{V as default};
