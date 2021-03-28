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
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="@/assets/images/home/home1.jpg"
      ></b-carousel-slide> -->

      <b-carousel-slide
        img-src="@/assets/images/home/home1.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        img-src="@/assets/images/home/home2.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        img-src="@/assets/images/home/home3.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
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
    meta: [{ name: "description", content: "Welcome to Mard Watches!" }],
  },
  data() {
    return {
      // for carousel
      slide: 0,
      sliding: null,
      // insert other data starting from below here
    };
  },
  methods: {
    // for carousel
    onSlideStart() {
      this.sliding = true;
    },
    onSLideEnd() {
      this.sliding = false;
    },
    // insert other data starting from below here
  },
};
</script>
