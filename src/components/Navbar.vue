<template>
  <div class="nav container">
    <b-navbar toggleable="xl">
      <b-navbar-brand href="#" class="text-white">
        <img src="/img/logo_light.png" />
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto nav-items">
        <b-nav-item href="#">Blog</b-nav-item>
        <b-nav-item href="#"><u>Register As A Professional</u></b-nav-item>
        <b-nav-item href="#" v-b-toggle.login>Login / Sign Up</b-nav-item>

        <b-sidebar
          id="login"
          title="Please login to continue"
          right
          shadow
          backdrop
          no-close-on-backdrop =false
          no-close-on-esc =false
        >
          <b-input-group prepend="+91"  id="bg">

            <input
              v-model="mobile"
              type="tel"
              placeholder="Your phone number "
              id="tel"
              maxlength="10"
            />

          </b-input-group >

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
                  id="otp"
                  class="mr-2 ml-2 inputs"
                  v-model="otp1"
                  maxlength="1"
                />
                <input
                  type="tel"
                  pattern="[0-9]{1}"
                  id="otp"
                  class="mr-2 ml-2 inputs"
                  v-model="otp2"
                  maxlength="1"
                />
                <input
                  type="tel"
                  pattern="[0-9]{1}"
                  id="otp"
                  class="mr-2 ml-2 inputs"
                  v-model="otp3"
                  maxlength="1"
                />
                <input
                  type="tel"
                  pattern="[0-9]{1}"
                  id="otp"
                  class="mr-2 ml-2 inputs"
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
    </b-navbar>
  </div>
</template>

<script>
 import axios from 'axios';
export default {
 
  data() {
    return {
      mobile:'',
      otp1:'',
      otp2:'',
      otp3:'',
      otp4:'',
    };
  },
  mounted(){
         $(".inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.inputs').focus();
        }
  });
  },
  methods: {
    gen_otp() {
      var self = this;
      axios
        .post("http://fixorie.herokuapp.com/accounts/generate_otp/", {
          "phone_number": "+91"+this.mobile
        })
        .then(function (response) {
          if(response.data.success != null) {
            // console.log(response.data.success)
          }
        });
    },
    login(){
       var self = this;
      axios
        .post("http://fixorie.herokuapp.com/accounts/login/", {
          "username": "+91"+this.mobile,
          "password": self.otp1+self.otp2+self.otp3+self.otp4
        })
        .then(function (response) {
          if(response.data.token != null) {
            console.log(response.data.token)
          }
        });
    }
  },
};
</script>
<style scoped>
.navbar .navbar-brand img {
  margin:0 0 0 30px;
  height: 100%;
  width: 80px;
}

.b-sidebar-backdrop {
  opacity: 0.7 !important;
}

.input-group-text{
  background-color:#fff !important ;
  border: 1px solid #bdbdbd !important;
  margin-left: 19px;
}

.navbar a.nav-link {
  color: #fff !important;
  padding: 0;
  margin-right: 25px;
}

.navbar {
  height: 60px;
  max-width: 100%;
  width:100%;
  font-size: 16px;
  font-weight:bolder;
}


#login{
  font-size:14px !important;
  z-index:10 !important;
}

#otp {
  border: 1px solid #bdbdbd;
  height: 46px;
  width: 46px;
  text-align: center;
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
#login {
  background-color: transparent;
  z-index: 99 !important;
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