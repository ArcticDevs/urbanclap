<template>
  <div class="header">
    <section>
    <div class="container">
      <div class="header-nav">
        <b-navbar toggleable="xl">
          <b-navbar-brand href="#" class="text-white">
            <img src="/img/logo_light.png" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <!-- <b-collapse id="nav-collapse" is-nav> -->
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto nav-items">
              <b-nav-item href="#">Blog</b-nav-item>
              <b-nav-item href="#"
                ><u>Register As A Professional</u></b-nav-item
              >
              <b-nav-item href="#">Login / Sign Up</b-nav-item>
            </b-navbar-nav>
          <!-- </b-collapse> -->
        </b-navbar>
      </div>

      <div id="page-address">HOME / Delhi-Ncr</div>
      <div id="logo"><img src="/img/logo_light.png" /></div>
      <h1>Home services, on demand.</h1>
      <div id="search">
        <div class="d-inline-block dropdown">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div class="d-inline-block dropdown-search">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div id="search-subtext">
        <p><u>Massage For Men</u></p>, <p><u>Pest Control</u></p>, <p><u>Makeup & Hairstyling etc</u></p>
        </div>
      </div>
    </div>
    <div class="bg"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
section{
  height:500px;
  position: relative;
  color:#fff;
}
.bg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url("/img/Header.jpeg") center no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
}

.navbar .navbar-brand img {
  width: 290px;
}

.navbar a.nav-link {
  color: #fff !important;
  padding: 0;
  margin-right: 25px;
}

#page-address {
  position: inherit;
  margin: auto;
  color: #fff;
  font-size: 0.7rem;
  width: auto;
  margin-top: 15vh;
}

#logo{
  display:none;
}

#logo img{
   width: 200px;
}

h1 {
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
}

.dropdown {
  height: 53px;
  width: 180px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  vertical-align: sub;
  margin-right:30px;
}

select {
  border: none;
  outline: 0;
  height: 90%;
  width: 90%;
}
.dropdown-search {
  height: 53px;
  width: 580px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  vertical-align: sub;
}

#search #search-subtext{
margin-top:10px;
}

#search-subtext p{
  display:inline-block;
  font-size:15px;
}
@media (max-width: 1200px) {
  section{
height:350px;
  }

  .bg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url("/img/Header.jpeg") center no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
  }
  .navbar {
    display: none;
  }
  #page-address {
    display: none;
  }
  #logo{
    display:block;
       position:absolute;
    bottom:140px;
      left:40%;
    right:60%;
    transform: translate(-40%,-60%);
  }
  h1 {
    font-size: 20px;
    /* margin:0; */
    min-width:100%;
    position:absolute;
    bottom:50px;
    left:50%;
    right:50%;
    transform: translate(-50%,-50%);
  }
  #search{
    position:absolute;
    bottom:20px;
    left:0;
    width:100%;
  }
  #search-subtext{
    display:none;
  }
  .dropdown{
margin-right:1px;
border-radius:0;
width:18%;
  }

  .dropdown-search{
border-radius:0;
width:76%;

  }
}
</style>
