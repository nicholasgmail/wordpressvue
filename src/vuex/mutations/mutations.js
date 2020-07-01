export default {
  SET_MENU_TO_STATE: (state, menu) => {
    state.menu = menu;
  },
  SET_CUSTOMERS_TO_STATE: (state, customers) => {
    state.customers = customers;
  },
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.vModelValue = value;
  },
  SET_ID_CATEGORIES_TO_VUEX: (state, value) => {
    state.ctegoryId = value;
  },
  SET_PRODUCTS_TO_STATE: (state, product) => {
    //передаем даные в продукт з мутации
    state.product = product;
  },
  SET_POP_PRODUCTS_TO_STATE: (state, product) => {
    //передаем даные в продукт з мутации
    state.popProduct = product;
  },
  SET_NEW_PRODUCTS_TO_STATE: (state, product) => {
    //передаем даные в продукт з мутации
    state.newProduct = product;
  },
  SET_CATEGORIES_TO_STATE: (state, categories) => {
    state.categories = categories;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(function(item) {
        if (item.id === product.id) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
};
