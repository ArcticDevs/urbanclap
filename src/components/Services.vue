<template>
  <div class="container service">
    <div id="flexbox">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="flex-item"
        v-if="service.category_services.length != 0"
      >
        <router-link v-if="service.category_services.length == 1" :to="'/service'+service.category_services[0].url">
        <div class="service_link">
          <img :src="service.icon_path" alt="" class="mt-2 mb-2" />
          <p>{{ service.name }}</p>
          </div>
        </router-link>

        <button v-if="service.category_services.length > 1">
          <span v-b-toggle.sidebar-right>
          <img :src="service.icon_path" alt="" class="mt-2 mb-2" />
          <p>{{ service.name }}</p>
          </span>
        </button>
      </div>

      <b-sidebar
        id="sidebar-right"
        title="Profesional Cleaning Services"
        right
        shadow
        backdrop
      >
        Profesional Cleaning Services
        <div class="px-1 py-2">
          <ul class="list-group mt-3">
            <a href="#">
              <li class="list-group-item hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> Office and
                Shop Desinfection
                <i class="float-right fa fa-chevron-right pt-2"></i>
              </li>
            </a>
            <a href="#">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" />
                Professional Full House Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i>
              </li>
            </a>
            <a href="#">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" /> Car Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i>
              </li>
            </a>
            <a href="#">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" />
                Professional Bathroom CLeaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="#">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> Profesional
                Kitchen Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="#">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" />
                Professional Carpet Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> Profesional
                Sofa Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="">
              <li class="list-group-item box hover" >
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> House & Car
                Disinfection
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
          </ul>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    var self = this;
    axios
      .get("http://fixorie.herokuapp.com/fo/service_categories")
      .then(function (response) {
        self.services = response.data;
      });
  },
};
</script>
<style scoped>
.service {
  background: #fff !important;
  position: relative;
  top: -60px;
  z-index: 5 !important;
}

#flexbox {
  padding: 25px 5vw 25px 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 13px;
}

.flex-item {
  width: 15%;
  margin-top: 10px;
  margin-right: 10px;

  height: 90px;
  text-decoration: none;
  color: #212121;
}

.flex-item p {
  margin: 0;
  color: #000;
}

.flex-item p:hover{
  text-decoration: underline;
}

.flex-item:hover {
  background: #f5f5f5;
}

.service_link{
  height:100%;
  width:100%;
}

img {
  height: 35px;
  width: 35px;
}

a .flex-item router-link:hover {
  background-color: #dddddd;
}

button, button:focus {
  background: transparent;
  border: 0;
  outline:none;
  height:100%;
  width:100%;
  padding:0;
  position:relative;
}

button span{
position:absolute;
top:0;
left:0;
width:100%;
}

#sidebar-right{
  z-index:50;
}

.hover {
  border: 1px solid grey;
  background: transparent;
  text-decoration: none;
  color: #757575 !important;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  text-align: left;
}
.hover a {
  text-decoration: none;
}
.hover:hover {
  background: #bdbdbd;
}

.container {
  background: #fff;
  box-shadow: 0px 0px 15px -5px rgb(96, 95, 95);
  border-radius: 5px;
}
@media (max-width: 1200px) {
  .container {
    box-shadow: none;
  }
  img {
    height: 25px;
    width: 25px;
  }
  .flex-item {
    width: 25%;
    margin-top: 10px;
  }
  #flexbox {
    padding: 20px 2vw 20px 2vw;
  }

  .service {
    top: 0;
  }
}
</style>
