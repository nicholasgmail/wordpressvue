<template>
  <div class="popular-products container py-3">
      <h1 class="text-center">Популярные товары</h1>
      <div class="row">
        <v-catalog-item v-for="product in popProducts" :key="product.id" v-bind:product_data="product"></v-catalog-item>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    name: "popular-products",
    components: { 
      VCatalogItem: ()=>import ('@/components/catalog/v-catalog-item') 
    },
    props: {
    },
  data() {
    return {
      popProducts: []
    };
  },
  computed: { 
    ...mapGetters(["PRODUCTS", "CART"])
  },
  methods:{
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }

  },
  mounted() { 
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        let vm = this;
        this.PRODUCTS.map(function (item) {
          if (item.type === 'variable' && vm.popProducts.length <= 3) {
            vm.popProducts.push(item);
          }
        })
      }
    });

  }
}
</script>

<style lang="scss">

</style>