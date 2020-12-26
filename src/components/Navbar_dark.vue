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
        no-close-on-backdrop
        no-close-on-esc
        is-nav
      >
        <div class="sidebar-contents">
          <ul>
            <li>
              <b-nav-item
                class="sidebar-item"
                v-b-toggle.login
                v-if="!loggedIn"
              >
                Login / Sign Up
              </b-nav-item>
              <b-nav-item class="sidebar-item" v-if="loggedIn" @click="logout">
                Logout
              </b-nav-item>
            </li>
            <!-- <li><b-nav-item class="sidebar-item">Blog</b-nav-item></li> -->
            <li>
              <b-nav-item class="sidebar-item">About Us</b-nav-item>
            </li>
            <li>
              <b-nav-item class="sidebar-item">Contact Us</b-nav-item>
            </li>
            <li>
              <b-nav-item class="sidebar-item">Terms Of Use</b-nav-item>
            </li>
            <li>
              <b-nav-item class="sidebar-item"> Privacy Policy </b-nav-item>
            </li>
            <li>
              <b-nav-item class="sidebar-item"> Customer Support </b-nav-item>
            </li>
            <!-- <li>
              <b-nav-item class="sidebar-item"> We Are Hiring! </b-nav-item>
            </li> -->
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
          <b-nav-item v-if="loggedIn"
            ><router-link to="/bookings">My Bookings</router-link></b-nav-item
          >
          <b-nav-item v-if="loggedIn" @click="logout"
            ><router-link to="/"
              >Logout - Verified Customer</router-link
            ></b-nav-item
          >
          <b-nav-item v-b-toggle.login v-if="!loggedIn"
            >Login / Sign Up</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-sidebar
      id="login"
      title="Please login to continue"
      right
      shadow
      backdrop
      no-close-on-backdrop
      no-close-on-esc
    >
      <b-input-group prepend="+91" id="bg">
        <input
          v-model="mobile"
          type="tel"
          placeholder="Your phone number "
          id="tel"
          maxlength="10"
          class="phno"
        />
      </b-input-group>

      <input
        v-b-toggle.sidebar-OTP
        type="submit"
        value="Continue"
        id="btn"
        @click="gen_otp"
      />
      <b-sidebar id="sidebar-OTP" title="Please login to continue" right shadow>
        <div class="px-3 py-2">
          <h5>Enter Verification Code</h5>
          <span>We have sent a 4 digit OPT on {{ mobile }}</span>
          <span class="otpMobileEdit" v-b-toggle.sidebar-OTP> Edit </span>
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
          <div class="otpError">Please enter correct OTP</div>
          <div class="otpResend" @click="gen_otp">
            <span>Resend OTP</span>
          </div>
        </div>
        <input type="submit" value="Log In" id="btn" @click="login" />
      </b-sidebar>
    </b-sidebar>
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
      loggedIn: false,
    };
  },
  mounted() {
    $(".phno").keyup(function () {
      if (/\D/g.test(this.value)) {
        // Filter non-digits from input value.
        this.value = this.value.replace(/\D/g, "");
      }
    });
    $(".inputs").keyup(function () {
      if (/\D/g.test(this.value)) {
        // Filter non-digits from input value.
        this.value = this.value.replace(/\D/g, "");
      }
      if (this.value.length == this.maxLength) {
        $(this).next(".inputs").focus();
      }
    });

    if (this.$store.getters.get_login_status == true) this.loggedIn = true;
    else this.loggedIn = false;
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
            self.$store.commit("set_token", response.data.token);
          }
          location.reload();
        })
        .catch(function (err) {
          $(".otpError").css("display", "block");
          setTimeout(() => {
            $(".otpError").css("display", "none");
          }, 5000);
        });
    },
    logout() {
      this.$store.commit("delete_token");
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

.otpError {
  display: none;
  color: #dd0017;
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
}

.otpResend,
.otpResend:focus,
.otpResend:active {
  border: none;
  outline: none;
  padding: 18px 24px 0;
  text-align: center;
  color: #49ad49;
}

.otpResend span {
  cursor: pointer;
  color: #304ffe;
  padding: 18px 24px 0;
  text-align: center;
}

.otpMobileEdit,
.otpMobileEdit:focus,
.otpMobileEdit:active {
  border: none;
  outline: none;
  margin-left: 10px;
  color: #304ffe;
  cursor: pointer;
  line-height: 20px;
  font-size: 12px;
  margin: 9px 0 0;
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