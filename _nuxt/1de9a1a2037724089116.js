(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(t,e,i){"use strict";i.r(e);var s=i(11),n=i(192),l="routes.gb_investment_gb_chooser.",a={head:function(){return this.$store.commit("SET_HERO",{title:l+"hero.title",subtitle:l+"hero.subtitle"}),{title:this.$t(l+"title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","gb_investment"),{i18nPrefix:l,GBsByAge:s.a.splitArray(n.gbList,2,!0)}},methods:{getGbStyle:function(t){return t+"-header"}}},r=i(4),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"choose_gb.title")))]),t._l(t.GBsByAge,function(e){return i("div",{staticClass:"tile is-ancestor"},t._l(e,function(e){return i("div",{staticClass:"tile is-parent"},[null!==e?i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title is-4",class:t.getGbStyle(e.key)},[t._v(t._s(t.$t("foe_data.age."+e.key)))]),i("div",{staticClass:"content"},[i("ul",t._l(e.gbs,function(e){return i("li",[i("a",{attrs:{href:t.$i18n.path("gb-investment/"+e+"/")}},[t._v(t._s(t.$t("foe_data.gb."+e)))])])}))])]):t._e()])}))})],2)},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports}}]);