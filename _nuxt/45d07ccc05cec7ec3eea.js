(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{337:function(t,n,e){"use strict";var o=e(350),r=e.n(o),a=e(353),s=e.n(a),i=e(356),u=e.n(i),l={name:"Remark",props:{markdown:{type:String,required:!0}},data:function(){return{value:""}},watch:{markdown:function(){var t=this;r()().use(u.a).use(s.a).process(this.$props.markdown,function(n,e){n?console.error(n):t.$data.value=e.contents})}}},c=e(4),d=Object(c.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.value)}})},[],!1,null,null,null);d.options.__file="index.vue";n.a=d.exports},50:function(t,n,e){"use strict";e.r(n);var o=e(337),r={head:function(){return{title:this.$t("routes.changelog.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","changelog"),this.$store.commit("RESTORE_HERO"),{url:"https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/dev/CHANGELOG.md",markdown:""}},mounted:function(){var t=new XMLHttpRequest,n=this;t.open("GET",this.$data.url,!0),t.onload=function(){4===t.readyState&&(200===t.status?n.$data.markdown=t.responseText:console.error(t.statusText))},t.onerror=function(){console.error(t.statusText)},t.send(null)},components:{Remark:o.a}},a=e(4),s=Object(a.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content",staticStyle:{"min-height":"100px"},attrs:{id:"changelog"}},[e("b-loading",{attrs:{"is-full-page":!1,active:0===t.markdown.length},on:{"update:active":function(n){t.$set(t.markdown,"length === 0",n)}}}),e("remark",{attrs:{markdown:t.markdown}})],1)},[],!1,null,null,null);s.options.__file="index.vue";n.default=s.exports}}]);