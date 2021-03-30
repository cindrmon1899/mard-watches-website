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
      // insert vue component local data here
    };
  },
  props: {
    // insert vue parent data here (remove if unnecessary)
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
  created: {
    // insert local component initialisers here (remove if unnecessary)
  },
};
</script>

<style lang="scss" scoped>
// insert styling here
</style>
