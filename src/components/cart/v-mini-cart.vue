<template>
  <b-card no-body class="overflow-hidden card-yellow" style="max-width: 540px;">
    <b-row class="p-1 flex-column justify-content-center">
      <b-col>
        <div class="d-flex flex-column justify-content-center">
          <router-link
            class="btn btn-outline-info mt-2"
            :to="{path: '/cart/list-cart'}"
          >Просмотреть корзину</router-link>
          <router-link
            squared
            class="btn btn-success mt-2"
            :to="{path: '/cart/order'}"
          >Оформить заказ</router-link>
        </div>
      </b-col>
      <b-col class="pt-5">
        <h6 class="m-0">
          Подитог:
          <span class="font-weight-bold">{{cartTotalCost}} грн.</span>
        </h6>
      </b-col>
    </b-row>
    <div class="px-2">
      <hr />
    </div>
    <p v-if="!cart_data.length">Корзина пуста...</p>
    <v-mini-cart-item
      v-for="(item, index) in cart_data"
      :key="index"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    ></v-mini-cart-item>
    <div class="py-2"></div>
  </b-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-mini-cart",
  data() {
    return {
      cart: []
    };
  },
  components: {
    VMiniCartItem: () => import("@/components/cart/v-mini-cart-item")
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters(["CART", "LSTOREG"]),
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
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "DELETE_FROM_CART"]),
    //метод для получения даных из локального хранилища
    getToCart() {
      const $itemProduct = localStorage.getItem(this.LSTOREG);
      if ($itemProduct !== null) {
        return JSON.parse($itemProduct);
      }
      return [];
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
      this.cart = this.getToCart();
      this.cart.splice(index, 1);
      let $parse = JSON.stringify(this.cart);
      localStorage.setItem(this.LSTOREG, $parse);
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