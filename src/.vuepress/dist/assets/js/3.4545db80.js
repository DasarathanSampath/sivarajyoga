(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{303:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));n(45),n(65),n(305),n(325),n(176),n(64),n(93),n(94),n(28),n(97),n(166);var i=/#.*$/,a=/\.(md|html)$/,s=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",a=o(t);return s.test(a)?t:a+".html"+n}function d(t,e){var n=decodeURIComponent(t.hash),a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=o(e),a=0;a<t.length;a++)if(o(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:h(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return m(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return"auto"===u?m(t):u?u.map((function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,i,a+1)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}function m(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},326:function(t,e,n){},329:function(t,e,n){},334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){},340:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){},343:function(t,e,n){},344:function(t,e,n){},345:function(t,e,n){},346:function(t,e,n){t.exports=n.p+"assets/img/call.69e4519a.svg"},347:function(t,e,n){},354:function(t,e,n){"use strict";n.r(e);n(91);var i=n(303),a={name:"SidebarGroup",components:{DropdownTransition:n(356).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(354).default},methods:{isActive:i.e}},s=(n(383),n(44)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(384),n(64);function o(t,e,n,i,a){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return a>2&&(s.style={"padding-left":a+"rem"}),t("RouterLink",s,n)}function l(t,e,n,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,a,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,d=u.sidebarDepth,p=Object(i.e)(s,h.path),f="auto"===h.type?p||h.children.some((function(t){return Object(i.e)(s,h.basePath+"#"+t.slug)})):p,m="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[a.frontmatter.sidebarDepth,d,c.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[m,l(t,h.children,h.basePath,s,v)]:(f||g)&&h.headers&&!i.d.test(h.path)?[m,l(t,Object(i.c)(h.headers),h.path,s,v)]:m}};n(385);function u(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),a=e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||a}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},d=Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=d.exports},356:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(375),n(44)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},360:function(t,e,n){"use strict";n(326)},369:function(t,e,n){"use strict";n(329)},374:function(t,e,n){"use strict";n(334)},375:function(t,e,n){"use strict";n(335)},376:function(t,e,n){"use strict";n(336)},377:function(t,e,n){"use strict";n(337)},378:function(t,e,n){"use strict";n(338)},379:function(t,e,n){"use strict";n(340)},381:function(t,e,n){"use strict";n(341)},382:function(t,e,n){"use strict";n(342)},383:function(t,e,n){"use strict";n(343)},385:function(t,e,n){"use strict";n(344)},386:function(t,e,n){"use strict";n(345)},387:function(t,e,n){"use strict";n(347)},388:function(t,e,n){t.exports=n.p+"assets/img/namecard.054301e2.png"},406:function(t,e,n){"use strict";n.r(e);n(357),n(91),n(92);var i=n(303),a={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(44),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:r},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(360),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(361),n(403)),u=n(90),h=(n(9),n(10),n(14),n(165),n(365),n(45),n(65),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var i=this;Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,404,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,405,7))]).then((function(n){var a=Object(u.a)(n,1)[0];a=a.default;var s=t.algoliaOptions,r=void 0===s?{}:s;a(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object(c.a)(Object(c.a)({},r),{},{facetFilters:["lang:".concat(e)].concat(r.facetFilters||[])}),handleSelected:function(t,e,n){var a=new URL(n.url),s=a.pathname,r=a.hash,o=s.replace(i.$site.base,"/"),l=decodeURIComponent(r);i.$router.push("".concat(o).concat(l))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),d=(n(369),Object(s.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports),p=n(402),f=(n(374),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),m=n(42),v=(n(64),n(305),n(331),n(332),n(356)),g=n(186),b=n.n(g),_={name:"DropdownLink",components:{NavLink:r,DropdownTransition:v.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return b()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},C=(n(376),{name:"NavLinks",components:{NavLink:r,DropdownLink:Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===r}))||(r=s)),{text:l,link:r}}))};return[].concat(Object(m.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),k=(n(377),Object(s.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function $(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var x={name:"Navbar",components:{SidebarButton:f,NavLinks:k,SearchBox:p.a,AlgoliaSearchBox:d},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt($(this.$el,"paddingLeft"))+parseInt($(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},L=(n(378),Object(s.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)])}),[],!1,null,null,null).exports),y=n(339),O=n.n(y),w={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=O()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,s=e.docsBranch,r=void 0===s?"master":s,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,r,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,a,s){if(/bitbucket.org/.test(e))return e.replace(i.a,"")+"/src"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(i.a,"")+"/-/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s:(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s}}},S=(n(379),Object(s.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),N=n(380),j=n.n(N),I={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return T(E.PREV,this)},next:function(){return T(E.NEXT,this)}}};var E={NEXT:{resolveLink:function(t,e){return P(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return P(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function T(t,e){var n=e.$themeConfig,a=e.$page,s=e.$route,r=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(n),d=u(a),p=O()(d)?h:d;return!1===p?void 0:j()(p)?Object(i.k)(r.pages,p,s.path):l(a,o)}function P(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var A=I,D=(n(381),{components:{PageEdit:S,PageNav:Object(s.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),H=(n(382),Object(s.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),R={name:"Sidebar",components:{SidebarLinks:n(354).default,NavLinks:k},props:["items"]},U=(n(386),Object(s.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),G=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myChip-foot"},[e("img",{staticClass:"myChipImg",attrs:{src:n(346),alt:"Contact",width:"96",height:"96"}}),this._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[this._v(" +91 97905 67188")]),this._v(" "),e("br"),this._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[this._v(" +91 97905 67188")])])}],B={components:{NavLink:r},computed:{footerLinks:function(){return this.$themeConfig.locales[this.$localePath].foot},footerSlogan:function(){return this.$themeConfig.locales[this.$localePath].footSlohan},NameCards:function(){return this.$themeConfig.locales[this.$localePath].nameCards}}},W=(n(387),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myColumnNameCard1"},[e("img",{staticClass:"myNameCardImg",attrs:{src:n(388),alt:"MuraliKrishnan"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myChip"},[e("img",{staticClass:"myChipImg",attrs:{src:n(346),alt:"Contact",width:"96",height:"96"}}),this._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[this._v(" +91 97905 67188")]),this._v(" "),e("br"),this._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[this._v(" +91 97905 67188 ")])])}]),M={computed:{NameCards:function(){return this.$themeConfig.locales[this.$localePath].nameCards}}},z={data:function(){return{dynamicComponent:null}},mounted:function(){var t=this;n.e(13).then(n.bind(null,414)).then((function(e){t.dynamicComponent=e.default}))}},q={name:"Layout",components:{Home:l,Page:H,Sidebar:U,Navbar:L,Footer:Object(s.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"nav-links footer-links"},[t._l(t.footerLinks,(function(t){return n("div",{key:t.key,staticClass:"nav-item"},[n("NavLink",{staticClass:"footer-text",attrs:{item:t}})],1)})),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("i",{staticClass:"footer-slogan"},[t._v(" "+t._s(t.footerSlogan)+" ")])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"myAddress-foot"},[n("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v(" "+t._s(t.NameCards.address1)+" ")]),t._v(" "),n("div",{staticStyle:{"font-color":"gray"}},[t._v(" "+t._s(t.NameCards.address2)+" ")]),t._v(" "),n("div",[t._v(" "+t._s(t.NameCards.address3)+" ")]),t._v(" "),n("div",[t._v(" "+t._s(t.NameCards.address4)+" ")])])],2)}),G,!1,null,"257ad744",null).exports,NameCard:Object(s.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myHead"},[n("div",{staticClass:"myNameCard"},[n("div",{staticClass:"myRow"},[t._m(0),t._v(" "),n("div",{staticClass:"myColumnNameCard2"},[n("div",{staticClass:"myName"},[t._v(t._s(t.NameCards.cardTitle))]),t._v(" "),n("div",{staticClass:"myTitle"},[t._v(t._s(t.NameCards.qualification1))]),t._v(" "),n("div",{staticClass:"myDescription"},[t._v(t._s(t.NameCards.qualification2))])])])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"myAddress"},[n("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v(" "+t._s(t.NameCards.address1)+" ")]),t._v(" "),n("div",{staticStyle:{"font-color":"gray"}},[t._v(" "+t._s(t.NameCards.address2)+" ")]),t._v(" "),n("div",[t._v(" "+t._s(t.NameCards.address3)+" ")]),t._v(" "),n("div",[t._v(" "+t._s(t.NameCards.address4)+" ")])])])}),W,!1,null,null,null).exports,FirebaseDynamicComponent:Object(s.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return this.dynamicComponent?e(this.dynamicComponent,{tag:"component"}):this._e()}),[],!1,null,null,null).exports},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},F=Object(s.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NameCard"),t._v(" "),n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),n("Footer")]},proxy:!0}],null,!0)})],1),t._v(" "),n("FirebaseDynamicComponent")],1)}),[],!1,null,null,null);e.default=F.exports}}]);