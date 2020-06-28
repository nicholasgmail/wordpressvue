
<template>
  <div>
    <b-container fluid="xl">
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>BootstrapVue</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <!-- <svg-icon name="Envelope" width="1rem" height="3rem"/> -->
            <b-nav-text></b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
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
    ...mapGetters(["CUSTOMERS"])
  },
  methods: {
    ...mapActions(["GET_CUSTOMERS_FROM_API"])
  },
  mounted() {
    this.GET_CUSTOMERS_FROM_API().then(response => {
      if (response.data) {
        console.log(response.data.billing);
      }
    });
  },
  watch: {}
};
</script>

<style lang="scss">
</style>