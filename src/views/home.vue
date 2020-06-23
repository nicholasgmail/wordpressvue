<template>
  <div class="home">

    <slider></slider>

    <categories :categories_data="CATEGORIES"></categories>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name: "home",
  components: {
    Categories: ()=>import ('@/components/home/categories'),
    Slider: ()=>import ('@/components/home/slider')
  },
  props: {},
   data() {
    return {
      title: "Hello home"
    };
  },
  computed: {
        ...mapGetters(["CATEGORIES"]),

  },
  methods: {
        ...mapActions(["GET_CATEGORIES_FROM_API"]),

  },
  mounted() {
    this.GET_CATEGORIES_FROM_API()
  },
  watch: {}
};
</script>

<style lang="scss">
  .home {
    max-width: 900px;
    margin: 0 auto;
  }
</style>

