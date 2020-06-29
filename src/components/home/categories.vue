<template>
  <div class="categories container-lg py-3">
      <h1 class="my-3 text-center">Категории товаров</h1>
      <div class="row">

        <div v-if="show" class="w-100 text-center my-3 text-primary"> 
          <b-spinner  option="primary" label="Text Centered"> </b-spinner> 
        </div>

        <div v-for="category in CATEGORIES" 
            :key="category.id" 
            class="col-12 col-md-4">
          <div class="card border-0">
            <img :src="category.image.src" class="card-img-top img-fluid" alt="...">
            <div class="card-body pl-0">
              <a href="#" class="h5 card-title text-left text-uppercase">{{category.name}}</a>
            </div>
          </div>
        </div>
          
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    name: "categories",
    components: {  },
    props: {},
  data() {
    return {
      show: true
    };
  },
  computed: {
        ...mapGetters(["CATEGORIES"])

  },
  methods: {
        ...mapActions(["GET_CATEGORIES_FROM_API"]),

  },
  mounted() {
    this.GET_CATEGORIES_FROM_API().then(response => {
      if (response.data) {
        this.show = false;
      }
    })
  }
}
</script>

<style lang="scss">
  .categories {
    .card {
      img {
        height: 278px;
      }
    .card-title {
      color: #f45a40;
    }
    }
  }

</style>