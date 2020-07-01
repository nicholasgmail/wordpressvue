import Vue from "vue";
import SvgIcon from "vue-svgicon";
import "@babel/polyfill";
import "mutationobserver-shim";
import "@/plugins/bootstrap.js"

import "./assets/styles/styles.module.scss";

import App from "@/App.vue";
import store from "@/vuex/store";
import router from "@/router/router";

import "@/icons/components";



Vue.use(SvgIcon, {
  tagName: "svg-icon",
  defaultWidth: "1em",
  defaultHeight: "1em",
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
