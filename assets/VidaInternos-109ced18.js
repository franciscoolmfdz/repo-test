import{_ as f,a as v}from"./CHeaderBar-cd568836.js";import{_ as p}from"./ManagementXLS-a21afe67.js";import{r as d,o as u,c as b,a as e,t as c,g,s as C,d as y,w as _,b as i}from"./index-72ab008f.js";const h={class:"modal-container"},x={class:"modal-header"},k={class:"modal-body"},S={class:"modal-footer"},M={__name:"CModal",props:{title:{type:String,default:""},closeText:{type:String,default:"Close"},submitText:{type:String,default:"Submit"}},setup(s,{expose:l}){const o=d(!1),a=()=>{o.value=!0},t=()=>{o.value=!1,emit("close")},n=()=>{emit("submit"),t()};return l({open:a}),(r,m)=>(u(),b("div",{class:C(["modal",{active:o.value}])},[e("div",{class:"modal-overlay",onClick:t}),e("div",h,[e("div",x,[e("h3",null,c(s.title),1),e("button",{class:"modal-close",onClick:t},"×")]),e("div",k,[g(r.$slots,"default")]),e("div",S,[e("button",{class:"modal-btn",onClick:t},c(s.closeText),1),e("button",{class:"modal-btn",onClick:n},c(s.submitText),1)])])],2))}};const $=e("p",null,"Modal content goes here",-1),w={__name:"VidaInternos",setup(s){const l=d(),o=()=>{console.log("Modal closed")},a=()=>{console.log("Modal submitted")},t=()=>{console.log(l.value.open())},n=d("Calidad de vida de los internos");return(r,m)=>(u(),y(f,null,{default:_(()=>[i(v,{title:n.value},null,8,["title"]),e("button",{onClick:t},"Agregar registro"),i(M,{ref_key:"modalForm",ref:l,title:"My Modal",onClose:o,onSubmit:a},{default:_(()=>[$,i(p)]),_:1},512)]),_:1}))}};export{w as default};
