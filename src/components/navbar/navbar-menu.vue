
<template>
  <b-container fluid="lg">
    <b-navbar toggleable="lg" type="dark" variant="info">    

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="menu in MENU" :key="menu.id">
          <b-nav-item v-if="menu.menu_item_parent == '0'" 
                      :to="menuURLPath(menu.url)"
                      @click="delete_ctegoryId('')"
          >{{menu.title}}
          </b-nav-item>
        </b-navbar-nav>
        
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-on:submit.prevent="search(vModelValue)">
            <b-form-input size="sm" class="mr-sm-2" v-model="vModelValue" @change="search(vModelValue)" placeholder="Search"></b-form-input>
            <b-button size="sm" class="search_btn my-2 my-sm-0" @click="search(vModelValue)">
              <svg-icon name="search"></svg-icon>
            </b-button>
          </b-nav-form>
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
  props: {
  },
  data() {
    return {
      vModelValue: ''
    };
  },
  computed: {
    ...mapGetters(["MENU", "SEARCH_VALUE", "CATEGORY_ID"])
  },
  methods: {
    ...mapActions(["GET_MENU_FROM_API", "GET_PRODUCTS_FROM_API", "GET_SEARCH_VALUE_TO_VUEX", "GET_ID_CATEGORIES_TO_VUEX"]),
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
    },
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path === "/shop" || this.$route.path === "/shop/") {
        this.GET_PRODUCTS_FROM_API();
      } else {
        this.$router.push('/shop');
        this.GET_PRODUCTS_FROM_API();
      }
    },
    delete_ctegoryId(value) {
      this.GET_ID_CATEGORIES_TO_VUEX(value);
      this.GET_PRODUCTS_FROM_API();
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
.search_btn {
  :hover {
      fill: white;
  }
  svg {
    fill: #7E7F84;
  }
}
</style>