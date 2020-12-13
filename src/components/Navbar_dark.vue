<template>
  <div class="nav-dark">
    <b-navbar toggleable="xl">
      <b-navbar-brand class="text-white">
        <router-link to="/"><img src="/img/logo_light.png" /></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="sidebar"></b-navbar-toggle>

      <b-sidebar
        id="sidebar"
        right
        shadow
        backdrop
        :no-close-on-backdrop="false"
        :no-close-on-esc="false"
        is-nav
      >
        <div class="sidebar-contents">
          <ul>
            <li>
              <b-nav-item class="sidebar-item" v-if="!isLoggedIn">
                Login / Sign Up
              </b-nav-item>
              <b-nav-item class="sidebar-item" v-if="isLoggedIn">
                Logout
              </b-nav-item>
            </li>
            <li><b-nav-item  class="sidebar-item">Blog</b-nav-item></li>
            <li>
              <b-nav-item  class="sidebar-item">About Us</b-nav-item>
            </li>
            <li>
              <b-nav-item  class="sidebar-item">Contact Us</b-nav-item>
            </li>
            <li>
              <b-nav-item  class="sidebar-item"
                >Terms Of Use</b-nav-item
              >
            </li>
            <li>
              <b-nav-item  class="sidebar-item">
                Privacy Policy
              </b-nav-item>
            </li>
            <li>
              <b-nav-item  class="sidebar-item">
                Customer Support
              </b-nav-item>
            </li>
            <li>
              <b-nav-item  class="sidebar-item">
                We Are Hiring!
              </b-nav-item>
            </li>
          </ul>
        </div>
      </b-sidebar>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto nav-items">
          <b-nav-item><router-link to="/">Blog</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/"
              ><u>Register As A Professional</u></router-link
            ></b-nav-item
          >
          <b-nav-item v-if="isLoggedIn"
            ><router-link to="/bookings">My Bookings</router-link></b-nav-item
          >
          <b-nav-item v-if="isLoggedIn" @click="logout"
            ><router-link to="/"
              >Logout - Verified Customer</router-link
            ></b-nav-item
          >
          <b-nav-item v-b-toggle.login v-if="!isLoggedIn"
            >Login / Sign Up</b-nav-item
          >

          <b-sidebar
            id="login"
            title="Please login to continue"
            right
            shadow
            backdrop
            no-close-on-backdrop="false"
            no-close-on-esc="false"
          >
            <b-input-group prepend="+91" id="bg">
              <input
                v-model="mobile"
                type="tel"
                placeholder="Your phone number "
                id="tel"
                maxlength="10"
              />
            </b-input-group>

            <input
              v-b-toggle.sidebar-OTP
              type="submit"
              value="Continue"
              id="btn"
              @click="gen_otp"
            />
            <b-sidebar
              id="sidebar-OTP"
              title="Please login to continue"
              right
              shadow
            >
              <div class="px-3 py-2">
                <h5>Enter Verification Code</h5>
                <span>We have sent a 4 digit OPT on {{ mobile }}</span>
                <div class="mt-4">
                  <input
                    type="tel"
                    pattern="[0-9]{1}"
                    class="inputs otp"
                    v-model="otp1"
                    maxlength="1"
                  />
                  <input
                    type="tel"
                    pattern="[0-9]{1}"
                    class="inputs otp"
                    v-model="otp2"
                    maxlength="1"
                  />
                  <input
                    type="tel"
                    pattern="[0-9]{1}"
                    class="inputs otp"
                    v-model="otp3"
                    maxlength="1"
                  />
                  <input
                    type="tel"
                    pattern="[0-9]{1}"
                    class="inputs otp"
                    v-model="otp4"
                    maxlength="1"
                  />
                </div>
              </div>
              <input
                v-b-toggle.sidebar-OTP
                type="submit"
                value="Log In"
                id="btn"
                @click="login"
              />
            </b-sidebar>
          </b-sidebar>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mobile: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      isLoggedIn: false,
    };
  },
  mounted() {
    $(".inputs").keyup(function () {
      if (this.value.length == this.maxLength) {
        $(this).next(".inputs").focus();
      }
    });

    var loginToken = document.cookie.split("=")[1].split(";")[0];
    if (loginToken != "") {
      this.isLoggedIn = true;
    }
  },
  methods: {
    gen_otp() {
      var self = this;
      axios
        .post("http://fixorie.herokuapp.com/accounts/generate_otp/", {
          phone_number: "+91" + this.mobile,
        })
        .then(function (response) {
          if (response.data.success != null) {
          }
        });
    },
    login() {
      var self = this;
      axios
        .post("http://fixorie.herokuapp.com/accounts/login/", {
          username: "+91" + this.mobile,
          password: self.otp1 + self.otp2 + self.otp3 + self.otp4,
        })
        .then(function (response) {
          if (response.data.token != null) {
            document.cookie = "token=" + response.data.token;
          }
          location.reload();
        });
    },
    logout() {
      var d = new Date();
      d.setTime(d.getTime());
      var expires = "expires=" + d.toUTCString();
      document.cookie = "token" + "=" + "" + ";path=/;" + expires;
      location.reload();
    },
  },
};
</script>

<style scoped>
.navbar .navbar-brand {
  margin: 0 0 0 30px;
  height: 100%;
  width: 80px;
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

.nav-item a {
  text-decoration: none !important;
  color: #000 !important;
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

#login {
  font-size: 14px !important;
  z-index: 10 !important;
  background-color: transparent;
}

.otp {
  border: 1px solid #bdbdbd;
  height: 46px;
  width: 46px;
  text-align: center;
  margin: 0 10px;
}

#country {
  height: 54px;
  width: 65px;
  outline-color: none;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
}
#tel {
  height: 54px;
  width: 234px;
  padding-top: 25px;
  padding-bottom: 21px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
}

.input-group-text {
  background-color: transparent;
  border: none;
}
#bg {
  padding-top: 35px;
}

#btn {
  background-color: #000;
  color: #fff;
  width: 299px;
  height: 50px;
  border: none;
  margin-top: 22px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #bdbdbd;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bdbdbd;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #bdbdbd;
}
</style>