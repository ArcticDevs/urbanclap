<template>
  <div class="second-mod">
    <div class="nav">
      <div class="container">
        <Navbar />
      </div>
    </div>
    <div class="header">
      <div class="container">
        <div class="breadcrumbs">
          <b-breadcrumb>
            <b-breadcrumb-item href="#">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="#">New Delhi</b-breadcrumb-item>
            <b-breadcrumb-item active>Salon At Home</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
        <div class="header-details">
          <h1>Salon at Home in Delhi</h1>
          <ul>
            <li>Branded Cosmetics are used- Loreal, Cheryl's and O3+</li>
            <li>
              Hygiene Friendly : Disposables items like wipes, towels are used
            </li>
            <li>Beauticians with minimum 5 years of experience</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- SERVICES PANEL START -->

    <div class="services-panel">
      <div class="panel-services-info">
        <p>View All Beauty Service:</p>
        <div class="panel-buttons">
          <div class="panel-buttons-inner">
            <button class="service-button">
              <div class="service-icon">
                <img src="service-panel-1.png" />
              </div>
              <p>Exclusive Packages</p>
              <span class="right-arrow">
                <b-icon icon="chevron-right" font-scale="1.4"></b-icon>
              </span>
            </button>
            <button class="service-button">
              <div class="service-icon">
                <img src="service-panel-2.jpeg" />
              </div>
              <p>Waxing & Threading</p>
              <span class="right-arrow">
                <b-icon icon="chevron-right" font-scale="1.4"></b-icon>
              </span>
            </button>
            <button class="service-button">
              <div class="service-icon">
                <img src="service-panel-3.jpeg" />
              </div>
              <p>Manicure + Pedicure</p>
              <span class="right-arrow">
                <b-icon icon="chevron-right" font-scale="1.4"></b-icon>
              </span>
            </button>
            <button class="service-button">
              <div class="service-icon">
                <img src="service-panel-4.jpeg" />
              </div>
              <p>Facial & Hair Services</p>
              <span class="right-arrow">
                <b-icon icon="chevron-right" font-scale="1.4"></b-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="panel-rating">
        <div class="aggregate-rating">
          <div class="aggregate-rating-value">
            <span><b-icon icon="star-fill"></b-icon></span>
            <span>4.8<span>/5</span></span>
          </div>
          <p>based on 96,767 ratings</p>
        </div>
        <div class="total-bookings">
          <span>2,58,803</span>
          <p>Bookings done in last 1 year</p>
        </div>
      </div>
    </div>

    <!-- SERVICES PANEL END -->

    <div class="desktop-mainBlock">
      <!-- *******main Block Nav********** -->
      <div class="page-nav">
        <b-navbar toggleable="xl">
          <b-navbar-nav class="mx-auto nav-items">
            <b-nav-item href="#" active>How it Works</b-nav-item>
            <b-nav-item href="#">Beauticians</b-nav-item>
            <b-nav-item href="#">Blogs</b-nav-item>
            <b-nav-item href="#">FAQs</b-nav-item>
            <b-nav-item href="#">About Salon at Home</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>
      <!-- ***********Nav End************** -->

      <div class="working">
        <div id="working-heading">
          <h5>How it Works</h5>
        </div>
        <div id="working-main-section">
          <div class="working-point">
            <div class="working-point-text">
              <p><b>Choose a Salon service</b></p>
              <p>Select from various salon packages & services</p>
            </div>
          </div>
          <div class="working-point">
            <div class="working-point-text">
              <p><b>Choose a Salon service</b></p>
              <p>Select from various salon packages & services</p>
            </div>
          </div>
          <div class="working-point">
            <div class="working-point-text">
              <p><b>Choose a Salon service</b></p>
              <p>Select from various salon packages & services</p>
            </div>
          </div>
        </div>
      </div>

      <div class="external-link">
        <h5>Beauty Parlour at home in Delhi</h5>
        <p>Tired of going to the salon? Urban Comapny provides services ...</p>
        <a href="#"><u>Men's Haircut and Grooming in Delhi</u></a>
      </div>

      <div class="beauticians">
        <div id="beauticians-heading">
          <h5>Beauticians</h5>
          <p>1,258 Beauty Service Professionals in New Delhi</p>
        </div>
        <!-- -------Employee reviews and ratings start-------- -->
        <div class="employee">
          <div class="info">
            <img src="employee.jpeg" />
            <div class="details">
              <p class="name">Reena Tyagi</p>
              <p class="address">Vikas Nagar, Delhi, India</p>
              <div class="ratings-info">
                <span class="stars d-inline-block">
                  <b-icon icon="star-fill"></b-icon> 4.8
                </span>
                <p class="d-inline-block ml-2 mb-0">(1563 ratings)</p>
                <span class="disc"><b-icon icon="circle-fill"></b-icon></span>
                <span class="five-star-count d-inline-block">
                  436 times rated 5 star
                </span>
              </div>
            </div>
          </div>

          <div class="employee-rating">
            <div class="emp-rating-complete">
              <div class="initial-profile"></div>
              <div class="emp-rating-details">
                <p class="client-name">Tanveer</p>
                <span class="stars d-inline-block">
                  <b-icon icon="star-fill"></b-icon> 5.0
                </span>
                <p class="review">She is super good in her work</p>
              </div>
            </div>

            <!-- ------second rating(Hidden)---------- -->
            <div id="second-rating">
              <div class="emp-rating-complete">
                <div class="initial-profile"></div>
                <div class="emp-rating-details">
                  <p class="client-name">Tanveer</p>
                  <span class="stars d-inline-block">
                    <b-icon icon="star-fill"></b-icon> 5.0
                  </span>
                  <p class="review">She is super good in her work</p>
                </div>
              </div>
            </div>
          </div>

          <div id="load-more">
            <button class="load-more-btn" @click="loadMore">
              <span class="down-arrow">
                <b-icon icon="arrow-down"></b-icon>
              </span>
              <span class="load-more-content">Click to read more reviews</span>
            </button>
          </div>
        </div>
      </div>
      <!-- -------Employee reviews and ratings end-------- -->

      <!-- ----------ALSO BOOKED-------- -->
      <div class="also-booked">
        <div class="also-booked-heading">
          <h5>Customer in New Delhi also booked</h5>
        </div>

        <div class="also-booked-carousel"></div>
      </div>

      <!-- ------------ALSO BOOKED END---------- -->

      <!-- ---------POPULAR SERVICES----------- -->
      <div class="popular-services">
        <div class="also-booked-heading">
          <h5>Popular Service Near you</h5>
        </div>

        <div class="popular-services-list">
          <ul>
            <li>Electricians</li>
            <li>Microwave Repair</li>
            <li>Cleaning Services</li>
            <li>Salons</li>
            <li>Spa</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar_dark.vue";
