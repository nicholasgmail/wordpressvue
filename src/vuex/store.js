import Vue from "vue";
//подключили vuex
import Vuex from "vuex";

import commonActions from "./actions/actions";
import apiRequest from "./actions/api-request";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

//обединение файлов
const actions = { ...commonActions, ...apiRequest };

//попросили использовать vuex
Vue.use(Vuex);

//перемменая хранилище даных
//в состояние записали масив
//вызываем метод гет и обращемся к api для получения даных
let store = new Vuex.Store({
  state: {
    customers: [],
    productId: null,
    product: [],
    orders: {
      status: "processing",
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
      },
      line_items: [
        {
          product_id: 3127,
          quantity: 1,
        },
      ],
    },
    products: [],
    product_id: '',
    phone: null,
    cart: [],
    lstoreg:"line_items",
    menu: [],
    categories: [],
    categoryId: null,
    rows: null,
    perpage: 8,
    vModelValue: "",
    sortingCatalog: { orderby: null, order: null },
    popProduct: [],
    newProduct: [],
    info: [],
  },
  mutations,
  actions,
  getters,
});

export default store;
