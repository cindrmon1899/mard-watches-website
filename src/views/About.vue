<template>
  <div class="about container position-relative">
    <h1 class="about-header">About Us</h1>
    <AboutBlock
      type="A"
      title="This is an about page"
      content="These are small details under the about page that fills the text with
      pretentious stuff about the company."
      image="about1.jpg"
    />
    <AboutBlock
      type="B"
      title="This is an about page"
      content="These are small details under the about page that fills the text with
      pretentious stuff about the company."
      image="about2.jpg"
    />
  </div>
</template>

<script>
import AboutBlock from "@/components/partials/AboutBlock";
export default {
  name: "About",
  metaInfo: {
    title: "About",
    meta: [
      {
        name: "description",
        content:
          "Know more about our company and why we make such bold claims with our watches.",
      },
    ],
  },
  components: {
    AboutBlock,
  },
};
</script>

<style lang="scss" scoped>
.about-header {
  font-size: 5rem;
  padding: 1rem 0;
}
</style>
