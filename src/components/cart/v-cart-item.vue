<template>
    <div class="v-cart-item">
        <img :src="cart_item_data.images[0].src" alt="" width="50">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.slug}}</p>
            <p>{{cart_item_data.id}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Qty:</p>
            <span   class="quantity__btn"
                    @click="decrementItem">-</span>
            {{cart_item_data.quantity}}
            <span class="quantity__btn"
                  @click="incrementItem">+</span>
        </div>
        <button
                @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>


    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {

            decrementItem() {
                this.$emit('decrement')
            },

            incrementItem(){
                this.$emit('increment')
            },

            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        //c помощью ключа добавляем параметр quantity c количеством 1
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1)
        }
    }
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;

        &__image {
            max-width: 58px;
        }
        .quantity__btn{
            cursor: pointer;
            padding: $padding;
            box-shadow: 0 0 8px 0 #e0e0e0;
        }
    }
</style>