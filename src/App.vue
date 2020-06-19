<template>
  <div id="app">
  <div>
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div>
    <v-main-wrapper></v-main-wrapper>
    <div class="container" style="padding-top: 16px;">
      <router-view />
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import vMainWrapper from './components/v-main-wrapper'
=======
import vMainWrapper from './components/v-main-wrapper';
>>>>>>> 279a8fd8a62f74c33ffae3735c3fda504e922f51

export default {
  name: "App",
  components: {
<<<<<<< HEAD
    vMainWrapper
=======
    vMainWrapper 
>>>>>>> 279a8fd8a62f74c33ffae3735c3fda504e922f51
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
