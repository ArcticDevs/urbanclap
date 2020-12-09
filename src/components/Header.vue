<template>
  <div class="header">
    <section>
      <div class="bg"></div>
<div class="mob-bg-bottom">
      <div class="container">
        <div id="page-address">
          <b-breadcrumb>
            <b-breadcrumb-item href="#"> Home </b-breadcrumb-item>
            <b-breadcrumb-item href="#">Ahmedabad</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
        <div id="logo"><img src="/img/logo_light.png" /></div>
        <h1>Home services, on demand.</h1>
        <div id="search" class="row">
          <div class="dropdown col-3">
            <select name="cars" id="cars">
              <option value="volvo">Ahmedabad</option>
              <option value="saab">Delhi nCR</option>
              <option value="mercedes">Jodhpur</option>
              <option value="audi">Rajkot</option>
            </select>
          </div>
          <div class="search-form col-9">
            <div class="search-container row">
              <div class="row">
                <div class="col-1 p-0"><i class="fa fa-search"></i></div>
                <div class="col-10">
                  <input
                    type="text"
                    v-model="searchField"
                    placeholder="Search for a service"
                  />
                </div>
                <div class="col-1 p-0">
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
              <a href="#"> Carpenters</a>, <a href="#"> Massage For Men</a>,
              <a href="#"> Pest Control</a>
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
}

#logo img {
  width: 100px;
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
  padding: 10px;
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
  margin-right: 10px;
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

  .example-div {
    display: none;
  }

  .dropdown {
    border-radius: 4px 0 0 4px;
    border: 1px solid #e2e2e2;
  }

  .search-container {
    border-radius: 0 4px 4px 0;
    border: 1px solid #e2e2e2;
  }

  .col-9 {
    padding-left: 0;
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
    bottom: 140px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 20px;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  #search {
    width: 100%;
  }
}
</style>
