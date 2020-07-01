import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home";
import Shop from "@/views/shop";
import Cart from "@/views/cart";

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
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: __dirname /* process.env.BASE_URL, */,
  routes,
});

export default router;
