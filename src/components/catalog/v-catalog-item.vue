<template>
  <b-col class="v-catalog-item px-3 mb-2">
    <b-card tag="article" style="max-width: 20rem;" class="h-100">
      <b-card-img-lazy
        :src="product_data.images[0].src"
        top="true"
        alt="img"
        sizes="(max-width: 320px) 150px,
            (max-width: 480px) 180px,
            260px"
      ></b-card-img-lazy>
      <div class="d-flex flex-column justify-content-between h-100">
        <b-card-title>{{product_data.categories[1].name}}</b-card-title>
        <b-card-sub-title class="mb-2">{{product_data.sku}}</b-card-sub-title>
        <b-card-text class="text-muted">{{product_data.name}}</b-card-text>
        <b-card-text class="text-danger font-weight-bold">{{product_data.price}} грн.</b-card-text>

        <b-button block variant="outline-primary" @click="addToCart">Купить</b-button>
      </div>
    </b-card>
  </b-col>
</template>

<script>
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
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  }
};
</script>

<style lang="scss">
</style>