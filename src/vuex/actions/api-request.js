import SETTINGS from "@/settings";
import axios from "axios";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export default {
  GET_PRODUCTS_FROM_API({ commit, state }, rows) {
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
    });
    return WooCommerce.get("products", {
      per_page: state.perpage,
      page: rows,
    })
      .then((response) => {
        //вызываем мутацию для передачи даных
        commit("SET_PRODUCTS_TO_STATE", response.data);
        state.rows = response.headers["x-wp-totalpages"];
        return response;
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
  GET_CUSTOMERS_FROM_API({ commit }) {
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_2, // WooCommerce WP REST API version
    });
    return WooCommerce.get("customers/1")
      .then((customers) => {
        commit("SET_CUSTOMERS_TO_STATE", customers.data);
        console.log(customers.data);
        return customers;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_CATEGORIES_FROM_API({ commit }) {
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
    });
    return WooCommerce.get("products/categories?include=33,36,39")
      .then((categories) => {
        //вызываем мутацию для передачи даных
        commit("SET_CATEGORIES_TO_STATE", categories.data);
        console.log(categories.data);
        return categories;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