export default {
  name: "second-mod",
  components: {
    Navbar,
  },
  methods: {
    loadMore: function () {
      var x = document.getElementById("second-rating");
      var y = document.getElementById("load-more");
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
      }
    },
  },
};
</script>


<style scoped>
h5 {
  font-weight: 600;
  margin: 0;
}

.header {
  height: 457px;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/salon.jpg") no-repeat;
  background-size: cover;
  position: relative;
}

.breadcrumb {
  background: transparent;
}

.breadcrumb-item a,
.breadcrumb-item.active {
  color: #ddd !important;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: #fff;
}

.header-details h1 {
  margin-top: 10vh;
  color: #fff;
  text-align: left;
  font-weight: 600;
}
.header-details ul {
  order: 3;
  margin-left: 30px;
  margin-top: 5vh;
  padding: 0;
  color: #c4c4c4;
  text-align: left;
  font-size: 18px;
}

.header-details ul li {
  margin-bottom: 20px;
  font-size: 16px;
}

.desktop-mainBlock {
  width: 750px;
  margin-left: 190px;
  position: relative;
}

.page-nav {
  font-size: 16px;
  padding: 0 25px 0 25px;
  height: 60px;
  width: 100%;
  box-shadow: 0 4px 12px 0 #ddd;
  display: flex;
  justify-content: initial;
  align-items: center;
  position: sticky;
}

.nav-item {
  margin-right: 1vw;
  height: 100%;
}

a.nav-link {
  height: 100%;
  padding-top: 20px;
}

a.nav-link.active {
  border-bottom: solid 2px #000 !important;
}

