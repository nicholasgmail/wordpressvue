<template>
  <b-col class="v-catalog-item px-3 mb-2">
    <b-card tag="article" style="max-width: 20rem;" class="h-100">
      <div @click="toProduct(product_data)">
      <b-card-img-lazy :src="product_data.images[0].src" top alt="img" ></b-card-img-lazy>
      </div>
      <b-card-body>
        <div class="d-flex flex-column justify-content-between h-100">
          <b-card-title>{{product_data.categories[1].name}}</b-card-title>
          <b-card-sub-title class="mb-2">{{product_data.sku}}</b-card-sub-title>
          <b-card-text class="text-muted">{{product_data.name}}</b-card-text>
          <b-card-text class="text-danger font-weight-bold">{{product_data.price}} грн.</b-card-text>

          <b-button block variant="outline-primary" @click="addToCart">Купить</b-button>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
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
    return {};
  },
  computed: {

  },
  methods: {
    ...mapActions(["GET_PRODUCT_ID_TO_VUEX", "GET_PRODUCT_FROM_API"]),

    makeToast(variant = null) {
      let $price = this.product_data.price;
      this.$bvToast.toast(this.product_data.name, {
        title: `Товар добавлен, по цене ${$price} грн`,
        variant: variant,
        solid: true,
        autoHideDelay: 1500
      });
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
      this.makeToast('info');
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

      this.$router.push({ path: `/product`, query: { name: $name_id } });
      this.GET_PRODUCT_ID_TO_VUEX(this.product_data.id);
      this.GET_PRODUCT_FROM_API()

    }
  },
};
</script>

<style lang="scss">
.v-catalog-item{
  .card-body {
    img {
      cursor: pointer;
    }
  }
}
</style>