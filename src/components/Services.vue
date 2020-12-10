<template>
  <div class="container service">
    <div id="flexbox">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="flex-item"
        v-if="service.category_services.length != 0"
      >
        <router-link
          v-if="service.category_services.length == 1"
          :to="'/service' + service.category_services[0].url"
        >
          <div class="service_link">
            <img :src="service.icon_path" alt="" class="mt-2 mb-2" />
            <p>{{ service.name }}</p>
          </div>
        </router-link>

        <button v-if="service.category_services.length > 1" @click="selected_service_category_index = index">
          <span @click="ModelOpenStatus = true">
            <img :src="service.icon_path" alt="" class="mt-2 mb-2" />
            <p>{{ service.name }}</p>
          </span>
        </button>
      </div>

      <b-sidebar 
      v-model="ModelOpenStatus" 
      right 
      shadow 
      backdrop
      :title="services[selected_service_category_index].name" 
      v-if="selected_service_category_index != -1">
        <div class="">
          <ul class="list-group mt-3">
            <li
              class="list-group-item"
              v-for="(sidebar_service, service_index) in services[selected_service_category_index].category_services"
              :key="service_index"
            >
              <router-link
                :to="'/service' + sidebar_service.url"
                class="hover row"
              >
                <div class="service_icon col-3">
                  <img :src="sidebar_service.bg_img_path" />
                </div>
                <div class="sidebar_service col-7">
                  {{ sidebar_service.name }}
                </div>
                <div class="col-1">
                  <i class="fa fa-chevron-right"></i>
                </div>
              </router-link>
            </li>
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
      ModelOpenStatus: false,
      selected_service_category_index:-1
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

.flex-item a{
  text-decoration: none !important;
}

.flex-item:hover {
  background: #f5f5f5;
}

.service_link {
  height: 100%;
  width: 100%;
}

img {
  height: 35px;
  width: 35px;
}

a .flex-item router-link:hover {
  background-color: #dddddd;
}

button,
button:focus {
  background: transparent;
  border: 0;
  outline: none;
  height: 100%;
  width: 100%;
  padding: 0;
  position: relative;
}

button span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.b-sidebar-outer {
  z-index: 100 !important;
}

.b-sidebar-header .close {
  font-size:25px !important;
}

.list-group-item{
  padding:0 !important;
  padding-left:10px !important;
}

.hover {
  background: transparent;
  text-decoration: none;
  color: #757575 !important;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  text-align: left;
  margin-right:0 !important;
  margin-left:0 !important;

}

.list-group-item:hover {
  background: #F2F2F2;
}

.col-7 {
  justify-content: center;
  align-items: center;
  height: 60px;
}

.col-1 svg {
  display: inline !important;
  line-height: 60px !important;
  height: 60px !important;
}

.service_icon {
  cursor: pointer;
  display: inline-block;
}

.sidebar_service{
font-size: 14px;
color:#000;
}

.service_icon img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  /* margin-right: 16px; */
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
