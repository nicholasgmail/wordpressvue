import SETTINGS from "@/settings";
import axios from "axios";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
    });
    return WooCommerce.get("products")
      .then((product) => {
        //вызываем мутацию для передачи даных
        commit("SET_PRODUCTS_TO_STATE", product.data);
        console.log(product.data);
        return product;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_MENU_FROM_API({ commit }) {
    return axios(SETTINGS.URL + "wp-json/wp/v2/menu", {
      method: "GET",
    })
      .then((menu) => {
        commit("SET_MENU_TO_STATE", menu.data);       
        return menu;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
