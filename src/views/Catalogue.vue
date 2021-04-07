<template>
  <div class="catalogue container">
    <b-row>
      <h1 class="page-header">Our Watches</h1>
    </b-row>
    <b-row cols="1" cols-md="3">
      <b-col v-for="product in catalogue" :key="product.id">
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
  data() {
    return {
      catalogue: [
        {
          id: 1,
          productName: "Big Boi Black",
          productImage: "watch1.png",
          productPrice: 640,
          isAddedToCart: false,
        },
        {
          id: 2,
          productName: "Bold Gold",
          productImage: "watch2.png",
          productPrice: 365,
          isAddedToCart: false,
        },
        {
          id: 3,
          productName: "Sweater Leather",
          productImage: "watch3.png",
          productPrice: 730,
          isAddedToCart: false,
        },
        {
          id: 4,
          productName: "Blue Pop",
          productImage: "watch4.png",
          productPrice: 450,
          isAddedToCart: false,
        },
        {
          id: 5,
          productName: "Bold Gold Black",
          productImage: "watch5.png",
          productPrice: 1005,
          isAddedToCart: false,
        },
        {
          id: 6,
          productName: "Movement, but not really",
          productImage: "watch6.png",
          productPrice: 274,
          isAddedToCart: false,
        },
        {
          id: 7,
          productName: "Eat the Rich",
          productImage: "watch7.png",
          productPrice: 1370,
          isAddedToCart: false,
        },
        {
          id: 8,
          productName: "U Basic",
          productImage: "watch8.png",
          productPrice: 182,
          isAddedToCart: false,
        },
      ],
    };
  },
  methods: {
    async addItemToCart(item) {
      let selectedMovie = {
        id: item.id,
        name: item.productName,
        price: item.productPrice,
        quantity: 1,
      };
      if (!item.isAddedToCart) {
        this.$emit("send-cart-data", selectedMovie);
        let buttonId = eval(`watch_${item.id}_cartButton`);
        buttonId.innerText = "Added";
        buttonId.classList.add("disabled");
      }
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
