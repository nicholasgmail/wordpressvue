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
    product: [],
    phone: null,
    cart: [],
    menu: [],
    categories: [],
    ctegoryId: '',
    rows: null,
    perpage: 8,
    vModelValue: '',
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
