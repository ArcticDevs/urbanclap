<template>
  <div class="second-mod">
    <div class="nav">
      <div class="container">
        <Navbar />
      </div>
    </div>
    <div class="header">
      <img :src="data.bg_img_path" />
      <div class="container">
        <div class="breadcrumbs">
          <b-breadcrumb>
            <b-breadcrumb-item href="#">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="#">New Delhi</b-breadcrumb-item>
            <b-breadcrumb-item active>{{ data.name }}</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
        <div class="header-details">
          <h1>{{ data.description }}</h1>
          <ul>
            <li v-for="(feature, index) in data.features" :key="index">
              {{ feature.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mob-service-panel">
        <div class="mob-service-panel-root">
          <p class="mob-panel-heading">View All Beauty Services:</p>
          <ul>
            <li v-for="(sub_service, index) in data.sub_services" :key="index">
              <div class="mob-service-img"></div>
              <p>{{ sub_service.name }}</p>
              <span><b-icon icon="chevron-right"></b-icon></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mobile-mainBlock">
      <button class="free-delivery-btn">
        <div>Get Free Salon Home Delivery</div>
      </button>

      <div class="external-link">
        <h5>Beauty Parlour at home in Delhi</h5>
        <p>Tired of going to the salon? Urban Comapny provides services ...</p>
        <a href="#"><u>Men's Haircut and Grooming in Delhi</u></a>
      </div>

      <section class="fulfilled">
        <section class="fulfilled-inner">
          <div class="fulfilled-img">
            <div class="fulfilled-img-inner">
              <img src="/fulfilled-img.png" />
            </div>
          </div>
          <ul>
            <li>
              <span class="fulfilled-icon"
                ><b-icon icon="house-door-fill"></b-icon
              ></span>
              <span>Free at Home Service</span>
            </li>
            <li>
              <span class="fulfilled-icon"
                ><b-icon icon="person-check-fill"></b-icon
              ></span>
              <span>Verified and Senior Beauticians</span>
            </li>
            <li>
              <span class="fulfilled-icon"
                ><b-icon icon="shield-fill-check"></b-icon
              ></span>
              <span>High Quality and Genuine Products</span>
            </li>
          </ul>
        </section>
      </section>

      <section class="mob-beautician">
        <div class="mob-beautician-heading">Beauticians</div>
        <h2>1,253 Beauty Service Professionals in New Delhi</h2>
        <ul>
          <li>
            <span><b-icon icon="star-fill"></b-icon></span>
            <span>Only 4+ star rated professionals</span>
          </li>
          <li>
            <span><b-icon icon="briefcase-fill"></b-icon></span>
            <span>Minimum 3 years of experience</span>
          </li>
          <li>
            <span><b-icon icon="person-square"></b-icon></span>
            <span>Background verified and Urban Company trained</span>
          </li>
        </ul>
        <div class="mob-beautician-info">
          <div class="mob-beautician-info-inner">
            <ul>
              <li>
                <div class="mob-pro-list-root"></div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mob-faqs">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li v-for="(faq, index) in data.faqs" :key="index">
            <span>{{ faq.question }}</span>
            <p>
              {{ faq.answer }}
            </p>
          </li>
        </ul>
        <div class="see-more-btn-root">
          <button class="see-more-btn">
            <div class="see-more-title">See More</div>
          </button>
        </div>
      </section>

      <section class="mob-about" v-html="data.about">
        <div class="see-more-btn-root">
          <button class="see-more-btn">
            <div class="see-more-title">See More</div>
          </button>
        </div>
      </section>
    </div>

    <div class="desktop-mainBlock">
      <!-- SERVICES PANEL START -->
      <div class="services-panel">
        <b-modal
          id="modal-tall"
          centered
          hide-footer="true"
          class="text-center panelModal"
          size="lg"
          body-class
        >
          <div id="modal-serve" v-if="selected_sub_service_index == -1">
            <h2 class="my-4 text-center">What Are You Looking For ?</h2>

            <div
              class="sub-service"
              v-for="(sub_service, index) in this.data.sub_services"
              @click="ShowService(index)"
              :key="index"
            >
              <div class="sub-service-heading">{{ sub_service.name }}</div>
              <span class="right-arrow-subservice">
                <span><b-icon icon="chevron-right"> </b-icon></span>
              </span>
            </div>
          </div>
          <div id="service_type" v-if="selected_sub_service_index != -1">
            <h4 class="text-center mb-5">ADD AC(s) for service</h4>
            <div
              class="mt-4 mb-4"
              v-for="(sub_service_type, type_index) in this.data.sub_services[
                selected_sub_service_index
              ].sub_service_types"
              :key="type_index"
            >
              <h4>
                <span class="float-left ml-5">{{ sub_service_type.name }}</span
                ><span class="float-right">
                  <div class="float-right" id="border">

                    <button type="button" v-if="!in_cart(sub_service_type.id)" @click="add_to_cart(sub_service_type.id)"> + Add </button>

                    <div v-else>
                      <button type="button" id="borderInl" @click="cart[ get_cart_index(sub_service_type.id) ].quantity--">
                        -
                      </button>
                      {{ cart[ get_cart_index(sub_service_type.id) ].quantity }}
                      <button type="button" id="borderInr" @click="cart[ get_cart_index(sub_service_type.id) ].quantity++">
                        +
                      </button>
                    </div>

                  </div>
                </span>
              </h4>
            </div>
            <br />
            <hr />
            
          </div>
        </b-modal>
        <div class="panel-services-info">
          <p>View All Beauty Service:</p>
          <div class="panel-buttons">
            <div class="panel-buttons-inner">
              <button
                class="service-button"
                v-for="(sub_service, index) in data.sub_services"
                :key="index"
                
                v-b-modal.modal-tall
              >
                <div class="service-icon">
                  <img src="service-panel-1.png" />
                </div>
                <p>{{ sub_service.name }}</p>
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

      <!-- *******Desktop Nav********** -->
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
          <div
            class="working-point"
            v-for="(point, index) in data.how_it_works"
            :key="index"
          >
            <img :src="point.img_path" />
            <div class="working-point-text">
              <p>
                <b>{{ point.title }}</b>
              </p>
              <p>{{ point.description }}</p>
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
      <!-- ---------POPULAR SERVICES END----------- -->

      <!-- --------FAQS START----------- -->
      <div class="FAQ">
        <h5>Frequently Asked Questions</h5>
        <div class="questions">
          <div class="question" v-for="(faq, index) in data.faqs" :key="index">
            <p>{{ faq.question }}</p>
            <div class="open_arrow" @click=" selected_faq_index != -1 && selected_faq_index == index ? selected_faq_index = -1 : selected_faq_index = index">
              <span>
                <b-icon icon="chevron-down"></b-icon>
              </span>
            </div>
            <div id="answer" v-if="selected_faq_index == index">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
      <!-- --------FAQS END----------- -->
      <div id="aboutSection" v-html="data.about"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar_dark.vue";
import axios from "axios";
export default {
  name: "second-mod",
  data() {
    return {
      counter: 0,
      data: {},
      selected_sub_service_index: -1,
      cart: [],

      selected_faq_index: -1,
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    var url = window.location.href;
    var service_url = "/" + url.substring(url.lastIndexOf("/") + 1);

    axios.get("http://fixorie.herokuapp.com/fo/category_url/").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].url == service_url) {
          var service_id = res.data[i].id;
          axios
            .get("http://fixorie.herokuapp.com/fo/services/" + service_id)
            .then((res2) => {
              this.data = res2.data;
            });
        }
      }
    });
  },
  methods: {
    loadMore: function () {
      var x = document.getElementById("second-rating");
      var y = document.getElementById("load-more");
      x.style.display = "block";
      y.style.display = "none";
    },

    show_answer: function () {
      var ans = document.getElementById("answer");
      if (ans.style.display == "none") ans.style.display = "block";
      else ans.style.display = "none";
    },


    ShowService: function (sub_service_index) {
      // console.log("---->>>>" + sub_service_index);

      this.selected_sub_service_index = sub_service_index;

    },
    increase: function () {
      this.counter++;
    },
    decrease: function () {
      this.counter--;
    },

    add_to_cart(sub_service_type_id) {
      this.cart.push({
        sub_service_type_id: sub_service_type_id,
        quantity: 1,
      });
    },

    in_cart(sub_service_type_id) {
     for(var i=0;i<this.cart.length;i++) {
        if(this.cart[i].sub_service_type_id == sub_service_type_id) {
          return true;
        }
      }
      return false;
    },

    get_cart_index(sub_service_type_id) {
      for(var i=0;i<this.cart.length;i++) {
        if(this.cart[i].sub_service_type_id == sub_service_type_id) {
          return i;
        }
      }
    },
  },
};
</script>


