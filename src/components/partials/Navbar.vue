<template>
  <div id="nav" class="sticky-top">
    <!-- Main Navbar -->
    <b-navbar toggleable="md" type="dark" variant="rustic">
      <!-- Navbar Brand/Logo/Company Name -->
      <b-navbar-brand to="/"> Mard Watches </b-navbar-brand>

      <!-- Navbar Collapse button for Small Screens -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Main Navbar -->
      <b-collapse id="nav-collapse" is-nav>
        <!-- Items on the Left -->
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/catalogue">Catalogue</b-nav-item>
        </b-navbar-nav>

        <!-- Items on the Right -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="showCart()">
            <b-icon-cart-fill></b-icon-cart-fill> Cart ({{
              totalNumberOfItems
            }})
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- Cart Modal -->
    <Cart
      :cartData="getCartData"
      :catalogueData="getCatalogueData"
      @delete-selected-data="delItemsFromCart"
      ref="modalComponent"
    />
  </div>
</template>

<script>
import Cart from "@/components/modals/Cart";
export default {
  components: {
    Cart,
  },
  props: {
    getCartData: Array,
    getCatalogueData: Array,
  },
  methods: {
    showCart() {
      this.$refs.modalComponent.show();
    },
    delItemsFromCart(cartDataToRem) {
      this.$emit("remove-from-cart", cartDataToRem);
    },
    delAllData(emptyData) {
      this.$emit("clear-all-data", emptyData);
    },
  },
  computed: {
    totalNumberOfItems() {
      let totalQty = 0;
      this.getCartData.forEach((item) => {
        totalQty += item.quantity;
      });
      return totalQty;
    },
  },
};
</script>

<style lang="scss" scoped></style>