.navbar {
  padding-bottom: 0;
  padding-top: 0;
  height: 100%;
}

.navbar-nav {
  height: 100%;
}

/* Services panel Start*/
.services-panel {
  position: fixed;
  top: 52%;
  border-radius: 4px;
  transform: translateY(-50%);
  right: calc(50% - 588px);
  z-index: 2;
  width: 360px;
  border-bottom: none;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 13px 31px -5px;
  padding-bottom: 0px !important;
}

.panel-services-info {
  position: relative;
  background-image: linear-gradient(
    130deg,
    rgb(100, 43, 115),
    rgb(198, 66, 110)
  );
  padding: 20px 24px 26px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  max-width: 748px;
  margin: 0 auto;
}

.panel-services-info p {
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
  color: rgb(255, 255, 255);
  margin: 0px 0px 16px;
}

.panel-buttons {
  transition: all 0.2s ease-in-out 0s;
}

.panel-buttons-inner {
  /* max-height: 300px; */
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 24px;
  width: calc(100% + 24px);
}

.service-button {
  margin-bottom: 20px;
  display: flex;
  padding: 12px 16px;
  border: none;
  min-width: 248px;
  max-width: 300px;
  text-align: center;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  width: 100%;
  background-position: 50%;
  transition: background 0.5s ease 0s;
  outline: 0;
}

.service-icon {
  display: inline-block;
  height: 32px;
  margin: 0px 16px 0px 0px;
  text-align: center;
  vertical-align: top;
}

.service-icon img {
  width: 32px;
  height: 32px;
}

.service-button p {
  text-align: left;
  line-height: 1.4;
  flex: 1 1 0%;
  width: 75%;
  display: inline-block;
  margin: 0px;
  color: #000;
  font-size: 16px;
  font-weight:500;
}

.right-arrow {
  font-size: 12px;
  text-align: center;
  line-height: 24px;
}

.panel-rating {
  padding: 24px;
  margin: 0;
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}

.aggregate-rating {
  padding-right: 16px;
  display: inline-block;
  width: 49%;
  vertical-align: top;
}

.aggregate-rating-value {
  position: relative;
  left: -4px;
  display: inline-block;
  color: #228d27;
}

.aggregate-rating-value span:nth-child(1) {
  font-size: 24px !important;
  position: relative;
  top: 4px;
  margin-left: 2px;
}

.aggregate-rating-value span:nth-child(1) .b-icon {
  vertical-align: baseline;
  width: 20px;
}

.aggregate-rating-value span:nth-child(2) {
  font-weight: 700 !important;
  margin-left: 4px;
  font-size: 24px !important;
}

.aggregate-rating-value span:nth-child(2) span {
  font-size: 20px !important;
  vertical-align: top;
  margin: 0;
}

.aggregate-rating p {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.33;
  color: #757575;
}

.total-bookings {
  display: inline-block;
  width: 49%;
  vertical-align: top;
}

.total-bookings span {
  font-weight: 700 !important;
  color: #212121;
  display: inline-block;
  font-size: 24px !important;
  margin-top: 0;
}

.total-bookings p {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.33;
  color: #757575;
}

/* Services panel End */

/* HOW IT WORKS START */
.working {
  height: 310px;
  width: 100%;
  background: #fff;
  color: #000;
  border: solid 1px rgb(218, 215, 215);
  margin-top: 30px;
  border-radius: 4px;
  text-align: left;
}

#working-heading {
  height: 75px;
  width: 100%;
  padding: 24px 40px 24px 40px;
  border-bottom: solid 1px rgb(218, 215, 215);
}

#working-main-section {
  height: 235px;
  width: 100%;
  padding: 0 40px 0 40px;
}

.working-point {
  height: 78px;
  width: 90%;
  margin-left: auto;
  border-bottom: solid 1px rgb(218, 215, 215);
}

.working-point-text {
  padding: 20px 0 20px 0;
  width: 80%;
  display: inline-block;
}
.working-point-text p {
  margin: 0;
}
.working-point-icon {
  width: 72px;
  height: 100%;
  display: inline-block;
}
/* HOW IT WORKS END */

