import{_ as u,a as p}from"./CHeaderBar-ccedc968.js";import{_,a}from"./CCard-ce7cc40b.js";import{_ as m}from"./CColunmChart-8589a74a.js";import{r as o,o as f,d as h,w as t,b as e,a as s}from"./index-67a02a72.js";import"./CSearch-e5d6f5a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./highcharts-more-b018b820.js";const v={class:"trato-funcionarios"},b={class:"chart-section"},q=s("span",{class:"card-title"},"Promedio respuestas de trato con funcionarios",-1),g=s("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),x=s("span",{class:"card-title"},"Preguntas",-1),y=s("span",{class:"question--value"},"5.1 Soy tratado con respeto por los funcionarios",-1),P=s("span",{class:"question--value"},"5.2 He recibido tratos humillantes en esta cárcel",-1),A=s("span",{class:"question--value"},"5.3 Soy tratado como un ser humano en esta cárcel",-1),E=s("span",{class:"question--value"},"5.4 En esta cárcel se abusa de los internos más débiles",-1),F=s("span",{class:"question--value"},"5.5 Me llevo bien con los gendarmes de mi módulo",-1),T=s("span",{class:"question--value"},"5.6 Siento que los funcionarios confían en mí",-1),$=s("span",{class:"question--value"},"5.7 En esta cárcel los funcionarios son honestos",-1),S=s("span",{class:"question--value"},"5.8 En esta cárcel recibo apoyo del personal cuando lo necesito",-1),k=s("span",{class:"question--value"},"5.9 En esta cárcel los gendarmes se preocupan por mí",-1),V={__name:"TratoFuncionarios",setup(w){const n=o("Calidad de vida de los internos / Trato con funcionario interno"),i=o({categories:["5.1","5.2","5.3","5.4","5.5","5.6","5.7"],crosshair:!1}),c=o({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),l=o({column:{pointPadding:.2,borderWidth:3}}),r=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=o([{name:"Penitenciaría 1",data:[23.9,23.5,25.4,89.2,43,3,35.6]},{name:"Penitenciaría 2",data:[83.6,2.8,21.5,93.4,2,43.5,88]},{name:"Penitenciaría 3",data:[48.9,38.8,39.3,32.4,47,34.3,54]}]);return(B,M)=>(f(),h(u,null,{default:t(()=>[e(p,{title:n.value,subMenuActive:""},null,8,["title"]),e(_),s("div",v,[s("div",b,[e(a,{class:"card-information"},{default:t(()=>[q,g]),_:1}),e(m,{optionsAxisX:i.value,optionsAxisY:c.value,plotOptions:l.value,tooltip:r.value,series:d.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),e(a,{class:"card-preguntas"},{default:t(()=>[x,y,P,A,E,F,T,$,S,k]),_:1})])]),_:1}))}};export{V as default};
