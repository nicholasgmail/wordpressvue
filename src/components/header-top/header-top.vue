
<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <!-- <svg-icon name="Envelope" width="1rem" height="3rem"/> -->
      NavBar
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-for="menu in MENU" :key="menu.id">
        <b-nav-item v-if="menu.menu_item_parent == '0'" :to="menuURLPath(menu.url)">{{menu.title}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "header-top",
  components: {},
  props: {},
  data() {
    return {};
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
</style>