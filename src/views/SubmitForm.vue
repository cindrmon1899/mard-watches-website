<template>
  <div id="about" class="container position-relative">
    <b-row>
      <h1 class="page-header">Cart Details</h1>
    </b-row>
    <b-row cols="1" cols-md="2">
      <!-- Cart Items -->
      <b-col>
        <b-card bg-variant="dark" text-variant="white" class="mb-custom">
          <b-row class="block-center">
            <h2 class="ml-auto mr-auto">Items In Cart</h2>
          </b-row>
          <b-row>
            <b-table dark striped hover :items="getCartData">
              <template #empty-text>
                There are no Items in your cart ;-;
              </template>
              <template #cell(price)="data">
                {{ (data.value = "XRP " + data.value) }}
              </template>
            </b-table>
            <h2 class="ml-auto mr-4" v-show="getCartData.length > 0">
              Total Cost: XRP {{ totalAmount }}
            </h2>
          </b-row>
        </b-card>
      </b-col>
      <!-- Customer Details -->
      <b-col>
        <b-card bg-variant="dark" text-variant="white" class="mb-custom">
          <b-row>
            <h2 class="ml-auto mr-auto">Customer Details</h2>
          </b-row>
          <b-row class="ml-auto mr-auto">
            <b-form @submit="onSubmit()" class="w-100">
              <b-form-group
                id="customerNameGroup"
                label="Enter Your Name: "
                label-for="customerNameInput"
              >
                <b-form-input
                  id="customerNameInput"
                  v-model="customer.name"
                  type="text"
                  placeholder="Ex. John Smith"
                  required
                />
              </b-form-group>
              <b-form-group
                id="customerEmailGroup"
                label="Enter Your Email: "
                label-for="customerEmailInput"
              >
                <b-form-input
                  id="customerEmailInput"
                  v-model="customer.email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </b-form-group>
              <b-form-group
                id="customerContactNoGroup"
                label="Enter Your Contact No: "
                label-for="customerContactNoInput"
              >
                <b-form-input
                  id="customerContactNoInput"
                  v-model="customer.contactNo"
                  type="text"
                  placeholder="e.g. (+63)-000-1234"
                  required
                />
              </b-form-group>
              <b-form-group
                id="customerHomeAddressGroup"
                label="Enter Your Shipping Address: "
                label-for="customerHomeAddressInput"
              >
                <b-form-textarea
                  id="customerHomeAddressInput"
                  v-model="customer.address"
                  type="text"
                  placeholder="Enter Full Address Here..."
                  max-rows="6"
                  required
                />
                <div class="ml-auto mr-auto">
                  <b-button
                    type="submit"
                    variant="primary"
                    class="w-100 my-custom"
                    >Submit</b-button
                  >
                </div>
              </b-form-group>
            </b-form>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  data() {
    return {
      customer: {
        name: "",
        email: "",
        contactNo: "",
        address: "",
      },
    };
  },
  props: {
    getCartData: Array,
  },
  methods: {
    onSubmit() {
      let customerDetailsPayload = {
        name: this.customer.name,
        email: this.customer.email,
        contactNo: this.customer.contactNo,
        address: this.customer.address,
        cartItems: this.getCartData,
      };
      alert(
        "Simulated Payload Sending to a backend: " +
          JSON.stringify(customerDetailsPayload)
      );
      this.customerDetailsPayload = {};
      this.$emit("clear-cart");
      this.$router.push("/");
    },
  },
  computed: {
    totalAmount() {
      let totalQty = 0;
      this.getCartData.forEach((item) => {
        totalQty += item.quantity * item.price;
      });
      return totalQty;
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
