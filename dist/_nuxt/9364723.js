(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(t,r,e){var content=e(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("b567ae6c",content,!0,{sourceMap:!1})},271:function(t,r,e){var map={"./apibook-logo.png":272};function n(t){var r=o(t);return e(r)}function o(t){if(!e.o(map,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=271},272:function(t,r,e){t.exports=e.p+"img/apibook-logo.ec98202.png"},273:function(t,r,e){"use strict";e(268)},274:function(t,r,e){var n=e(41)(!1);n.push([t.i,".articles{display:flex;flex-wrap:wrap;justify-content:space-between}.articles .article{width:30%}@media(max-width:1024px){.articles .article{width:49%}}@media(max-width:640px){.articles .article{width:100%}}.project-wrapper{background-color:var(--bg-primary);border-radius:10px;width:100%;margin:1rem 0;box-shadow:1px 1px 5px 0 rgba(1,1,1,.05);transition:transform .25s ease,box-shadow .25s ease,color .25s ease}.project-wrapper img{border-radius:10px 10px 0 0;width:100%}.project-wrapper h3{text-align:center}.project-wrapper .details{padding:2rem}.project-wrapper:hover{transform:translateY(-.25rem);box-shadow:0 2px 4px rgba(46,41,51,.08),0 5px 10px rgba(71,63,79,.16)}",""]),t.exports=n},290:function(t,r,e){"use strict";e.r(r);var n=e(8),o=(e(48),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$content,n=t.params,r.next=3,e("projects",n.slug).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return o=r.sent,r.abrupt("return",{articles:o});case 5:case"end":return r.stop()}}),r)})))()}}),c=(e(273),e(23)),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("h2",[t._v("Les projets")]),t._v(" "),n("div",{staticClass:"articles"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"article"},[n("nuxt-link",{attrs:{to:"portfolio/"+article.slug}},[n("div",{staticClass:"project-wrapper"},[n("img",{attrs:{src:e(271)("./"+article.img),alt:"thumb du projet"}}),t._v(" "),n("div",{staticClass:"details"},[n("h3",[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.description))])])])])],1)})),0)])}),[],!1,null,null,null);r.default=component.exports}}]);