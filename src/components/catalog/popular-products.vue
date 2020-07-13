<template>
  <div class="popular-products container py-3">
      <h1 class="text-center" v-pre>Популярные товары</h1>
      <div class="row">
        
      <div v-if="show" class="w-100 text-center my-3 text-primary"> 
        <b-spinner  option="primary" label="Text Centered"> </b-spinner> 
      </div>

        <v-catalog-item v-for="product in POP_PRODUCTS" :key="product.id" v-bind:product_data="product"></v-catalog-item>
      </div>
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'
import { mapActions, mapGetters } from "vuex"

export default {
    name: "popular-products",
    components: { 
      VCatalogItem: ()=>import ('@/components/catalog/v-catalog-item'),
      BSpinner 
    },
    props: {
    },
  data() {
    return {
      show: true
    };
  },
  computed: { 
    ...mapGetters(["POP_PRODUCTS", "CART"])
  },
  methods:{
    ...mapActions(["GET_POP_PRODUCTS_FROM_API"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }

  },
  mounted() { 
    this.GET_POP_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        this.show = false;
/*               let vm = this;
              this.PRODUCTS.map(function (item) {
                if (item.type === 'variable' && vm.popProducts.length <= 3) {
                  vm.popProducts.push(item);
                }
              })
 */      }
    });

  }
}
</script>

<style lang="scss">

</style>