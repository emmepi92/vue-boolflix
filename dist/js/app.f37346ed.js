(function(t){function e(e){for(var i,c,o=e[0],s=e[1],l=e[2],f=0,p=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0eba":function(t,e,n){"use strict";n("a720")},"1d4d":function(t,e,n){t.exports=n.p+"img/logo-net.5641ab89.jpg"},"53f7":function(t,e,n){"use strict";n("80e5")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b"),n("15f5"),n("7051");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fluid-container"},[n("Header",{on:{search:t.newSearch}}),n("Main",{attrs:{films:t.films}})],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"films-container"},t._l(t.films,(function(e){return n("FilmCard",{key:e-t.id,staticClass:"single-film",attrs:{film:e}})})),1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"film-content"},[n("img",{attrs:{src:t.getSrc(t.film.poster_path),alt:""}}),n("div",{staticClass:"info-film-container"},[n("h3",[t._v(t._s(t.film.title)+" "+t._s(t.film.name))]),n("div",[t._v("Titolo Originale: "+t._s(t.film.original_title)+" "+t._s(t.film.original_name))]),n("div",[t._v("Lingua: "+t._s(t.film.original_language))]),n("div",[t._v("Voto: "+t._s(t.film.vote_average))])])])])},l=[],u={name:"FilmCard",props:{film:Object},methods:{getSrc:function(t){var e="https://image.tmdb.org/t/p/w342";return e+=t,e}}},f=u,p=(n("53f7"),n("2877")),d=Object(p["a"])(f,s,l,!1,null,"7283886a",null),m=d.exports,v={name:"Main",props:{films:Array},components:{FilmCard:m}},h=v,_=(n("f79f"),Object(p["a"])(h,c,o,!1,null,"cb9572a2",null)),b=_.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-container"},[i("img",{attrs:{src:n("1d4d"),alt:""}}),t._m(0),i("div",{staticClass:"info-container"},[i("i",{staticClass:"fas fa-search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),i("button",{on:{click:function(e){return t.$emit("search",t.inputText)}}},[t._v("Cerca")]),t._m(1),t._m(2),t._m(3)])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-menu"},[n("div",[n("a",{attrs:{href:"#"}},[t._v("Home")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Serie Tv")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Film")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Originali")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("Aggiunti di recente")])]),n("div",[n("a",{attrs:{href:"#"}},[t._v("La mia lista")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"#"}},[t._v("Bambini")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-bell"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"#"}},[t._v("Profilo")])])}],x={name:"Header",data:function(){return{inputText:""}}},w=x,O=(n("0eba"),Object(p["a"])(w,g,y,!1,null,"aef8bac4",null)),T=O.exports,C=n("bc3a"),j=n.n(C),S={name:"App",components:{Main:b,Header:T},data:function(){return{films:[],apiToCall:"https://api.themoviedb.org/3/movie/popular?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4",newInputText:""}},computed:{},created:function(){this.callApi(this.apiToCall)},methods:{newSearch:function(t){var e="https://api.themoviedb.org/3/search/multi?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=";e+=t,this.callApi(e),this.newInputToSearch(t)},callApi:function(t){var e=this;j.a.get(t).then((function(t){e.films=t.data.results}))},newInputToSearch:function(t){this.newInputText=t}}},$=S,P=(n("5c0b"),Object(p["a"])($,r,a,!1,null,null,null)),E=P.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"80e5":function(t,e,n){},"9c0c":function(t,e,n){},a720:function(t,e,n){},c622:function(t,e,n){},f79f:function(t,e,n){"use strict";n("c622")}});
//# sourceMappingURL=app.f37346ed.js.map