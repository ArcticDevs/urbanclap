<template>
  <div class="home">
    <div id="header"><Header /></div>
    <div id="offers"></div>
    <div id="service"><Service /> <Carousel /></div>

    <div class="strip">
      <h1><b> Best Offers</b></h1>
      <p>Hygenic & Single-use products | Low-contact services</p>
      <Strip />
    </div>
    <div class="strip">
      <h1><b>Applicances: Service & Repair</b></h1>
      <p>Expert technicians at your doorstep in 2 hours</p>
      <Strip />
    </div>
    <div id="carousel">
      <h1><b>Customer safety is our priority</b></h1>
      <p>What customers are saying about our safety standards</p>

      <Carousel />
    </div>
    <div class="strip">
      <h1><b>Cleaning & Pest Control</b></h1>
      <p>Removes Hard stain And More</p>

      <Strip />
    </div>
    <div id="insurance1">
      <!-- <img src="insurance.png" class="container-fluid" id="photoApp" /> -->
    </div>
    <div id="insurance2">
      <!-- <img src="proudpatner.png" class="container-fluid" id="photoApp" /> -->
    </div>
    <div id="footer"><Footer /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Service from "@/components/service.vue";
import Strip from "@/components/Strips.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Service,
    Strip,
    Carousel,
  },
};
</script>

<style scoped>
.home {
  position: relative;
  background: #F2F4F6;
}

#header {
  position: relative;
}

#service {
  position: relative;
  height: auto;
  background: #fff;
  margin-bottom: 25px;

}

#carousel {
  background: #fff;
  margin-top: 25px;
    padding-top:8vh;

}
.strip {
  position:relative;
  background: #FFF;
  margin-top: 25px;
  padding-top:8vh;
}


#insurance1 {
  margin-top: 20px;
  width: 100%;
  height:20vh;
  background: #fff url('/insurance.png') center no-repeat;
  background-size:contain;
}

#insurance2 {
  margin-top: 20px;
  width: 100%;
  height:20vh;
  background: #fff url('/proudpatner.png') center no-repeat;
  background-size:contain;
}


@media (max-width: 1200px) {
  #service {
    top: 0;
  }
}
</style>