<template>
  <div class="submitForm container">
    <b-row cols="1" cols-md="2">
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
      <b-col>
        <b-card bg-variant="dark" text-variant="white" class="mb-custom">
          <b-row>
            <h2 class="ml-auto mr-auto">Checkout Details</h2>
            <b-form @submit="onSubmit">
              <b-form-group> </b-form-group>
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
  props: {
    getCartData: Array,
  },
  methods: {
    onSubmit() {},
  },
  computed: {
    totalAmount() {
      let totalQty = 0;
      this.getCartData.forEach((item) => {
        if (typeof item.price === "string") {
          item.price = Number(item.price.replace(/XRP/, ""));
        }
        totalQty += item.quantity * item.price;
      });
      return totalQty;
    },
  },
};
</script>
