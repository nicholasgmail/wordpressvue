<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
<!--        <v-catalog></v-catalog>
        <v-cart
                v-if="CART.length"
                :cart_data="CART"
        ></v-cart>-->
    </div>
</template>

<script>


    /*import VCatalog from "./v-catalog";
    import VCart from "./v-cart";*/
    import {mapGetters} from 'vuex';

    export default {
        name: "v-main-wrapper",
    /*    components: {
            VCart,
            VCatalog,
        },*/
        props: {
        },
        data() {
            return {
                title: 'Main wrapper'
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
        methods: {},
        watch: {},
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>

