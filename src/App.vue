<template>
  <div id="app" class="flex-wrapper">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
// global variables
$bgColor: #333;
$fgColor: #fff;

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

.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
#app {
  background-color: $bgColor;
  .container,
  footer {
    color: $fgColor;
  }
}
</style>
