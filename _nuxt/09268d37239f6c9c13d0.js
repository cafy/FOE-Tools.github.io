(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{334:function(t,s,i){"use strict";i(335)("link",function(t){return function(s){return t(this,"a","href",s)}})},335:function(t,s,i){var e=i(6),o=i(13),l=i(20),n=/"/g,r=function(t,s,i,e){var o=String(l(t)),r="<"+s;return""!==i&&(r+=" "+i+'="'+String(e).replace(n,"&quot;")+'"'),r+">"+o+"</"+s+">"};t.exports=function(t,s){var i={};i[t]=s(r),e(e.P+e.F*o(function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}),"String",i)}},794:function(t,s,i){"use strict";i.r(s);i(334);var e=i(11);s.default={head:function(){return{title:this.$t("routes.home.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","home"),this.$store.commit("RESTORE_HERO"),{i18nPrefix:"routes.home.",content:[{title:"utils.content.tools",id:"tools",content:e.a.splitArray([{title:"tools.gb_investment.title",subtitle:"tools.gb_investment.subtitle",link:this.$store.state.routes.gb_investment.link},{title:"tools.secure_position.title",subtitle:"tools.secure_position.subtitle",link:this.$store.state.routes.secure_position.link},{title:"tools.cf_calculator.title",subtitle:"tools.cf_calculator.subtitle",link:this.$store.state.routes.cf_calculator.link},{title:"tools.trade.title",subtitle:"tools.trade.subtitle",link:this.$store.state.routes.trade.link},{title:"tools.campaign_cost.title",subtitle:"tools.campaign_cost.subtitle",link:this.$store.state.routes.campaign_cost.link}],2,!0)},{title:"utils.content.statistics",id:"statistics",content:e.a.splitArray([{title:"statistics.gb_statistics.title",subtitle:"statistics.gb_statistics.subtitle",link:this.$store.state.routes.gb_statistics.link},{title:"statistics.gb_forecast_cost.title",subtitle:"statistics.gb_forecast_cost.subtitle",link:this.$store.state.routes.gb_forecast_cost.link}],2,!0)}]}}}}}]);