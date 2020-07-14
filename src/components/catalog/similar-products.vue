<template>
  <div class="similar-products container py-4">
      <h1 class="mt-4">Похожие товары</h1>
      <div class="row">
        
        <div v-if="show" class="w-100 text-center my-3 text-primary"> 
          <b-spinner  option="primary" label="Text Centered"> </b-spinner> 
        </div>

        <v-catalog-item v-for="product in product_slice" :key="product.id" :product_data="product"></v-catalog-item>
      </div>
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'
import { mapActions, mapGetters } from "vuex"

export default {
    name: "similar-products",
    components: { 
      VCatalogItem: ()=>import ('@/components/catalog/v-catalog-item'),
      BSpinner 
    },
    props: {
      category_id: {
        type: Number,
        default() {
          return {};
        }
      }
    },
  data() {
    return {
      show: true
    };
  },
  computed: { 
    ...mapGetters(["PRODUCTS", "CART"]),
    product_slice() {
      var product_slice = this.PRODUCTS.slice(4);
      return product_slice
    }
  },
  methods:{
    ...mapActions(["GET_PRODUCTS_FROM_API", "GET_ID_CATEGORIES_TO_VUEX"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }

  },
  mounted() {
    this.GET_ID_CATEGORIES_TO_VUEX(this.category_id); 
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        this.show = false;
      }
    });
  },
  watch: {
    category_id: function(){
      this.GET_ID_CATEGORIES_TO_VUEX(this.category_id);
      this.GET_PRODUCTS_FROM_API();
    }
  }
}
</script>

<style lang="scss">

</style>