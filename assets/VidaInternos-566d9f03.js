import{o as x,c as O,a as _,b as d,u as U,V as q,r as l,d as S,e as w,f as $,w as h,_ as k}from"./index-af54f42b.js";import{_ as D}from"./CHeaderBar-5e3101d4.js";import{u as F,_ as H,a as V}from"./CCard-ecc4dd49.js";import{e as j,H as g,a as X}from"./exporting-282e35a5.js";import{g as Y}from"./dimensionHistory-a722060f.js";import"./api-7944baea.js";const B={class:"chart-polar"},L={class:"chart-polar__content"},M={__name:"CPolarChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(m){const s=m;j(g),X(g);const i={chart:{polar:!0},title:{text:s.title},subtitle:{text:s.subtitle},pane:{startAngle:0,endAngle:360},xAxis:s.optionsAxisX,yAxis:s.optionsAxisY,plotOptions:s.plotOptions,tooltip:s.tooltip,series:s.series};return(v,f)=>(x(),O("div",B,[_("div",L,[d(U(q),{type:"chart",options:i,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0})])]))}};const E={class:"chart-section"},N=_("span",{class:"card-title"},"Grafico calidad de vida de los internos",-1),T=_("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),b=1,Q={__name:"VidaInternos",setup(m){const s=l(!1),i=F(),v=l("Calidad de vida de los internos"),f=l({tickInterval:1,min:2,max:9,labels:{format:"{value}"}}),I=l({min:0}),C=l({series:{pointStart:0,pointInterval:1},column:{pointPadding:0,groupPadding:0}}),P=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=l([{type:"line",name:"C.C.P. DE COLINA I",data:[],pointPlacement:"between",dataLabels:{enabled:!0,color:"black",align:"center",y:0,style:{inside:!0,fontSize:"15px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),a=u=>u>0?Math.round(u*100)/100:0,y=async()=>{var u;try{s.value=!0;const c=((u=i==null?void 0:i.penitenciaria)==null?void 0:u.id)??null,p=i.historyId;if(p&&c){const A={historyId:p.value,carcelId:c,categoryId:1};r.value[0].data=[];let n=await Y(A);r.value[0].name=i.penitenciaria.description;let e=n.filter(t=>t.subCategoryId===2&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0);e=e/7,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===3&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/7,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===3&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/7,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===4&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/7,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===5&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/7,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===6&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/7,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===7&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/10,e=a(e),r.value[0].data.push(a(e)),e=n.filter(t=>t.subCategoryId===8&&t.valueUsed===1).reduce((t,o)=>t+o.promPound,0),e=e/2,e=a(e),r.value[0].data.push(a(e))}}catch(c){console.log(c)}finally{s.value=!1}};return S(async()=>{await y()}),(u,c)=>{const p=w("c-spinner");return x(),$(k,null,{default:h(()=>[d(D,{title:v.value,"section-value":b},null,8,["title"]),d(p,{"active-spin":s.value},null,8,["active-spin"]),d(H,{baseFilter:b,onExecuteAction:y}),_("div",E,[d(V,{class:"card-information"},{default:h(()=>[N,T]),_:1}),d(M,{optionsAxisX:f.value,optionsAxisY:I.value,plotOptions:C.value,tooltip:P.value,series:r.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])])]),_:1})}}};export{Q as default};
