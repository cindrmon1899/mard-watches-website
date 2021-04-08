<template>
  <b-modal id="cart" ref="cartModal" title="Cart" size="lg" @ok="handleOk">
    <template #modal-ok> Checkout </template>
    <template #modal-cancel> Close </template>
    <b-container fluid>
      <!-- Title -->
      <b-row>
        <h4>Checkout Summary</h4>
      </b-row>
      <!-- Show if cart is empty -->
      <div v-show="cartData.length == 0">
        <h5>Your Cart is Empty! Add some items first.</h5>
      </div>
      <!-- Show if cart has at least 1 item (Cart Main Details) -->
      <div v-show="cartData.length > 0">
        <!-- Title Rows -->
        <b-row>
          <b-col cols="2">
            <span>{{ allSelected ? "Un-select All" : "Select All" }}</span>
          </b-col>
          <b-col
            ><b-button @click="deleteSelectedData()"
              >Delete Selected</b-button
            ></b-col
          >
        </b-row>
        <b-row>
          <b-form-group>
            <b-col cols="1">
              <b-form-checkbox
                v-model="allSelected"
                :indeterminate="indeterminate"
                aria-describedby="allCartItems"
                aria-controls="allCartItems"
                @change="toggleAll"
              >
              </b-form-checkbox
            ></b-col>
          </b-form-group>
          <b-col cols="3">Movie Name</b-col>
          <b-col cols="2">Cost</b-col>
          <b-col cols="4"> <span centered>Quantity</span></b-col>
          <b-col cols="2">SubTotal</b-col>
        </b-row>
        <!-- Movie Cart Item Rows -->
        <b-form-group>
          <b-form-checkbox-group
            id="allCartItems"
            v-model="selected"
            name="allCartItems"
          >
            <!-- Iterates over the passed cartData prop to show all selected Items -->
            <b-row v-for="(item, index) in cartData" :key="index">
              <!-- Checkbox for item deletion -->
              <b-col cols="1"
                ><b-form-checkbox :value="item.id"></b-form-checkbox
              ></b-col>
              <!-- Item Name and price -->
              <b-col cols="3">{{ item.name }}</b-col>
              <b-col cols="2">XRP {{ item.price }}</b-col>
              <!-- Quantity Manipulation -->
              <b-col cols="1">
                <b-button @click="subtItem(index)">-</b-button>
              </b-col>
              <b-col cols="2"
                ><span>{{ item.quantity }}</span></b-col
              >
              <b-col cols="1"
                ><b-button @click="addItem(index)">+</b-button></b-col
              >
              <!-- Print SUbtotal -->
              <b-col cols="2">XRP {{ item.quantity * item.price }}</b-col>
            </b-row>
          </b-form-checkbox-group>
        </b-form-group>
        <!-- Movie Cart Total Cost -->
        <b-row>
          <b-col cols="8" />
          <b-col cols="2">Total Cost: </b-col>
          <b-col cols="2">XRP {{ totalAmount }}</b-col>
        </b-row>
        <!-- <div> For Debugging Purposes
          <p>Selected: {{ selected }}</p>
          <p>All Selected: {{ allSelected }}</p>
          <p>Indeterminate: {{ indeterminate }}</p>
        </div> -->
      </div>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      possibleCartItems: [],
      selected: [],
      allSelected: false,
      indeterminate: false,
    };
  },
  props: {
    cartData: Array,
  },
  methods: {
    show() {
      this.$refs.cartModal.show();
      // Initialise all available movies
      for (var i = 0; i < this.cartData.length; i++) {
        this.possibleCartItems.push(this.cartData[i].id);
      }
    },
    addItem(itemPos) {
      this.cartData[itemPos].quantity++;
    },
    subtItem(itemPos) {
      if (this.cartData[itemPos].quantity <= 0) {
        this.cartData[itemPos].quantity = 0;
      } else {
        this.cartData[itemPos].quantity--;
      }
    },
    toggleAll(checked) {
      this.selected = checked ? this.possibleCartItems.slice() : [];
    },
    deleteSelectedData() {
      this.selected.forEach((id) => {
        let buttonId = eval(`watch_${id}_cartButton`);
        buttonId.innerText = "Add To Cart";
        buttonId.classList.remove("disabled");
      });
      this.$emit("delete-selected-data", this.selected);
      console.log(this.selected);
      this.selected = [];
      this.possibleCartItems = [];
    },
    handleOk() {
      if (this.cartData.length > 0) {
        this.$router.push("/submit");
      } else {
        return;
      }
    },
  },
  watch: {
    selected(newValue) {
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newValue.length === this.cartData.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
    },
  },
  computed: {
    totalAmount() {
      let qtyCost = 0;
      for (let i = 0; i < this.cartData.length; i++) {
        qtyCost += this.cartData[i].quantity * this.cartData[i].price;
      }
      return qtyCost;
    },
  },
};
</script>
