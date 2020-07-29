<template>
  <div class="payment-delivery container-lg" v-if="data.title">
    <breadcrumb :name_breadcrumb="data.title.rendered"></breadcrumb>

    <h1 class="my-3">{{data.title.rendered}}</h1>

    <div class="" v-html="data.content.rendered"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "payment-delivery",
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
        axios.get('https://rubizhnesocks.pl.ua/wp-json/wp/v2/pages/698')
            .then(response => this.data = response.data)
            .catch(error => console.log(error));
  },
  watch: {}
};
</script>

<style lang="scss">
.payment-delivery {
}
</style>

