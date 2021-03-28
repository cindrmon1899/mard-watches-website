<template>
  <div class="about-block container-fluid">
    <h2>{{ this.title }}</h2>
    <b-row>
      <b-col sm="12" md="4">
        <b-img
          fluid
          :src="require(`@/assets/images/about/${this.image}`)"
        ></b-img>
      </b-col>
      <b-col sm="12" md="8">
        <p>{{ this.content }}</p>
      </b-col>
    </b-row>
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
};
</script>
