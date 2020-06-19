import SETTINGS from "../../settings";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    const WooCommerce = new WooCommerceRestApi({
      url: "https://rubizhnesocks.pl.ua/", // Your store URL
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
};
