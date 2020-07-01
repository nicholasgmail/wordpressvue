
<template>
  <b-navbar toggleable="sm" type="light" variant="white" class="py-0">
    <b-container fluid="lg" class="my-2">
      <b-navbar-brand :href="url" class="h1 text-uppercase mb-0">Rubizhnesocks</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :href="tophone" class="my-auto">
          <svg-icon class="mr-2" name="phone" width="1rem" height="1rem" />
          <span class="text-muted">{{phone}}</span>
        </b-nav-item>
        <b-nav-item :href="toemail" class="my-auto">
          <svg-icon class="mr-2" name="email" width="1rem" height="1rem" />
          <span class="text-muted">{{email}}</span>
        </b-nav-item>
      </b-navbar-nav>
      <div class="position-relative z-1">
        <b-button v-b-toggle.collapse-cart class="btn-icon px-5" variant="outline-danger">
          <svg-icon class="svg-fill_red mr-2" name="cart" width="1.5rem" height="1.5rem" />
          <span class="mr-2">{{CART.length}}x19 грн.</span>
          <span class="text-uppercase">Корзина</span>
        </b-button>
        <b-collapse id="collapse-cart" class="mt-2 w-100 position-absolute">
          <v-mini-cart></v-mini-cart>
        </b-collapse>
      </div>
    </b-container>
  </b-navbar>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header-top",
  components: {
    VMiniCart: () => import("@/components/cart/v-mini-cart")
  },
  props: {},
  data() {
    return {
      phone: null,
      email: null,
      toemail: null,
      tophone: null,
      url: null,
      description: null
    };
  },
  computed: {
    ...mapGetters(["CART"])
  },
  methods: {
    ...mapActions(["GET_CUSTOMERS_FROM_API", "GET_INFO_FROM_API"])
  },
  async mounted() {
    this.GET_CUSTOMERS_FROM_API().then(response => {
      if (response.data) {
        console.log(response.data);
        this.phone = response.data.billing.phone;
        this.email = response.data.billing.email;
        this.toemail = "mailto:" + response.data.billing.email;
        this.tophone = "tel:" + response.data.billing.phone;
      }
    });
    this.GET_INFO_FROM_API().then(response => {
      if (response.data) {
        this.url = response.data.url;
        this.description = response.data.description;
      }
    });
  },
  watch: {}
};
</script>

<style lang="scss">
.navbar {
  .navbar-brand {
    color: $blue;
    &:hover {
      color: $orang;
    }
  }
  .svg-fill {
    path {
      fill: $gray-600;
    }
    &_red {
      path {
        fill: $red;
      }
    }
  }
  .btn-icon {
    &:hover {
      .svg-fill_red {
        path {
          fill: #fff;
        }
      }
    }
  }
}
</style>