<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data : CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1 class="text-center text-white">Catalog</h1>
    <div class="v-catalog__list" id="my-table">
      <!--Передали даные с дочернему елементу с помощю v-bind -->
      <v-catalog-item v-for="product in PRODUCTS" :key="product.id" v-bind:product_data="product"></v-catalog-item>
    </div>
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
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters, mapState } from "vuex";
/* import SETTINGS from "@/settings";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; */
import paginationMixin from "@/mixins/pagination.mixins";

export default {
  name: "v-catalog",
  mixins: [paginationMixin],
  components: { VCatalogItem },
  props: {},
  data() {
    return {
      currentPage: null,
      page: 1
    };
  },
  created() {},
  computed: {
    ...mapGetters(["SEARCH_VALUE", "PRODUCTS", "CART", "ROWS"]),
    ...mapState(["rows"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    nextPage() {
      this.GET_PRODUCTS_FROM_API(this.$route.query.page).then(response => {
        if (response.data) {
          this.currentPage = this.$route.query.page;
        }
      });
    },
  },
  async mounted() {
    this.GET_PRODUCTS_FROM_API(this.$route.query.page).then(response => {
      if (response.data) {
        this.currentPage = 1;
      }
    });
  }
};
</script>

<style lang="scss">
.v-catalog {
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