<template>
    <div class="product-vue container-lg px-0 py-3 mt-3">
         <b-card v-if="PRODUCT != '' " no-body class="overflow-hidden border-0" style="max-width: ;">
            <b-row no-gutters class="justify-content-center">
                <b-col sm="3">
                    <div id="carouselExampleIndicators" class="carousel slide px-1 px-sm-0" data-ride="carousel">
                        <div class="carousel-inner">
                            <LightGallery
                                :images="images"
                                :index="indexGallery"
                                :disable-scroll="true"
                                @close="indexGallery = null"
                            />

                            <div    v-for="(img, thumbIndex) in PRODUCT.images" :key="thumbIndex" 
                                    :class="{ active: thumbIndex === isActive }"
                                    @click="indexGallery = thumbIndex" 
                                    class="carousel-item">

                                <img :src="img.src" 
                                    :alt="PRODUCT.name"
                                    class="d-block w-100"
                                >
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

                    <div class="row align-items-center justify-content-center w-100 px-2 mx-0">
                        <div class="col-9">
                            <agile ref="thumbnails" :slides-to-show="3" :options="optionsThumbnails" class="mini_slide mt-2">
                                <div v-for="(img, index) in PRODUCT.images" :key="index" class="slide mx-2">
                                    <img @click="clickImg(index)" 
                                        :src="img.src" 
                                        :alt="PRODUCT.name"
                                        :class="{ active: index === isActive }"
                                        class="d-block p-2" 
                                        height="100">
                                </div>
                            </agile>
                        </div>
                    </div>
                </b-col>
                
                <b-col sm="6" class="col-12 ml-md-4">
                    <b-card-body :title="PRODUCT.name">
                        <b-card-text class="mt-4" v-html="PRODUCT.short_description"></b-card-text>
                        <p class="mt-4">{{PRODUCT.price}} грн</p>
                        
                        <div class="d-flex flex-wrap align-items-center">
                            <!-- Count -->
                            <div size="sm" class="count_product d-flex my-3 mr-3">
                                <b-button @click="countMinus" variant="outline-info" class="plus_minus">-</b-button>
                                <input type="number" v-model="countProduct" variant="outline-info" class="border-info font-size-14 mx-1 pl-3" min="1">
                                <b-button @click="countPlus" variant="outline-info" class="plus_minus">+</b-button>
                            </div>

                            <!-- Color -->
                            <b-form-select v-if="PRODUCT.attributes[0] && PRODUCT.attributes[0].name === 'цвет'" size="md" v-model="colorProduct" :options="optionsColor" class="col-3 col-md-2 border-info my-3 mr-2"></b-form-select>
                            <div v-if="PRODUCT.attributes[0] && PRODUCT.attributes[0].name === 'цвет'" class="color_jins border-info my-3 mx-1"></div>
                            
                            <!-- Size -->
                            <select v-if="PRODUCT.attributes[0] && PRODUCT.attributes[0].name === 'Размер'" class="col-4 col-md-3 form-control form-control-md border-info h-100 mx-2 my-3">
                                <option>Размер</option>
                                <option v-for="(size, index ) in PRODUCT.attributes[0].options" :key="index">{{size}}</option>
                            </select>
                            <select v-if="PRODUCT.attributes[1] && PRODUCT.attributes[1].name === 'Размер'" class="col-4 col-md-3 form-control form-control-md border-info h-100 mx-2 my-3">
                                <option>Размер</option>
                            <option v-for="(size, index ) in PRODUCT.attributes[1].options" :key="index">{{size}}</option>
                            </select>
                        </div>
                        

                        <div size="sm" class="d-flex my-4 py-3">
                            <b-button @click="addToCart(PRODUCT)" variant="outline-info mr-3">В корзину</b-button>
                            <b-button variant="outline-info ml-3">Купить в один клик</b-button>
                        </div>

                    </b-card-body>
                </b-col>
            </b-row>
        </b-card> 


    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { VueAgile } from 'vue-agile'
import { LightGallery } from 'vue-light-gallery';

export default {
  name: "product",
  components: {
      agile: VueAgile,
      LightGallery
  },
  props: {},
   data() {
    return {
        title: "product",
        countProduct: 1,
        colorProduct: null,
            optionsColor: [{ value: null, text: 'Цвет' }],
        isActive: '',
        optionsThumbnails: {
            navButtons: false,
            dots: false,
            infinite: false,
            swipeDistance: 50
        },
        size: null,
        images: [],
        indexGallery: null,
    };
  },
  computed: {
      ...mapGetters(["PRODUCT", "PRODUCT_ID", "CART"])
  },
  methods: {
    ...mapActions(["GET_PRODUCT_ID_TO_VUEX", "GET_PRODUCT_FROM_API", "ADD_TO_CART"]),
    nextImg() {
        this.$refs.thumbnails.goToNext()
        if (this.isActive < this.PRODUCT.images.length) {
            this.isActive++;
        }
        if(this.isActive === this.PRODUCT.images.length) {
            this.isActive = 0;
        }
    },
    prevImg() {
        this.$refs.thumbnails.goToPrev()
        if (this.isActive != -1) {
            this.isActive--;
        }
        if(this.isActive === -1) {
            this.isActive = this.PRODUCT.images.length - 1;
        }
    },
    clickImg(value) {
        //console.log(value);
        this.isActive = value;
    },
    countPlus() {
        this.countProduct++ ;
    },
    countMinus() {
        if (this.countProduct>1) {
           this.countProduct-- ;
        }
    },
    makeToast(variant = null) {
        let $price = this.PRODUCT.price
        this.$bvToast.toast(this.PRODUCT.name, {
            title: `Товар добавлен, по цене ${$price} грн`,
            variant: variant,
            solid: true,
            autoHideDelay: 1500
        })
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
      this.makeToast('info');
    },    

  },
  mounted() {
    this.isActive = 0;
    let $wLoc = window.location.href;
        $wLoc = $wLoc.split('-id-')[1];
      //console.log($wLoc);
    if($wLoc) {
        this.GET_PRODUCT_ID_TO_VUEX($wLoc);
    } else {
        //this.GET_PRODUCT_ID_TO_VUEX(3115);
        this.$router.push({path: '/shop/'});
    }
    
    this.GET_PRODUCT_FROM_API().then(response => {
        if (response.data) {
            let vm = this;
            this.PRODUCT.images.map(function(img) {
                vm.images.push(img.src);
            });

            if(this.PRODUCT.attributes[0] && this.PRODUCT.attributes[0].name === 'цвет') {
                this.PRODUCT.attributes[0].options.map(function(value) {
                    vm.optionsColor.push(value);
                });
            }
            
        } else {
        //this.GET_PRODUCT_ID_TO_VUEX(3115);
        this.$router.push({path: '/shop/'});
    }
    });

  },
  watch: {
      $route: function () {
          this.isActive = 0;
          this.colorProduct = null;
      }
  }
};
</script>

<style lang="scss">
.product-vue {
    .btn_thumb {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: white;;
        color: white;
        outline: none;
        &:hover {
            background: rgb(209, 216, 221);
            color: $red;
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
    .color_jins {
        background: #3361;
        width: 35px;
        height: 35px;
        border: black solid 1px;
        border-radius: 5px;
    }
    .count_product {
        .plus_minus {
            width: 38px;
            height: 38px;
        }
        input {
            max-width: 50px;
            outline: none;
            border: solid 0.3px;
        }
    }
}
</style>

