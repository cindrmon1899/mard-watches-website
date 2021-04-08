<template>
  <div class="catalogue container">
    <b-row>
      <h1 class="page-header">Our Watches</h1>
    </b-row>
    <b-row cols="1" cols-md="3">
      <b-col v-for="product in getCatalogueData" :key="product.id">
        <b-card
          no-body
          :img-src="
            require(`@/assets/images/catalogue/${product.productImage}`)
          "
          :img-alt="product.productImage"
          img-top
          bg-variant="dark"
          text-variant="white"
          class="text-center mb-custom"
        >
          <b-card-body>
            <b-card-title>
              {{ product.productName }}
            </b-card-title>
            <b-card-sub-title class="mb-2">
              XRP {{ product.productPrice }}
            </b-card-sub-title>
          </b-card-body>
          <b-card-footer>
            <b-button
              type="primary"
              :id="`watch_${product.id}_cartButton`"
              @click="addItemToCart(product)"
              :disabled="product.isAddedToCart"
              >Add to Cart</b-button
            >
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Catalogue",
  metaInfo: {
    title: "Our Watches",
    meta: [
      {
        name: "description",
        content: "Check out our watch collection!",
      },
    ],
  },
  props: {
    getCatalogueData: Array,
  },
  methods: {
    async addItemToCart(item) {
      let selectedItem = {
        id: item.id,
        name: item.productName,
        quantity: 1,
        price: item.productPrice,
      };
      item.isAddedToCart = true;
      this.$emit("send-cart-data", selectedItem);
      let buttonId = eval(`watch_${item.id}_cartButton`);
      buttonId.innerText = "Added";
      buttonId.classList.add("disabled");
    },
  },
};
</script>

<style lang="scss" scoped>
// size md and higher
@media only screen and (min-width: 768px) {
  .mb-custom,
  .my-custom {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
  .card {
    height: 33rem !important;
  }
  .card-img-top {
    margin-top: 1rem;
  }
}
// size sm and lower
@media only screen and (max-width: 768px) {
  .mb-custom,
  .my-custom {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
}
</style>
