<template>
  <b-container fluid="lg" class="shop">
    <breadcrumb :name_breadcrumb="title"></breadcrumb>
    <h2>{{title}}</h2>
    <b-row>
      <v-cart v-if="CART.length" :cart_data="CART"></v-cart>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "shop",
  components: {
    Breadcrumb: ()=>import ('@/components/breadcrumb/breadcrumb'),
    VCart: () => import("@/components/cart/v-cart")
  },
  props: {},
  data() {
    return {
      title: "Корзина товаров"
    };
  },
  computed: {
     ...mapGetters([
                'CART'
            ])
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss">
.v-shop {
  max-width: 900px;
  margin: 0 auto;
}
</style>

