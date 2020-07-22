<template>
  <b-row v-if="show" class="list-cart">
    <b-col sm="12" lg="8">
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="index"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      ></v-cart-item>
    </b-col>
    <v-cart-info :cart_item_data="cart_data"></v-cart-info>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-cart",
  //() =>import("./v-cart-item") - динамический импорт.
  //VCartItem - функция которая возвращат промис
  components: {
    VCartItem: () => import("./v-cart-item"),
    VCartInfo: () => import("./v-cart-info")
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    if (this.cart_data) {
      this.$nextTick(() => {
        this.show = true;
      });
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
    },
    cartQuantity() {
      let quantity = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          quantity.push(item.quantity);
        }
        quantity = quantity.reduce(function(sum, el) {
          return sum + el;
        });
        return quantity;
      } else {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
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
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
      this.cart = this.getToCart();
      this.cart[index].quantity++;
      let $parse = JSON.stringify(this.cart);
      localStorage.setItem(this.LSTOREG, $parse);
    },
    decrement(index) {
      this.cart = this.getToCart();
      this.DECREMENT_CART_ITEM(index);
      if (this.cart[index].quantity == 1) {
        this.deleteFromCart(index);
      } else {
        this.cart[index].quantity--;
        let $parse = JSON.stringify(this.cart);
        localStorage.setItem(this.LSTOREG, $parse);
      }
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
.v-cart {
  &__total {
    background: #2a5446;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>