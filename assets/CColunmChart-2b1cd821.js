import{H as o,a as r}from"./highcharts-more-f167c5a2.js";import{r as i,o as a,c as n,a as p,b as c,u,V as l}from"./index-72ab008f.js";const _={class:"chart-column"},d={class:"chart-column__content"},O={__name:"CColunmChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(e){const t=e;o(r);const s=i({chart:{type:"column"},title:{text:t.title},subtitle:{text:t.subtitle},xAxis:t.optionsAxisX,yAxis:t.optionsAxisY,plotOptions:t.plotOptions,tooltip:t.tooltip,series:t.series});return(h,y)=>(a(),n("div",_,[p("div",d,[c(u(l),{type:"chart",options:s.value,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0},null,8,["options"])])]))}};export{O as _};
