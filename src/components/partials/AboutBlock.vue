<template>
  <div id="aboutBlock" class="container-fluid">
    <div class="row" v-show="isTypeA && !isScreenMobile">
      <b-col md="4" class="my-auto">
        <b-img
          fluid
          rounded
          center
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
      <b-col md="8">
        <b-row>
          <h2>{{ this.title }}</h2>
        </b-row>
        <b-row>
          <p>{{ this.content }}</p>
        </b-row>
      </b-col>
    </div>
    <div class="row" v-show="isTypeB && !isScreenMobile">
      <b-col md="8">
        <b-row>
          <h2>{{ this.title }}</h2>
        </b-row>
        <b-row>
          <p>{{ this.content }}</p>
        </b-row>
      </b-col>
      <b-col md="4" class="my-auto">
        <b-img
          fluid
          rounded
          center
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
    </div>
    <div class="row" v-show="isScreenMobile">
      <b-col sm="12" class="my-auto">
        <b-img
          fluid
          rounded
          center
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
      <b-col sm="12">
        <b-row>
          <h2>{{ this.title }}</h2>
        </b-row>
        <b-row>
          <p>{{ this.content }}</p>
        </b-row>
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
// scoped variables
$radiusSize: 1.25rem;

// mixins
@mixin customBoxShadow {
  box-shadow: 1px 1px 1px black;
}

#aboutBlock {
  margin: 3rem 0;
  padding: 1.25rem;
  border-radius: $radiusSize;
  background-color: #3d5a8070;

  // shadow
  @include customBoxShadow;

  // block header
  h2 {
    font-size: 36pt;
    margin: 2rem 0;
    padding: 1rem;
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

  // paragraph padding
  p {
    padding: 0 1.5rem;
    text-align: justify;
  }

  // border-radius for built-in rounded is too small
  .rounded {
    border-radius: $radiusSize !important;
    @include customBoxShadow;
  }
}
</style>
