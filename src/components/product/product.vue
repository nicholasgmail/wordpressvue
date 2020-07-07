<template>
    <div class="product-vue container-lg px-0 py-3">
         <b-card v-if="PRODUCT != '' " no-body class="overflow-hidden border-0" style="max-width: ;">
            <b-row no-gutters class="justify-content-between">
                <b-col md="3">
                    <b-card-img :src="PRODUCT.images[0].src" 
                                alt="Image" 
                                class="rounded-0"
                                style="max-width: ;">
                    </b-card-img>
                </b-col>
                <b-col class="ml-md-4">
                    <b-card-body :title="PRODUCT.name">
                    <b-card-text v-html="PRODUCT.short_description"></b-card-text>
                    <p>{{PRODUCT.price}} грн</p>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>  
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "product",
  components: {
  },
  props: {},
   data() {
    return {
      title: "product"
    };
  },
  computed: {
      ...mapGetters(["PRODUCT", "PRODUCT_ID"])
  },
  methods: {
      ...mapActions(["GET_PRODUCT_ID_TO_VUEX", "GET_PRODUCT_FROM_API"]),
  },
  mounted() {
    let $wLoc = window.location.href;
        $wLoc = $wLoc.split('-id-')[1];
      //console.log($wLoc);
    if($wLoc) {
        this.GET_PRODUCT_ID_TO_VUEX($wLoc);
    } else {
        this.GET_PRODUCT_ID_TO_VUEX(3115);
        //this.$router.push({path: '/'});
    }
    
    this.GET_PRODUCT_FROM_API();

  },
  watch: {
      $route: function () {

      }
  }
};
</script>

<style lang="scss">
</style>

