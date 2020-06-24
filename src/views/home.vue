<template>
  <div class="home">

    <slider></slider>

    <categories></categories>

    <popular-products></popular-products>
    
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Categories: ()=>import ('@/components/home/categories'),
    Slider: ()=>import ('@/components/home/slider'),
    PopularProducts: ()=>import ('@/components/catalog/popular-products')
  },
  props: {},
   data() {
    return {
      title: "Hello home"
    };
  },
  computed: {

  },
  methods: {

  },
  mounted() {
  },
  watch: {}
};
</script>

<style lang="scss">
  .home {
    max-width: 1366px;
    margin: 0 auto;
  }
</style>

