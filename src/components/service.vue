<template>
  <div class="container service">
    <div id="flexbox">
      <div class="flex-item">
        <router-link to="/FirstMod" id="box">
          <img src="/haircut.png" alt="" class="mt-2 mb-2" />
          <p>Hair Cut at home</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/salon.png" alt="" class="mt-2 mb-2" />
          <p>Salon At Home</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/cleaning.png" alt="" class="mt-2 mb-2" />
          <p>Cleaning & Disinfection</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/repair.png" alt="" class="mt-2 mb-2" />
          <p>Appliance Repair</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/paint.png" alt="" class="mt-2 mb-2" />
          <p>Painter</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/electrician.png" alt="" class="mt-2 mb-2" />
          <p>Eletricians</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/plumber.png" alt="" class="mt-2 mb-2" />
          <p>Plumbers</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/carpenter.png" alt="" class="mt-2 mb-2" />
          <p>Capenters</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/massegeMen.png" alt="" class="mt-2 mb-2" />
          <p>Massage For Men</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/pest.png" alt="" class="mt-2 mb-2" />
          <p>Pest Control</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/massegeW.png" alt="" class="mt-2 mb-2" />
          <p>Massage For Women</p>
        </router-link>
      </div>
      <div class="flex-item">
        <router-link to="/" id="box">
          <img src="/geyser.png" alt="" class="mt-2 mb-2" />
          <p>Geyser Service</p>
        </router-link>
      </div>
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
  top: -50px;
  z-index: 2 !important;
}

#flexbox {
  padding: 20px 5vw 20px 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.flex-item {
  width: 15%;
  margin-top: 20px;
  margin-right: 10px;
}

img {
  height: 25px;
  width: 25px;
}

#box {
  height: 90px;
  text-decoration: none;
  color: #212121;
}
a #box router-link:hover {
  background-color: #dddddd;
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