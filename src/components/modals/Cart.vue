<template>
  <b-modal id="cartModal" ref="cartModal" title="Cart" size="lg">
    <h1>This is cart modal</h1>
  </b-modal>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      catalogueItems: [],
      cartItems: [],
      cartItemsToRemove: [],
    };
  },
  props: {
    catalogueData: {
      type: Array,
      required: true,
    },
    cartData: { type: Array, required: true },
  },
  methods: {
    show() {
      this.$refs.cartModal.show();
    },
  },
  computed: {
    // insert local component computed values here (remove if unnecessary)
  },
  watch: {
    // insert local component watchers here (remove if unnecessary)
  },
};
</script>

<style lang="scss" scoped>
// insert styling here
</style>
