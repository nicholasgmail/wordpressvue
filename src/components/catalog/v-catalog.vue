<template>
  <b-container fluid="lg" class="v-catalog">
    <b-breadcrumb class="pl-0">
      <b-breadcrumb-item to="/">Главная</b-breadcrumb-item>
      <b-breadcrumb-item active>Носки купить</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="text-center">Носки купить</h1>
    <b-row cols="6" class="justify-content-between px-1 px-md-3 mb-2">
      <b-form-select v-model="sortingCatalog" :options="sortingOptions" size="sm"></b-form-select>
      <div class="col-4 d-flex pr-0">
        <b-form-select v-model="sortingCategories" :options="optionsCategories" class="mr-2" size="sm"></b-form-select>
        <b-form-select v-if="sortingCategories === null" v-model="sortingSubCategories" :options="optionsSubCategories"  size="sm"></b-form-select>
        
        <b-form-select v-if="sortingCategories === 36" v-model="maleSortingSubCategories" :options="maleOptionsSubCategories"  size="sm"></b-form-select>
        <b-form-select v-if="sortingCategories === 33" v-model="femaleSortingSubCategories" :options="femaleOptionsSubCategories"  size="sm"></b-form-select>
        <b-form-select v-if="sortingCategories === 39" v-model="babySortingSubCategories" :options="babyOptionsSubCategories"  size="sm"></b-form-select>
      </div>
    </b-row>

    <b-row cols="2" cols-md="3" cols-lg="4" id="my-table">
      <!--Передали даные с дочернему елементу с помощю v-bind -->
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        v-bind:product_data="product"
        @addToCart="addToCart"
      ></v-catalog-item>
    </b-row>
    <b-pagination-nav
      @change="nextPage"
      :link-gen="linkGen"
      :number-of-pages="ROWS"
      use-router
      first-number
      last-number
    ></b-pagination-nav>
    <p class="mt-3">Текущая страница: {{ currentPage }}</p>
    <p class="mt-3">Всего страниц: {{ ROWS }}</p>
  </b-container>
</template>

<script>
import VCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";
import paginationMixin from "@/mixins/pagination.mixins";

