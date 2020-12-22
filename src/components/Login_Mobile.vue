<template>
  <div id="LoginMob">
    <div class="mainContainer">
      <div class="authScreenContainer" v-if="isLoggedIn == false">
        <div class="authHeader">
          <p>Please login to continue</p>
        </div>
        <div class="authScreen">
          <div class="authLogin">
            <div class="authScreenInput">
              <div class="authScreenPhone">
                <div class="countryCode">
                  <span>+91</span>
                  <!-- <span><b-icon icon="caret-down-fill"></b-icon></span> -->
                </div>
                <div class="MobNumberInput">
                  <input
                    class="loginInput"
                    type="tel"
                    required=""
                    placeholder="Your phone number"
                    @keyup="checkValidity"
                    v-model="mobile"
                    maxlength="10"
                  />
                </div>
              </div>
              <div class="authScreenError">Invalid Number</div>
            </div>
            <button class="loginBtn" @click="gen_otp">
              <div>
                <span> Continue </span>
              </div>
            </button>
          </div>

          <div class="otp">
            <h2>Enter Verification Code</h2>
            <div class="otpContainer">
              <div class="otpInfo">
                <p class="otpSent">We have sent you a 4 digit OTP</p>
                <p class="otpSentTo">
                  on {{ mobile }}
                  <span class="otpMobileEdit" @click="editNumber"> Edit </span>
                </p>
              </div>
              <div class="otpField">
                  <input
                    class="otpInput"
                    pattern="[0-9]{1}"
                    v-model="authOTP1"
                    maxlength="1"
                  />

                  <input
                    class="otpInput"
                    pattern="[0-9]{1}"
                    v-model="authOTP2"
                    maxlength="1"
                  />

                  <input
                    class="otpInput"
                    pattern="[0-9]{1}"
                    v-model="authOTP3"
                    maxlength="1"
                  />

                  <input
                    class="otpInput"
                    pattern="[0-9]{1}"
                    v-model="authOTP4"
                    maxlength="1"
                  />
              </div>
              <div class="otpError">Please enter correct OTP</div>
              <div class="otpResend" @click="gen_otp">
                <span>Resend OTP</span>
              </div>
            </div>
            <button class="loginButton" @click="login">
              <div>
                <span> Login </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="logoutBtn" v-else>
        <div class="loggedInMsg">
          <b-icon icon="circle-fill"></b-icon> Logged In
        </div>
        <button class="logoutButton" @click="logout">
          <div>
            <span> Logout </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mobile: "",
      authOTP1: "",
      authOTP2: "",
      authOTP3: "",
      authOTP4: "",
      isLoggedIn: false,
    };
  },
  components: {
  },
  mounted() {
      $(".otpInput").keyup(function (e) {
        if(e.keyCode == 8){
          $(this).prev(".otpInput").focus();
        }
        else{
          if (this.value.length == this.maxLength) {
            $(this).next(".otpInput").focus();
          }
        }
    });

    var loginToken = document.cookie.split("=")[1].split(";")[0];
    if (loginToken != "") {
      this.isLoggedIn = true;
    }
  },
  methods: {
    gen_otp() {
      if (
        $(".authScreenError").css("display") == "none" &&
        $(".loginInput").val().length == 10
      ) {
        var self = this;
        axios.post("http://fixorie.herokuapp.com/accounts/generate_otp/", {
          phone_number: "+91" + this.mobile,
        });

        $(".authLogin").css("display", "none");
        $(".otp").css("display", "block");
      }
    },
    checkValidity() {
      if (
        $(".loginInput").val().length < 10 ||
        $(".loginInput").val().length > 10
      ) {
        $(".authScreenError").css("display", "block");
      } else {
        $(".authScreenError").css("display", "none");
      }
    },
    login() {
      var self = this;
      axios
        .post("http://fixorie.herokuapp.com/accounts/login/", {
          username: "+91" + this.mobile,
          password: self.authOTP1 + self.authOTP2 + self.authOTP3 + self.authOTP4,
        })
        .then(function (response) {
          if (response.data.token != null) {
            console.log(response.data.token);
            document.cookie = "token=" + response.data.token;
          }
          location.reload();
        })
        .catch(function (err) {
          $(".otpError").css("display", "block");
        });
    },
    logout() {
      var d = new Date();
      d.setTime(d.getTime());
      var expires = "expires=" + d.toUTCString();
      document.cookie = "token" + "=" + "" + ";path=/;" + expires;
      location.reload();
    },
    editNumber() {
      $(".otp").css("display", "none");
      $(".authLogin").css("display", "block");
    },
  },
};
</script>

