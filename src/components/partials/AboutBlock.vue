<template>
  <div class="about-block container-fluid">
    <b-row>
      <h2>{{ this.title }}</h2>
    </b-row>
    <div class="row" v-show="isTypeA && !isScreenMobile">
      <b-col md="4">
        <b-img
          fluid
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
      <b-col md="8">
        <p>{{ this.content }}</p>
      </b-col>
    </div>
    <div class="row" v-show="isTypeB && !isScreenMobile">
      <b-col md="8">
        <p>{{ this.content }}</p>
      </b-col>
      <b-col md="4">
        <b-img
          fluid
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
    </div>
    <div class="row" v-show="isScreenMobile">
      <b-col sm="12">
        <b-img
          fluid
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
      <b-col sm="12">
        <p>{{ this.content }}</p>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    content: String,
    image: String,
  },
  computed: {
    isTypeA() {
      if (this.type === "A") {
        return true;
      } else {
        return false;
      }
    },
    isTypeB() {
      if (this.type === "B") {
        return true;
      } else {
        return false;
      }
    },
    isScreenMobile() {
      if (this.$vssWidth <= 768) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about-block {
  margin: 3rem 0;

  // block header
  h2 {
    font-size: 36pt;
    margin: 2rem 0;
    // block header (this manual override only applies for smaller screens)
    @media only screen and (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  // block content (this manual override only applies for smaller screens)
  .col-sm-12 {
    margin: 1.5rem 0;
  }
}
</style>
