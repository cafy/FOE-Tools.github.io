(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{191:function(t,e,a){"use strict";function r(t){this.message="The value at index ".concat(t," should not be greater than the previous place participation"),this.index=t}e.a={Submit:function(t,e,a,i){if(!(t<1||t>a.length))return function(t,e,a,i){var s={};s.cost=t[e-1].cost,s.investment=[],i||(i=Array.apply(null,Array(t[e-1].reward.length)).map(function(){return 0}));for(var o=!1,n=0,l=0,c=0;c<t[e-1].reward.length;c++){var p={},u=1+a[c]/100;if(p.reward=t[e-1].reward[c],p.participation=0,p.reward>0)p.participation=Math.round(p.reward*u);else if(!o){if(i[c]>s.investment[s.investment.length-1].participation)throw new r(c);p.participation=i[c]}p.preparation=s.cost-(n+2*p.participation),p.preparation=p.preparation<0?0:p.preparation,n+=p.participation,l=Math.max(l,p.preparation),p.cumulativeInvestment=n+l,!o&&n+l>=s.cost&&(o=!0),s.investment[s.investment.length]=p}return s.totalPreparations=s.cost-n,s.totalPreparations=s.totalPreparations<0?0:s.totalPreparations,s.level=e,s}(a,t,e,i)},SubmitRange:function(t,e,a,r){if(!(t<1||t>r.length||e<1||e>r.length||t>e)){for(var i={global:{cost:0,totalPreparations:0},levels:[]},s=t;s<=e;s++)i.levels.push(this.Submit(s,a,r,null)),i.global.cost+=i.levels[i.levels.length-1].cost,i.global.totalPreparations+=i.levels[i.levels.length-1].totalPreparations;return i}},ComputeSecurePlace:function(t,e,a,r,i,s){var o=Math.ceil((t-e-(r-a))/2)+r;if(o<=r)return{fp:-1,roi:0};var n=0;if(i>=0&&s>0){var l=o>a?o:a,c=(100+i)/100;n=Math.round(c*s-l)}return{fp:o,roi:n}}}},325:function(t,e,a){"use strict";a(29);var r=a(11),i=a(191),s={levelCost:"sp_lc",currentDeposits:"sp_cd",yourParticipation:"sp_yp",otherParticipation:"sp_op",yourArcBonus:"sp_yab",fpTargetReward:"sp_ftr"},o={levelCost:{comparator:[">",0],type:"int"},currentDeposits:{comparator:[">=",0],type:"int"},yourParticipation:{comparator:[">=",0],type:"int"},otherParticipation:{comparator:[">=",0],type:"int"},yourArcBonus:{comparator:[">=",0],type:"float"},fpTargetReward:{comparator:[">=",0],type:"int"}},n={name:"SecurePosition",props:{levelData:{type:Object,default:null},canPermalink:{type:Boolean,default:!1},ns:{type:String,default:""}},data:function(){var t={i18nPrefix:"components.secure_position.",fp:0,yourParticipation:0,otherParticipation:0,levelCost:this.haveInputLevelCost()?this.$props.levelData.cost:0,currentDeposits:0,yourArcBonus:void 0===this.$cookies.get("yourArcBonus")?0:this.$cookies.get("yourArcBonus"),fpTargetReward:0,roi:0,formValid:!1,errors:{levelCost:!1,currentDeposits:!1,yourParticipation:!1,otherParticipation:!1,yourArcBonus:!1,fpTargetReward:!1},change:this.haveInputLevelCost()};return Object.assign(t,this.checkQuery()),this.$store.commit("ADD_URL_QUERY",{key:s.levelCost,value:t.levelCost,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:s.currentDeposits,value:t.currentDeposits,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:s.yourParticipation,value:t.yourParticipation,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:s.otherParticipation,value:t.otherParticipation,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:s.yourArcBonus,value:t.yourArcBonus,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:s.fpTargetReward,value:t.fpTargetReward,ns:this.$props.ns}),t},computed:{isPermalink:function(){return this.$store.state.isPermalink},permaLink:function(){return{path:this.$i18n.path("secure-position/"),query:this.$store.getters.getUrlQuery(this.$props.ns)}}},watch:{levelData:function(t){this.$data.change=!0,this.$data.levelCost=t.cost},levelCost:function(t,e){this.$data.change=!0,r.a.handlerForm(this,"levelCost",0===t.length?0:t,e,o.levelCost.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:s.levelCost,value:t,ns:this.$props.ns}),this.calculate())},currentDeposits:function(t,e){this.$data.change=!0,r.a.handlerForm(this,"currentDeposits",0===t.length?0:t,e,o.currentDeposits.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:s.currentDeposits,value:t,ns:this.$props.ns}),this.calculate())},yourParticipation:function(t,e){this.$data.change=!0,r.a.handlerForm(this,"yourParticipation",0===t.length?0:t,e,o.yourParticipation.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:s.yourParticipation,value:t,ns:this.$props.ns}),this.calculate())},otherParticipation:function(t,e){this.$data.change=!0,""===t?this.$data.otherParticipation=0:r.a.handlerForm(this,"otherParticipation",0===t.length?0:t,e,o.otherParticipation.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:s.otherParticipation,value:t,ns:this.$props.ns}),this.calculate())},yourArcBonus:function(t,e){this.$data.change=!0,r.a.handlerForm(this,"yourArcBonus",0===t.length?0:t,e,o.yourArcBonus.comparator,!this.isPermalink,"/","float")===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:s.yourArcBonus,value:t,ns:this.$props.ns}),this.calculate())},fpTargetReward:function(t,e){this.$data.change=!0,this.haveInputLevelCost()&&(this.$props.levelData.investment.map(function(t){return t.reward}).indexOf(t)>=0?(this.$data.errors.fpTargetReward=!1,this.$store.commit("UPDATE_URL_QUERY",{key:s.fpTargetReward,value:t,ns:this.$props.ns}),this.calculate()):this.$data.errors.fpTargetReward=!0),r.a.handlerForm(this,"fpTargetReward",0===t.length?0:t,e,o.fpTargetReward.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:s.fpTargetReward,value:t,ns:this.$props.ns}),this.calculate())}},methods:{haveInputLevelCost:function(){return null!==this.$props.levelData},getNumberOfRemainingPoints:function(){return isNaN(this.$data.levelCost)||isNaN(this.$data.currentDeposits)||this.$data.levelCost-this.$data.currentDeposits<0?this.$t("components.secure_position.block_place.unknown"):this.$data.levelCost-this.$data.currentDeposits},calculate:function(){if(this.$data.change&&this.checkFormValid()){var t=i.a.ComputeSecurePlace(this.$data.levelCost,this.$data.currentDeposits,this.$data.yourParticipation,this.$data.otherParticipation,this.$data.yourArcBonus,this.$data.fpTargetReward);this.$data.fp=t.fp,this.$data.roi=t.roi}},checkFormValid:function(){return this.$data.formValid=!0,this.$data.errors.levelCost=!1,this.$data.errors.currentDeposits=!1,this.$data.errors.yourParticipation=!1,this.$data.errors.otherParticipation=!1,this.$data.levelCost===this.$data.currentDeposits===this.$data.yourParticipation===this.$data.otherParticipation&&0===this.$data.levelCost||(this.$data.levelCost>0||(this.$data.formValid=!1,this.$data.errors.levelCost=!0),this.$data.currentDeposits<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.levelCost=!0,this.$data.errors.currentDeposits=!0),this.$data.yourParticipation<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.levelCost=!0),this.$data.otherParticipation<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.otherParticipation=!0,this.$data.errors.levelCost=!0),this.$data.yourParticipation+this.$data.otherParticipation<=this.$data.currentDeposits||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.otherParticipation=!0,this.$data.errors.currentDeposits=!0),this.$data.formValid)},haveError:function(t){return this.$data.errors[t]?"is-danger":""},checkQuery:function(){var t,e={},a=r.a.FormCheck.NO_CHANGE;for(var i in o)(t=r.a.checkFormNumeric(this.$route.query[s[i]],-1,o[i].comparator,o[i].type)).state===r.a.FormCheck.VALID&&(a=r.a.FormCheck.VALID,e[i]=t.value);return a===r.a.FormCheck.VALID&&(this.$store.commit("IS_PERMALINK",!0),e.change=!0),e}},mounted:function(){this.calculate()}},l=a(4),c=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.title")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.canPermalink,expression:"canPermalink"}],staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.permaLink,exact:""}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("p",[t._v(t._s(t.$t("utils.description.p1")))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.level_cost"),"label-for":"splevelCost",type:t.haveError("levelCost")}},[a("b-input",{attrs:{type:"number",min:"0",name:"level-cost",id:"splevelCost",autocomplete:"off",disabled:t.haveInputLevelCost(),autofocus:t.canPermalink},model:{value:t.levelCost,callback:function(e){t.levelCost=t._n(e)},expression:"levelCost"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.current_deposits"),"label-for":"spCurrentDeposits",type:t.haveError("currentDeposits")}},[a("b-input",{attrs:{type:"number",min:"0",name:"current-deposits",id:"spCurrentDeposits",autocomplete:"off"},model:{value:t.currentDeposits,callback:function(e){t.currentDeposits=t._n(e)},expression:"currentDeposits"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_participation"),"label-for":"spYourParticipation",type:t.haveError("yourParticipation")}},[a("b-input",{attrs:{type:"number",min:"0",name:"your-participation",id:"spYourParticipation",autocomplete:"off"},model:{value:t.yourParticipation,callback:function(e){t.yourParticipation=t._n(e)},expression:"yourParticipation"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.other_participation"),"label-for":"spOtherParticipation",type:t.haveError("otherParticipation")}},[a("b-input",{attrs:{type:"number",min:"0",name:"other-participation",id:"spOtherParticipation",autocomplete:"off"},model:{value:t.otherParticipation,callback:function(e){t.otherParticipation=t._n(e)},expression:"otherParticipation"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_arc_bonus"),"label-for":"spYourArcBonus",type:t.haveError("yourArcBonus")}},[a("b-input",{attrs:{type:"number",min:"0",step:"0.1",name:"your-arc-bonus",id:"spYourArcBonus",autocomplete:"off"},model:{value:t.yourArcBonus,callback:function(e){t.yourArcBonus=t._n(e)},expression:"yourArcBonus"}})],1)],1),a("div",{staticClass:"column is-half"},[t.haveInputLevelCost()?a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.target_reward"),"label-for":"fpTargetReward",type:t.haveError("fpTargetReward")}},[a("b-select",{attrs:{id:"fpTargetReward",name:"fp-target-reward",expanded:""},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=e},expression:"fpTargetReward"}},t._l(t.levelData.investment,function(e,r){return a("option",{key:r,attrs:{id:"option_"+r,autocomplete:"off"},domProps:{value:e.reward}},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.place",{place:r+1,count:e.reward})))])}))],1):a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.fp_target_reward"),"label-for":"spFpTargetReward",type:t.haveError("fpTargetReward")}},[a("b-input",{attrs:{type:"number",min:"0",step:"5",name:"fp-target-reward",id:"spFpTargetReward",autocomplete:"off"},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=t._n(e)},expression:"fpTargetReward"}})],1)],1)]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_complete_level",{count:t.getNumberOfRemainingPoints()})))]),t.formValid?t.fp>0?a("div",[t.fp<=t.yourParticipation?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.already_blocked")))]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.default",{count:t.fp})))]),t.fp>=t.yourParticipation&&t.fp-t.yourParticipation>0&&t.yourParticipation>0?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.fp_to_secure_html",{count:t.fp-t.yourParticipation})))]):t._e()]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.cant_block")))]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.error")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.fp>0&&t.yourArcBonus>=0&&t.fpTargetReward>0,expression:"(fp > 0) && (yourArcBonus >= 0) && (fpTargetReward > 0)"}],staticClass:"margin-top-one-em"},[a("article",{staticClass:"message",class:{"is-success":t.roi>0,"is-danger":t.roi<0}},[a("div",{staticClass:"message-body has-text-dark"},[t.roi>0?a("p",[t._m(0),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.profit",{count:Math.abs(t.roi)})))]):t.roi<0?a("p",[t._m(1),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.loss",{count:Math.abs(t.roi)})))]):a("p",[t._m(2),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.neutral")))])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium has-text-success",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium has-text-danger",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-exchange-alt"})])}],!1,null,null,null);c.options.__file="index.vue";e.a=c.exports},792:function(t,e,a){"use strict";a.r(e);var r=a(325),i="routes.secure_position.";e.default={head:function(){return this.$store.commit("SET_HERO",{title:i+"hero.title",subtitle:i+"hero.subtitle"}),{title:this.$t(i+"title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","secure_position"),{i18nPrefix:i}},components:{securePosition:r.a}}}}]);