import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home";
import Shop from "@/views/shop";
import AboutUs from "@/views/about-us";
import NoPage from "@/views/no-page";
import Cart from "@/views/cart";
import Product from "@/components/product/product";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    post_name: "home",
    component: Home,
  },
  {
    path: "/shop/",
    post_name: "shop",
    component: Shop,
  },
  {
    path: "/blog/",
    post_name: "about-us",
    component: AboutUs,
  },
  {
    path: "/404/",
    post_name: "404",
    component: NoPage,
  },
  {
    path: "*",
    redirect: "/404",
  },
  {
    path: "/cart/",
    name: "cart",
    component: Cart,
    props: true,
  },
  {
    path: "/product/",
    name: "product",
    component: Product,
    props: true,
  },

];

const router = new VueRouter({
  mode: "history",
  base: __dirname /* process.env.BASE_URL, */,
  routes,
});


export default router;
