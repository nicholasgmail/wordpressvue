(function(t){function n(n){for(var e,o,i=n[0],u=n[1],s=n[2],d=0,_=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);l&&l(n);while(_.length)_.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var t,n=0;n<c.length;n++){for(var a=c[n],e=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(e=!1)}e&&(c.splice(n--,1),t=o(o.s=a[0]))}return t}var e={},r={app:0},c=[];function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(a,e,function(n){return t[n]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var l=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},1:function(t,n){},2:function(t,n){},"2dae":function(t,n,a){},"2f34":function(t,n,a){t.exports={btn:"styles-module_btn_35ddL"}},3:function(t,n){},4:function(t,n){},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var e=a("2b0e"),r=a("5f5b"),c=(a("d8bb"),a("2f34"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("div",[a("b-button",[t._v("Button")]),a("b-button",{attrs:{variant:"danger"}},[t._v("Button")]),a("b-button",{attrs:{variant:"success"}},[t._v("Button")]),a("b-button",{attrs:{variant:"outline-primary"}},[t._v("Button")])],1),a("v-main-wrapper"),a("div",{staticClass:"container",staticStyle:{"padding-top":"16px"}},[a("router-view")],1)],1)}),o=[],i={name:"App",components:{}},u=i,s=(a("5c0b"),a("2877")),l=Object(s["a"])(u,c,o,!1,null,null,null),d=l.exports,_=a("5530"),f=a("2f62"),p={ADD_TO_CART:function(t,n){var a=t.commit;a("SET_CART",n)},INCREMENT_CART_ITEM:function(t,n){var a=t.commit;a("INCREMENT",n)},DECREMENT_CART_ITEM:function(t,n){var a=t.commit;a("DECREMENT",n)},DELETE_FROM_CART:function(t,n){var a=t.commit;a("REMOVE_FROM_CART",n)}},m={KEY:"ck_041fbf6f1e0aedfd2467a8af3c83610468cfdbb7",SECRET:"cs_31bc637ea1d7bdf851e176d8d914c0dafa102edc",VERSION_3:"wc/v3"},v=a("69b0"),T={GET_PRODUCTS_FROM_API:function(t){var n=t.commit,a=new v["a"]({url:"https://rubizhnesocks.pl.ua/",consumerKey:m.KEY,consumerSecret:m.SECRET,version:m.VERSION_3});return a.get("products").then((function(t){return n("SET_PRODUCTS_TO_STATE",t.data),console.log(t.data),t})).catch((function(t){return console.log(t),t}))}},C=(a("d81d"),a("a434"),{SET_PRODUCTS_TO_STATE:function(t,n){t.product=n},SET_CART:function(t,n){if(t.cart.length){var a=!1;t.cart.map((function(t){t.id===n.id&&(a=!0,t.quantity++)})),a||t.cart.push(n)}else t.cart.push(n)},REMOVE_FROM_CART:function(t,n){t.cart.splice(n,1)},INCREMENT:function(t,n){t.cart[n].quantity++},DECREMENT:function(t,n){t.cart[n].quantity>1&&t.cart[n].quantity--}}),b={PRODUCTS:function(t){return t.product},CART:function(t){return t.cart}},E=Object(_["a"])(Object(_["a"])({},p),T);e["default"].use(f["a"]);var h=new f["a"].Store({state:{product:[],cart:[]},mutations:C,actions:E,getters:b}),O=h,R=a("8c4f"),g=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"v-catalog"},[a("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[a("div",{staticClass:"v-catalog__link_to_cart"},[t._v("Cart: "+t._s(t.CART.length))])]),a("h1",[t._v("Catalog")]),a("div",{staticClass:"v-catalog__list"},t._l(t.PRODUCTS,(function(n){return a("v-catalog-item",{key:n.id,attrs:{product_data:n},on:{addToCart:t.addToCart}})})),1)],1)},y=[],A=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"v-catalog-item"},[a("img",{attrs:{src:t.product_data.images[0].src,alt:"img",width:"150"}}),a("p",{staticClass:"v-catalog-item__id",domProps:{innerHTML:t._s(t.product_data.id)}}),a("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.product_data.name))]),a("p",{staticClass:"v-catalog-item__price"},[t._v(t._s(t.product_data.price))]),a("button",{staticClass:"btn v-catalog-item__add_to_cart_btn",on:{click:t.addToCart}},[t._v("Add to cart")])])},M=[],j={name:"v-catalog-item",props:{product_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{addToCart:function(){this.$emit("addToCart",this.product_data)}}},S=j,D=(a("76ac"),Object(s["a"])(S,A,M,!1,null,null,null)),I=D.exports,w={name:"v-catalog",components:{VCatalogItem:I},props:{},data:function(){return{}},computed:Object(_["a"])({},Object(f["c"])(["PRODUCTS","CART"])),methods:Object(_["a"])(Object(_["a"])({},Object(f["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)}}),mounted:function(){this.GET_PRODUCTS_FROM_API().then((function(t){t.data&&console.log("Data arrived!")}))}},P=w,N=(a("9802"),Object(s["a"])(P,g,y,!1,null,null,null)),k=N.exports,x=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"v-cart"},[a("router-link",{attrs:{to:{name:"catalog"}}},[a("div",{staticClass:"v-catalog__link_to_cart"},[t._v("Back to Catalog")])]),a("h1",[t._v("Cart")]),t.cart_data.length?t._e():a("p",[t._v("There are no products in cart...")]),t._l(t.cart_data,(function(n,e){return a("v-cart-item",{key:n.id,attrs:{cart_item_data:n},on:{deleteFromCart:function(n){return t.deleteFromCart(e)},increment:function(n){return t.increment(e)},decrement:function(n){return t.decrement(e)}}})})),a("div",{staticClass:"v-cart__total"},[a("p",{staticClass:"v-cart__name"},[t._v("Total")]),a("p",[t._v(t._s(t.cartTotalCost)+" p.")])])],2)},F=[],$=(a("13d5"),a("b85c")),q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"v-cart-item"},[e("img",{attrs:{src:a("69d0"),alt:"",width:"50"}}),e("div",{staticClass:"v-cart-item__info"},[e("p",[t._v(t._s(t.cart_item_data.slug))]),e("p",[t._v(t._s(t.cart_item_data.id))])]),e("div",{staticClass:"v-cart-item__quantity"},[e("p",[t._v("Qty:")]),e("span",{staticClass:"quantity__btn",on:{click:t.decrementItem}},[t._v("-")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),e("span",{staticClass:"quantity__btn",on:{click:t.incrementItem}},[t._v("+")])]),e("button",{on:{click:t.deleteFromCart}},[t._v("Delete")])])},U=[],V={name:"v-cart-item",props:{cart_item_data:{type:Object,default:function(){return{}}}},methods:{decrementItem:function(){this.$emit("decrement")},incrementItem:function(){this.$emit("increment")},deleteFromCart:function(){this.$emit("deleteFromCart")}},mounted:function(){this.$set(this.cart_item_data,"quantity",1)}},B=V,L=(a("6c9b"),Object(s["a"])(B,q,U,!1,null,null,null)),G=L.exports,K={name:"v-cart",components:{VCartItem:G},props:{cart_data:{type:Array,default:function(){return[]}}},computed:{cartTotalCost:function(){var t=[];if(this.cart_data.length){var n,a=Object($["a"])(this.cart_data);try{for(a.s();!(n=a.n()).done;){var e=n.value;t.push(e.id*e.quantity)}}catch(r){a.e(r)}finally{a.f()}return t=t.reduce((function(t,n){return t+n})),t}return 0}},methods:Object(_["a"])(Object(_["a"])({},Object(f["b"])(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"])),{},{increment:function(t){this.INCREMENT_CART_ITEM(t)},decrement:function(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t)}})},z=K,J=(a("dbe8"),Object(s["a"])(z,x,F,!1,null,null,null)),Y=J.exports;e["default"].use(R["a"]);var H=new R["a"]({routes:[{path:"/",name:"catalog",component:k},{path:"/cart",name:"cart",component:Y,props:!0}]}),Q=H;e["default"].config.productionTip=!1,e["default"].use(r["a"]),new e["default"]({render:function(t){return t(d)},store:O,router:Q}).$mount("#app")},"5c0b":function(t,n,a){"use strict";var e=a("9c0c"),r=a.n(e);r.a},"69d0":function(t,n,a){t.exports=a.p+"img/m-zaw-5-min.jpg"},"6b20":function(t,n,a){},"6c9b":function(t,n,a){"use strict";var e=a("6b20"),r=a.n(e);r.a},"76ac":function(t,n,a){"use strict";var e=a("c41f"),r=a.n(e);r.a},"7c3d":function(t,n,a){},9802:function(t,n,a){"use strict";var e=a("2dae"),r=a.n(e);r.a},"9c0c":function(t,n,a){},c41f:function(t,n,a){},d8bb:function(t,n,a){},dbe8:function(t,n,a){"use strict";var e=a("7c3d"),r=a.n(e);r.a}});
//# sourceMappingURL=app.js.map