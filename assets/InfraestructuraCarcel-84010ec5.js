import{a as h,_ as b}from"./CHeaderBar-cd568836.js";import{_ as x,a as o}from"./CCard-e0000d14.js";import{_ as i}from"./CColunmChart-2b1cd821.js";import{h as g,r as e,o as k,d as q,w as s,b as a,a as t}from"./index-72ab008f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./highcharts-more-f167c5a2.js";const P={class:"infraestructura-section"},y=t("span",{class:"card-title"},"Preguntas",-1),A=t("span",{class:"question--value"},"2.1 Aquí recibo una buena cantidad de comida",-1),O=t("span",{class:"question--value"},"2.2 Cuento con un baño (wáter) decente ",-1),C=t("span",{class:"question--value"},"2.3 Duermo en un lugar limpio ",-1),T=t("span",{class:"question--value"},"2.4 En mi módulo hay una temperatura adecuada (ni mucho frío ni mucho calor) ",-1),F=t("span",{class:"question--value"},"2.5 Recibo comida en buen estado ",-1),X=t("span",{class:"question--value"},"2.6 Recibo luz natural en mi celda o módulo ",-1),Y=t("span",{class:"question--value"},"2.7 Mi celda tiene buena ventilación ",-1),I={class:"chart-section"},S=t("span",{class:"card-title"},"Promedio respuestas Infrastructura de la carcel",-1),$=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),w={class:"chart-section"},z=t("span",{class:"card-title"},"Respuestas por stack Infrastructura de la carcel",-1),L=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elitquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),W=g({__name:"InfraestructuraCarcel",setup(M){const n=e("Calidad de vida de los internos / Infrastructura carcel"),r=e({categories:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"],crosshair:!1}),c=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),l=e({column:{pointPadding:.2,borderWidth:3}}),u=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=e([{name:"Penitenciaría 1",data:[49.9,71.5,25.4,89.2,100,76,35.6]},{name:"Penitenciaría 2",data:[83.6,78.8,98.5,93.4,26,84.5,88]},{name:"Penitenciaría 3",data:[48.9,38.8,39.3,41.4,47,48.3,59]}]),p=e({categories:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"],crosshair:!1}),m=e({min:0,title:{text:"Respuestas por categoría"}}),_=e({column:{stacking:"normal"}}),f=e({headerFormat:'<span style="font-size:10px">{point.x} ({series.userOptions.stack}): {point.stackTotal} </span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr></b>',footerFormat:'</table> <span style="font-size:10px">Total: {point.stackTotal}  </span>',useHTML:!0}),v=e([{name:"Siempre",data:[12,9,25,42,80,7,35],stack:"Penitenciaría 1"},{name:"Siempre",data:[8,78,58,43,26,74,45],stack:"Penitenciaría 2"},{name:"Siempre",data:[48,38,39,41,47,48,59],stack:"Penitenciaría 3"},{name:"Casi siempre",data:[12,9,25,42,80,7,35],stack:"Penitenciaría 1"},{name:"Casi siempre",data:[8,78,58,43,26,74,45],stack:"Penitenciaría 2"},{name:"Casi siempre",data:[48,38,39,41,47,48,59],stack:"Penitenciaría 3"}]);return(R,B)=>(k(),q(b,null,{default:s(()=>[a(h,{title:n.value,subMenuActive:""},null,8,["title"]),a(x),t("div",P,[a(o,{class:"card-preguntas"},{default:s(()=>[y,A,O,C,T,F,X,Y]),_:1}),t("div",I,[a(o,{class:"card-information"},{default:s(()=>[S,$]),_:1}),a(i,{optionsAxisX:r.value,optionsAxisY:c.value,plotOptions:l.value,tooltip:u.value,series:d.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),t("div",w,[a(o,{class:"card-information"},{default:s(()=>[z,L]),_:1}),a(i,{optionsAxisX:p.value,optionsAxisY:m.value,plotOptions:_.value,tooltip:f.value,series:v.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])])])]),_:1}))}});export{W as default};
