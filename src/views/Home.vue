<template>
  <div class="home">
    <div id="navbar">
      <Navbar />
    </div>
    <div id="nav_bottom">
      <NavbarBottom selectedMenu="home" />
    </div>
    <div id="header">
      <Header />
    </div>
    <div id="offers"></div>
    <div id="service">
      <Service />
    </div>
    <div class="promoted">
      <Promoted />
    </div>

    <div class="strip" v-for="section in sections" :key="section.id">
      <div
        v-if="
          section.section_type === 'services' ||
          section.section_type === 'reviews'
        "
      >
        <h1>
          <b>{{ section.title }}</b>
        </h1>
        <p>{{ section.subtitle }}</p>
      </div>
      <Strip :section="section" />
    </div>

    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Service from "@/components/Services.vue";
import Strip from "@/components/Strips.vue";
import Carousel from "@/components/Carousel.vue";
import Promoted from "@/components/Promoted.vue";
import Navbar from "@/components/Navbar.vue";
import NavbarBottom from "@/components/Navbar_bottom.vue";

import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Service,
    Strip,
    Carousel,
    Promoted,
    Navbar,
    NavbarBottom,
  },
  data() {
    return {
      sections: [],
    };
  },
  mounted() {
    var self = this;
    axios
      .get("http://fixorie.herokuapp.com/fo/home_sections")
      .then(function (response) {
        self.sections = response.data;
      });
  },
};
</script>

<style scoped>
.home {
  position: relative;
  background: #f2f4f6;
}

#header {
  position: relative;
  z-index:0;
}

#service {
  background: #fff;
  z-index: 5 !important;
}

#navbar {
  position: absolute;
  top: 0;
  z-index: 6;
  width: 100%;
}

#nav_bottom{
  display:none;
}

@media (max-width: 1200px) {
  #navbar {
    display: none;
  }
  #nav_bottom{
    display:block;
  }
}

.promoted {
  position: relative;
  background: #fff;
  margin-bottom: 25px;
  padding-bottom: 5vh;
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
}

.strip h1 {
  padding-top: 5vh;
  font-size: 2rem;
}

#insurance1 {
  margin-top: 20px;
  width: 100%;
  height: 20vh;
}

#insurance2 {
  margin-top: 20px;
  width: 100%;
  height: 20vh;
}

@media (max-width: 1200px) {
  #service {
    top: 0;
  }
}
</style>

