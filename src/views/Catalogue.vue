<template>
  <div class="catalogue container">
    <b-row>
      <h1 class="page-header">Our Watches</h1>
    </b-row>
    <b-row cols-sm="1" cols-md="3">
      <b-col v-for="product in watchCatalogue" :key="product.id">
        <b-card
          no-body
          :img-src="
            require(`@/assets/images/catalogue/${product.productImage}`)
          "
          :img-alt="image"
          img-top
          bg-variant="dark"
          text-variant="white"
          class="text-center"
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
            <b-button type="secondary">Learn More</b-button>
            <b-button type="primary">Add to Cart</b-button>
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
    watchCatalogue: Array,
  },
};
</script>
