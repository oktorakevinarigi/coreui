(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae943"],{"0b50":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"animated fadeIn"},[t("b-row",[t("b-col",{attrs:{cols:"12",md:"6"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Bootstrap Collapse ")]),t("div",{staticClass:"card-header-actions"},[t("a",{staticClass:"card-header-action",attrs:{href:"https://bootstrap-vue.js.org/docs/components/collapse",rel:"noreferrer noopener",target:"_blank"}},[t("small",{staticClass:"text-muted"},[a._v("docs")])])])]),t("div",[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],attrs:{variant:"primary"}},[a._v("Toggle Collapse")]),t("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1"}},[t("b-card",[t("p",{staticClass:"card-text"},[a._v("Collapse contents Here")]),t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1_inner",modifiers:{collapse1_inner:!0}}],attrs:{size:"sm"}},[a._v("Toggle Inner Collapse")]),t("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1_inner"}},[t("b-card",[a._v("Hello!")])],1)],1)],1)],1)])],1),t("b-col",{attrs:{cols:"12",md:"6"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Collapse ")]),t("small",[a._v("with "),t("code",[a._v("v-b-toggle")]),a._v(" directive")])]),t("div",[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2",modifiers:{collapse2:!0}}],staticClass:"m-1"},[a._v("Toggle Collapse")]),t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse2",expression:"'collapse2'"}],staticClass:"m-1"},[a._v("Toggle Collapse")]),t("b-collapse",{attrs:{id:"collapse2"}},[t("b-card",[a._v("\n                I am collapsible content!\n              ")])],1)],1)])],1)],1),t("b-row",[t("b-col",{attrs:{cols:"12",md:"6"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Collapse ")]),t("small",[a._v("with "),t("code",[a._v("visibility")])])]),t("div",[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse3",modifiers:{collapse3:!0}}],staticClass:"m-1"},[a._v("Toggle Collapse")]),t("b-collapse",{attrs:{visible:"",id:"collapse3"}},[t("b-card",[a._v("\n                I should start open!\n              ")])],1)],1)])],1),t("b-col",{attrs:{cols:"12",md:"6"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Collapse ")]),t("small",[a._v("with "),t("code",[a._v("v-model")])])]),t("div",[t("b-btn",{class:a.showCollapse?"collapsed":null,attrs:{"aria-controls":"collapse4","aria-expanded":a.showCollapse?"true":"false"},on:{click:function(e){a.showCollapse=!a.showCollapse}}},[a._v("\n              Toggle Collapse\n            ")]),t("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse4"},model:{value:a.showCollapse,callback:function(e){a.showCollapse=e},expression:"showCollapse"}},[t("b-card",[a._v("\n                I should start open!\n              ")])],1)],1)])],1)],1),t("b-row",[t("b-col",{attrs:{cols:"12",md:"6"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Collapse ")]),t("small",[a._v("multiple elements")])]),t("div",[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseA.collapseB",modifiers:{collapseA:!0,collapseB:!0}}]},[a._v("Toggle Both Collapse A and B")]),t("b-collapse",{staticClass:"mt-2",attrs:{id:"collapseA"}},[t("b-card",[a._v("\n                I am collapsable content A!\n              ")])],1),t("b-collapse",{staticClass:"mt-2",attrs:{id:"collapseB"}},[t("b-card",[a._v("\n                I am collapsable content B!\n              ")])],1)],1)])],1),t("b-col",{attrs:{cols:"12",md:"6"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Collapse ")]),t("small",[t("code",[a._v("accordion")]),a._v(" support")])]),t("div",{attrs:{role:"tablist"}},[t("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion1",modifiers:{accordion1:!0}}],attrs:{block:"",href:"#",variant:"info"}},[a._v("Accordion 1")])],1),t("b-collapse",{attrs:{id:"accordion1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[t("b-card-body",[t("p",{staticClass:"card-text"},[a._v("\n                    I start opened because "),t("code",[a._v("visible")]),a._v(" is "),t("code",[a._v("true")])]),t("p",{staticClass:"card-text"},[a._v("\n                    "+a._s(a.text)+"\n                  ")])])],1)],1),t("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion2",modifiers:{accordion2:!0}}],attrs:{block:"",href:"#",variant:"info"}},[a._v("Accordion 2")])],1),t("b-collapse",{attrs:{id:"accordion2",accordion:"my-accordion",role:"tabpanel"}},[t("b-card-body",[t("p",{staticClass:"card-text"},[a._v("\n                    "+a._s(a.text)+"\n                  ")])])],1)],1),t("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[t("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion3",modifiers:{accordion3:!0}}],attrs:{block:"",href:"#",variant:"info"}},[a._v("Accordion 3")])],1),t("b-collapse",{attrs:{id:"accordion3",accordion:"my-accordion",role:"tabpanel"}},[t("b-card-body",[t("p",{staticClass:"card-text"},[a._v("\n                    "+a._s(a.text)+"\n                  ")])])],1)],1)],1)])],1)],1)],1)])},o=[],l={name:"collapses",data:function(){return{showCollapse:!0,text:"\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n        synth nesciunt you probably haven't heard of them accusamus labore VHS.\n      "}}},r=l,c=t("0c7c"),i=Object(c["a"])(r,s,o,!1,null,null,null);i.options.__file="Collapses.vue";e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0ae943.f1face42.js.map