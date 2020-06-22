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
  },
  computed: {
  },
  methods:{
  },
  mounted(){
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
