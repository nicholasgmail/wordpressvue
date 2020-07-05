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
    return state.categoryId
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
  ORDERS(state) {
    return state.orders;
  },
  CUSTOMERS(state) {
    return state.customers;
  },
  ROWS(state) {
    return state.rows;
  },
};
