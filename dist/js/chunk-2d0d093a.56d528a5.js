(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d093a"],{6923:function(a,t,e){"use strict";e.r(t);var r,o,n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"animated fadeIn"},[e("b-card-group",{staticClass:"card-columns",attrs:{columns:""}},[e("b-card",{attrs:{header:"Line Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("line-example",{attrs:{chartId:"chart-line-01"}})],1)]),e("b-card",{attrs:{header:"Bar Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("bar-example",{attrs:{chartId:"chart-bar-01"}})],1)]),e("b-card",{attrs:{header:"Doughnut Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("doughnut-example",{attrs:{chartId:"chart-doughnut-01"}})],1)]),e("b-card",{attrs:{header:"Radar Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("radar-example",{attrs:{chartId:"chart-radar-01"}})],1)]),e("b-card",{attrs:{header:"Pie Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("pie-example",{attrs:{chartId:"chart-pie-01"}})],1)]),e("b-card",{attrs:{header:"Polar Area Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("polar-area-example",{attrs:{chartId:"chart-polar-area-01"}})],1)])],1)],1)},l=[],s=e("1fca"),i=e("1fef"),d={extends:s["a"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},{responsive:!0,maintainAspectRatio:!0,tooltips:{enabled:!1,custom:i["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,t){return{backgroundColor:t.data.datasets[a.datasetIndex].backgroundColor}}}}})}},c=d,u=e("0c7c"),p=Object(u["a"])(c,r,o,!1,null,null,null);p.options.__file="BarExample.vue";var b,C,g=p.exports,h=e("36e4"),m={components:{hexToRgba:h["hexToRgba"],CustomTooltips:i["CustomTooltips"]},extends:s["c"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Data One",backgroundColor:Object(h["hexToRgba"])("#E46651",90),data:[30,39,10,50,30,70,35]},{label:"Data Two",backgroundColor:Object(h["hexToRgba"])("#00D8FF",90),data:[39,80,40,35,40,20,45]}]},{responsive:!0,maintainAspectRatio:!0,tooltips:{enabled:!1,custom:i["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,t){return{backgroundColor:t.data.datasets[a.datasetIndex].backgroundColor}}}}})}},f=m,x=Object(u["a"])(f,b,C,!1,null,null,null);x.options.__file="LineExample.vue";var v,k,B=x.exports,E={extends:s["b"],mounted:function(){this.renderChart({labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},{responsive:!0,maintainAspectRatio:!0})}},D=E,R=Object(u["a"])(D,v,k,!1,null,null,null);R.options.__file="DoughnutExample.vue";var J,_,A=R.exports,w={extends:s["f"],mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"2017",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2018",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!0,tooltips:{enabled:!1,custom:i["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,t){return{backgroundColor:t.data.datasets[a.datasetIndex].borderColor}}}}})}},y=w,I=Object(u["a"])(y,J,_,!1,null,null,null);I.options.__file="RadarExample.vue";var O,T,j=I.exports,F={extends:s["d"],mounted:function(){this.renderChart({labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},{responsive:!0,maintainAspectRatio:!0})}},H=F,M=Object(u["a"])(H,O,T,!1,null,null,null);M.options.__file="PieExample.vue";var P,S,L=M.exports,V={extends:s["e"],mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!1,custom:i["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,t){return{backgroundColor:t.data.datasets[a.datasetIndex].backgroundColor}}}}})}},G=V,N=Object(u["a"])(G,P,S,!1,null,null,null);N.options.__file="PolarAreaExample.vue";var $=N.exports,q={name:"charts",components:{BarExample:g,LineExample:B,DoughnutExample:A,RadarExample:j,PieExample:L,PolarAreaExample:$}},z=q,K=Object(u["a"])(z,n,l,!1,null,null,null);K.options.__file="Charts.vue";t["default"]=K.exports}}]);
//# sourceMappingURL=chunk-2d0d093a.56d528a5.js.map