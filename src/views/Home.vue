<template>
  <div class="home">
    <div id="header">
      <Header />
    </div>
    <div id="offers"></div>
    <div id="service">
      <Service />
      <Promoted />
    </div>

    <div class="strip" v-for="section in sections" :key="section.id">
      <h1><b>{{section.title}}</b></h1>
      <p>{{section.subtitle}}</p>
      <Strip />
    </div>
    
    <div id="insurance1"></div>
    <div id="insurance2"></div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Service from "@/components/service.vue";
import Strip from "@/components/Strips.vue";
import Carousel from "@/components/Carousel.vue";
import Promoted from "@/components/Promoted.vue";
import axios from 'axios';
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Service,
    Strip,
    Carousel,
    Promoted
  },
  data() {
    return {
      sections: [],
    };
  },
  mounted(){
     var self = this;
    axios
      .get("http://fixorie.herokuapp.com/fo/home_sections")
      .then(function (response) {
        self.sections = response.data;
      });
  }
};
</script>

<style scoped>
.home {
  position: relative;
  background: #f2f4f6;
}

#header {
  position: relative;
}

#service {
  position: relative;
  background: #fff;
  margin-bottom: 25px;
  padding-bottom:5vh;
}

#carousel {
  background: #fff;
  margin-top: 25px;
  padding-top: 8vh;
}
.strip {
  position: relative;
  background: #fff;
  margin-top: 25px;
  padding-top: 8vh;
}

#insurance1 {
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  background: #fff url("/insurance.png") center no-repeat;
  background-size: contain;
}

#insurance2 {
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  background: #fff url("/proudpatner.png") center no-repeat;
  background-size: contain;
}

@media (max-width: 1200px) {
  #service {
    top: 0;
  }
}
</style>

