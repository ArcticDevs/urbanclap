<template>
  <div class="nav-dark">
    <b-navbar toggleable="xl">
      <b-navbar-brand href="#" class="text-white">
        <img src="/img/logo_light.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="sidebar"></b-navbar-toggle>

      <b-sidebar
        id="sidebar"
        right
        shadow
        backdrop
        :no-close-on-backdrop=false
        :no-close-on-esc=false
        is-nav
      >
        <div class="sidebar-contents">
          <ul>
            <li>
              <b-nav-item href="#" class="sidebar-item">
                Login / Sign Up
              </b-nav-item>
            </li>
            <li><b-nav-item href="#" class="sidebar-item">Blog</b-nav-item></li>
            <li>
              <b-nav-item href="#" class="sidebar-item">About Us</b-nav-item>
            </li>
            <li>
              <b-nav-item href="#" class="sidebar-item">Contact Us</b-nav-item>
            </li>
            <li>
              <b-nav-item href="#" class="sidebar-item"
                >Terms Of Use</b-nav-item
              >
            </li>
            <li>
              <b-nav-item href="#" class="sidebar-item">
                Privacy Policy
              </b-nav-item>
            </li>
            <li>
              <b-nav-item href="#" class="sidebar-item">
                Customer Support
              </b-nav-item>
            </li>
            <li>
              <b-nav-item href="#" class="sidebar-item">
                We Are Hiring!
              </b-nav-item>
            </li>
          </ul>
        </div>
      </b-sidebar>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto nav-items">
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item href="#">Register As A Professional</b-nav-item>
          <b-nav-item href="#">Login / Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar .navbar-brand {
  padding: 0;
}

.navbar .navbar-brand img {
  margin: 0;
  height: 100%;
  width: 80px;
}

.navbar a.nav-link {
  color: #000 !important;
  padding: 0;
  margin-right: 25px;
}

.navbar {
  height: 60px;
  max-width: 100vw;
  font-size: 14px;
  padding: 0;
}

.sidebar-contents {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: left;
}

.sidebar-contents ul {
  height: 100%;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.sidebar-item {
  background-position: 50%;
  transition: all 0.3s;
  display: block;
  padding: 12px 20px;
  font-size: 14px;
  color: #646464;
}
</style>