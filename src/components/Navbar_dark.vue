<template>
     <div class="header-nav">
          <b-navbar toggleable="xl">
            <b-navbar-brand href="#" class="text-white">
              <img src="/img/logo_dark.png" />
            </b-navbar-brand>

            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

            <!-- <b-collapse id="nav-collapse" is-nav> -->
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto nav-items">
              <b-nav-item href="#">Blog</b-nav-item>
              <b-nav-item href="#"
                >Register As A Professional</b-nav-item
              >
              <b-nav-item href="#">Login / Sign Up</b-nav-item>
            </b-navbar-nav>
            <!-- </b-collapse> -->
          </b-navbar>
        </div>

</template>

<style scoped>
.navbar .navbar-brand img {
  width: 290px;
}

.navbar a.nav-link {
  color: #000 !important;
  padding: 0;
  margin-right: 25px;
}

.navbar{
    height:60px;
    max-width:100vw;
    font-size:14px;
}

@media (max-width: 1200px) {
    .navbar{
        display:none;
    }
}
</style>