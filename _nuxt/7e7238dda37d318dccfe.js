(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28],{115:function(t,e,a){"use strict";a.r(e);var r=a(53).default,i=a(4),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="trade.vue";e.default=s.exports},53:function(t,e,a){"use strict";a.r(e);var r=a(358),i=a(360),s=a(339),l={head:function(){return this.$store.commit("SET_HERO",{title:"routes.trade.hero.title",subtitle:"routes.trade.hero.subtitle"}),{title:this.$t("routes.trade.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","trade"),this.$store.commit("RESTORE_HERO"),{i18nPrefix:"routes.trade.",tab:1,fairTradeArray:s.a,simpleTradeArray:s.c}},components:{SimpleTrade:r.a,Trade:i.a}},n=a(4),d=Object(n.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-tabs",{attrs:{type:"is-toggle",expanded:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.trade_2_1.title")}},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"tab.trade_2_1.title")))]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"tab.trade_2_1.message")))]),a("trade",{attrs:{"trade-input":{age:!0,value:t.simpleTradeArray}}}),a("simple-trade",{attrs:{"trade-array":t.simpleTradeArray}})],1),a("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.fair_trade.title")}},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"tab.fair_trade.title")))]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"tab.fair_trade.message")))]),a("trade",{attrs:{"trade-input":{age:!0,value:t.fairTradeArray}}}),a("simple-trade",{attrs:{"trade-array":t.fairTradeArray}})],1)],1)},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports}}]);