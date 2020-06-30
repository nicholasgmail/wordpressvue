<template>
    <div class="v-catalog-item">
        <img v-if="product_data.images[0].src" :src="product_data.images[0].src" alt="img" width="150">
        <img v-else src="@/icons/no_image.jpg" alt="img" width="150">
        <p class="v-catalog-item__name" v-html="product_data.name"></p>
        <p class="v-catalog-item__price">{{product_data.price}}</p>
        <!--собитие клика вызывает метод sendDataToParent-->
        <button class="btn v-catalog-item__add_to_cart_btn"
                
        >Add to cart
        </button>
    </div>
</template>

<script>

    export default {
        name: "v-catalog-item",
        //c помощю props получаем даные и родителя
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
          /*   addToCart(){
                this.$emit('addToCart', this.product_data)
            } */
        },

    }
</script>

<style lang="scss">

    .v-catalog-item {
        text-align: center;
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
    }

</style>