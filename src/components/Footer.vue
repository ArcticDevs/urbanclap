<template>
  <div class="footer container-fluid">
    <div class="container">
      <div id="linksContainer">
        <router-link to="/" id="links"> About Us </router-link>
        <router-link to="/" id="links"> Terms & condition </router-link>
        <router-link to="/" id="links"> Privacy Policy </router-link>
        <router-link to="/" id="links"> Blog </router-link>
        <router-link to="/" id="links">Reviews </router-link>
        <router-link to="/" id="links"> Near Me </router-link>
        <router-link to="/" id="links"> Careers </router-link>
        <router-link to="/" id="links">Gift Cards </router-link>
        <router-link to="/" id="links"> Contact Us </router-link>
      </div>
      <div id="Servein">
        <p class="text-white">Serving In</p>
        <p class="text-white">AUS</p>
        <router-link to="/" id="links" > Sydney </router-link>

        <p class="text-white mt-3 ">IND</p>
        <div id="linksContainerIND">
          <router-link to="/"> <p>Ahmedabad</p></router-link>
          <router-link to="/"> <p>Bangolore</p></router-link>
          <router-link to="/"> <p>Chennai</p></router-link>
          <router-link to="/"> <p>Delhi NCR</p> </router-link>
          <router-link to="/"> <p>Chandigarh Tricity</p></router-link>
          <router-link to="/"> <p>Jaipur</p></router-link>
          <router-link to="/"> <p>Hydrabad</p></router-link>
          <router-link to="/"> <p>Kolkata</p></router-link>
          <router-link to="/"> <p>Mumbai</p> </router-link>
          <router-link to="/"> <p>Pune</p></router-link>
          <router-link to="/"> <p>Nagpur</p></router-link>
          <router-link to="/"> <p>Ludhiana</p></router-link>
          <router-link to="/"> <p>Vishakhapatnam</p> </router-link>
          <router-link to="/"> <p>Vadodra</p> </router-link>
          <router-link to="/"> <p>Lucknow</p> </router-link>
          <router-link to="/"> <p>Bhubaneswar</p> </router-link>
          <router-link to="/"><p>Surat</p></router-link>
          <router-link to="/"><p>Indore</p></router-link>
        </div>
        <div class="d-inline-block">
          <p class="text-white ">UAE</p>
          <div id="linksContainerIND">
            <router-link to="/"> <p>Dubai</p></router-link>
            <router-link to="/"> <p>Abu Dhabi</p></router-link>
          </div>
        </div>

          <div class="d-inline-block ml-sm-4 ml-md-4 ml-lg-4 ml-xl-4">
          <p class="text-white ">SGP</p>
          <div id="linksContainerIND">
            <router-link to="/"> <p>Sydney</p></router-link>
      
          </div>
        </div>
      </div>
      <div class=" footer-end">
      <div class="d-inline-block text-white w-auto" >
        <div class="d-inline-block text-white w-auto" >
         <img src="/logo_light.png" alt="" srcset="" id="logo" > 
        </div>
        <div class="d-inline-block text-white w-auto ml-4" >
        <span style="font-size:12px; color:#cdcdcd"> ©2020 Fixorie India</span>
        </div>
      </div>
      
      <div class="d-inline-block w-auto mx-auto">
       <i class="fab fa-twitter mr-2 text-white "></i>
       <i class="fab fa-facebook-square mr-2 text-white "></i>
       <i class="fab fa-instagram mr-2 text-white "></i>
       <i class="fab fa-youtube mr-2 text-white "></i>
       <i class="fab fa-linkedin mr-2 text-white "></i>
       <i class="fab fa-pinterest-p mr-2 text-white "></i>
      </div>
      
      <div class="d-inline-block w-auto">
        <img src="/googleplay.png" alt="" srcset="" id="store">
        <img src="/appstore.png" alt="" srcset="" id="store">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  background-color: #000;
  z-index:5;
}

#links {
  color: grey;
  text-decoration: none;
  margin-right: 20px;
}
#linksContainer {
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 0.5px solid white;
}

#linksContainerIND > * {
  text-align: left;
  color: white;
  margin-right: 25px;
  text-decoration: none;
  display: inline-block;
}

#Servein {
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 0.5px solid white;
}
#logo{
  width: 80px;
  height: 60px;
}
#store{
   width: 125px;
  height: 40px;
}
*{
  color: rgb(128, 117, 117);
}
.footer-end{
  padding-top: 25px;
  padding-bottom: 25px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;

}
</style>
