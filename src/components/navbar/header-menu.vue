
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
  name: "header-menu",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["MENU"])
  },
  methods: {
    ...mapActions(["GET_MENU_FROM_API"]),
    menuURLPath(url) {
      /* eslint-disable */
      var m = url.match(
          /^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/
        ),
        r = {
          hash: m[10] || "", // #asd
          host: m[3] || "", // localhost:257
          hostname: m[6] || "", // localhost
          href: m[0] || "", // http://username:password@localhost:257/deploy/?asd=asd#asd
          origin: m[1] || "", // http://username:password@localhost:257
          pathname: m[8] || (m[1] ? "/" : ""), // /deploy/
          port: m[7] || "", // 257
          protocol: m[2] || "", // http:
          search: m[9] || "", // ?asd=asd
          username: m[4] || "", // username
          password: m[5] || "" // password
        };
      return r.pathname;
    }
  },
  mounted() {
    this.GET_MENU_FROM_API().then(response => {
      if (response.data) {
      }
    });
  },
  watch: {}
};
</script>

<style lang="scss">
</style>