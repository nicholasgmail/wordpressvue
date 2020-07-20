<template>

  <div class="v-catalog-item col mb-4 px-1">
    <div class="card h-100" 
          @mouseenter="hover = true"
          @mouseleave="hover = false" 
          :class="{ shadow: hover === true }">
      <img @click="toProduct(product_data)" 
          :src="product_data.images[0].src" 
          class="mx-auto d-block w-100 p-2" 
          :alt="product_data.name"
          :style="{ 'object-fit': 'cover', height:'220px'}"/>
      <div class="card-body d-flex align-items-start flex-column bd-highlight">
        <h6 class="text-center mb-auto text-muted bd-highlight">{{product_data.name}}</h6>
        <div class="mx-auto my-4">
          <h4 class="card-text font-weight-bold">{{product_data.price}} грн.</h4>
        </div>
        <b-button class="btn_buy"
                  block variant="primary bd-highlight" 
                  @click="addToCart"
                  v-if="!this.product_data.attributes[0]"
        >Купить <svg-icon name="shopping-cart" style="width: 1.4em; height: 1.4em"></svg-icon>
        </b-button>

        <b-button class="btn_look"
                  block variant="success bd-highlight" 
                  @click="toProduct(product_data)"
                  v-else
        >Просмотреть <svg-icon name="redo"></svg-icon>
        </b-button>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions} from "vuex"

export default {
  name: "v-catalog-item",
  //c помощю props получаем даные и родителя
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      hover: false
    };
  },
  computed: {

  },
  methods: {
    ...mapActions(["GET_PRODUCT_ID_TO_VUEX", "GET_PRODUCT_FROM_API"]),   
     makeToast(variant = null, toaster, append = false) {
        let $price = this.product_data.price
        this.$bvToast.toast(this.product_data.name, {
            title: `Товар добавлен, по цене ${$price} грн`,
            variant: variant,
            toaster: toaster,
            solid: true,
            appendToast: append,
            autoHideDelay: 500
        })
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
      this.makeToast("info", "b-toaster-bottom-left", true); 
    },
    toProduct() {
      function toTranslit(text) {
          return text.replace( /([а-яё])|([\s_-])|([^a-z\d])/gi,
            function (all, ch, space, words) {
              if (space || words) {
                  return space ? '-' : '';
              }
              var code = ch.charCodeAt(0),
                  index = code == 1025 || code == 1105 ? 0 :
                      code > 1071 ? code - 1071 : code - 1039,
                  t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                      'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                      'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                      'shch', '', 'y', '', 'e', 'yu', 'ya'
                  ]; 
              return t[index];
            }
          );
        }
      var $name_s = toTranslit(this.product_data.name), 
          $name = $name_s.toLowerCase(),     
          $id = '-id-' + this.product_data.id,
          $name_id = $name + $id;
      this.GET_PRODUCT_ID_TO_VUEX(this.product_data.id);
      this.GET_PRODUCT_FROM_API().then(response => {
        if (response.data) {
          this.$router.push({ path: `/product`, query: { name: $name_id } });
        }
      });
    }
  },
}
</script>

<style lang="scss">
.v-catalog-item {
  .card {
    transition: all 0.1s ease-out;
     &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
    .card-body {
      .btn_buy {
        svg {
          fill: url(#svgicon_shopping-cart_a);
        }
      }
      .btn_look {
        svg {
          fill: rgb(255, 231, 13);
        }
      }
    }
  }

}
</style>