<style scoped>
/* modal CSS */
.modal-content {
  height: 100% !important;
}
#border {
  border: 1px solid #304ffe;
}
#borderInr {
  border-right: 1px solid #304ffe;
  background-color: transparent;
  border: none;
}
#borderInl {
  border-left: 1px solid #304ffe;
  background-color: transparent;
  border: none;
}
.sub-service {
  /* display: table-row; */
  width: 100%;
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
.sub-service-heading {
  padding: 28px 16px;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  line-height: 26px;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #212121;
}
.right-arrow-subservice {
  width: 55px;
  text-align: center;
  padding: 28px 16px;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
}

.right-arrow-subservice span {
  height: 24px;
  width: 24px;
  border: 1px solid rgba(48, 79, 254, 0.24);
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  background-color: rgba(48, 79, 254, 0.04);
}

.right-arrow-subservice span .b-icon {
  font-size: 12px;
  position: relative;
  top: -4px;
  left: 1px;
  color: #304ffe;
}

@media (min-width: 768px) {
  .sub-service-heading {
    padding-left: 96px;
  }
  .right-arrow-subservice {
    padding-right: 96px;
  }
}
/* Modal Css end  */

h5 {
  font-weight: 600;
  margin: 0;
}

.mobile-mainBlock {
  display: none;
}

.header {
  height: 70vh;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  position: relative;
  padding-top:60px;
}

.mob-service-panel {
  display: none;
}

.header img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
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

.nav{
    position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  background:#fff;
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
  font-weight: 500;
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
  height: auto;
  width: 100%;
  padding: 0 40px 0 40px;
}

.working-point {
  height: 78px;
  /* width: 90%; */
  margin-left: auto;
  position: relative;
}

.working-point img {
  height: 60%;
  vertical-align: sub;
}

.working-point-text {
  padding: 20px 0 18px 30px;
  width: 80%;
  display: inline-block;
  border-bottom: solid 1px rgb(218, 215, 215);
}

.working-point-text p {
  margin: 0;
  font-size: 14px;
  line-height: 19px;
}

.working-point-text p:nth-child(2) {
  margin: 0;
  font-size: 12px;
  color: #757775;
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

.FAQ {
  margin-top: 30px;
  padding: 24px;
  border: solid 1px rgb(218, 215, 215);
  text-align: left;
}

.FAQ h5 {
  font-size: 24px;
  margin: 16px 0;
  padding: 0 16px;
}

.questions {
  padding: 16px;
}

.question {
  background-color: #fff;
  padding: 24px;
  margin-bottom: 16px;
  border: solid 1px rgb(218, 215, 215);
  border-radius: 4px;
}

.question p {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  padding-right: 24px;
  color: #212121;
  display: inline-block;
  width: 90%;
}

.open_arrow {
  padding: 4px 10px;
  border-radius: 50%;
  color: #9e9e9e;
  background-color: #f4f4f4;
  display: inline-block;
  cursor: pointer;
}

#answer {
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
}

#aboutSection {
  text-align: left;
  font-size: 90%;
  border: 1px solid #f0f0f0;
  margin-top: 30px;
  padding: 24px;
}

