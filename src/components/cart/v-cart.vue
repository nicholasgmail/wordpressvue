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
        <p>{{cartTotalCost}} грн.</p>
      </b-col>
      <b-col col sm="2">
        <p class="v-cart__name" v-pre>Количество</p>
        <p>{{cartQuantity}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-cart",
  //() =>import("./v-cart-item") - динамический импорт.
  //VCartItem - функция которая возвращат промис
  components: { VCartItem: () => import("./v-cart-item") },
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