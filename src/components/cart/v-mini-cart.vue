<template>
  <b-card no-body class="overflow-hidden card-yellow" style="max-width: 540px;">
    <b-row no-gutters class="p-1">
      <b-col md="9">
        <b-btn-close class="mr-2" />
        <h6 class="mb-0 font-weight-bold p-2">
          <span class="count">1</span>x19 грн.
        </h6>
        <b-card-text class="font-size-14">
          Носки мужские Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          autem!
        </b-card-text>
      </b-col>
      <b-col md="3" align-self="center">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
    </b-row>
    <div class="px-2">
      <hr />
    </div>
    <b-row class="p-1 flex-column justify-content-center">
      <b-col>
        <h6>
          Подитог:
          <span class="font-weight-bold">16 грн.</span>
        </h6>
      </b-col>
      <b-col>
        <div class="d-flex flex-column justify-content-center">
          <b-button squared variant="outline-info mt-2">Просмотреть корзину</b-button>
          <b-button squared variant="success mt-2">Оформить заказ</b-button>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: "v-mini-cart",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.navbar {
  .card-yellow {
    border-color: rgba($color: $yellow, $alpha: 0.2);
  }
}
</style>