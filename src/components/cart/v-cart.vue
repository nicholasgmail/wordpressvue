<template>
  <b-container fluid="lg" class="v-cart">
    <b-row cols="1">
      <p v-if="!cart_data.length">Корзина пуста...</p>

      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="index"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      ></v-cart-item>
    </b-row>
    <b-row cols="1" class="v-cart__total justify-content-center align-items-center">
      <b-col col sm="2">
        <p class="v-cart__name">Сумма</p>
        <p>{{cartTotalCost}} p.</p>
      </b-col>
      <b-col col sm="2">
        <p class="v-cart__name">Количество</p>
        <p>{{cartQuantity}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VCartItem from "./v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: { VCartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
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
      "DECREMENT_CART_ITEM"
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  }
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;

  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: #2a5446;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  &__name {
    margin-right: $margin * 2;
  }
}
</style>