<template>
  <div id="nav">
    <b-navbar toggleable="md" type="dark" variant="rustic" fixed="top">
      <!-- Navbar Brand/Logo/Company Name -->
      <b-navbar-brand to="/"> Mard Watches </b-navbar-brand>

      <!-- Navbar Collapse button for Small Screens -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Main Navbar -->
      <b-collapse id="nav-collapse" is-nav>
        <!-- Items on the Left -->
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/catalogue">Catalogue</b-nav-item>
        </b-navbar-nav>

        <!-- Items on the Right -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-icon-cart-fill></b-icon-cart-fill> Cart (0)
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- TODO: insert cart Modal here through component -->
  </div>
</template>

<style lang="scss" scoped></style>