#aboutSection > section > h2 {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #000 !important;
}

/* **********MOBILE CSS********** */
.mob-service-panel-root {
  border-radius: 8px;
  background-color: #fff;
  padding: 16px 0 0;
  margin: 0 16px 24px;
  box-shadow: 0 7px 23px 0 #ddd;
}

.mob-panel-heading {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.52;
  color: #212121;
  margin: 0;
  text-align: left;
  padding: 16px 16px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.mob-service-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;
  vertical-align: top;
  overflow: hidden;
}

.mob-service-panel-root ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.mob-service-panel-root ul li {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  background-position: 50%;
  transition: background 0.5s;
}

.mob-service-panel-root ul li p {
  font-size: 16px;
  line-height: 1.5;
  color: #212121;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  margin: 0;
  width: calc(100% - 92px);
  border: none;
}

.mob-service-panel-root ul li span {
  color: #212121;
  font-size: 12px;
  position: relative;
  left: 12px;
}
/* ****mobile view css***** */
.mobile-mainBlock {
  padding-bottom: 80px;
}

.free-delivery-btn {
  background-color: #fd5c63 !important;
  border: 1px solid #fd5c63 !important;
  position: fixed !important;
  bottom: 16px !important;
  left: 16px !important;
  font-size: 16px;
  z-index: 5;
  transition: transform 0.3s;
  animation: SEOListingMobile__reveal--1TVbz 0.4s
    cubic-bezier(0.5, 0.5, 0.75, 1.5) 0s 1 normal forwards;
  color: #212121;
  border-radius: 4px;
  width: calc(100% - 32px) !important;
  padding: 17px 12px;
  margin-top: 12px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  background-position: 50%;
  outline: none;
}

.free-delivery-btn div {
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #fff;
  font-family: Axiforma;
  font-size: 16px;
}

.fulfilled {
  background-color: #fff;
}

.fulfilled-inner {
  border-radius: 0;
  background-color: #fff6ec;
  padding: 24px 16px;
}

