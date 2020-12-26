<template>
    <div id="sidebar">
     <b-sidebar
     v-model="loginSidebar"
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
          <b-sidebar
            id="sidebar-OTP"
            title="Please login to continue"
            right
            shadow
          >
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
    };
  },
  props:{
    loginSidebar:Boolean,
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

#login {
  font-size: 14px !important;
  background-color: transparent;
}

.otp {
  border: 1px solid #bdbdbd;
  height: 46px;
  width: 46px;
  text-align: center;
  margin: 0 10px;
}

#tel {
  height: 54px;
  width: 234px;
  padding: 15px 0 15px 16px;
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