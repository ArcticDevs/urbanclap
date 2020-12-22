<template>
  <div id="auth">
    <Auth />
    <NavbarBottom selectedMenu="profile" />
  </div>
</template>

<script>
import Auth from "../components/Login_Mobile.vue";
import NavbarBottom from "@/components/Navbar_bottom.vue";

export default {
  components: { Auth, NavbarBottom },
};
</script>