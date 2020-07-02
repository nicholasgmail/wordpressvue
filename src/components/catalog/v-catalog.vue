<template>
  <b-container fluid="lg" class="v-catalog">
    <h1 class="text-center">Catalog</h1>
    <b-row cols="2"  cols-md="3" cols-lg="4" id="my-table">
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
import { mapActions, mapGetters, mapState } from "vuex";
import paginationMixin from "@/mixins/pagination.mixins";

export default {
  name: "v-catalog",
  mixins: [paginationMixin],
  components: { VCatalogItem },
  props: {},
  data() {
    return {
      currentPage: null,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["SEARCH_VALUE", "PRODUCTS", "CART", "ROWS"]),
    ...mapState(["rows"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "GET_ID_CATEGORIES_TO_VUEX", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    nextPage() {
      this.GET_PRODUCTS_FROM_API(this.$route.query.page).then(response => {
        if (response.data) {
          if(this.$route.query.page){
            this.currentPage = this.$route.query.page;
          } else {
            this.currentPage = 1;
          }
        }
      });
    },
  },
  async mounted() {
    this.GET_PRODUCTS_FROM_API(this.$route.query.page).then(response => {
      if (response.data) {
        if(this.$route.query.page){
          this.currentPage = this.$route.query.page;
        } else {
          this.currentPage = 1;
        }
      }
    });
  },
  watch: {
    $route: function () {
      if ( !this.$route.query.page ) {
        this.currentPage = 1;
        this.GET_ID_CATEGORIES_TO_VUEX('');
        this.GET_PRODUCTS_FROM_API();
      }
    }
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