export default {
  name: "v-catalog",
  mixins: [paginationMixin],
  components: { VCatalogItem },
  props: {},
  data() {
    return {
      lineItems: [],
      currentPage: null,
      sortingCatalog: { orderby: null, order: null },
      sortingOptions: [
        { value: { orderby: null, order: null }, text: "Исходная сортировка" },
        { value: { orderby: "date", order: "desc" }, text: "По популярности" },
        { value: { orderby: "date", order: "asc" }, text: "По более позднему" },
        {
          value: { orderby: "price", order: "asc" },
          text: "Цена по возростанию"
        },
        { value: { orderby: "price", order: "desc" }, text: "Цена по убыванию" }
      ],
      sortingCategories: null,
      optionsCategories: [
        { value: null, text: "Выбрать категорию" },
        { value: 36, text: "Мужские" },
        { value: 33, text: "Женские" },
        { value: 39, text: "Детские" }
      ],
      sortingSubCategories: null,
      optionsSubCategories: [{ value: null, text: "Сезон" }],

      maleSortingSubCategories: null,
      maleOptionsSubCategories: [
        { value: null, text: "Сезон" },
        { value: 38, text: "Зима" },
        { value: 37, text: "Весна - осень" },
        { value: 73, text: "Лето" }
      ],
      femaleSortingSubCategories: null,
      femaleOptionsSubCategories: [
        { value: null, text: "Сезон" },
        { value: 35, text: "Зима" },
        { value: 34, text: "Весна - осень" },
        { value: 69, text: "Лето" }
      ],
      babySortingSubCategories: null,
      babyOptionsSubCategories: [
        { value: null, text: "Сезон" },
        { value: 41, text: "Зима" },
        { value: 40, text: "Весна - осень" },
        { value: 70, text: "Лето" }
      ]
    };
  },
  created() {},
  computed: {
    ...mapGetters([
      "SEARCH_VALUE",
      "PRODUCTS",
      "CART",
      "ROWS",
      "CATEGORY_ID",
      "ORDERS",
      "LSTOREG"
    ])
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "GET_ID_CATEGORIES_TO_VUEX",
      "GET_SORTING_OPTIONS_TO_VUEX",
      "ADD_TO_CART",
      "GET_ORDERS_FROM_API",
      "GET_CART_FROM_API"
    ]),
    //метод для получения даных из локального хранилища
    getToCart() {
      const $itemProduct = localStorage.getItem(this.LSTOREG);
      if ($itemProduct !== null) {
        return JSON.parse($itemProduct);
      }
      return [];
    },
    //метод добавления в хранилище
    addToCart(data) {
      this.ADD_TO_CART(data);
      this.lineItems = this.getToCart();
      //существует продукт или нет в хранилище
      const $index = this.lineItems.find(item => item.product_id == data.id);
      //действие если существует в хранилище
      if (!$index) {
        var $orders = {
          product_id: data.id,
          quantity: 1
        };
        this.lineItems.push($orders);
        let $parse = JSON.stringify(this.lineItems);
        return localStorage.setItem(this.LSTOREG, $parse);
      } else {
        //действие если не существует в хранилище
        this.lineItems.find(item =>
          item.product_id == data.id ? ++item.quantity : ""
        );
        let $parse = JSON.stringify(this.lineItems);
        return localStorage.setItem(this.LSTOREG, $parse);
      }
    },
    nextPage() {
      this.GET_PRODUCTS_FROM_API(this.$route.query.page).then(response => {
        if (response.data) {
          if (this.$route.query.page) {
            this.currentPage = this.$route.query.page;
          } else {
            this.currentPage = 1;
          }
        }
      });
    }
  },
  async mounted() {
    if (this.$route.fullPath === "/shop" || this.$route.fullPath === "/shop/") {
      this.$set(this.$route.query, "page", 1);
    }
    this.GET_PRODUCTS_FROM_API(this.$route.query.page).then(response => {
      if (response.data) {
        if (this.$route.query.page) {
          this.currentPage = this.$route.query.page;
        } else {
          this.currentPage = 1;
        }
      }
    });
    if (this.CATEGORY_ID === 36) {
      this.sortingCategories = this.CATEGORY_ID;
    }
    if (this.CATEGORY_ID === 33) {
      this.sortingCategories = this.CATEGORY_ID;
    }
    if (this.CATEGORY_ID === 39) {
      this.sortingCategories = this.CATEGORY_ID;
    }
  },
  watch: {
    // отслеживание изменения route
    $route: function () {
      //добавить страницу оплата и доставка
      if (this.$route.path === "/" || this.$route.path === "/blog/") {
        this.sortingCatalog = { orderby: null, order: null };
        this.sortingCategories = null;
      }
      if (
        this.$route.fullPath === "/shop" ||
        this.$route.fullPath === "/shop/"
      ) {
        this.$set(this.$route.query, "page", 1);
      }
    },
    // отслеживание сортировок товаров по дате, популярности и стоимости
    sortingCatalog: function() {
      if( this.$route.path === "/shop" || this.$route.path === "/shop/" ) {
        this.$router.push({path: "/shop"});
      }
      this.$route.query.page = 1;
      this.currentPage = 1;
      this.GET_SORTING_OPTIONS_TO_VUEX(this.sortingCatalog);
      this.GET_PRODUCTS_FROM_API(this.$route.query.page);
    },
    // отслеживание сортировок по категориям и под категориям
    sortingCategories: function() {
      if (this.sortingCategories != this.CATEGORY_ID) {
        this.GET_ID_CATEGORIES_TO_VUEX(this.sortingCategories);
      }
    },
    maleSortingSubCategories: function() {
      this.GET_ID_CATEGORIES_TO_VUEX(this.maleSortingSubCategories);
      if (this.maleSortingSubCategories === null) {
        this.GET_ID_CATEGORIES_TO_VUEX(this.sortingCategories);
      }
    },
    femaleSortingSubCategories: function() {
      this.GET_ID_CATEGORIES_TO_VUEX(this.femaleSortingSubCategories);
      if (this.femaleSortingSubCategories === null) {
        this.GET_ID_CATEGORIES_TO_VUEX(this.sortingCategories);
      }
    }, 
    babySortingSubCategories: function() {
      this.GET_ID_CATEGORIES_TO_VUEX(this.babySortingSubCategories);
      if (this.babySortingSubCategories === null) {
        this.GET_ID_CATEGORIES_TO_VUEX(this.sortingCategories);
      }
    }, 
    // отслеживание изменения id категории
    CATEGORY_ID: function() {
      if (this.$route.path === "/shop" || this.$route.path === "/shop/") {
        this.$router.push({ fullPath: "/shop" });
      }
      this.$route.query.page = 1;
      this.currentPage = 1;
      this.GET_PRODUCTS_FROM_API(this.$route.query.page);

      if (this.CATEGORY_ID === 36) {
        this.sortingCategories = this.CATEGORY_ID;
      }
      if (this.CATEGORY_ID === 33) {
        this.sortingCategories = this.CATEGORY_ID;
      }
      if (this.CATEGORY_ID === 39) {
        this.sortingCategories = this.CATEGORY_ID;
      }
    }
  }
};
</script>

<style lang="scss">
.v-catalog {
  .breadcrumb {
    background-color: #fff;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>