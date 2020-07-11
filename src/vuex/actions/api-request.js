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
      axiosConfig: SETTINGS.AXIOS,
    });
    return WooCommerce.get("products", {
      orderby: state.sortingCatalog.orderby,
      order: state.sortingCatalog.order,
      stock_status: "instock",
      category: state.categoryId,
      search: state.vModelValue,
      per_page: state.perpage,
      page: rows,
    })
      .then((response) => {
        //вызываем мутацию для передачи даных
        commit("SET_PRODUCTS_TO_STATE", response.data);
        state.rows = response.headers["x-wp-totalpages"];

        //console.dir(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_ORDERS_FROM_API({ getters }) {
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY_ORDERS, // Your consumer key
      consumerSecret: SETTINGS.SECRET_ORDERS, // Your consumer secret
      queryStringAuth: true,
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
      axiosConfig: SETTINGS.AXIOS_JSON,
    });

    return WooCommerce.post("orders", getters.ORDERS)
      .then((response) => {
        //вызываем мутацию для передачи даных
        /*  commit("SET_ORDERS_TO_STATE", response.data);*/

        console.log(getters.ORDERS);
        console.log(response.data);
        /*  return response; */
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
  GET_INFO_FROM_API({ commit }) {
    return axios(SETTINGS.URL + "wp-json", {
      method: "GET",
    })
      .then((info) => {
        commit("SET_INFO_TO_STATE", info);
        return info;
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
      axiosConfig: SETTINGS.AXIOS,
    });
    return WooCommerce.get("customers/1")
      .then((customers) => {
        commit("SET_CUSTOMERS_TO_STATE", customers.data);
        return customers;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_POP_PRODUCTS_FROM_API({ commit }) {
    let $random = Math.floor(Math.random() * 2) + 1;
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
      axiosConfig: SETTINGS.AXIOS,
    });
    return WooCommerce.get("products", {
      featured: true,
      per_page: 4,
      page: $random,
    })
      .then((response) => {
        //вызываем мутацию для передачи даных
        commit("SET_POP_PRODUCTS_TO_STATE", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_NEW_PRODUCTS_FROM_API({ commit }) {
    var $date = new Date();
    $date.setMonth(1);
    //$date.setDate(-1);
    var $date_back = $date.toISOString();
    $date_back = $date_back.slice(0, -5);
    //console.log($date_back);

    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
      axiosConfig: SETTINGS.AXIOS,
    });
    return WooCommerce.get("products", {
      before: $date_back,
      per_page: 4,
      page: 1,
    })
      .then((response) => {
        //вызываем мутацию для передачи даных
        commit("SET_NEW_PRODUCTS_TO_STATE", response.data);
        return response;
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
      axiosConfig: SETTINGS.AXIOS,
    });
    return WooCommerce.get("products/categories?include=33,36,39") // ?include=33,36,39
      .then((categories) => {
        //вызываем мутацию для передачи даных
        commit("SET_CATEGORIES_TO_STATE", categories.data);
        //console.log(categories.data);
        return categories;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_PRODUCT_FROM_API({ commit, state }) {
    const WooCommerce = new WooCommerceRestApi({
      url: SETTINGS.URL, // Your store URL
      consumerKey: SETTINGS.KEY, // Your consumer key
      consumerSecret: SETTINGS.SECRET, // Your consumer secret
      version: SETTINGS.VERSION_3, // WooCommerce WP REST API version
      axiosConfig: SETTINGS.AXIOS,
    });
    return WooCommerce.get("products/" + state.product_id)
      .then((response) => {
        //вызываем мутацию для передачи даных
        commit("SET_PRODUCT_FROM_API", response.data);
        //console.log(categories.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
