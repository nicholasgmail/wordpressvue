<template>
  <div class="product-vue container-lg px-0 py-3 mt-3">
    <b-card
      v-if="PRODUCT != '' "
      no-body
      class="overflow-hidden border-0 mb-4"
    >
      <b-row no-gutters class="justify-content-center">
        <b-col sm="1" class="p-2 overflow-auto" style="max-height: 360px">
          <div v-for="(img, index) in PRODUCT.images" :key="index" class="left_slide">
            <img @click="clickImg(index)"
                :src="img.src"
                :alt="PRODUCT.name"
                :class="{ active: index === isActive }"
                class="d-block mx-auto img-fluid p-2"
            />
          </div>
        </b-col>

        <b-col sm="3">
          <div
            id="carouselExampleIndicators"
            class="carousel slide px-1 px-sm-0"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <LightGallery
                :images="images"
                :index="indexGallery"
                :disable-scroll="true"
                @close="indexGallery = null"
              />

              <div
                v-for="(img, thumbIndex) in PRODUCT.images"
                :key="thumbIndex"
                :class="{ active: thumbIndex === isActive }"
                @click="indexGallery = thumbIndex"
                class="carousel-item p-2"
              >
                <img :src="img.src" :alt="PRODUCT.name" class="d-block w-100" />
              </div>
            </div>
            <a @click="prevImg" class="carousel-control-prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a @click="nextImg" class="carousel-control-next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </b-col>

        <b-col sm="6" class="col-12 ml-md-4">
          <b-card-body class="pt-0">
            <h2 class>{{PRODUCT.name}}</h2>
            <p>Артикул: {{PRODUCT.sku}}</p>
            <div class="product_description" v-html="PRODUCT.description"></div>
            <div class="row">
              <div class="col-4">
                <h2 class="h2">{{PRODUCT.price}} грн</h2>
              </div>

              <div class="col-8 d-flex flex-column px-0">
                <!-- Count -->
                <div class="count_product">
                  <b-form-spinbutton size="md" id="sb-inline" v-model="countProduct" inline class="border-info"></b-form-spinbutton>
                </div>
                <div class="d-flex-column d-sm-flex col-12 px-0">
                  <!-- Color -->
                  <b-form-select
                    v-if="PRODUCT.attributes[0] && PRODUCT.attributes[0].name === 'цвет'"
                    size="md"
                    v-model="colorProduct"
                    :options="optionsColor"
                    :class="{ select_black: colorProduct === 'Black', select_jins: colorProduct === 'Jins', select_yellow: colorProduct === 'Yellow', select_lilak: colorProduct === 'lilac', select_dark_grey: colorProduct === 'dark grey'}"
                    class="border-info my-2 mr-2"
                    style="width: 115px"
                  ></b-form-select>
                  <!-- Size -->
                  <select
                    v-if="PRODUCT.attributes[0] && PRODUCT.attributes[0].name === 'Размер'"
                    class="form-control form-control-md border-info my-1 my-sm-2"
                    style="width: 115px"
                  >
                    <option>Размер</option>
                    <option
                      v-for="(size, index ) in PRODUCT.attributes[0].options"
                      :key="index"
                    >{{size}}</option>
                  </select>
                  <select
                    v-if="PRODUCT.attributes[1] && PRODUCT.attributes[1].name === 'Размер'"
                    class="form-control form-control-md border-info my-1 my-sm-2"
                    style="width: 115px"
                  >
                    <option>Размер</option>
                    <option
                      v-for="(size, index ) in PRODUCT.attributes[1].options"
                      :key="index"
                    >{{size}}</option>
                  </select>
                </div>
              </div>
            </div>

            <div size="sm" class="d-flex my-4 py-3">
              <b-button @click="addToCart(PRODUCT)" variant="outline-info mr-3">В корзину</b-button>
              <b-button variant="outline-info ml-3">Купить в один клик</b-button>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <similar-products v-if="PRODUCT !=''" :category_id="PRODUCT.categories[0].id"></similar-products>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LightGallery } from "vue-light-gallery";

