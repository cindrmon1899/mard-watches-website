<template>
  <div class="home position-relative">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4500"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="700"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Welcome to Mard Watches"
        text="A small watch company with lots of potential."
        img-src="@/assets/images/home/home1.jpg"
        class="ad-hoc"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Check out our collection!"
        text="We have a couple watches for you to choose from, handcrafted. By us."
        img-src="@/assets/images/home/home2.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Know more About Us!"
        text="It may surprise you on who we are and what we strive for."
        img-src="@/assets/images/home/home3.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Try Now!"
        text="Don't let anything stop you."
        img-src="@/assets/images/home/home4.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "description",
        content:
          "Welcome to Mard Watches! | A small watch company with lots of potential.",
      },
    ],
  },
};
</script>
