<template>
  <div class="submitForm container">
    <b-row cols="1" cols-md="2">
      <b-col>
        <b-card bg-variant="dark" text-variant="white" class="mb-custom">
          <b-row class="block-center">
            <h2 class="ml-auto mr-auto">Items In Cart</h2>
          </b-row>
          <b-row> </b-row>
          <ul>
            <li v-for="item in getCartData" :key="item.id">
              {{ item.name }} :: {{ item.quantity }} :: {{ item.price }}
            </li>
          </ul>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="dark" text-variant="white" class="mb-custom">
          <b-row>
            <h2 class="ml-auto mr-auto">Contact Information</h2>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    getCartData: Array,
  },
};
</script>
