<template>
  <b-card no-body class="overflow-hidden card-yellow" style="max-width: 540px;">
    <p v-if="!cart_data.length">Корзина пуста...</p>
        <v-mini-cart-item
         v-for="(item, index) in cart_data"
        :key="index"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        ></v-mini-cart-item>
    <div class="px-2">
      <hr />
    </div>
    <b-row class="p-1 flex-column justify-content-center">
      <b-col>
        <h6>
          Подитог:
          <span class="font-weight-bold">{{cartTotalCost}} грн.</span>
        </h6>
      </b-col>
      <b-col>
        <div class="d-flex flex-column justify-content-center">
          <router-link class="btn btn-outline-info mt-2" :to="{name: 'cart', params: {cart_data : CART}}">
            Просмотреть корзину
          </router-link>
          <b-button squared variant="success mt-2">Оформить заказ</b-button>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-mini-cart",
  data() {
    return {};
  },
  components: { VMiniCartItem: ()=>import('@/components/cart/v-mini-cart-item') },
   props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      //подсчет общей стоимости
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "DELETE_FROM_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  }
};
</script>

<style lang="scss">
.navbar {
  .card-yellow {
    border-color: rgba($color: $red, $alpha: 1);
  }
}
</style>