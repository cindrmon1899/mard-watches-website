<template>
  <div id="app" class="position-relative">
    <Navbar />
    <router-view :watchCatalogue="watchCatalogue" />
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
      watchCatalogue: [],
    };
  },
  methods: {
    // READ INSTRUCTIONS FROM FAKE API ////////////////
    async fetchCatalogue() {
      const res = await fetch("api/catalogue");
      const data = await res.json();

      return data;
    },
    ///////////////////////////////////////////////////
  },
  async created() {
    this.watchCatalogue = await this.fetchCatalogue();
    console.log(this.watchCatalogue);
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
