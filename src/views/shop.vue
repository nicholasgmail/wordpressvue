<template>
  <div class="shop">
    <v-catalog></v-catalog>
  </div>
</template>

<script>

export default {
  name: "shop",
  components: {
    VCatalog: ()=>import ('@/components/catalog/v-catalog'),
  },
  props: {},
  data() {
    return {
      title: "Main wrapper"
    };
  },
  computed: {},
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

