<template>
  <div id="footer">
    <!-- Website Footer -->
    <footer>
      <hr />
      <div class="text-center p-3">
        <span style="display: inline-block; transform: rotate(180deg)"
          >&#169;</span
        >
        cindrmon 2021; Photos by
        <a
          href="https://unsplash.com/collections/27237890/for-fake-watch-company-(mard-watches)"
          >Unsplash.com</a
        >
        and Watch Photos by
        <a href="https://pngimg.com/images/electronics/watches">PngImg.com</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
hr {
  margin: 20px 0 0;
}
footer {
  flex-shrink: 0;
  // footer links
  a {
    color: #fff;
    font-family: sans-serif;
    text-decoration: none;
  }
  a:hover {
    color: #bbbb03;
  }
  a:visited {
    color: #8bff8b;
  }
}
</style>
