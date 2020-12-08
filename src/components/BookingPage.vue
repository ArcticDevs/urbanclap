<template>
  <div>
    <navbar />    
    <div class="container mt-5">
        <h4 class="text-center">My Bookings</h4>
        <div class="text-center container mt-5">
                <span class="button active">  Bookings</span>
                <span class="button" >History</span>

        </div>
        <div class="container mt-5 mb-5">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
        <div class="container">
             <span class="btn">Book A Service</span>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar_dark.vue'
export default {
  components: { Navbar },
    mounted(){
        $(document).ready(function(){
            $('.button').click(function(){
            $('.button').removeClass("activeButton");
            $(this).addClass("active");
});
});
    }
}
</script>

<style>
.button{
    height: 48px;
    width: 148px;
    text-align: center;
    border: 1px solid black;
    border-radius:0px ;
    padding:10px;
    cursor: pointer;
}
.btn{
    height: 48px;
    width: 148px;
    text-align: center;
    border: 1px solid black;
    border-radius:0px ;
         color: white;
    background-color: #000;
    padding: 10px 10px;
}
.btn:hover{
    color: white;
}
.activeButton{
     color: white;
    background-color: #000;
}
</style>