<style scoped>
.mainContainer {
  transform: translateX(0);
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  transition: transform 0.3s;
}

.authScreenContainer {
  width: 100%;
  color: #212121;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.authHeader {
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 16px;
  display: flex !important;
}

.authHeader p {
  line-height: 24px;
  font-size: 16px;
  color: #212121;
  font-weight: 500;
  margin-left: 16px;
  margin-bottom: 0;
  position: relative;
  top: 1px;
  flex: 1;
}

.authScreen {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 32px 16px;
  justify-content: flex-start;
}

.authScreenInput {
  position: relative;
}

.authScreenPhone {
  display: flex;
  border: 1px solid #e2e2e2;
  height: 56px;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
}

.countryCode {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-right: 1px solid #e2e2e2;
  width: 72px;
}

.countryCode span:nth-child(2) {
  display: flex;
  padding-left: 10px;
}

.MobNumberInput {
  height: 100%;
  margin: 0 !important;
  border-radius: 4px;
  border: none;
  display: inline-block;
  vertical-align: top;
  flex: 1;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.1s;
}

.MobNumberInput input {
  height: 100%;
  border: none;
  color: #212121;
  padding-left: 12px;
  font-size: 16px;
  padding: 13px 10px 10px 5px;
  display: block;
  width: 100%;
}

.authScreenError {
  display: none;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #dd0017;
  font-size: 12px;
  width: 50px;
}

.loginBtn {
  height: 48px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 40px;
  min-height: 48px;
  position: relative;
  border: 1px solid #212121;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
  outline: none;
  background: rgba(0, 0, 0, 0.8)
    radial-gradient(circle, transparent 1%, hsla(0, 0%, 60.8%, 0.2) 0) 50%/15000%;
}

.loginBtn div span {
  height: 48px;
  width: 100%;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 40px;
  min-height: 48px;
}

@media (min-width: 768px) {
  .authScreenContainer {
    max-width: 700px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .authHeader p {
    text-align: center;
  }
}

/* OTP PAGE CSS */
.otp {
  display: none;
}

h2 {
  text-align: center;
  line-height: 26px;
  font-size: 18px;
  color: #212121;
  margin: 0;
}

.otpInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  font-size: 14px;
  flex-direction: column;
}

.otpSent {
  line-height: 20px;
  font-size: 12px;
  color: #757575;
  margin: 9px 0 0;
}

.otpSentTo {
  line-height: 20px;
  font-size: 12px;
  color: #757575;
}

.otpMobileEdit {
  margin-left: 10px;
  color: #304ffe;
  cursor: pointer;
  line-height: 20px;
  font-size: 12px;
  margin: 9px 0 0;
}

.otpField {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 27px;
}


.otpInput {
  margin: 0 8px;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  background-color: #fff;
  line-height: 24px;
  font-size: 18px;
  color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.otpError {
  display: none;
  color: #dd0017;
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
}

.otpResend {
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

.loginButton {
  height: 48px;
  width: 100%;
  background-color: #212121;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 40px;
  min-height: 48px;
  position: relative;
  border: 1px solid #212121;
  cursor: pointer;
  overflow: hidden;
  background-position: 50%;
  transition: background 0.3s;
  outline: none;
}

.loginButton span {
  height: 48px;
  width: 100%;
  background-color: #212121;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 40px;
  min-height: 48px;
  background-color: #212121;
  border: 1px solid #212121;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-position: 50%;
  transition: background 0.3s;
  outline: none;
}

.logoutBtn {
  width: 100%;
  height: 100%;
  padding: 20% 20%;
}

.logoutButton {
  height: 48px;
  width: 100%;
  background-color: #212121;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 40px;
  min-height: 48px;
  position: relative;
  border: 1px solid #212121;
  cursor: pointer;
  overflow: hidden;
  background-position: 50%;
  transition: background 0.3s;
  outline: none;
}

.loggedInMsg {
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
}

.loggedInMsg .b-icon {
  color: green;
}
</style>