<template>
  <div class="submitForm container">
    <b-row cols="1" cols-md="2">
      <b-col>
        <h2>Items In Cart</h2>
        <ul>
          <li v-for="item in getCartData" :key="item.id">
            {{ item.name }} :: {{ item.quantity }} :: {{ item.price }}
          </li>
        </ul>
      </b-col>
      <b-col>
        <h2>Contact Information</h2>
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
