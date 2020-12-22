<template>
  <div id="nav-bottom">
    <section id="bottomNavbarContainer">
      <div class="containerItem">
        <div class="containerItem-inner">
          <router-link to="/">
            <div
              :class="{
                linkContainer: true,
                activeNavItem: selectedMenu == 'home',
              }"
            >
              <span><b-icon icon="house-door-fill"></b-icon></span>
              <p>Home</p>
            </div>
          </router-link>
          <span class="innerSpan"></span>
        </div>
      </div>

      <div class="containerItem">
        <div class="containerItem-inner">
          <router-link to="/bookings">
            <div
              :class="{
                linkContainer: true,
                activeNavItem: selectedMenu == 'bookings',
              }"
            >
              <span><b-icon icon="bookmark-star-fill"></b-icon></span>
              <p>Bookings</p>
            </div>
          </router-link>
          <span class="innerSpan"></span>
        </div>
      </div>

      <div class="containerItem">
        <div class="containerItem-inner">
          <div
            :class="{
              linkContainer: true,
              activeNavItem: selectedMenu == 'get_help',
            }"
          >
            <span><b-icon icon="question-circle-fill"></b-icon></span>
            <p>Get Help</p>
          </div>
          <span class="innerSpan"></span>
        </div>
      </div>

      <div class="containerItem">
        <div class="containerItem-inner">
          <router-link to="/auth">
            <div
              :class="{
                linkContainer: true,
                activeNavItem: selectedMenu == 'profile',
              }"
            >
              <span><b-icon icon="person-fill"></b-icon></span>
              <p>Profile</p>
            </div>
          </router-link>
          <span class="innerSpan"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // loggedIn: false,
    };
  },
  props: {
    selectedMenu: "",
  },
  mounted() {
    $(document).ready(function () {
      $(".linkContainer").click(function () {
        $(".linkContainer").removeClass("activeNavItem");
        $(this).addClass("activeNavItem");
      });

      // var loginTok = document.cookie.split("=")[1].split(";")[0];
      // if (loginTok != undefined) this.loggedIn = true;
    });
  },
};
</script>

<style scoped>
#bottomNavbarContainer {
  height: 60px;
  background: #fff;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 3;
  transition: transform 0.3s ease-out;
  transform: translateY(0);
}

.containerItem {
  flex: 1;
  display: flex;
}

.containerItem-inner {
  width: 100%;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.linkContainer {
  flex: 1;
  display: flex;
  padding-top: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #bdbdbd;
}

.containerItem-inner a {
  color: #bdbdbd;
  text-decoration: none !important;
}

.linkContainer span {
  font-size: 24px;
}

.linkContainer p {
  line-height: 16px;
  font-size: 11px;
  margin: 0;
}

.innerSpan {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  top: -1px;
  left: -1px;
}
.activeNavItem {
  color: #000;
}
</style>