.external-link {
  width: 100%;
  background: #fff;
  color: #000;
  border: solid 1px rgb(218, 215, 215);
  margin-top: 30px;
  border-radius: 4px;
  padding: 24px;
  text-align: left;
}

.external-link p {
  margin-top: 30px;
  margin-bottom: 30px;
  color: #757575;
  font-size: 13px;
  font-weight: 300;
}

.external-link a {
  color: #424242;
  font-size: 15px;
}

/* BEAUTICIANS START */

.beauticians {
  width: 100%;
  background: #fff;
  color: #000;
  border: solid 1px rgb(218, 215, 215);
  margin-top: 30px;
  border-radius: 4px;
  text-align: left;
}

#beauticians-heading {
  padding: 24px 40px 24px 40px;
}

.beauticians p {
  color: #757575;
  font-size: 15px;
  margin: 0;
}

.employee {
  border-top: solid 1px rgb(218, 215, 215);
  padding: 24px 40px 0 40px;
}

.info img {
  display: inline-block;
  vertical-align: top;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.details {
  display: inline-block;
  margin-left: 24px;
}

.employee .name {
  color: #000;
  margin-bottom: 8px;
  font-size: 16px;
}

.employee .address {
  font-size: 12px;
}

.ratings-info {
  color: #228d27;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  margin-top: 8px;
}

.ratings-info .stars,
.ratings-info .five-star-count {
  padding-top: 2px;
}

.ratings-info .disc .b-icon {
  color: #d8d8d8;
  height: 7px;
  width: 7px;
  margin-left: 10px;
  margin-right: 10px;
}

.employee-rating {
  padding: 0 0 28px 96px;
}

.emp-rating-complete {
  padding-top: 24px;
}

.initial-profile {
  height: 40px;
  width: 40px;
  background: #ffab91;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0;
  color: #fff;
  font-size: 16px;
}

.initial-profile:before {
  content: "T";
}

.emp-rating-details {
  padding-left: 16px;
  display: inline-block;
}

.employee-rating .client-name {
  color: #000;
  margin-bottom: 0;
  font-size: 16px;
}

.employee-rating .stars {
  color: #228d27;
  font-size: 14px;
}

.employee-rating .review {
  padding-top: 8px;
  line-height: 20px;
  font-size: 12px;
}

#second-rating {
  display: none;
}

#load-more {
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 3;
  margin-bottom: 24px;
}

.load-more-btn {
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  color: #424242;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 20px;
  height: 32px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  outline: 0;
}

.load-more-btn:hover {
  background: #f6f6f6;
}

.down-arrow:before {
  position: relative;
  transform: rotate(-90deg) translateX(-2px);
  z-index: 3;
}

.down-arrow {
  margin-right: 3px;
  font-size: 15px;
  display: inline-block;
  top: -2px;
}

.load-more-content {
  position: relative;
  bottom: -1px;
}
/* BEAUTICIANS END */

/* ALSO BOOKED */
.also-booked {
  height: 50vh;
  width: 100%;
  background: #fff;
  color: #000;
  border: solid 1px rgb(218, 215, 215);
  margin-top: 30px;
  border-radius: 4px;
  text-align: left;
}

.also-booked-heading {
  width: 100%;
  padding: 24px 24px 24px 24px;
  border-bottom: solid 1px rgb(218, 215, 215);
}

.also-booked-carousel {
  height: 35vh;
  width: 100%;
  border: solid 1px rgb(218, 215, 215);
  margin-top: 24px;
  border-radius: 4px;
}
/* ALSO BOOKED END */

/* POPULAR SERVICES */
.popular-services {
  padding-bottom: 20px;
  width: 100%;
  background: #fff;
  color: #000;
  border: solid 1px rgb(218, 215, 215);
  margin-top: 30px;
  border-radius: 4px;
  text-align: left;
}

.popular-services-list {
  width: 100%;
  margin-top: 24px;
  border-radius: 4px;
}

.popular-services-list ul {
  list-style: none;
  margin: 0;
  padding: 0 25px 0 25px;
}

.popular-services-list ul li {
  margin-top: 20px;
  border-bottom: dotted 1px rgb(218, 215, 215);
}
/* POPULAR SERVICES END */

@media (max-width: 1200px) {
  .page-nav {
    display: none;
  }
}
</style>