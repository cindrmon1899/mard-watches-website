<template>
  <div class="catalogue container">
    <h1 class="page-header">Our Watches</h1>
    <b-card-group deck>
      <b-card
        v-for="product in watchCatalogue"
        :key="product.id"
        no-body
        :img-src="require(`@/assets/images/catalogue/${product.productImage}`)"
        :img-alt="image"
        img-top
        bg-variant="dark"
        text-variant="white"
        class="text-center"
        style="max-width: 33.33%"
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
          <b-button type="secondary"> Learn More </b-button>
          <b-button type="primary"> Add To Cart </b-button>
        </b-card-footer>
      </b-card>
    </b-card-group>
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
