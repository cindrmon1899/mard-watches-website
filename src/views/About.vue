<template>
  <div class="about container position-relative">
    <h1 class="about-header">About Us</h1>
    <AboutBlock
      type="A"
      title="We are simple"
      content="Mard watches is all about simplicity. Our philosophy will not let our customers complicated their decisions with so many details and fancy jargon. Here at Mard Watches, we only give you the smallest number of choices possible to help you decide then and there what would you want. It's probably why this site you're on is so simple, because we just want to give you the products that you want from us and that's it."
      image="about1.jpg"
    />
    <AboutBlock
      type="B"
      title="We are small"
      content="Mard watches started out as two broke college kids who wanted to wear stylish watches, but couldn't afford them. So, in theory, we made our own watch company. Now, we're still relatively small, yet we grew significantly, with around 20 employees who are working their very hardest to provide you the best watches this dang company will give you. Just because we're small doesn't mean we don't stop making quality watches, it means that we are fuelled by passion to provide you the best of the best in the market."
      image="about2.jpg"
    />
    <AboutBlock
      type="A"
      title="We are handcrafted"
      content="Mard watches started out as two broke college kids who wanted to wear stylish watches, but couldn't afford them. So, in theory, we made our own watch company. Now, we're still relatively small, with around 20 employees who are working their very hardest to provide you the best watches this dang company will give you."
      image="about3.jpg"
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
  margin: 1rem 0;
}
</style>
