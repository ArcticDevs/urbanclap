<template>
  <div class="header">
    <section>
      <div class="bg">
        <div id="logo"><img src="/img/logo_light.png" /></div>
      </div>
      <div class="mob-bg-bottom">
        <div class="container">
          <div id="page-address">
            <b-breadcrumb>
              <b-breadcrumb-item href="#">Home</b-breadcrumb-item>
              <b-breadcrumb-item href="#">Delhi NCR</b-breadcrumb-item>
            </b-breadcrumb>
          </div>
          <h1>Home services, on demand.</h1>
          <div id="search" class="row">
            <div class="dropdown col-5 col-sm-3">
              <select name="cities" id="cities">
                <option value="saab">Delhi NCR</option>
                <option value="volvo">Ahmedabad</option>
                <option value="mercedes">Jodhpur</option>
                <option value="audi">Rajkot</option>
              </select>
            </div>
            <div class="search-form col-7 col-sm-9">
              <div class="search-container row">
                <div class="row">
                  <div class="col-2 col-sm-1 p-0">
                    <i class="fa fa-search"></i>
                  </div>
                  <div class="col-8 col-sm-10">
                    <input
                      type="text"
                      v-model="searchField"
                      placeholder="Search for a service"
                    />
                  </div>
                  <div class="col-2 col-sm-1 p-0">
                    <i
                      class="fa fa-times-circle"
                      v-if="searchField.length > 2"
                      @click="searchField = ''"
                    ></i>
                  </div>
                </div>
              </div>
              <br />
              <span class="example-div">
                <router-link to="/service/delhi-ncr-carpenters">
                  Carpenters</router-link
                >,
                <router-link to="/service/delhi-ncr-massage-for-men">
                  Massage For Men</router-link
                >,
                <router-link to="/service/delhi-ncr-spa-at-home">
                  Spa
                </router-link>
                etc
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchField: "",
    };
  },
};
</script>

<style scoped>
* {
  z-index: 1;
}
section {
  height: 600px;
  position: relative;
  color: #fff;
  padding-top: 25vh;
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

.mob-bg-bottom {
  height: 40%;
}

#page-address {
  position: inherit;
  margin: auto;
  color: #fff;
  font-size: 0.7rem;
  width: auto;
}

.breadcrumb {
  background: transparent;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.breadcrumb-item a,
.breadcrumb-item.active {
  color: #ddd !important;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: #fff;
}
#logo {
  display: none;
  width: 100px;
}

#logo img {
  width: 100%;
}

h1 {
  color: #fff;
  font-size: 55px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
}

#search {
  width: 65%;
  margin: auto;
  height: 100%;
}

.dropdown {
  height: 54px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  margin-bottom: 10px;
}
.dropdown.col-3 {
  padding: 0;
}

select {
  border: none;
  outline: 0;
  height: 100%;
  width: 100%;
  padding: 10px 0;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
  background-image: url("/caret-down-solid.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
  background-size: 15px;
}
.search-form {
  display: block;
  text-align: center;
}


.search-container {
  display: inline-block;
  border-radius: 4px;
  height: 54px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: #fff;
}

.search-form .search-container .row {
  padding-right: 15px;
  padding-left: 15px;
  height: 100%;
}
.search-form .search-container .row .fa-search {
  font-size: 18px;
  font-weight: 100;
  line-height: 100%;
  margin-left: 15px;
  height: 100%;
  width: 18px;
  color: rgb(68, 67, 67);
}
.search-form .search-container .row input {
  outline: none;
  border: 0;
  font-size: 16px;
  height: 100%;
  width: 100%;
}
.search-form .search-container .row .fa-times-circle {
  font-size: 18px;
  font-weight: 100;
  line-height: 100%;
  margin-right: 15px;
  cursor: pointer;
  height: 100%;
  width: 20px;
  color: rgb(68, 67, 67);
}

.example-div {
  display: inline-block;
  width: 700px;
  text-align: left;
  color: white;
  padding-top: 10px;
}
.example-div a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  border-bottom: 1px solid white;
  margin-left: 5px;
  padding-bottom: 2px;
}

@media (max-width: 1200px) {
  section {
    height: 350px;
    background-color: #000;
  }

  .bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
      url("/img/Header.jpeg") center no-repeat;
    background-size: cover;
    height: 60%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    z-index: -1;
  }

  .mob-bg-bottom {
    height: 40%;
    width: 100%;
    padding-top: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .example-div {
    display: none;
  }

  .dropdown {
    border-radius: 4px 0 0 4px;
    border: 1px solid #e2e2e2;
    padding: 0 !important;
  }

  .search-container {
    border-radius: 0 4px 4px 0;
    border: 1px solid #e2e2e2;
  }

  .navbar {
    display: none;
  }
  #page-address {
    display: none;
  }
  #logo {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 20px;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  #search {
    width: 100%;
  }

  .search-form {
    padding: 0 !important;
  }
}
</style>
