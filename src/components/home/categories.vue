<template>
  <div class="categories py-3">
      <h1 class="my-3">Категории товаров</h1>
      <div class="row">

        <div v-for="category in categories_data" 
            :key="category.id" 
            class="col-4">
          <div class="card">
            <img :src="category.image.src" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">{{category.name}}</h5>
            </div>
          </div>
        </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name: "categories",
    components: {  },
    props: {
        categories_data: {
        type: Array,
        default() {
            return {};
        }
        }
    },
  data() {
    return {};
  },
  computed: { },
  methods:{},
  mounted() { }
}
</script>

<style lang="scss">
  .categories {
    .card {
      img {
        height: 278px;
      }
    }
  }

</style>