export default {
  name: "product",
  components: {
    LightGallery,
    SimilarProducts: () => import("@/components/catalog/similar-products")
  },
  props: {},
  data() {
    return {
      title: "product",
      countProduct: 1,
      colorProduct: null,
      optionsColor: [{ value: null, text: "Цвет" }],
      isActive: "",
      size: null,
      images: [],
      indexGallery: null
    };
  },
  computed: {
    ...mapGetters(["PRODUCT", "PRODUCT_ID", "CART", "LSTOREG"])
  },
  methods: {
    ...mapActions([
      "GET_PRODUCT_ID_TO_VUEX",
      "GET_PRODUCT_FROM_API",
      "ADD_TO_CART"
    ]),
    nextImg() {
      if (this.isActive < this.PRODUCT.images.length) {
        this.isActive++;
      }
      if (this.isActive === this.PRODUCT.images.length) {
        this.isActive = 0;
      }
    },
    prevImg() {
      if (this.isActive != -1) {
        this.isActive--;
      }
      if (this.isActive === -1) {
        this.isActive = this.PRODUCT.images.length - 1;
      }
    },
    clickImg(value) {
      this.isActive = value;
    },
    makeToast(variant = null, toaster, append = false) {
      let $price = this.PRODUCT.price;
      this.$bvToast.toast(this.PRODUCT.name, {
        title: `Товар добавлен, по цене ${$price} грн`,
        variant: variant,
        toaster: toaster,
        solid: true,
        appendToast: append,
        autoHideDelay: 500
      });
    },
    //метод для получения даных из локального хранилища
    getToCart() {
      const $itemProduct = localStorage.getItem(this.LSTOREG);
      if ($itemProduct !== null) {
        return JSON.parse($itemProduct);
      }
      return [];
    },
    //метод обновления корзины
    updateTocart(data){
        this.lineItems = this.getToCart();  
 //существует продукт или нет в хранилище
      const $index = this.lineItems.find(item =>
        item.product_id == data.id ? true : false
      );
      //действие если не существует в хранилище
      if (!$index) {
        var $orders = {
          product_id: data.id,
          quantity: this.countProduct
        };
        this.lineItems.push($orders);
        let $parse = JSON.stringify(this.lineItems);
        return localStorage.setItem(this.LSTOREG, $parse);
      } 
      if($index) {
        //действие если существует в хранилище
        this.lineItems.find(item =>
          item.product_id == data.id
            ? (item.quantity = item.quantity + this.countProduct)
            : ""
        );
        let $parse = JSON.stringify(this.lineItems);
        return localStorage.setItem(this.LSTOREG, $parse);
      }
    },
    //метод добавления в хранилище
    addToCart(data) { 
      this.makeToast("info", "b-toaster-bottom-left", true);
      this.updateTocart(data);       
      this.ADD_TO_CART(data);      
    }
  },
  mounted() {
    this.isActive = 0;
    let $wLoc = window.location.href;
    $wLoc = $wLoc.split("-id-")[1];
    //console.log($wLoc);
    if ($wLoc) {
      this.GET_PRODUCT_ID_TO_VUEX($wLoc);
    } else {
      //this.GET_PRODUCT_ID_TO_VUEX(3115);
      this.$router.push({ path: "/shop/" });
    }

    this.GET_PRODUCT_FROM_API().then(response => {
      if (response.data) {
        let vm = this;
        this.PRODUCT.images.map(function(img) {
          vm.images.push(img.src);
        });
      } else {
        this.$router.push({ path: "/shop/" });
      }
    });
  },
  watch: {
    $route: function() {
      this.isActive = 0;
      this.colorProduct = null;
    },
    PRODUCT: function() {
      let vm = this;
      vm.optionsColor.splice(1);
      if (
        this.PRODUCT.attributes[0] &&
        this.PRODUCT.attributes[0].name === "цвет"
      ) {
        this.PRODUCT.attributes[0].options.map(function(value) {
          vm.optionsColor.push(value);
        });
      }
      this.images.splice(0);
      this.PRODUCT.images.map(function(img) {
          vm.images.push(img.src);
        });
    }
  }
};
</script>

<style lang="scss">
.product-vue {
  .left_slide {
    .active {
      padding: 0px !important;
    }
    img {
      height: 90px;
    }
  }
  .mini_slide {
    .slide {
      .active {
        padding: 0px !important;
        background: rgb(190, 188, 192);
      }
      img {
        cursor: pointer;
      }
    }
  }
  .card-body {
    .select_black {
      background: #000;
      color: white;
    }
    .select_jins {
      background: rgb(31, 31, 167);
      color: white;
    }
    .select_yellow {
      background: rgb(197, 187, 128);
    }
    .select_lilak {
      background: rgb(101, 33, 128);
      color: white;
    }
    .select_dark_grey {
      background: rgb(47, 46, 48);
      color: white;
    }

    .count_product {
      input {
        max-width: 50px;
        height: 38px;
        outline: none;
        border: solid 0.3px;
      }
    }
    .product_description {
      p {
        display: none;
      }
    }
  }
}
</style>

