import{o as r,c as p,t as V,r as c,i as y,d as h,j as g,v as x,F as S,k as w,a as _,l as B,b,m as F,n as k,p as A,q as $}from"./index-af54f42b.js";import{b as N,a as q}from"./dimensionHistory-a722060f.js";const L=["disabled"],j={__name:"CButton",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["executeAction"],setup(l,{emit:i}){return(a,t)=>(r(),p("button",{class:"c-button",onClick:t[0]||(t[0]=o=>i("executeAction")),disabled:l.disabled},V(l.title),9,L))}};const D=_("option",{value:""},"Seleccionar opción",-1),I=["value"],M={__name:"CSelect",props:{options:{type:Array,required:!0},modelValue:{type:[Object,Number],default:null}},emits:["update:modelValue"],setup(l,{emit:i}){const a=l,t=c(a.modelValue?a.modelValue.id:null);return y(()=>a.modelValue,o=>{t.modelValue=o?o.id:""}),y(t,o=>{i("update:modelValue",o)}),h(()=>{var o;a.modelValue&&(t.modelValue=((o=a.modelValue)==null?void 0:o.id)||a.modelValue)}),(o,d)=>g((r(),p("select",{class:"c-select","onUpdate:modelValue":d[0]||(d[0]=n=>t.value=n)},[D,(r(!0),p(S,null,w(l.options,n=>(r(),p("option",{value:n.id,key:n.id},V(n.description),9,I))),128))],512)),[[x,t.value]])}},O={id:16,description:"CCP Colina 1"},U=B("filters",()=>{const l=c(null),i=c(),a=c(O),t=c([]);function o(e){e!=null&&e.periodo&&(l.value=(e==null?void 0:e.periodo)??null),e!=null&&e.penitenciaria&&(a.value=e==null?void 0:e.penitenciaria)}function d(e){t.value=e??[]}function n(e){l.value=(e==null?void 0:e.periodo)??null,i.value=(e==null?void 0:e.id)??null}function v(){i.value=null}return{historyId:i,periodo:l,penitenciaria:a,listadoCarceles:t,changeCriteria:o,mountListCarceles:d,mountBaseHistory:n,cleanHistory:v}});const E={class:"c-filterbar"},H="Buscar",W={__name:"CFilterbar",props:{baseFilter:{type:[Object,Number,String],required:!0}},emits:["executeAction"],setup(l,{emit:i}){const a=l,t=U(),o=c(!1),d=c(t.penitenciaria),n=c(t.periodo),v=async()=>{const m=e.value.filter(f=>f.id===d.value)[0],s=n.value.split("-"),u={year:s[0],month:s[1],categoryId:a.baseFilter};await C(u),t.changeCriteria({periodo:n.value,penitenciaria:m}),i("executeAction")},e=c(t.listadoCarceles),C=async m=>{o.value=!0;const s=await q(m);if(o.value=!1,s&&(s!=null&&s.period)&&(s!=null&&s.id)){const{period:u=null,id:f=null}=s;t.mountBaseHistory({period:u,id:f}),n.value=u}else t.cleanHistory()};return h(async()=>{const m={lastPeriod:!0,categoryId:a.baseFilter};if(await C(m),!e.value||e.value.length===0){const s=await N();e.value=s,t.mountListCarceles(s)}i("executeAction")}),(m,s)=>(r(),p("div",E,[b(M,{options:e.value,modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=u=>d.value=u)},null,8,["options","modelValue"]),g(_("input",{class:"periodo-item",type:"month","onUpdate:modelValue":s[1]||(s[1]=u=>n.value=u)},null,512),[[F,n.value]]),b(j,{title:H,onExecuteAction:v,disabled:o.value},null,8,["disabled"])]))}};const P={class:"card"},T={class:"card-stacked"},z={class:"card-content"},G={key:0,class:"card-action"},J=$('<div class="row"><a class="col s6 m1 waves-effect waves-light btn amber"><li class="material-icons">edit</li></a><a class="col s6 m1 waves-effect waves-light btn red darken-3"><li class="material-icons">delete</li></a></div>',1),K=[J],X={__name:"CCard",props:{actionACtive:{type:Boolean,default:!1}},setup(l){return(i,a)=>(r(),p("div",P,[_("div",T,[_("div",z,[k(i.$slots,"default")]),l.actionACtive?(r(),p("div",G,K)):A("",!0)])]))}};export{W as _,X as a,U as u};
