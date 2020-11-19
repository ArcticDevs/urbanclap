<template>
  <div class="container service">
    <div id="flexbox">
      <router-link to="/haircut" id="box" class="flex-item">
        <img src="/haircut.png" alt="" class="mt-2 mb-2" />
        <p>Haircut At home</p>
      </router-link>

      <router-link to="/salon-at-home" id="box" class="flex-item">
        <img src="/salon.png" alt="" class="mt-2 mb-2" />
        <p>Salon At Home</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item" v-b-toggle.sidebar-right>
        <img src="/cleaning.png" alt="" class="mt-2 mb-2" />
        <p>Cleaning & Disinfection</p>
      </router-link>

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
              <li class="list-group-item" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> Office and
                Shop Desinfection
                <i class="float-right fa fa-chevron-right pt-2"></i>
              </li>
            </a>
            <a href="#">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" />
                Professional Full House Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i>
              </li>
            </a>
            <a href="#">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" /> Car Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i>
              </li>
            </a>
            <a href="#">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" />
                Professional Bathroom CLeaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="#">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> Profesional
                Kitchen Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="#">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" />
                Professional Carpet Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> Profesional
                Sofa Cleaning
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
            <a href="">
              <li class="list-group-item box" id="hover">
                <img src="cnd1.png" alt="" srcset="" id="imgSize" /> House & Car
                Disinfection
                <i class="float-right fa fa-chevron-right pt-2"></i></li
            ></a>
          </ul>
        </div>
      </b-sidebar>

      <router-link to="/" id="box" class="flex-item">
        <img src="/repair.png" alt="" class="mt-2 mb-2" />
        <p>Appliance Repair</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/paint.png" alt="" class="mt-2 mb-2" />
        <p>Painter</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/electrician.png" alt="" class="mt-2 mb-2" />
        <p>Eletricians</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/plumber.png" alt="" class="mt-2 mb-2" />
        <p>Plumbers</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/carpenter.png" alt="" class="mt-2 mb-2" />
        <p>Carpenters</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/massegeMen.png" alt="" class="mt-2 mb-2" />
        <p>Massage For Men</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/pest.png" alt="" class="mt-2 mb-2" />
        <p>Pest Control</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/massegeW.png" alt="" class="mt-2 mb-2" />
        <p>Massage For Women</p>
      </router-link>

      <router-link to="/" id="box" class="flex-item">
        <img src="/geyser.png" alt="" class="mt-2 mb-2" />
        <p>Geyser Service</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.service {
  background: #fff !important;
  position: relative;
  top: -120px;
  z-index: 2 !important;
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
}

.flex-item p {
  margin: 0;
}

.flex-item:hover {
  background: #f5f5f5;
}

img {
  height: 35px;
  width: 35px;
}

#box {
  height: 90px;
  text-decoration: none;
  color: #212121;
}
a #box router-link:hover {
  background-color: #dddddd;
}

#hover {
  border: 1px solid grey;
  background: transparent;
  text-decoration: none;
  color: #757575 !important;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  text-align: left;
  
}
#hover a {
  text-decoration: none;
}
#hover:hover {
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