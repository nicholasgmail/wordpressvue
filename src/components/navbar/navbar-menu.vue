
<template>
  <b-container fluid="lg" tag="header" class="border-top border-bottom">
    <b-navbar toggleable="lg" type="white" variant="white" class="px-0 pb-0">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(menu, index) in MENU"
            :key="index"
            :to="menuURLPath(menu.url)"
            class="pr-3"
            link-classes="text-uppercase position-relative px-0"
          >{{menu.title}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
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
    this.GET_MENU_FROM_API().then(response => {});
  },
  watch: {}
};
</script>

<style lang="scss">
header {
  .navbar-nav {
    .nav-link {
      color: $gray-600;
      &:hover {
        color: $red;
        &::before {
          content: "";
          border-bottom: 3px solid $red;
          width: 100%;
          position: absolute;
          top: 95%;
        }
      }
    }
    .router-link-exact-active {
      color: $red;
      &::before {
        content: "";
        border-bottom: 3px solid $red;
        width: 100%;
        position: absolute;
        top: 95%;
      }
    }
  }
}
</style>