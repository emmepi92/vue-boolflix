(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1763:function(t,e,i){},"1d4d":function(t,e,i){t.exports=i.p+"img/logo-net.5641ab89.jpg"},2553:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("7b17"),i("ab8b"),i("15f5"),i("7051");var n=i("d61f"),r=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fluid-container"},[i("Header",{on:{search:function(e){t.searchFilms(e),t.searchSeries(e)},show:t.showThis}}),i("Main",{attrs:{populars:t.popularFilms,films:t.searchedFilms,series:t.searchedSeries}})],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"popular-container"},[0===t.films.length&&0===t.series.length?i("div",[i("h1",[t._v("I più visti")]),i("div",{staticClass:"films-container"},t._l(t.populars,(function(t){return i("FilmCard",{key:t.id,staticClass:"single-film",attrs:{film:t}})})),1)]):i("div",[i("h1",[t._v("Film")]),i("div",{staticClass:"films-container"},t._l(t.films,(function(t){return i("FilmCard",{key:t.id,staticClass:"single-film",attrs:{film:t}})})),1),i("h1",[t._v("Serie")]),i("div",{staticClass:"films-container"},t._l(t.series,(function(t){return i("FilmCard",{key:t.id,staticClass:"single-film",attrs:{film:t}})})),1)])])},c=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"film-content"},[i("img",{attrs:{src:t.getSrc(t.film.poster_path),alt:t.film.original_title||t.film.original_name}}),i("div",{staticClass:"info-film-container"},[i("h3",[t._v(t._s(t.film.title)+" "+t._s(t.film.name))]),i("div",[t._v("Titolo Originale: "+t._s(t.film.original_title)+" "+t._s(t.film.original_name))]),i("div",[t._v("Lingua: "),"en"===t.film.original_language?i("flag",{attrs:{iso:"us"}}):i("flag",{attrs:{iso:t.film.original_language}})],1),i("div",[t._v("Voto: "),t._l(5,(function(e){return i("i",{key:e,staticClass:"fa-star",class:t.isAFullStar(e)})}))],2)])])])},u=[],f={name:"FilmCard",props:{film:Object},computed:{stars:function(){return Math.round(this.film.vote_average/2)}},methods:{getSrc:function(t){return"https://image.tmdb.org/t/p/w342"+t},isAFullStar:function(t){return t<this.stars?"fas":"far"}}},d=f,p=(i("827a"),i("2877")),m=Object(p["a"])(d,l,u,!1,null,"2eda9e65",null),v=m.exports,h={name:"Main",props:{films:Array,populars:Array,series:Array},components:{FilmCard:v}},_=h,g=(i("8b4b"),Object(p["a"])(_,o,c,!1,null,"3481a695",null)),b=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("img",{attrs:{src:i("1d4d"),alt:"Logo Netflix"},on:{click:function(e){return t.$emit("search","")}}}),n("div",{staticClass:"nav-menu"},[n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("show","/tv/on_the_air")}}},[t._v("Home")])]),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("show","/discover/tv")}}},[t._v("Serie Tv")])]),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("show","/movie/top_rated")}}},[t._v("Film")])]),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("show","/discover/tv")}}},[t._v("Originali")])]),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("show","/movie/upcoming")}}},[t._v("Aggiunti di recente")])]),t._m(0)]),n("div",{staticClass:"info-container"},[n("i",{staticClass:"fas fa-search"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("button",{on:{click:function(e){return t.$emit("search",t.inputText)}}},[t._v("Cerca")]),t._m(1),t._m(2),t._m(3)])])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"#"}},[t._v("La mia lista")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"#"}},[t._v("Bambini")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fas fa-bell"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"#"}},[t._v("Profilo")])])}],w={name:"Header",data:function(){return{inputText:""}}},x=w,k=(i("a031"),Object(p["a"])(x,y,C,!1,null,"6ef0be3e",null)),O=k.exports,F=i("bc3a"),S=i.n(F),$={name:"App",components:{Main:b,Header:O},data:function(){return{popularFilms:[],searchedFilms:[],searchedSeries:[],popularQuery:"https://api.themoviedb.org/3/movie/popular?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4"}},created:function(){this.callApi(this.popularQuery)},methods:{searchFilms:function(t){var e=this,i="https://api.themoviedb.org/3/search/movie?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=";i+=t,S.a.get(i).then((function(t){e.searchedFilms=t.data.results}))},searchSeries:function(t){var e=this,i="https://api.themoviedb.org/3/search/tv?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=";i+=t,S.a.get(i).then((function(t){e.searchedSeries=t.data.results}))},callApi:function(t){var e=this;S.a.get(t).then((function(t){e.popularFilms=t.data.results}))},showThis:function(t){var e="https://api.themoviedb.org/3"+t+"?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4";console.log(e),this.callApi(e)}}},j=$,T=(i("5c0b"),Object(p["a"])(j,a,s,!1,null,null,null)),A=T.exports;r["a"].use(n["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"827a":function(t,e,i){"use strict";i("ad3c")},"8b4b":function(t,e,i){"use strict";i("1763")},"9c0c":function(t,e,i){},a031:function(t,e,i){"use strict";i("2553")},ad3c:function(t,e,i){}});
//# sourceMappingURL=app.501a4334.js.map