import Vue from 'vue';
import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import "./assets/styles/styles.module.scss";

import App from "./App.vue";
import store from "./vuex/store";
import router from "./router/router";


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),  
}).$mount("#app");
