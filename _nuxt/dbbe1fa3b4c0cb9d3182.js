(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{322:function(t,e,a){"use strict";var s={name:"YesNo",props:{value:{type:Boolean,required:!0},label:String},data:function(){return{newValue:this.value}},watch:{value:function(t){this.newValue=t},newValue:function(t){this.$emit("input",t)}}},r=a(4),i=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v(t._s(t.label))]),a("div",{staticClass:"control"},[a("div",{staticClass:"buttons has-addons"},[a("span",{staticClass:"button",class:{"is-success is-selected":t.newValue},on:{click:function(e){t.newValue=!0}}},[t._m(0),a("span",[t._v(t._s(t.$t("utils.Yes")))])]),a("span",{staticClass:"button",class:{"is-danger is-selected":!t.newValue},on:{click:function(e){t.newValue=!1}}},[t._m(1),a("span",[t._v(t._s(t.$t("utils.No")))])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-check"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-times"})])}],!1,null,null,null);i.options.__file="index.vue";e.a=i.exports},339:function(t,e,a){"use strict";a.d(e,"d",function(){return u}),a.d(e,"b",function(){return p}),a.d(e,"a",function(){return h}),a.d(e,"c",function(){return d});a(61),a(31),a(32),a(19),a(80);var s=a(554),r=a(361);function i(t){var e,a=0;do{a+=(e=0===a?t:r.agesCost[e.unrefined][0]).coins+e.supplies}while(null!==e.unrefined);return a}function o(t,e){var a=[];for(var s in t[e])t[e][s]>=.5&&t[e][s]<=2&&a.push({key:s,cost:t[e][s]});return a}function n(t,e,a){var s=[],r=a;do{s.push(t[r].key),r=t[r].parent}while(r!==e);return e!==a&&s.push(e),s}function u(t,e,a,s){var r=Math.ceil(t*s),i=a<1?r:t,o=[];i<=e?o.push({from:r,to:t,count:1}):o.push({from:r===i?e:Math.round(e*s),to:t===i?e:Math.ceil(e*a),count:Math.floor(i/e)});var n=t-o[0].to*o[0].count;return n<=0?o.push({from:0,to:0}):o.push({from:Math.round(n*s),to:n}),o}function l(t,e,a,r){for(var i=function(t,e,a){var r=Object.keys(t),i=r.indexOf(e),u=r.indexOf(a),l=new s({comparator:function(t,e){return i<u?t.cost<e.cost?-1:t.cost>e.cost?1:0:i>u?t.cost>e.cost?-1:t.cost<e.cost?1:0:t.cost===e.cost?-1:t.cost<e.cost?1:0}});l.queue({key:e,cost:0});var p,h={};if(i===u)return h[a]={key:a,cost:1,parent:a},n(h,e,a);do{if(0===l.length)throw new Error("PriorityQueue need to contains at least one value");if((p=l.dequeue()).key===a)return n(h,e,a);var d=!0,f=!1,c=void 0;try{for(var m,v=o(t,p.key)[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){var g=m.value;Object.keys(h).indexOf(g.key)<0&&(l.queue({key:g.key,cost:g.cost+p.cost}),h[g.key]={key:g.key,cost:g.cost+p.cost,parent:p.key})}}catch(t){f=!0,c=t}finally{try{d||null==v.return||v.return()}finally{if(f)throw c}}}while(0!==l.length)}(t,e,a),u=[{key:i[0],amount:r}],l=1;l<i.length;l++)u.push({key:i[l],amount:Math.ceil(u[l-1].amount*t[i[l-1]][i[l]])});return u.reverse()}function p(t,e,a,s,r){var i=l(t,e,a,s);if(1===i.length)return i[0].split=u(1e3,r,1,1),i;for(var o=i.length-2;o>=0;o--)if(i[o].split=u(i[o+1].amount,r,t[i[o].key][i[o+1].key],t[i[o+1].key][i[o].key]),i[o].split instanceof Array){var n=0;i[o].split.map(function(t){return{value:t.from,count:t.count?t.count:1}}).reduce(function(t,e){void 0!==t&&(n+=t.value*t.count),n+=e.value*e.count}),i[o].amount=n}return i}var h=function(){var t={};for(var e in r.agesCost)for(var a in t[e]={},r.agesCost)t[e][a]=i(r.agesCost[e][0])/i(r.agesCost[a][0]);return t}(),d=function(){var t={};for(var e in r.agesCost){t[e]={};var a=Object.keys(r.agesCost).indexOf(e);for(var s in r.agesCost){var i=Object.keys(r.agesCost).indexOf(s);t[e][s]=i===a-1?2:i===a+1?.5:i===a?1:0}}return t}()},358:function(t,e,a){"use strict";a(61),a(19);var s=a(0),r=a(11),i=a(339),o=a(361),n=a(188),u=a.n(n),l=a(322),p={name:"SimpleTrade",props:{tradeArray:{type:Object,required:!0}},data:function(){var t={i18nPrefix:"components.simple_trade.",agesGoods:o.agesGoods,value:0,values:{},currentAge:null,results:{},split:!1,splitValueId:"splitValue"+this._uid,splitValue:1e3,maxSplitValue:1e3,showRatio:!1,errors:{splitValue:!1}};for(var e in o.agesGoods)t.values[e]=0,t.results[e]={show:!1,value:0,ratio:0,split:""};return t},watch:{split:function(){this.$data.splitValue=1e3,this.compute()},splitValue:function(t){r.a.inRange(t,0,1e3)?(this.$data.errors.splitValue=!1,this.compute()):this.$data.errors.splitValue=!0}},methods:{resetForm:function(t){for(var e in o.agesGoods)t!==e&&s.default.set(this.$data.values,e,0),this.$data.results[e]={show:!1,value:0,ratio:0,split:""}},resetFormIfAllZero:function(t){for(var e in o.agesGoods)if(this.$data.values[e]>0)return;this.resetForm(t)},haveError:function(t){return t in u.a?this.$data.values[t]>1e3?"is-warning":void 0:this.$data.errors[t]?"is-danger":""},compute:function(){var t=this.$data.currentAge;for(var e in this.$props.tradeArray[t])if(r.a.inRange(this.$props.tradeArray[t][e],.5,2)){var a=Math.round(this.$props.tradeArray[t][e]*this.$data.values[t]),o=a;this.$data.split&&(o=Object(i.d)(this.$data.values[t],this.$data.splitValue,this.$props.tradeArray[t][e],this.$props.tradeArray[e][t]))instanceof Array&&(o=0===o[1].from?this.$t("components.trade.split_message.common",{count:this.$formatNumber(o[0].count),valueFrom:this.$formatNumber(o[0].from),ageFrom:this.$t("foe_data.age_short."+t),valueTo:this.$formatNumber(o[0].to),ageTo:this.$t("foe_data.age_short."+e)}):this.$t("components.trade.split_message.multi",{count:this.$formatNumber(o[0].count),valueFrom:this.$formatNumber(o[0].from),ageFrom:this.$t("foe_data.age_short."+t),valueTo:this.$formatNumber(o[0].to),ageTo:this.$t("foe_data.age_short."+e),valueFromSingle:this.$formatNumber(o[1].from),valueToSingle:this.$formatNumber(o[1].to)})),s.default.set(this.$data.results[e],"show",!0),this.$data.results[e].value=this.$formatNumber(a),this.$data.results[e].split=o,this.$data.results[e].ratio=r.a.roundTo(this.$props.tradeArray[t][e],2)}},getBestRates:function(t){this.resetForm(t),this.$data.currentAge=t,this.compute()}},components:{YesNo:l.a}},h=a(4),d=Object(h.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"title is-4 margin-top-one-em"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("yes-no",{attrs:{label:t.$t(t.i18nPrefix+"slpit")},model:{value:t.split,callback:function(e){t.split=e},expression:"split"}}),a("yes-no",{attrs:{label:t.$t(t.i18nPrefix+"show_ratio")},model:{value:t.showRatio,callback:function(e){t.showRatio=e},expression:"showRatio"}})],1),a("div",{staticClass:"column is-half"},[a("b-field",{directives:[{name:"show",rawName:"v-show",value:t.split,expression:"split"}],attrs:{label:t.$t("components.trade.split_value",{count:t.maxSplitValue}),"label-for":t.splitValueId,type:t.haveError("splitValue")}},[a("b-input",{attrs:{id:t.splitValueId,type:"number",min:"0",max:t.maxSplitValue,name:"splitValue",autocomplete:"off"},model:{value:t.splitValue,callback:function(e){t.splitValue=t._n(e)},expression:"splitValue"}})],1)],1)]),a("div",{staticClass:"table-wrapper"},[a("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th1")))]),a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th2")))]),a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th3")))]),a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th4")))]),a("th",{directives:[{name:"show",rawName:"v-show",value:t.showRatio,expression:"showRatio"}]},[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.ratio")))]),a("th",{directives:[{name:"show",rawName:"v-show",value:t.split,expression:"split"}]},[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.split")))])])]),a("tbody",t._l(t.agesGoods,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(t.$t("foe_data.age."+s)))]),a("td",t._l(e.goods,function(e){return a("figure",{staticClass:"image-inherit image is-24x24"},[a("img",{attrs:{src:"/img/foe/goods/"+e.key+".png",alt:t.$t("foe_data.goods."+e.key),title:t.$t("foe_data.goods."+e.key)}})])})),a("td",[a("b-field",{attrs:{type:t.haveError(s)}},[a("b-input",{attrs:{type:"number",min:"0",name:s+"_value",autocomplete:"off"},on:{input:function(e){e>0?t.getBestRates(s):t.resetFormIfAllZero(s)}},model:{value:t.values[s],callback:function(e){t.$set(t.values,s,t._n(e))},expression:"values[key]"}})],1)],1),a("td",[t.$data.results[s].show?a("p",[t._v(t._s(t.$data.results[s].value))]):t._e()]),a("td",{directives:[{name:"show",rawName:"v-show",value:t.showRatio,expression:"showRatio"}]},[a("p",[t._v(t._s(t.$data.results[s].ratio))])]),a("td",{directives:[{name:"show",rawName:"v-show",value:t.split,expression:"split"}]},[t.$data.results[s].show?a("p",[t._v(t._s(t.$data.results[s].split))]):t._e()])])}))])])])},[],!1,null,null,null);d.options.__file="index.vue";e.a=d.exports},360:function(t,e,a){"use strict";a(19),a(80);var s=a(0),r=a(339),i=a(11),o={name:"trade",props:{tradeInput:{type:Object,required:!0}},data:function(){var t=Object.keys(this.$props.tradeInput.value)[0];return{i18nPrefix:"components.trade.",iHave:t,iWant:t,iHaveId:"iHave"+this._uid,iWantId:"iWant"+this._uid,splitValueId:"splitValue"+this._uid,splitValue:1e3,maxSplitValue:1e3,valueId:"iWantValue"+this._uid,value:0,result:[],errors:{iHave:!1,iWant:!1,splitValue:!1,value:!1},warnings:{iHave:!1,iWant:!1,splitValue:!1,value:!1}}},watch:{iHave:function(t){Object.keys(this.$props.tradeInput.value).indexOf(t)>=0?(this.$data.errors.iHave=!1,this.compute()):this.$data.errors.iHave=!0},iWant:function(t){Object.keys(this.$props.tradeInput.value).indexOf(t)>=0?(this.$data.errors.iWant=!1,this.compute()):this.$data.errors.iWant=!0},splitValue:function(t){i.a.inRange(t,1,1e3)?(this.$data.errors.splitValue=!1,this.compute()):this.$data.errors.splitValue=!0},value:function(t){t>=0?(t<=1e3?(this.$data.errors.value=!1,this.$data.warnings.value=!1):(this.$data.errors.value=!1,this.$data.warnings.value=!0),this.compute()):this.$data.errors.value=!0}},methods:{haveError:function(t){return this.$data.errors[t]?"is-danger":this.$data.warnings[t]?"is-warning":""},compute:function(){0===this.$data.value?s.default.set(this.$data,"result",[]):s.default.set(this.$data,"result",Object(r.b)(this.$props.tradeInput.value,this.$data.iHave,this.$data.iWant,this.$data.value,this.$data.splitValue))}}},n=a(4),u=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"title is-4"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"label.i_have"),"label-for":t.iHaveId}},[a("b-select",{attrs:{id:t.iHaveId,expanded:""},model:{value:t.iHave,callback:function(e){t.iHave=e},expression:"iHave"}},t._l(t.tradeInput.value,function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+s)))])}))],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"split_value",{count:t.maxSplitValue}),"label-for":t.splitValueId,type:t.haveError("splitValue")}},[a("b-input",{attrs:{id:t.splitValueId,type:"number",min:"0",max:t.maxSplitValue,name:"splitValue",autocomplete:"off"},model:{value:t.splitValue,callback:function(e){t.splitValue=t._n(e)},expression:"splitValue"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"label.i_want"),"label-for":t.iWantId}},[a("b-select",{attrs:{id:t.iWantId,expanded:""},model:{value:t.iWant,callback:function(e){t.iWant=e},expression:"iWant"}},t._l(t.tradeInput.value,function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+s)))])}))],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"label.amount"),type:t.haveError("value"),"label-for":t.valueId}},[a("b-input",{attrs:{id:t.valueId,type:"number",min:"0",name:t.valueId,autocomplete:"off"},model:{value:t.value,callback:function(e){t.value=t._n(e)},expression:"value"}})],1)],1)]),t.result.length>0?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"message.result",{from:t.$formatNumber(t.result[0].amount),to:t.$formatNumber(t.value),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+t.iHave),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+t.iWant),count:t.splitValue})))]):t._e(),t.result.length>1?a("ul",t._l(t.result,function(e,s){return s<t.result.length-1?a("li",{key:s},[e.split[1].from>0?a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.multi",{count:t.$formatNumber(e.split[0].count),valueFrom:t.$formatNumber(e.split[0].from),valueTo:t.$formatNumber(e.split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[s+1].key),valueFromSingle:t.$formatNumber(e.split[1].from),valueToSingle:t.$formatNumber(e.split[1].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[s+1].key)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(e.amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key)})))]):a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.common",{count:t.$formatNumber(e.split[0].count),valueFrom:t.$formatNumber(e.split[0].from),valueTo:t.$formatNumber(e.split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[s+1].key),valueFromSingle:t.$formatNumber(e.split[1].from),valueToSingle:t.$formatNumber(e.split[1].to)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(e.amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key)})))])]):t._e()})):t._e(),1===t.result.length?a("ul",[a("li",[t.result[0].split[1].from>0?a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.multi",{count:t.$formatNumber(t.result[0].split[0].count),valueFrom:t.$formatNumber(t.result[0].split[0].from),valueTo:t.$formatNumber(t.result[0].split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),valueFromSingle:t.$formatNumber(t.result[0].split[1].from),valueToSingle:t.$formatNumber(t.result[0].split[1].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(t.result[0].amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key)})))]):a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.common",{count:t.$formatNumber(t.result[0].split[0].count),valueFrom:t.$formatNumber(t.result[0].split[0].from),valueTo:t.$formatNumber(t.result[0].split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),valueFromSingle:t.$formatNumber(t.result[0].split[1].from),valueToSingle:t.$formatNumber(t.result[0].split[1].to)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(t.result[0].amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key)})))])])]):t._e()])},[],!1,null,null,null);u.options.__file="index.vue";e.a=u.exports},554:function(t,e,a){var s;t.exports=function t(e,a,r){function i(n,u){if(!a[n]){if(!e[n]){var l="function"==typeof s&&s;if(!u&&l)return s(n,!0);if(o)return o(n,!0);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}var h=a[n]={exports:{}};e[n][0].call(h.exports,function(t){var a=e[n][1][t];return i(a||t)},h,h.exports,t,e,a,r)}return a[n].exports}for(var o="function"==typeof s&&s,n=0;n<r.length;n++)i(r[n]);return i}({1:[function(t,e,a){var s,r,i,o,n,u={}.hasOwnProperty;s=t("./PriorityQueue/AbstractPriorityQueue"),r=t("./PriorityQueue/ArrayStrategy"),o=t("./PriorityQueue/BinaryHeapStrategy"),i=t("./PriorityQueue/BHeapStrategy"),(n=function(t){function e(t){t||(t={}),t.strategy||(t.strategy=o),t.comparator||(t.comparator=function(t,e){return(t||0)-(e||0)}),e.__super__.constructor.call(this,t)}return function(t,e){for(var a in e)u.call(e,a)&&(t[a]=e[a]);function s(){this.constructor=t}s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype}(e,t),e}(s)).ArrayStrategy=r,n.BinaryHeapStrategy=o,n.BHeapStrategy=i,e.exports=n},{"./PriorityQueue/AbstractPriorityQueue":2,"./PriorityQueue/ArrayStrategy":3,"./PriorityQueue/BHeapStrategy":4,"./PriorityQueue/BinaryHeapStrategy":5}],2:[function(t,e,a){e.exports=function(){function t(t){var e;if(null==(null!=t?t.strategy:void 0))throw"Must pass options.strategy, a strategy";if(null==(null!=t?t.comparator:void 0))throw"Must pass options.comparator, a comparator";this.priv=new t.strategy(t),this.length=(null!=t&&null!=(e=t.initialValues)?e.length:void 0)||0}return t.prototype.queue=function(t){this.length++,this.priv.queue(t)},t.prototype.dequeue=function(t){if(!this.length)throw"Empty queue";return this.length--,this.priv.dequeue()},t.prototype.peek=function(t){if(!this.length)throw"Empty queue";return this.priv.peek()},t.prototype.clear=function(){return this.length=0,this.priv.clear()},t}()},{}],3:[function(t,e,a){var s;s=function(t,e,a){var s,r,i;for(r=0,s=t.length;r<s;)a(t[i=r+s>>>1],e)>=0?r=i+1:s=i;return r},e.exports=function(){function t(t){var e;this.options=t,this.comparator=this.options.comparator,this.data=(null!=(e=this.options.initialValues)?e.slice(0):void 0)||[],this.data.sort(this.comparator).reverse()}return t.prototype.queue=function(t){var e;e=s(this.data,t,this.comparator),this.data.splice(e,0,t)},t.prototype.dequeue=function(){return this.data.pop()},t.prototype.peek=function(){return this.data[this.data.length-1]},t.prototype.clear=function(){this.data.length=0},t}()},{}],4:[function(t,e,a){e.exports=function(){function t(t){var e,a,s,r,i,o,n,u;for(this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.pageSize=(null!=t?t.pageSize:void 0)||512,this.length=0,n=0;1<<n<this.pageSize;)n+=1;if(1<<n!==this.pageSize)throw"pageSize must be a power of two";for(this._shift=n,this._emptyMemoryPageTemplate=e=[],a=0,i=this.pageSize;0<=i?a<i:a>i;0<=i?++a:--a)e.push(null);if(this._memory=[],this._mask=this.pageSize-1,t.initialValues)for(o=t.initialValues,s=0,r=o.length;s<r;s++)u=o[s],this.queue(u)}return t.prototype.queue=function(t){this.length+=1,this._write(this.length,t),this._bubbleUp(this.length,t)},t.prototype.dequeue=function(){var t,e;return t=this._read(1),e=this._read(this.length),this.length-=1,this.length>0&&(this._write(1,e),this._bubbleDown(1,e)),t},t.prototype.peek=function(){return this._read(1)},t.prototype.clear=function(){this.length=0,this._memory.length=0},t.prototype._write=function(t,e){var a;for(a=t>>this._shift;a>=this._memory.length;)this._memory.push(this._emptyMemoryPageTemplate.slice(0));return this._memory[a][t&this._mask]=e},t.prototype._read=function(t){return this._memory[t>>this._shift][t&this._mask]},t.prototype._bubbleUp=function(t,e){var a,s,r,i;for(a=this.comparator;t>1&&(s=t&this._mask,t<this.pageSize||s>3?r=t&~this._mask|s>>1:s<2?(r=t-this.pageSize>>this._shift,r+=r&~(this._mask>>1),r|=this.pageSize>>1):r=t-2,i=this._read(r),!(a(i,e)<0));)this._write(r,e),this._write(t,i),t=r},t.prototype._bubbleDown=function(t,e){var a,s,r,i,o;for(o=this.comparator;t<this.length;)if(t>this._mask&&!(t&this._mask-1)?a=s=t+2:t&this.pageSize>>1?(a=(t&~this._mask)>>1,a=1+(a|=t&this._mask>>1)<<this._shift,s=a+1):(a=t+(t&this._mask),s=a+1),a!==s&&s<=this.length)if(r=this._read(a),i=this._read(s),o(r,e)<0&&o(r,i)<=0)this._write(a,e),this._write(t,r),t=a;else{if(!(o(i,e)<0))break;this._write(s,e),this._write(t,i),t=s}else{if(!(a<=this.length))break;if(r=this._read(a),!(o(r,e)<0))break;this._write(a,e),this._write(t,r),t=a}},t}()},{}],5:[function(t,e,a){e.exports=function(){function t(t){var e;this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.length=0,this.data=(null!=(e=t.initialValues)?e.slice(0):void 0)||[],this._heapify()}return t.prototype._heapify=function(){var t,e,a;if(this.data.length>0)for(t=e=1,a=this.data.length;1<=a?e<a:e>a;t=1<=a?++e:--e)this._bubbleUp(t)},t.prototype.queue=function(t){this.data.push(t),this._bubbleUp(this.data.length-1)},t.prototype.dequeue=function(){var t,e;return e=this.data[0],t=this.data.pop(),this.data.length>0&&(this.data[0]=t,this._bubbleDown(0)),e},t.prototype.peek=function(){return this.data[0]},t.prototype.clear=function(){this.length=0,this.data.length=0},t.prototype._bubbleUp=function(t){for(var e,a;t>0&&(e=t-1>>>1,this.comparator(this.data[t],this.data[e])<0);)a=this.data[e],this.data[e]=this.data[t],this.data[t]=a,t=e},t.prototype._bubbleDown=function(t){var e,a,s,r,i;for(e=this.data.length-1;r=1+(a=1+(t<<1)),s=t,a<=e&&this.comparator(this.data[a],this.data[s])<0&&(s=a),r<=e&&this.comparator(this.data[r],this.data[s])<0&&(s=r),s!==t;)i=this.data[s],this.data[s]=this.data[t],this.data[t]=i,t=s},t}()},{}]},{},[1])(1)}}]);