import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home";
import Shop from "@/views/shop";
import NoPage from "@/views/no-page";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    post_name: "home",
    component: Home,
  },
  {
    path: "/shop",
    post_name: "shop",
    component: Shop,
  },
  {
    path: "/404",
    post_name: "404",
    component: NoPage,
  },
  { 
    path: '*', 
    redirect: '/404'
  }

];

const router = new VueRouter({
  mode: "history",
  base: __dirname /* process.env.BASE_URL, */,
  routes,
});

export default router;
