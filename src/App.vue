<template>
  <div id="app">
    
    <header-menu></header-menu>
    
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    headerMenu: () => import("@/components/navbar/header-menu")
   
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
