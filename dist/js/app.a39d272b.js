(function(e){function t(t){for(var r,s,l=t[0],o=t[1],c=t[2],f=0,p=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],r=!0,l=1;l<i.length;l++){var o=i[l];0!==n[o]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},n={app:0},a=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1851:function(e,t,i){"use strict";i("519c")},"1d4d":function(e,t,i){e.exports=i.p+"img/logo-net.5641ab89.jpg"},"3e5b":function(e,t,i){},"519c":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("7b17"),i("ab8b"),i("15f5"),i("7051");var r=i("d61f"),n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fluid-container"},[i("Header",{on:{search:e.searchTvAndMovie,searchSeries:e.showNavBar}}),i("Main",{attrs:{populars:e.popularFilms,series:e.searchedSeries,films:e.searchedFilms,flagTitle:e.flagChangeTitle}})],1)},s=[],l=(i("498a"),i("99af"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"popular-container"},[0===e.films.length&&0===e.series.length?i("div",[i("Popular",{attrs:{populars:e.populars,flagTitle:e.flagTitle}})],1):i("div",[i("Films",{attrs:{films:e.films}}),i("Series",{attrs:{series:e.series}})],1)])}),o=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Serie")]),0!==e.series.length?i("div",[i("div",{staticClass:"films-container"},e._l(e.series,(function(e){return i("FilmCard",{key:e.id,staticClass:"single-film",attrs:{film:e}})})),1)]):i("div",[i("p",[e._v(" Nessuna serie trovata ")])])])},u=[],f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"film-content",style:e.getUrl(e.film.poster_path)},[i("div",{staticClass:"info-film-container"},[i("h3",[e._v(e._s(e.film.title)+" "+e._s(e.film.name))]),i("div",[e._v("Titolo Originale: "+e._s(e.film.original_title)+" "+e._s(e.film.original_name))]),i("div",[e._v("Lingua: "),i("flag",{attrs:{iso:e.languanteToNation(e.film.original_language)}})],1),i("div",[e._v("Voto: "),e._l(5,(function(t){return i("i",{key:t,staticClass:"fa-star",class:e.isAFullStar(t)})}))],2)])])])},p=[],d={name:"FilmCard",props:{film:Object},computed:{stars:function(){return Math.round(this.film.vote_average/2)}},methods:{languanteToNation:function(e){return"en"===e?"us":"ja"===e?"jp":"hi"===e?"in":e},getUrl:function(e){return null===e?"background-image:url('https://www.staynerd.com/wp-content/uploads/2021/05/netflix-film-piu-visti.jpg')":"background-image:url('https://image.tmdb.org/t/p/w342".concat(e,"')")},isAFullStar:function(e){return e<this.stars?"fas red":"far"}}},m=d,v=(i("88cf"),i("2877")),h=Object(v["a"])(m,f,p,!1,null,"3d5a34ee",null),g=h.exports,_={name:"Series",props:{series:Array},components:{FilmCard:g}},b=_,y=Object(v["a"])(b,c,u,!1,null,"5332ced7",null),C=y.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Film")]),0!==e.films.length?i("div",[i("div",{staticClass:"films-container"},e._l(e.films,(function(e){return i("FilmCard",{key:e.id,staticClass:"single-film",attrs:{film:e}})})),1)]):i("div",[i("p",[e._v(" Nessun film trovato ")])])])},x=[],F={name:"Films",props:{films:Array},components:{FilmCard:g}},S=F,O=Object(v["a"])(S,T,x,!1,null,"918c7090",null),j=O.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.flagTitle?i("span",[i("h1",[e._v("Le ultime aggiunte")])]):i("span",[i("h1",[e._v("I più visti")])]),i("div",{staticClass:"films-container"},e._l(e.populars,(function(e){return i("FilmCard",{key:e.id,staticClass:"single-film",attrs:{film:e}})})),1)])},A=[],k={name:"Popular",props:{populars:Array,flagTitle:Boolean},components:{FilmCard:g},created:function(){console.log(this.flagTitle)}},$=k,M=Object(v["a"])($,w,A,!1,null,"71660765",null),E=M.exports,P={name:"Main",props:{films:Array,populars:Array,series:Array,flagTitle:Boolean},components:{Series:C,Films:j,Popular:E}},I=P,N=Object(v["a"])(I,l,o,!1,null,"2beeec5a",null),B=N.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-container"},[r("img",{attrs:{src:i("1d4d"),alt:"Logo Netflix"},on:{click:function(t){return e.$emit("search","")}}}),r("div",{staticClass:"nav-menu"},[r("div",[r("a",{attrs:{href:"#"},on:{click:function(t){return e.$emit("search","")}}},[e._v("Home")])]),r("div",[r("a",{attrs:{href:"#"},on:{click:function(t){return e.$emit("searchSeries","/tv/popular")}}},[e._v("Serie Tv")])]),r("div",[r("a",{attrs:{href:"#"},on:{click:function(t){return e.$emit("searchSeries","/movie/top_rated")}}},[e._v("Film")])]),e._m(0),r("div",[r("a",{attrs:{href:"#"},on:{click:function(t){return e.$emit("searchSeries","/movie/upcoming")}}},[e._v("Aggiunti di recente")])]),e._m(1)]),r("div",{staticClass:"info-container"},[r("div",{on:{click:function(t){return e.showInputSearch()}}},[r("i",{staticClass:"fas fa-search"})]),r("div",{staticClass:"search-container"},[e.flagInputActive?r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],attrs:{type:"text",autofocus:""},domProps:{value:e.inputText},on:{input:function(t){t.target.composing||(e.inputText=t.target.value)}}}),r("button",{on:{click:function(t){e.$emit("search",e.inputText),e.clearInputText()}}},[e._v("Cerca")])]):e._e()]),e._m(2),e._m(3),e._m(4)])])},H=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a",{attrs:{href:"#"}},[e._v("Originali")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a",{attrs:{href:"#"}},[e._v("La mia lista")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a",{attrs:{href:"#"}},[e._v("Bambini")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("i",{staticClass:"fas fa-bell"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a",{attrs:{href:"#"}},[e._v("Profilo")])])}],L={name:"Header",data:function(){return{inputText:"",flagInputActive:!1}},methods:{clearInputText:function(){this.inputText="",this.flagInputActive=!1},showInputSearch:function(){!1===this.flagInputActive?this.flagInputActive=!0:this.flagInputActive=!1}}},J=L,U=(i("1851"),Object(v["a"])(J,Q,H,!1,null,"1f649bca",null)),q=U.exports,V=i("bc3a"),z=i.n(V),D={name:"App",components:{Main:B,Header:q},data:function(){return{popularFilms:[],popularFilmsCopy:[],searchedFilms:[],searchedSeries:[],popularQuery:"https://api.themoviedb.org/3/movie/popular?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4",popularQuerySeries:"",flagChangeTitle:!1}},created:function(){this.callApi(this.popularQuery)},methods:{showNavBar:function(e){this.reset(),this.flagChangeTitle="/movie/upcoming"===e,this.popularQuerySeries="https://api.themoviedb.org/3".concat(e,"?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4"),this.callApi(this.popularQuerySeries)},reset:function(){this.searchedFilms=[],this.searchedSeries=[]},searchTvAndMovie:function(e){var t=this;this.flagChangeTitle=!1,""===e.trim()?(this.popularFilms=this.popularFilmsCopy,this.reset()):(z.a.get(this.tvOrMovie("tv",e)).then((function(e){t.searchedSeries=e.data.results})),z.a.get(this.tvOrMovie("movie",e)).then((function(e){t.searchedFilms=e.data.results})))},tvOrMovie:function(e,t){return"https://api.themoviedb.org/3/search/".concat(e,"?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=").concat(t)},callApi:function(e){var t=this;z.a.get(e).then((function(e){t.popularFilms=e.data.results,0===t.popularFilmsCopy.length&&(t.popularFilmsCopy=e.data.results)}))}}},G=D,K=(i("5c0b"),Object(v["a"])(G,a,s,!1,null,null,null)),R=K.exports;n["a"].use(r["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"88cf":function(e,t,i){"use strict";i("3e5b")},"9c0c":function(e,t,i){}});
//# sourceMappingURL=app.a39d272b.js.map