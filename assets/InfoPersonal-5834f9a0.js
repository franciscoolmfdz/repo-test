import{a as c,_ as l}from"./CHeaderBar-6febc613.js";import{_ as d,a as s}from"./CCard-e138e421.js";import{_ as m}from"./CTable-5b82cbcd.js";import{e as _,r as n,o as u,d as p,w as o,b as a,a as e}from"./index-340de4af.js";import"./CSearch-019443a5.js";/* empty css                                                                */const f={class:"information__section"},v=e("span",{class:"card-title"},"Preguntas",-1),h=e("span",{class:"question--value"},"1.1 ¿Cuántos años tiene actualmente?",-1),C=e("span",{class:"question--value"},"1.2 Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),g=e("span",{class:"question--value"},"1.3 ¿Recuerda el nombre de algún programa o Centro donde estuvo?",-1),w=e("span",{class:"question--value"},"1.4 ¿Hasta qué curso llegó (en la calle)?",-1),R=e("span",{class:"question--value"},"1.5 ¿Es chileno?",-1),b=e("span",{class:"question--value"},"1.6 Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)",-1),q=e("span",{class:"question--value"},"1.7 ¿Cuánto tiempo lleva en esta cárcel?",-1),S=e("span",{class:"question--value"},"1.8 ¿Qué año saldría en libertad (cumplido)?",-1),I={class:"content__section"},M=_({__name:"InfoPersonal",setup(N){const t=n("Calidad de vida de los internos / Información personal"),i=n([{rowReference:"name",description:"Nombre"},{rowReference:"lastname",description:"Apellido"},{rowReference:"age",description:"1.1"},{rowReference:"formacionCentro",description:"1.2"},{rowReference:"programaCentro",description:"1.3"},{rowReference:"nivelInstruccion",description:"1.4"},{rowReference:"nacionalidadChilena",description:"1.5"},{rowReference:"reincidensia",description:"1.6"},{rowReference:"tiempoEncarcelado",description:"1.7"},{rowReference:"fechaLibertad",description:"1.8"}]),r=n([{name:"Alfredo-X",lastname:"Cor-test",age:34,formacionCentro:"Sí",programaCentro:"Sí, programa 1",nivelInstruccion:"básica",nacionalidadChilena:"Sí",reincidensia:"No",tiempoEncarcelado:"entre 6 meses y 1 año",fechaLibertad:"10/11/2027"},{name:"Alejadro-X",lastname:"Per-test",age:56,formacionCentro:"No",programaCentro:"No",nivelInstruccion:"Media",nacionalidadChilena:"Sí",reincidensia:"Sí",tiempoEncarcelado:"menos de 6 meses",fechaLibertad:"01/08/2024"},{name:"Ramiro-X",lastname:"Sol-test",age:21,formacionCentro:"Sí",programaCentro:"Sí, programa 3",nivelInstruccion:"Media",nacionalidadChilena:"No",reincidensia:"Sí",tiempoEncarcelado:"menos de 2 meses",fechaLibertad:"01/04/2036"}]);return(A,E)=>(u(),p(l,null,{default:o(()=>[a(c,{title:t.value,subMenuActive:""},null,8,["title"]),a(d),e("div",f,[a(s,{class:"card-information"},{default:o(()=>[v,h,C,g]),_:1}),a(s,{class:"card-questions"},{default:o(()=>[w,R,b,q,S]),_:1})]),e("div",I,[a(m,{columns:i.value,rows:r.value},null,8,["columns","rows"])])]),_:1}))}});export{M as default};
