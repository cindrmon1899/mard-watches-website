<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <p>
      These are small details under the about page that fills the text with
      pretentious stuff about the company.
    </p>
  </div>
</template>

<script>
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
};
</script>
