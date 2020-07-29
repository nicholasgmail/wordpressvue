<template>
  <div class="about-us container-lg" v-if="data.title">
    <breadcrumb :name_breadcrumb="data.title.rendered"></breadcrumb>

    <h1 class="my-3">{{data.title.rendered}}</h1>

    <div class="" v-html="data.content.rendered"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "about-us",
  components: {
    Breadcrumb: ()=>import ('@/components/breadcrumb/breadcrumb'),

  },
  props: {},
  data() {
    return {
      data: ''
    };
  },
  computed: {},
  methods: {},
  async mounted() {
        axios.get('https://rubizhnesocks.pl.ua/wp-json/wp/v2/pages/124')
            .then(response => this.data = response.data)
            .catch(error => console.log(error));
  },
  watch: {}
};
</script>

<style lang="scss">
.about-us {
  p {
    img {
      display: block;
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>

