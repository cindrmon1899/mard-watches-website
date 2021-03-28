<template>
  <div id="product">
    <b-card
      no-body
      :img-src="require(`@/assets/images/catalogue/${image}`)"
      :img-alt="image"
      img-top
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-body>
        <b-card-title>
          {{ name }}
        </b-card-title>
        <b-card-sub-title class="mb-2"> XRP {{ price }} </b-card-sub-title>
      </b-card-body>

      <b-card-footer>
        <b-button type="secondary"> Learn More </b-button>
        <b-button type="primary"> Add To Cart </b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    price: Number,
  },
};
</script>

<style lang="scss" scoped>
#product {
  .card-img-top {
    width: 200px !important;
    height: 200px !important;
  }
}
</style>
