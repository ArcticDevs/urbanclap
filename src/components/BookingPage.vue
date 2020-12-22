<template>
  <div class="bookingsPage">
    <div class="navTop">
      <Navbar />
    </div>

    <div class="navBottom">
      <NavbarBottom selectedMenu="bookings" />
    </div>
    <div class="mt-5">
      <h4 class="text-center">My Bookings</h4>
      <div class="text-center mt-5">
        <span class="currentBookingsButton button activeButton" @click="CurrentBookings">Bookings</span>
        <span class="historyBookingsButton button" @click="HistoryBookings">History</span>
      </div>
      <div class="currentBookings mt-5 mb-5" v-if="showCurrentBookings==true">
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
            <tr v-for="(booking, index) in bookings" :key="index" v-if="booking.status=='pending' || booking.status=='professional_assigned' || booking.status=='professional_onwork'">
              <th scope="row">{{ booking.invoice_no }}</th>
              <td>{{ booking.total_amount }}</td>
              <td>{{ booking.status }}</td>
              <td>{{ booking.date_time }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="historyBookings mt-5 mb-5" v-else>
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
            <tr v-for="(booking, index) in bookings" :key="index" v-if="booking.status=='fulfilled' || booking.status=='cancelled'">
              <th scope="row">{{ booking.invoice_no }}</th>
              <td>{{ booking.total_amount }}</td>
              <td>{{ booking.status }}</td>
              <td>{{ booking.date_time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <span class="btn bookServiceBtn"
          ><router-link to="/">Book A Service</router-link></span
        >
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
      showCurrentBookings: true,
    };
  },
  components: {
    Navbar,
    NavbarBottom,
  },
  mounted() {
    $(document).ready(function () {
      $(".currentBookingsButton").click(function () {
        $(".historyBookingsButton").removeClass("activeButton");
        $(this).addClass("activeButton");
      });

      $(".historyBookingsButton").click(function () {
        $(".currentBookingsButton").removeClass("activeButton");
        $(this).addClass("activeButton");
        this.showCurrentBookings = false;
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

  methods: {
    CurrentBookings() {
      this.showCurrentBookings = true;
    },
    HistoryBookings() {
      this.showCurrentBookings = false;
    },
  },
};
</script>

<style>
.bookingsPage {
  padding-bottom: 70px;
}

.button {
  height: 48px;
  width: 148px;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}
.button:nth-child(1) {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.button:nth-child(2) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
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

.navTop {
  display: none;
}

.btn a {
  text-decoration: none !important;
  color: #fff !important;
}

.bookServiceBtn {
  border-radius: 4px;
}

.table {
  max-width: 100vw;
}

@media (min-width: 1200px) {
  .navBottom {
    display: none;
  }

  .navTop {
    display: block;
  }
}
</style>