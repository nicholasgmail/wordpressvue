<template>
  <div id="app">
    
    <header-menu></header-menu>
    <!--  <router-link :to="{name:'home'}">home</router-link>|
    <router-link :to="{name:'shop'}">shop</router-link>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    /*  elMenu */
    headerMenu: () => import("@/components/navbar/header-menu")
   /*  eHeaderMenu: () => import("@/components/navbar/e-header-menu") */
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
 //заголовки
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6{
      font-family: $font-family-sans;
}

</style>
