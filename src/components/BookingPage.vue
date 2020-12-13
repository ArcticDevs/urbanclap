<template>
  <div>
    <div class="navTop">
      <Navbar />
    </div>
    
    <div class="navBottom">
    <NavbarBottom selectedMenu="bookings" />
    </div>
    <div class="container mt-5">
      <h4 class="text-center">My Bookings</h4>
      <div class="text-center container mt-5">
        <span class="button activeButton"> Bookings</span>
        <span class="button">History</span>
      </div>
      <div class="container mt-5 mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Invoice Number</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(booking, index) in bookings" :key="index">
              <th scope="row">{{ booking.invoice_no }}</th>
              <td>{{ booking.total_amount }}</td>
              <td>{{ booking.status }}</td>
              <td>{{ booking.date_time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <span class="btn"><router-link to="/">Book A Service</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar_dark.vue";
import NavbarBottom from "./Navbar_bottom.vue";
import axios from "axios";
export default {
  data() {
    return {
      bookings: "",
    };
  },
  components: {
    Navbar,
    NavbarBottom,
  },
  mounted() {
    $(document).ready(function () {
      $(".button").click(function () {
        $(".button").removeClass("activeButton");
        $(this).addClass("activeButton");
      });
    });
    var self = this;
    axios
      .get("http://fixorie.herokuapp.com/fo/invoices/", {
        headers: {
              Authorization: "Token " + document.cookie.split("=")[1],
        },
      })
      .then(function (response) {
        self.bookings = response.data;
      });
  },
};
</script>

<style>
.button {
  height: 48px;
  width: 148px;
  text-align: center;
  border: 1px solid black;
  border-radius: 0px;
  padding: 10px;
  cursor: pointer;
}
.btn {
  height: 48px;
  width: 148px;
  text-align: center;
  border: 1px solid black;
  border-radius: 0px;
  color: white;
  background-color: #000;
  padding: 10px 10px;
}
.btn:hover {
  color: white;
}
.activeButton {
  color: white;
  background-color: #000;
}

.navTop{
  display:none;
}

.btn a{
  text-decoration:none !important;
  color:#fff !important;
}

@media(min-width:1200px){
  .navBottom{
    display:none;
  }

  .navTop{
    display:block;
  }
}
</style>