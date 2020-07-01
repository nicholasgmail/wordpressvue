export default {
  SEARCH_VALUE(state) {
    return state.vModelValue;
  },
  PRODUCTS(state) {
    return state.product;
  },
  POP_PRODUCTS(state) {
    return state.popProduct;
  },
  NEW_PRODUCTS(state) {
    return state.newProduct;
  },
  CATEGORIES(state) {
    return state.categories;
  },
  CATEGORY_ID(state) {
    return state.ctegoryId
  },
  CART(state) {
    return state.cart;
  },
  MENU(state) {
    return state.menu;
  },
  INFO(state) {
    return state.info;
  },
  CUSTOMERS(state) {
    return state.customers;
  },
  ROWS(state) {
    return state.rows;
  },
};
