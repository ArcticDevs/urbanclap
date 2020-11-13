<template>
  <div>
    <div class="container-fluid " id="header">
      <h6>Men`s Haircut & Grooming</h6>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <ul class="list-group mt-3">
            <a href="#">
              <li class="list-group-item   float-right" id="hover">
                Diwali Sale Specials
              </li></a
            >
            <a href="#">
              <li class="list-group-item   float-right" id="hover">
                Haircut For Men
              </li></a
            >
            <a href="#">
              <li class="list-group-item   float-right" id="hover">
                Kid`s Haircut
              </li></a
            >
            <a href="#">
              <li class="list-group-item   float-right" id="hover">
                Shave Beard & Moustache
              </li></a
            >
            <a href="#">
              <li class="list-group-item   float-right" id="hover">
                Hair color
              </li></a
            >
            <a href="#">
              <li class="list-group-item   float-right" id="hover">
                Head & Shoulder Message
              </li></a
            >
            <a href="">
              <li class="list-group-item   float-right" id="hover">
                Make Your Own Package
              </li></a
            >
          </ul>
        </div>

        <div class="col col-7">
          <!-- <div class="container">
            <b-card class="mb-2 mt-2 w-50 ">
              <iframe
                width="480"
                height="315"
                src="https://www.youtube.com/embed/MhlVFVSo-2Q"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <b-card-text>
                <div class="container">
                <div class="float-left">
                  <h6>Hair Cut</h6>
                  <p>Rs300</p>
                  <i class="mt-0">30 min</i>
                </div>
                <div class="float-right mt-4">
                  <button type="button" v-on:click="increase">+</button>
                  {{ counter }}
                  <button type="button" v-on:click="decrease">-</button>
                </div>     
                </div>
              </b-card-text>

                  <b-card-footer>This is a footer</b-card-footer>
            </b-card>
            
          </div> -->
          <!-- <div>
            <div class="container d-flex justify-content-left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MhlVFVSo-2Q"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>

            <button type="button" v-on:click="increase">+</button>
            {{ counter }}
            <button type="button" v-on:click="decrease">-</button>
          </div> -->


<b-card
    no-body
    style="max-width:35rem;"
    class="container float-left mt-3 border"
  >

     <iframe
                width="480"
                height="315"
                src="https://www.youtube.com/embed/MhlVFVSo-2Q"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="mt-3 mx-auto"
              >
              </iframe>


    <b-card-body>
      <!-- <b-card-title>Card Title</b-card-title>
      <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
      <b-card-text>
          <div class="container">
                <div class="float-left">
                  <h6>Hair Cut</h6>
                  <p>Rs300</p>
                </div>
                <div class="float-right mt-4 " id="border">
                  <button type="button" v-on:click="increase" id="borderInr">+</button>
                  {{ counter }}
                  <button type="button" v-on:click="decrease" id="borderInl">-</button>
                </div>     
           </div>
      </b-card-text>
    </b-card-body>
    <hr>

    <b-card-body>
<p>sadsadsa</p>
    </b-card-body>
  </b-card>




          
        </div>
        <!-- <div class="col">
          sadasdasdasda
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    decrease: function() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
#header {
  background: grey;
  height: 70px;
}
h6 {
  padding-top: 17px;
}
#hover {
  border-radius: 5px;
  border: 1px solid grey;
  background: transparent;
  text-decoration: none;
  color: #757575 !important;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
}
button{
  text-decoration: none;
  border: 0;
  color: #304ffe;
  font-size: x-large;
  /* border-radius: 4px; */
  background: transparent;
}

.col {
  border-left: 1px solid grey;
}

a {
  /* width: 170px; */
  text-align: right;
  text-decoration: none;
  color: #757575 !important;
}

#hover:hover {
  background: #bdbdbd;
}
#hover:active {
  background: #000;
  color: #fff !important;
}
value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#border{
  border: 1px solid #304ffe;

}
#borderInr{
  border-right: 1px solid #304ffe;
}
#borderInl{
  border-left: 1px solid #304ffe;
}
</style>
