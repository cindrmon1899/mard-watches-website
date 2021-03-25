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
