(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{319:function(t,e,a){"use strict";var s=a(331),i=a.n(s),r=a(11),o={name:"GraphCanvas",props:{gtype:{type:String,required:!0},id:{type:String,required:!0},labels:{type:Array,required:!0},datasets:{type:Array,required:!0},goptions:{type:Object,default:function(){}}},watch:{labels:{handler:function(t){this.$data.chart.destroy(),this.$data.chart_data.labels=t,this.updateCanvas()},deep:!0},datasets:{handler:function(t){this.$data.chart.destroy(),this.$data.chart_data.datasets=t,this.updateCanvas()},deep:!0}},data:function(){return{type:this.$props.gtype,chart_data:{labels:this.$props.labels,datasets:this.$props.datasets},options:this.$props.goptions}},methods:{updateCanvas:function(){var t=document.getElementById(this.$props.id).getContext("2d");document.chart=this.$data.chart=new i.a(t,{type:this.$data.type,data:this.$data.chart_data,options:this.$data.options})}},mounted:function(){this.updateCanvas();var t=this;document.getElementById(this.$props.id).onclick=function(e){setTimeout(function(){for(var a=e.layerX,s=e.layerY,i=JSON.parse(JSON.stringify(document.chart.legend.legendHitBoxes)),o=0;o<i.length;o++)r.a.inRange(a,i[o].left,i[o].left+i[o].width)&&r.a.inRange(s,i[o].top,i[o].top+i[o].height)&&t.$emit("switchVisibility",o)},50)}}},n=a(4),l=Object(n.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:this.id}})},[],!1,null,null,null);l.options.__file="index.vue";e.a=l.exports},328:function(t,e,a){var s={"./af":193,"./af.js":193,"./ar":194,"./ar-dz":195,"./ar-dz.js":195,"./ar-kw":196,"./ar-kw.js":196,"./ar-ly":197,"./ar-ly.js":197,"./ar-ma":198,"./ar-ma.js":198,"./ar-sa":199,"./ar-sa.js":199,"./ar-tn":200,"./ar-tn.js":200,"./ar.js":194,"./az":201,"./az.js":201,"./be":202,"./be.js":202,"./bg":203,"./bg.js":203,"./bm":204,"./bm.js":204,"./bn":205,"./bn.js":205,"./bo":206,"./bo.js":206,"./br":207,"./br.js":207,"./bs":208,"./bs.js":208,"./ca":209,"./ca.js":209,"./cs":210,"./cs.js":210,"./cv":211,"./cv.js":211,"./cy":212,"./cy.js":212,"./da":213,"./da.js":213,"./de":214,"./de-at":215,"./de-at.js":215,"./de-ch":216,"./de-ch.js":216,"./de.js":214,"./dv":217,"./dv.js":217,"./el":218,"./el.js":218,"./en-au":219,"./en-au.js":219,"./en-ca":220,"./en-ca.js":220,"./en-gb":221,"./en-gb.js":221,"./en-ie":222,"./en-ie.js":222,"./en-il":223,"./en-il.js":223,"./en-nz":224,"./en-nz.js":224,"./eo":225,"./eo.js":225,"./es":226,"./es-do":227,"./es-do.js":227,"./es-us":228,"./es-us.js":228,"./es.js":226,"./et":229,"./et.js":229,"./eu":230,"./eu.js":230,"./fa":231,"./fa.js":231,"./fi":232,"./fi.js":232,"./fo":233,"./fo.js":233,"./fr":234,"./fr-ca":235,"./fr-ca.js":235,"./fr-ch":236,"./fr-ch.js":236,"./fr.js":234,"./fy":237,"./fy.js":237,"./gd":238,"./gd.js":238,"./gl":239,"./gl.js":239,"./gom-latn":240,"./gom-latn.js":240,"./gu":241,"./gu.js":241,"./he":242,"./he.js":242,"./hi":243,"./hi.js":243,"./hr":244,"./hr.js":244,"./hu":245,"./hu.js":245,"./hy-am":246,"./hy-am.js":246,"./id":247,"./id.js":247,"./is":248,"./is.js":248,"./it":249,"./it.js":249,"./ja":250,"./ja.js":250,"./jv":251,"./jv.js":251,"./ka":252,"./ka.js":252,"./kk":253,"./kk.js":253,"./km":254,"./km.js":254,"./kn":255,"./kn.js":255,"./ko":256,"./ko.js":256,"./ky":257,"./ky.js":257,"./lb":258,"./lb.js":258,"./lo":259,"./lo.js":259,"./lt":260,"./lt.js":260,"./lv":261,"./lv.js":261,"./me":262,"./me.js":262,"./mi":263,"./mi.js":263,"./mk":264,"./mk.js":264,"./ml":265,"./ml.js":265,"./mn":266,"./mn.js":266,"./mr":267,"./mr.js":267,"./ms":268,"./ms-my":269,"./ms-my.js":269,"./ms.js":268,"./mt":270,"./mt.js":270,"./my":271,"./my.js":271,"./nb":272,"./nb.js":272,"./ne":273,"./ne.js":273,"./nl":274,"./nl-be":275,"./nl-be.js":275,"./nl.js":274,"./nn":276,"./nn.js":276,"./pa-in":277,"./pa-in.js":277,"./pl":278,"./pl.js":278,"./pt":279,"./pt-br":280,"./pt-br.js":280,"./pt.js":279,"./ro":281,"./ro.js":281,"./ru":282,"./ru.js":282,"./sd":283,"./sd.js":283,"./se":284,"./se.js":284,"./si":285,"./si.js":285,"./sk":286,"./sk.js":286,"./sl":287,"./sl.js":287,"./sq":288,"./sq.js":288,"./sr":289,"./sr-cyrl":290,"./sr-cyrl.js":290,"./sr.js":289,"./ss":291,"./ss.js":291,"./sv":292,"./sv.js":292,"./sw":293,"./sw.js":293,"./ta":294,"./ta.js":294,"./te":295,"./te.js":295,"./tet":296,"./tet.js":296,"./tg":297,"./tg.js":297,"./th":298,"./th.js":298,"./tl-ph":299,"./tl-ph.js":299,"./tlh":300,"./tlh.js":300,"./tr":301,"./tr.js":301,"./tzl":302,"./tzl.js":302,"./tzm":303,"./tzm-latn":304,"./tzm-latn.js":304,"./tzm.js":303,"./ug-cn":305,"./ug-cn.js":305,"./uk":306,"./uk.js":306,"./ur":307,"./ur.js":307,"./uz":308,"./uz-latn":309,"./uz-latn.js":309,"./uz.js":308,"./vi":310,"./vi.js":310,"./x-pseudo":311,"./x-pseudo.js":311,"./yo":312,"./yo.js":312,"./zh-cn":313,"./zh-cn.js":313,"./zh-hk":314,"./zh-hk.js":314,"./zh-tw":315,"./zh-tw.js":315};function i(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id=328},336:function(t,e,a){"use strict";a(61),a(30),a(29),a(19),a(80),a(79),a(330);var s=a(0),i=a(11),r=a(319),o=a(192),n="components.gb_statistics.",l={statSelector:"gbs_s",from:"gbs_f",to:"gbs_t",hidden:"gbs_h"},d={name:"GbStatistics",data:function(){var t={i18nPrefix:n,graphType:{cost_level:{title:this.$i18n.i18next.t(n+"graph.title_1"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level_cost")},reward_level:{title:this.$i18n.i18next.t(n+"graph.title_2"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")},reward_cost:{title:this.$i18n.i18next.t(n+"graph.title_3"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_reward_1st_place"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level_cost")},cost_reward:{title:this.$i18n.i18next.t(n+"graph.title_4"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level_cost"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")}},hidden:Array.from(new Array(Object.keys(o.agesCost).length),function(t,e){return 0!==e}),labels:[],datasets:[],options:{animation:!1,responsive:!0,stacked:!0,title:{display:!0,text:""},tooltips:{mode:"index",intersect:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:""}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:""},ticks:{suggestedMin:1,suggestedMax:80}}]}},ageConfig:{Oracle:{name:this.$i18n.i18next.t("foe_data.age.Oracle"),color:"rgb(102,34,17)"},NoAge:{name:this.$i18n.i18next.t("foe_data.age.NoAge"),color:"rgb(102,34,17)"},BronzeAge:{name:this.$i18n.i18next.t("foe_data.age.BronzeAge"),color:"rgb(183,141,19)"},IronAge:{name:this.$i18n.i18next.t("foe_data.age.IronAge"),color:"rgb(152,68,32)"},EarlyMiddleAges:{name:this.$i18n.i18next.t("foe_data.age.EarlyMiddleAges"),color:"rgb(78,129,68)"},HighMiddleAges:{name:this.$i18n.i18next.t("foe_data.age.HighMiddleAges"),color:"rgb(47,142,142)"},LateMiddleAges:{name:this.$i18n.i18next.t("foe_data.age.LateMiddleAges"),color:"rgb(127,66,133)"},ColonialAge:{name:this.$i18n.i18next.t("foe_data.age.ColonialAge"),color:"rgb(206,100,4)"},IndustrialAge:{name:this.$i18n.i18next.t("foe_data.age.IndustrialAge"),color:"rgb(167,41,38)"},ProgressiveEra:{name:this.$i18n.i18next.t("foe_data.age.ProgressiveEra"),color:"rgb(182,137,91)"},ModernEra:{name:this.$i18n.i18next.t("foe_data.age.ModernEra"),color:"rgb(70,93,136)"},PostmodernEra:{name:this.$i18n.i18next.t("foe_data.age.PostmodernEra"),color:"rgb(141,146,146)"},ContemporaryEra:{name:this.$i18n.i18next.t("foe_data.age.ContemporaryEra"),color:"rgb(141,199,63)"},Tomorrow:{name:this.$i18n.i18next.t("foe_data.age.Tomorrow"),color:"rgb(123,137,137)"},TheFuture:{name:this.$i18n.i18next.t("foe_data.age.TheFuture"),color:"rgb(34,90,75)"},ArcticFuture:{name:this.$i18n.i18next.t("foe_data.age.ArcticFuture"),color:"rgb(67,66,66)"},OceanicFuture:{name:this.$i18n.i18next.t("foe_data.age.OceanicFuture"),color:"rgb(127,255,212)"},VirtualFuture:{name:this.$i18n.i18next.t("foe_data.age.VirtualFuture"),color:"rgb(85,271,39)"}},statSelector:"cost_level",maxLevelGraph:Object.keys(o.gbsData).map(function(t){return o.gbsData[t]}).map(function(t){return t.levels.length}).reduce(function(t,e){return Math.max(t,e)},-1/0),maxAgeCost:o.agesCost.VirtualFuture,from:1,to:80,errors:{from:!1,to:!1}};for(var e in o.gbsData)o.gbsData[e].levels.length===t.maxLevelGraph&&(t.maxAgeCost=o.agesCost[o.gbsData[e].age]);return Object.assign(t,this.checkQuery(t)),this.$store.commit("ADD_URL_QUERY",{key:l.statSelector,value:t.statSelector}),this.$store.commit("ADD_URL_QUERY",{key:l.from,value:t.from}),this.$store.commit("ADD_URL_QUERY",{key:l.to,value:t.to}),this.$store.commit("ADD_URL_QUERY",{key:l.hidden,value:t.hidden.map(function(t){return t?1:0}).join("")}),this.updateGraphData(t),t},computed:{lang:function(){return this.$store.state.locale},permaLink:function(){return{path:this.$i18n.path("gb-statistics/"),query:this.$store.state.urlQuery}}},watch:{statSelector:function(t){this.$store.commit("UPDATE_URL_QUERY",{key:l.statSelector,value:t}),this.updateGraphData()},lang:function(){Object.assign(this.$data,{graphType:{cost_level:{title:this.$i18n.i18next.t(n+"graph.title_1"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level_cost")},reward_level:{title:this.$i18n.i18next.t(n+"graph.title_2"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")},reward_cost:{title:this.$i18n.i18next.t(n+"graph.title_3"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_reward_1st_place"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level_cost")},cost_reward:{title:this.$i18n.i18next.t(n+"graph.title_4"),xAxesLabel:this.$i18n.i18next.t("utils.graph.gb_level_cost"),yAxesLabel:this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")}},ageConfig:{Oracle:{name:this.$i18n.i18next.t("foe_data.age.Oracle"),color:"rgb(102,34,17)"},NoAge:{name:this.$i18n.i18next.t("foe_data.age.NoAge"),color:"rgb(102,34,17)"},BronzeAge:{name:this.$i18n.i18next.t("foe_data.age.BronzeAge"),color:"rgb(183,141,19)"},IronAge:{name:this.$i18n.i18next.t("foe_data.age.IronAge"),color:"rgb(152,68,32)"},EarlyMiddleAges:{name:this.$i18n.i18next.t("foe_data.age.EarlyMiddleAges"),color:"rgb(78,129,68)"},HighMiddleAges:{name:this.$i18n.i18next.t("foe_data.age.HighMiddleAges"),color:"rgb(47,142,142)"},LateMiddleAges:{name:this.$i18n.i18next.t("foe_data.age.LateMiddleAges"),color:"rgb(127,66,133)"},ColonialAge:{name:this.$i18n.i18next.t("foe_data.age.ColonialAge"),color:"rgb(206,100,4)"},IndustrialAge:{name:this.$i18n.i18next.t("foe_data.age.IndustrialAge"),color:"rgb(167,41,38)"},ProgressiveEra:{name:this.$i18n.i18next.t("foe_data.age.ProgressiveEra"),color:"rgb(182,137,91)"},ModernEra:{name:this.$i18n.i18next.t("foe_data.age.ModernEra"),color:"rgb(70,93,136)"},PostmodernEra:{name:this.$i18n.i18next.t("foe_data.age.PostmodernEra"),color:"rgb(141,146,146)"},ContemporaryEra:{name:this.$i18n.i18next.t("foe_data.age.ContemporaryEra"),color:"rgb(141,199,63)"},Tomorrow:{name:this.$i18n.i18next.t("foe_data.age.Tomorrow"),color:"rgb(123,137,137)"},TheFuture:{name:this.$i18n.i18next.t("foe_data.age.TheFuture"),color:"rgb(34,90,75)"},ArcticFuture:{name:this.$i18n.i18next.t("foe_data.age.ArcticFuture"),color:"rgb(67,66,66)"},OceanicFuture:{name:this.$i18n.i18next.t("foe_data.age.OceanicFuture"),color:"rgb(127,255,212)"},VirtualFuture:{name:this.$i18n.i18next.t("foe_data.age.VirtualFuture"),color:"rgb(85,271,39)"}}}),this.updateGraphData()},from:function(t,e){i.a.handlerForm(this,"from",0===t.length?0:t,e,[1,this.$data.to])===i.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:l.from,value:t}),this.updateGraphData())},to:function(t,e){i.a.handlerForm(this,"to",0===t.length?0:t,e,[this.$data.from,this.$data.maxLevelGraph])===i.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:l.to,value:t}),this.$data.errors.from?t>=this.$data.errors.from&&(this.$data.errors.from=!1,this.updateGraphData()):this.updateGraphData())},hidden:function(t){this.$store.commit("UPDATE_URL_QUERY",{key:l.hidden,value:t.map(function(t){return t?1:0}).join("")})}},methods:{updateData:function(t,e,a,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.$data.from,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.$data.to,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this.$data.hidden,d={},h=[],c=1/0,u=-1/0,g=Array.from(new Array(n-r+1),function(e,a){return"reward_cost"!==t&&"cost_reward"!==t?a+r:"reward_cost"!==t?s[a].cost:s[a].reward[0]});for(var m in o.agesCost)d[m]=o.agesCost[m].slice(r-1,n+1).map(function(e){return"cost_level"===t||"reward_cost"===t?(c=e.cost<c?e.cost:c,u=e.cost>u?e.cost:u,e.cost):(c=e.reward[0]<c?e.reward[0]:c,u=e.reward[0]>u?e.reward[0]:u,e.reward[0])});var p=0;for(var b in o.agesCost)h.push({hidden:l[p++],label:a[b].name,fill:!1,lineTension:0,backgroundColor:i.a.shadeRGBColor(a[b].color,.5),borderColor:a[b].color,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:i.a.shadeRGBColor(a[b].color,-.3),pointBackgroundColor:i.a.shadeRGBColor(a[b].color,.3),pointBorderWidth:3,pointHoverRadius:4,pointRadius:1,pointHitRadius:10,data:d[b]});return{title:e[t].title,xAxesLabel:e[t].xAxesLabel,yAxesLabel:e[t].yAxesLabel,suggestedMin:c,suggestedMax:u,labels:g,datasets:h}},updateGraphData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$data,e=this.updateData(t.statSelector,t.graphType,t.ageConfig,t.maxAgeCost,t.from,t.to,t.hidden);t.options.title.text=e.title,t.options.scales.xAxes[0].scaleLabel.labelString=e.xAxesLabel,t.options.scales.yAxes[0].scaleLabel.labelString=e.yAxesLabel,t.options.scales.yAxes[0].ticks.suggestedMin=e.suggestedMin,t.options.scales.yAxes[0].ticks.suggestedMax=e.suggestedMax,t.labels=e.labels,t.datasets=e.datasets},switchVisibility:function(t){i.a.inRange(t,0,this.$data.hidden.length)&&s.default.set(this.$data.hidden,t,!this.$data.hidden[t])},checkQuery:function(t){var e={};e.hidden=t.hidden;var a=i.a.FormCheck.NO_CHANGE;if(this.$route.query[l.statSelector]&&this.$route.query[l.statSelector]in t.graphType&&(a=i.a.FormCheck.VALID,e.statSelector=this.$route.query[l.statSelector]),this.$route.query[l.from]&&!isNaN(this.$route.query[l.from])&&i.a.inRange(parseInt(this.$route.query[l.from]),1,t.maxLevelGraph)&&(a=i.a.FormCheck.VALID,e.from=parseInt(this.$route.query[l.from])),this.$route.query[l.to]&&!isNaN(this.$route.query[l.to])&&i.a.inRange(parseInt(this.$route.query[l.to]),1,t.maxLevelGraph)&&(parseInt(this.$route.query[l.to])>=t.from||parseInt(this.$route.query[l.to])>=e.from)&&(a=i.a.FormCheck.VALID,e.to=parseInt(this.$route.query[l.to])),this.$route.query[l.hidden]){a=i.a.FormCheck.VALID;var s=this.$route.query[l.hidden].split("").map(function(t){return"0"!==t});Array.prototype.splice.apply(t.hidden,[0,s.length].concat(s))}return a===i.a.FormCheck.VALID&&this.$store.commit("IS_PERMALINK",!0),e},haveError:function(t){return this.$data.errors[t]?"is-danger":""}},components:{graphCanvas:r.a}},h=a(4),c=Object(h.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))])])]),a("div",{staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.permaLink,exact:""}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"p1")))]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"represent")))]),a("ul",t._l(t.graphType,function(e,s,i){return a("li",{key:s,staticStyle:{"list-style-type":"none"}},[a("b-radio",{attrs:{id:s,"native-value":s,type:"is-info"},model:{value:t.statSelector,callback:function(e){t.statSelector=e},expression:"statSelector"}},[t._v(t._s(e.title))])],1)})),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t("utils.From"),"label-for":"gbStatisticsFrom",type:t.haveError("from")}},[a("b-input",{attrs:{id:"gbStatisticsFrom",type:"number",min:"1",max:t.to,name:"from",autocomplete:"off"},model:{value:t.from,callback:function(e){t.from=t._n(e)},expression:"from"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t("utils.To",{max:t.maxLevelGraph}),"label-for":"gbStatisticsTo",type:t.haveError("to")}},[a("b-input",{attrs:{id:"gbStatisticsTo",type:"number",min:t.from,max:t.maxLevelGraph,name:"to",autocomplete:"off"},model:{value:t.to,callback:function(e){t.to=t._n(e)},expression:"to"}})],1)],1)]),a("graph-canvas",{attrs:{gtype:"line",id:"graph",goptions:t.options,labels:t.labels,datasets:t.datasets},on:{switchVisibility:function(e){t.switchVisibility(e)}}})],1)},[],!1,null,null,null);c.options.__file="index.vue";e.a=c.exports},789:function(t,e,a){"use strict";a.r(e);var s=a(336),i="routes.gb_statistics.";e.default={head:function(){return this.$store.commit("SET_HERO",{title:i+"hero.title",subtitle:i+"hero.subtitle"}),{title:this.$t(i+"title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","gb_statistics"),{}},components:{gbStatistics:s.a}}}}]);