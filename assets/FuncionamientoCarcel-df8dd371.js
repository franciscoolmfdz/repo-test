import{a as d,_}from"./CHeaderBar-ccedc968.js";import{_ as p,a as o}from"./CCard-ce7cc40b.js";import{_ as m}from"./CColunmChart-8589a74a.js";import{e as f,r as e,o as v,d as h,w as t,b as a,a as s}from"./index-67a02a72.js";import"./CSearch-e5d6f5a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./highcharts-more-b018b820.js";const q={class:"funcionamiento-carcel"},g={class:"chart-section"},b=s("span",{class:"card-title"},"Promedio respuestas funcionamiento de la carcel",-1),x=s("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),y=s("span",{class:"card-title"},"Preguntas",-1),A=s("span",{class:"question--value"},"7.1 Mi vida en esta cárcel es aburrida ",-1),P=s("span",{class:"question--value"},"7.2 En esta cárcel he sufrido mucho ",-1),F=s("span",{class:"question--value"},"7.3 En este lugar he pensado en el suicidio ",-1),C=s("span",{class:"question--value"},"7.4 Hay mucho consumo de drogas en esta cárcel ",-1),E=s("span",{class:"question--value"},"7.5 Acá te mandan al castigo por cualquier cosa ",-1),$=s("span",{class:"question--value"},"7.6 Siento que esta cárcel funciona bien ",-1),k=s("span",{class:"question--value"},"7.7 El ambiente de esta cárcel es es tenso ",-1),w=s("span",{class:"question--value"},"7.8 En esta cárcel las cosas se mueven con plata ",-1),B=s("span",{class:"question--value"},"7.9 Los gendarmes son justos en su trato con nosotros aquí ",-1),L=s("span",{class:"question--value"},"7.10 Aquí tratan bien a las visitas ",-1),z=f({__name:"FuncionamientoCarcel",setup(M){const n=e("Calidad de vida de los internos / Funcionamiento de la carcel"),i=e({categories:["7.1","7.2","7.3","7.4","7.5","7.6","7.7","8.7","9.7","10.7"],crosshair:!1}),c=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),l=e({column:{pointPadding:.2,borderWidth:3}}),r=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),u=e([{name:"Penitenciaría 1",data:[14.9,23.5,25.4,32.2,43,3,35.6,2,32,21]},{name:"Penitenciaría 2",data:[56.6,2.8,21.5,32.4,2,16.5,63,64,2,53]},{name:"Penitenciaría 3",data:[23.9,38.8,47.3,32.4,12,34.3,54,9,5,6]}]);return(X,Y)=>(v(),h(_,null,{default:t(()=>[a(d,{title:n.value,subMenuActive:""},null,8,["title"]),a(p),s("div",q,[s("div",g,[a(o,{class:"card-information"},{default:t(()=>[b,x]),_:1}),a(m,{optionsAxisX:i.value,optionsAxisY:c.value,plotOptions:l.value,tooltip:r.value,series:u.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),a(o,{class:"card-preguntas"},{default:t(()=>[y,A,P,F,C,E,$,k,w,B,L]),_:1})])]),_:1}))}});export{z as default};
