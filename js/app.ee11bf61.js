(function(e){function t(t){for(var s,l,n=t[0],u=t[1],o=t[2],d=0,f=[];d<n.length;d++)l=n[d],a[l]&&f.push(a[l][0]),a[l]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,n=1;n<i.length;n++){var u=i[n];0!==a[u]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var s={},a={app:0},r=[];function l(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=s,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-bem/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var c=u;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"039e":function(e,t,i){},"08ec":function(e,t,i){"use strict";var s=i("84e3"),a=i.n(s);a.a},2856:function(e,t,i){},"2d18":function(e,t,i){},5452:function(e,t,i){"use strict";var s=i("f193"),a=i.n(s);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"nav"},[i("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Gallery")]),i("router-link",{staticClass:"nav__link",attrs:{to:"/archive"}},[e._v("Archive")])],1),i("router-view")],1)},r=[],l=(i("5c0b"),i("2877")),n={},u=Object(l["a"])(n,a,r,!1,null,null,null);u.options.__file="App.vue";var o=u.exports,c=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page archive"},[i("Header",{staticClass:"archive__header archive__header--wide-cta",attrs:{title:"Archive",cta:"Subscribe"}}),i("p",{staticClass:"content archive__content"},[i("Carousel",{staticClass:"content__aside"},[i("Carousel-Slide",{attrs:{src:"https://via.placeholder.com/300x200?text=Slide+One"}}),i("Carousel-Slide",{attrs:{src:"https://via.placeholder.com/300x200?text=Slide+Two"}}),i("Carousel-Slide",{attrs:{src:"https://via.placeholder.com/300x200?text=Slide+Three"}})],1),e._v("\n      "+e._s(e.text)+"\n    ")],1)],1)},f=[],h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"carousel"},[e._t("default",[e._v("Insert Images Here")]),i("div",{staticClass:"carousel__arrow-left",on:{click:e.left}}),i("div",{staticClass:"carousel__arrow-right",on:{click:e.right}}),i("div",{staticClass:"carousel__dots"},e._l(e.slides,function(t){return i("div",{key:t._uid,class:{carousel__dot:!0,"carousel__dot--active":t._uid===e.slideShown},on:{click:function(i){e.showSlide(t._uid)}}},[e._v(" \n    ")])}))],2)},p=[],v=(i("20d6"),i("c93e")),m=i("2f62"),_={name:"carousel",mounted:function(){this.$store.commit("updateSlide",this.$children[0]._uid),this.slides=this.$children},data:function(){return{slides:[]}},computed:Object(v["a"])({},Object(m["b"])(["slideShown"])),methods:{left:function(){var e=this,t=this.$children.findIndex(function(t){return e.slideShown===t._uid});t=t>0?(t-1)%this.$children.length:this.$children.length-1,this.$store.commit("updateSlide",this.$children[t]._uid)},right:function(){var e=this,t=this.$children.findIndex(function(t){return e.slideShown===t._uid});t=(t+1)%this.$children.length,this.$store.commit("updateSlide",this.$children[t]._uid)},showSlide:function(e){this.$store.commit("updateSlide",e)}}},b=_,g=(i("8cf1"),Object(l["a"])(b,h,p,!1,null,null,null));g.options.__file="Carousel.vue";var S=g.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("img",{staticClass:"carousel__slide",class:e.display,attrs:{src:e.src,alt:e.alt||"Slide"}})},w=[],x={name:"carousel-slide",props:["src","alt"],computed:Object(v["a"])({},Object(m["b"])(["slideShown"]),{display:function(){return this.slideShown===this._uid?"carousel__slide--active":""}})},y=x,O=(i("d874"),Object(l["a"])(y,C,w,!1,null,null,null));O.options.__file="Carousel-Slide.vue";var j=O.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"header"},[i("h1",{staticClass:"title header__title"},[e._v(e._s(e.title))]),e._t("default"),i("button",{staticClass:"cta header__cta"},[e._v(e._s(e.cta))])],2)},k=[],P={name:"header-component",props:["title","cta"]},q=P,I=(i("5452"),Object(l["a"])(q,$,k,!1,null,null,null));I.options.__file="Header.vue";var T=I.exports,E={name:"home",data:function(){return{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate pharetra mauris, ac ornare sapien faucibus sit amet. Mauris rhoncus condimentum euismod. Integer ac ex vel augue rutrum venenatis vitae id libero. Fusce quis sodales felis, sit amet lobortis enim. Vestibulum mollis nisi id lorem viverra gravida. Donec varius tempor elit. Nulla mauris sapien, volutpat at maximus id, facilisis id tellus. Cras et magna in justo porttitor fringilla at vitae libero. Proin vitae facilisis ligula. Curabitur libero est, ullamcorper at scelerisque ut, fringilla ut est. Suspendisse sed urna quis eros lobortis semper.\n\nDonec aliquet venenatis molestie. Ut ullamcorper massa ac magna elementum auctor. Nam ultricies massa et fringilla lobortis. Phasellus bibendum lorem ex, vitae iaculis felis condimentum non. Curabitur at neque ut dolor egestas aliquet. Cras volutpat commodo erat sed efficitur. In eget condimentum ligula, vel mollis velit. Quisque ultrices lectus est, quis feugiat massa placerat id. In interdum metus felis, at dignissim risus rutrum et.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus mi, placerat et eleifend rhoncus, volutpat id orci. Donec finibus dolor augue, ac pretium risus tempus et. Pellentesque ornare, justo consectetur vehicula venenatis, mauris tellus dapibus nisi, sed sagittis nibh purus nec lacus. Nullam vel sodales nibh, eget commodo felis. Mauris urna elit, laoreet in lorem euismod, blandit sagittis erat. Sed gravida felis nec metus ullamcorper, ac faucibus ligula varius."}},components:{Carousel:S,"Carousel-Slide":j,Header:T}},H=E,M=(i("08ec"),Object(l["a"])(H,d,f,!1,null,null,null));M.options.__file="Archive.vue";var A=M.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page gallery"},[i("Header",{staticClass:"gallery__header",attrs:{title:"Gallery",cta:"Subscribe"}},[i("h2",{staticClass:"header__subtitle"},[e._v("Flowers")])]),i("Carousel",{staticClass:"gallery__carousel carousel--full-width"},[i("Carousel-Slide",{attrs:{src:"https://via.placeholder.com/300x200?text=Slide+One"}}),i("Carousel-Slide",{attrs:{src:"https://via.placeholder.com/300x200?text=Slide+Two"}}),i("Carousel-Slide",{attrs:{src:"https://via.placeholder.com/300x200?text=Slide+Three"}})],1)],1)},G=[],N={name:"gallery",components:{Carousel:S,"Carousel-Slide":j,Header:T}},F=N,J=(i("b9d2"),Object(l["a"])(F,D,G,!1,null,null,null));J.options.__file="Gallery.vue";var L=J.exports;s["a"].use(c["a"]);var Q=new c["a"]({routes:[{path:"/",name:"gallery",component:L},{path:"/archive",name:"archive",component:A}]});i("f751");s["a"].use(m["a"]);var U=new m["a"].Store({state:{slideShown:null},mutations:{updateSlide:function(e,t){Object.assign(e,{slideShown:t})}},actions:{},getters:{slideShown:function(e){return e.slideShown}}});s["a"].config.productionTip=!1,new s["a"]({router:Q,store:U,render:function(e){return e(o)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var s=i("2856"),a=i.n(s);a.a},"84e3":function(e,t,i){},"8cf1":function(e,t,i){"use strict";var s=i("2d18"),a=i.n(s);a.a},b13b:function(e,t,i){},b9d2:function(e,t,i){"use strict";var s=i("039e"),a=i.n(s);a.a},d874:function(e,t,i){"use strict";var s=i("b13b"),a=i.n(s);a.a},f193:function(e,t,i){}});
//# sourceMappingURL=app.ee11bf61.js.map