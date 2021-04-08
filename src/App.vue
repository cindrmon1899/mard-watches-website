<template>
  <div id="app" class="position-relative">
    <Navbar
      :getCartData="cart"
      :getCatalogueData="catalogue"
      @remove-from-cart="delFromCart"
    />
    <router-view
      @send-cart-data="addToCart"
      @clear-cart="resetCart"
      @reset-buttons="resetButtons"
      :getCatalogueData="catalogue"
      :getCartData="cart"
    />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";
export default {
  name: "App",
  metaInfo: {
    title: "Mard Watches",
    titleTemplate: "%s | Mard Watches",
  },
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      cart: [],
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
    containsObject(object, array) {
      let position = array
        .map((single) => {
          return single.id;
        })
        .indexOf(object.id);
      if (position >= 0) {
        return true;
      } else {
        return false;
      }
    },
    containsObjectAtIndex(object, array) {
      let position = array
        .map((single) => {
          return single.id;
        })
        .indexOf(object.id);
      return position;
    },
    addToCart(cartData) {
      if (this.containsObject(cartData, this.cart)) {
        let itemIndex = this.containsObjectAtIndex(cartData, this.cart);
        this.cart[itemIndex].quantity++;
      } else {
        this.cart.push(cartData);
      }
    },
    delFromCart(cartDataToRem) {
      cartDataToRem.forEach((id) => {
        const idx = this.cart.findIndex((item) => item.id === id);
        this.cart.splice(idx, 1);
      });
    },
    resetCart() {
      // resets cart
      this.cart = [];
      // resets buttns
      this.catalogue.map((item) => {
        item.isAddedToCart = false;
      });
    },
  },
};
</script>

<style lang="scss">
// UNIVERSAL SETTINGS

// color palette
// rustic palette
$r1-color1: #3d5a80;
$r1-color2: #98c1d9;
$r1-color3: #e0fbfc;
$r1-color4: #ee6c4d;
$r1-color5: #293241;
$r1-color6: #c4979f;

// rustic 2 pallete
$r2-color1: #3a445d;
$r2-color2: #9ad18b;
$r2-color3: #deca8b;
$r2-color4: #b05736;
$r2-color5: #313232;
$r2-color6: #7b5d8d;

// global variables
$bgColor: $r2-color1;
$fgColor: #fff;

// custom pallete bootstrap
.bg-rustic {
  background-color: $r1-color6;
}

// global fonts
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@600;700&family=Noto+Serif+JP:wght@200;300;400&family=Raleway:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap");

// FONTS AVAILABLE:

// LOGO HEADER
// Cormorant Unicase 600, 700
.navbar-brand {
  font-family: "Cormorant Unicase", serif;
}

// ALL HEADINGS AND NAV-BUTTONS
// Raleway 500-900, Raleway 500-900 italic
.nav-link,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

// ALL PARAGRAPHS AND LABELS
// Noto Serif JP 200-400
p,
footer {
  font-family: "Noto Serif JP", serif;
}

// PAGE HEADERS
.page-header {
  font-size: 5rem;
  padding: 1rem 0;
  margin: 1rem 0;
}
@media only screen and (max-width: 768px) {
  .page-header {
    font-size: 4rem;
    margin: 1rem auto;
  }
}

#app {
  // flex wrapper
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: $bgColor;
  .container,
  .container-fluid,
  footer {
    color: $fgColor;
  }
}
</style>