.fulfilled-img {
  width: 120px !important;
  height: 45px !important;
  position: relative;
}

.fulfilled-img-inner {
  position: absolute;
  background: #f6f7f8;
  background-image: linear-gradient(
    90deg,
    #f6f7f8 0,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: TemplateShimmer__placeholderShimmer--3ABuG;
  animation-timing-function: linear;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
}

.fulfilled-img-inner img {
  width: 100%;
}

.fulfilled-inner ul {
  padding: 0;
  margin: 20px 0 0;
  list-style-type: none;
}

.fulfilled-inner ul li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  height: 20px;
  text-align: -webkit-match-parent;
}

.fulfilled-icon {
  font-size: 24px;
  margin-right: 16px;
  position: relative;
  top: 4px;
  line-height: 1.43;
  color: #333;
}

.fulfilled-inner ul li span:nth-child(2) {
  font-size: 14px;
  line-height: 1.43;
  color: #333;
}

.mob-beautician {
  padding: 28px 0 16px;
  background-color: #fff;
  margin-bottom: 24px;
  position: relative;
  text-align: left;
}

.mob-beautician .b-icon {
  color: #fd5c63;
}

.mob-beautician-heading {
  margin: 0 16px 6px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #212121;
}

.mob-beautician h2 {
  font-size: 14px;
  line-height: 1.43;
  color: #757575;
  font-weight: 400;
  margin: 0;
  padding: 0 16px 16px;
  display: inline-block;
}

.mob-beautician ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.mob-beautician ul li {
  display: flex;
  align-items: center;
  padding: 0 16px 8px;
}

.mob-beautician ul li span:nth-child(1) {
  font-size: 24px;
  position: relative;
  top: 5px;
}

.mob-beautician ul li span:nth-child(2) {
  font-size: 14px;
  line-height: 1.43;
  color: #757575;
  margin-left: 12px;
}

.mob-beautician-info {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.mob-beautician-info-inner {
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  top: 20px;
  scroll-behavior: smooth;
  position: relative;
  width: 100%;
}

.mob-beautician-info-inner ul {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  list-style-type: none;
}

.mob-beautician-info-inner ul li {
  display: inline-block;
}

.mob-pro-list-root {
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  padding: 16px;
  display: inline-block;
  width: 80vw;
  margin-left: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  vertical-align: top;
  background-position: 50%;
  transition: all 0.3s;
}

.mob-faqs {
  height: 500px;
  overflow: hidden;
  padding: 28px 16px;
  background-color: #fff;
  position: relative;
  margin-bottom: 24px;
  text-align: left;
}

.mob-faqs h2 {
  margin: 0 16px 6px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #212121;
}

.mob-faqs ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.mob-faqs ul li:nth-child(1) {
  padding-top: 0;
}

.mob-faqs ul li {
  padding: 24px 0;
  border-bottom: 1px solid #f0f0f0;
}

.mob-faqs ul li span {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #212121;
  margin-bottom: 8px;
  display: inline-block;
}
.mob-faqs ul li p {
  font-size: 12px;
  line-height: 1.71;
  color: #999;
  margin: 0;
}

.mob-about {
  height: 500px;
  overflow: hidden;
  border: none;
  padding: 28px 16px 24px;
  margin-bottom: 24px;
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  z-index: 2;
  margin: 28px auto 0;
  text-align: left;
  font-size: 90%;
}

.mob-about section h2 {
  font-size: 1rem !important;
}

.see-more-btn-root {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.5) 20%,
    #fff
  );
}

.see-more-btn {
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: none;
  padding: 9px 30px;
  margin-top: 45px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-position: 50%;
  transition: background 0.3s;
  outline: none;
  color: #212121;
}

.see-more-title {
  font-size: 12px;
  color: #fd5c63;
}

/* VIEW CHANGE MEDIA QUERY */
@media (max-width: 1200px) {
  .desktop-mainBlock {
    display: none;
  }
  .mobile-mainBlock {
    display: block;
  }
  .services-panel {
    display: none;
  }
  .mob-service-panel {
    display: block !important;
    z-index: 2;
  }
  .breadcrumbs {
    display: none;
  }
  .external-link {
    margin: 0;
    border: none;
  }
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    background-color: #f5f5f5;
    background-blend-mode: multiply;
    height: auto;
  }
  .header img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40% !important;
    object-fit: cover;
    filter: brightness(0.4);
    z-index: 1 !important;
  }

  .header-details ul {
    display: none;
  }
  .header-details h1 {
    font-size: 1.5rem;
    padding: 15vh 0 0;
    margin: 0 !important;
    z-index: 3 !important;
  }
}
</style>