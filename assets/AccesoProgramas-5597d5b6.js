import{_ as p,a as u}from"./CHeaderBar-ccedc968.js";import{_,a as t}from"./CCard-ce7cc40b.js";import{_ as m}from"./CColunmChart-8589a74a.js";import{r as s,o as h,d as f,w as o,b as e,a}from"./index-67a02a72.js";import"./CSearch-e5d6f5a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./highcharts-more-b018b820.js";const v={class:"acceso-programas"},g={class:"chart-section"},q=a("span",{class:"card-title"},"Promedio respuestas acceso a programas",-1),A=a("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),b=a("span",{class:"card-title"},"Preguntas",-1),x=a("span",{class:"question--value"},"3.1 Aquí he podido trabajar y ganar algo de plata",-1),P=a("span",{class:"question--value"},"3.2 En esta cárcel he recibido capacitación laboral ",-1),y=a("span",{class:"question--value"},"3.3 Aquí he podido hablar con asistente social",-1),$=a("span",{class:"question--value"},"3.4 Aquí he podido conversar con la psicóloga",-1),k=a("span",{class:"question--value"},"3.5 Aquí puedo ir donde el paramédico si lo necesito",-1),w=a("span",{class:"question--value"},"3.6 En esta cárcel he podido ir a la escuela o liceo penal",-1),B=a("span",{class:"question--value"},"3.7 Aquí se puede ir a talleres de alcohol o drogas si se necesita",-1),V={__name:"AccesoProgramas",setup(E){const i=s("Calidad de vida de los internos / Acceso a programas"),n=s({categories:["3.1","3.2","3.3","3.4","3.5","3.6","3.7"],crosshair:!1}),c=s({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),l=s({column:{pointPadding:.2,borderWidth:3}}),r=s({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=s([{name:"Penitenciaría 1",data:[23.9,23.5,25.4,89.2,43,3,35.6]},{name:"Penitenciaría 2",data:[83.6,2.8,21.5,93.4,2,43.5,88]},{name:"Penitenciaría 3",data:[48.9,38.8,39.3,32.4,47,34.3,54]}]);return(F,X)=>(h(),f(p,null,{default:o(()=>[e(u,{title:i.value,subMenuActive:""},null,8,["title"]),e(_),a("div",v,[a("div",g,[e(t,{class:"card-information"},{default:o(()=>[q,A]),_:1}),e(m,{optionsAxisX:n.value,optionsAxisY:c.value,plotOptions:l.value,tooltip:r.value,series:d.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),e(t,{class:"card-preguntas"},{default:o(()=>[b,x,P,y,$,k,w,B]),_:1})])]),_:1}))}};export{V as default};
