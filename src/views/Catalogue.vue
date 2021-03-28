<template>
  <div class="catalogue container-fluid">
    <h1 class="page-header">Our Watches</h1>
    <b-card-group deck>
      <Product
        v-for="item in watchCatalogue"
        :key="item.id"
        :name="item.productName"
        :price="item.productPrice"
        :image="item.productImage"
      />
    </b-card-group>
  </div>
</template>

<script>
import Product from "@/components/partials/Product";
export default {
  name: "Catalogue",
  components: {
    Product,
  },
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
