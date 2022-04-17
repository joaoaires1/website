(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},r=[],i={name:"app",components:{}},o=i,c=(a("034f"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,null,null),p=l.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("div",{staticClass:"presentation-section"},[a("div",[a("h1",[t._v("Hello, i'm João")]),a("p",[t._v("Software developer")])])]),a("div",{staticClass:"links-section"},[a("span",[a("a",{attrs:{href:"https://www.linkedin.com/in/joaoaires1/",target:"_blank"}},[t._v("Linkedin")])]),a("span",[a("a",{attrs:{href:"https://github.com/joaoaires1",target:"_blank"}},[t._v("GitHub")])])])])])}],f={components:{},methods:{navigate:function(t){this.$router.push(t).catch((function(){}))}}},_=f,m=Object(c["a"])(_,v,d,!1,null,null,null),h=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-port"},[a("nav-bar",{attrs:{title:"Projetos"}}),t._m(0)],1)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-cover bg-green"},[s("img",{staticClass:"cover-img",attrs:{src:a("5714"),alt:"Twitter logo"}})]),s("div",{staticClass:"card-text"},[t._v(" SPA Twitter type application desenvolvida usando vuejs, vuex e vue-router. "),s("a",{attrs:{target:"_blank",href:"https://ttclone.netlify.app/"}},[t._v("link da applicação")])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-cover bg-laravel"},[s("img",{staticClass:"cover-img",attrs:{src:a("5714"),alt:"Twitter logo"}})]),s("div",{staticClass:"card-text"},[t._v(" API Twitter type application desenvolvida usando PHP com framework Laravel."),s("a",{attrs:{target:"_blank",href:"https://github.com/joaoaires1/ttclone_api"}},[t._v("link no github")])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-cover bg-react"},[s("img",{staticClass:"cover-img",attrs:{src:a("f997"),alt:"Twitter logo"}})]),s("div",{staticClass:"card-text"},[t._v(" Implementação de um carrinho de compras utilizando react hooks e redux."),s("a",{attrs:{target:"_blank",href:"https://shopcarthooks.netlify.app/"}},[t._v("link da applicação")])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-cover bg-react"},[s("img",{staticClass:"cover-img",attrs:{src:a("5714"),alt:"Twitter logo"}})]),s("div",{staticClass:"card-text"},[t._v(" Mobile app Twitter type application desenvolvida utilizando react native."),s("a",{attrs:{target:"_blank",href:"https://github.com/joaoaires1/ttclone_app"}},[t._v("link no github")])])])])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-box"},[s("div",{staticClass:"title"},[s("p",[t._v(t._s(t.title))])]),s("span",{on:{click:t.navigate}},[s("img",{attrs:{width:"30",src:a("ccfe"),alt:""}})])])},w=[],x={props:["title"],methods:{navigate:function(){this.$router.push("home").catch((function(){}))}}},j=x,k=(a("5b49"),Object(c["a"])(j,C,w,!1,null,null,null)),y=k.exports,O={components:{"nav-bar":y},data:function(){return{}}},P=O,$=(a("ad62"),Object(c["a"])(P,b,g,!1,null,null,null)),S=$.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{title:"Sobre"}}),t._m(0),t._m(1)],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-text"},[a("p",[t._v("Olá, meu nome é João Aires, sou desenvolvedor web e tenho tecnólogo em análise e desenvolvimento de sistemas (Uninter). Minhas principais experiências proficionais são com php, framework laravel e javascript com as bibliotecas vue, react e react native.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-tech"},[a("h2",[t._v("Habilidades:")]),a("br"),a("p",[t._v("Backend: "),a("span",{staticClass:"php"},[t._v("PHP")]),t._v(", "),a("span",{staticClass:"laravel"},[t._v("Laravel")]),t._v(" framework.")]),a("p",[t._v("Bancos de dados: "),a("span",{staticClass:"redis"},[t._v("Redis")]),t._v(", "),a("span",{staticClass:"mysql"},[t._v("MySql")]),t._v(".")]),a("p",[t._v("Frontend: "),a("span",{staticClass:"html"},[t._v("Html")]),t._v(", "),a("span",{staticClass:"css"},[t._v("Css")]),t._v(", "),a("span",{staticClass:"js"},[t._v("JavaScript")]),t._v(", bibliotecas "),a("span",{staticClass:"vue"},[t._v("Vue")]),t._v(", "),a("span",{staticClass:"vue"},[t._v("Vuex")]),t._v(", "),a("span",{staticClass:"react"},[t._v("React")]),t._v(", "),a("span",{staticClass:"react"},[t._v("React Native")]),t._v(" e "),a("span",{staticClass:"redux"},[t._v("Redux")]),t._v(".")]),a("p",[t._v("Versionamento de software: "),a("span",{staticClass:"git"},[t._v("Git")]),t._v(".")])])}],M={components:{"nav-bar":y}},H=M,J=(a("b8ab"),Object(c["a"])(H,T,E,!1,null,null,null)),R=J.exports;s["a"].use(u["a"]);var A=[{name:"home",path:"/",component:h},{name:"home",path:"/home",component:h},{name:"projects",path:"/projects",component:S},{name:"about",path:"/about",component:R}],L=new u["a"]({routes:A}),V=L;s["a"].config.productionTip=!1,new s["a"]({router:V,render:function(t){return t(p)}}).$mount("#app")},5714:function(t,e,a){t.exports=a.p+"img/twitter_brand.2ec2cc89.png"},"58de":function(t,e,a){},"5b49":function(t,e,a){"use strict";a("58de")},"85ec":function(t,e,a){},"98e0":function(t,e,a){},ad62:function(t,e,a){"use strict";a("b7a4")},b7a4:function(t,e,a){},b8ab:function(t,e,a){"use strict";a("98e0")},ccfe:function(t,e,a){t.exports=a.p+"img/back.472b7a62.svg"},f997:function(t,e,a){t.exports=a.p+"img/supermarket.4e840164.png"}});
//# sourceMappingURL=app.abcc3aa9.js.map