(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},c=[];function a(t){return u.p+"js/"+({}[t]||t)+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(t);var s=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},"2eba":function(t,e,n){},"2f34":function(t,e,n){t.exports={btn:"styles-module_btn_35ddL"}},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("0cdd"),n("5f5b"));n("d8bb");r["default"].use(o["a"]);n("2f34");var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-menu"),n("router-view")],1)},a=[],u=(n("d3b7"),{name:"App",components:{headerMenu:function(){return n.e("chunk-2d0ac036").then(n.bind(null,"1870"))}}}),i=u,s=(n("5c0b"),n("2877")),f=Object(s["a"])(i,c,a,!1,null,null,null),l=f.exports,d=n("5530"),p=n("2f62"),m={ADD_TO_CART:function(t,e){var n=t.commit;n("SET_CART",e)},INCREMENT_CART_ITEM:function(t,e){var n=t.commit;n("INCREMENT",e)},DECREMENT_CART_ITEM:function(t,e){var n=t.commit;n("DECREMENT",e)},DELETE_FROM_CART:function(t,e){var n=t.commit;n("REMOVE_FROM_CART",e)}},h={KEY:"ck_041fbf6f1e0aedfd2467a8af3c83610468cfdbb7",SECRET:"cs_31bc637ea1d7bdf851e176d8d914c0dafa102edc",VERSION_3:"wc/v3"},v=n("69b0"),_={GET_PRODUCTS_FROM_API:function(t){var e=t.commit,n=new v["a"]({url:"https://rubizhnesocks.pl.ua/",consumerKey:h.KEY,consumerSecret:h.SECRET,version:h.VERSION_3});return n.get("system_status").then((function(t){return e("SET_PRODUCTS_TO_STATE",t.data),console.log(t.data),t})).catch((function(t){return console.log(t),t}))}},b=(n("d81d"),n("a434"),{SET_PRODUCTS_TO_STATE:function(t,e){t.product=e},SET_CART:function(t,e){if(t.cart.length){var n=!1;t.cart.map((function(t){t.id===e.id&&(n=!0,t.quantity++)})),n||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--}}),E={PRODUCTS:function(t){return t.product},CART:function(t){return t.cart}},T=Object(d["a"])(Object(d["a"])({},m),_);r["default"].use(p["a"]);var O=new p["a"].Store({state:{product:[],cart:[]},mutations:b,actions:T,getters:E}),y=O,R=n("9883");r["default"].config.productionTip=!1,new r["default"]({store:y,router:R["a"],render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5c9f":function(t,e,n){"use strict";var r=n("6d94"),o=n.n(r);o.a},6511:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Hello home")])])}],c={name:"home",components:{},props:{},data:function(){return{title:"Hello home"}},computed:{},methods:{},watch:{}},a=c,u=(n("a318"),n("2877")),i=Object(u["a"])(a,r,o,!1,null,null,null);e["a"]=i.exports},"6d94":function(t,e,n){},"7d62":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop"},[n("h1",[t._v(t._s(t.title))])])},o=[],c={name:"shop",components:{},props:{},data:function(){return{title:"Main wrapper"}},computed:{},methods:{},watch:{}},a=c,u=(n("5c9f"),n("2877")),i=Object(u["a"])(a,r,o,!1,null,null,null);e["a"]=i.exports},9883:function(t,e,n){"use strict";(function(t){var r=n("2b0e"),o=n("8c4f"),c=n("6511"),a=n("7d62");r["default"].use(o["a"]);var u=[{path:"/",name:"home",component:c["a"]},{path:"/shop",name:"shop",component:a["a"]}],i=new o["a"]({mode:"history",base:t,routes:u});e["a"]=i}).call(this,"/")},"9c0c":function(t,e,n){},a318:function(t,e,n){"use strict";var r=n("2eba"),o=n.n(r);o.a},d8bb:function(t,e,n){}});
//# sourceMappingURL=app.js.map