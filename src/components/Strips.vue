  <template>
  <div class="mt-3" id="strip">

    <div class="container mt-4">
      <div class="row">
        <div class="service col-lg-3 col-xl-3 col-md-6 col-sm-6 col-6">
         <div class="img-wrapper"> <img src="/bfp1.png" alt="" id="photo"> </div>
          <h6 id="subtextMain">
            Salon At Home For Women <br>
            <span id="subtext"> Up to 60% off </span>
          </h6>
        </div>
        <div class="service col-lg-3 col-xl-3 col-md-6 col-sm-6 col-6">
          <div class="img-wrapper"> <img src="/bfp2.png" alt="" id="photo"></div>
          <h6 id="subtextMain">
            Professional Bathroom Cleaning <br>
            <span id="subtext">Up to 50% off</span>
          </h6>
        </div>
        <div class="service col-lg-3 col-xl-3 col-md-6 col-sm-6 col-6">
          <div class="img-wrapper"> <img src="/bfp3.png" alt="" id="photo"></div>
          <h6 id="subtextMain">
            Massege Therapy For Women<br>
            <span id="subtext">Up to 40% off</span>
          </h6>
        </div>
        <div class="service col-lg-3 col-xl-3 col-md-6 col-sm-6 col-6">
          <div class="img-wrapper"> <img src="/bfp4.png" alt="" id="photo"></div>
          <h6 id="subtextMain">
            Haircut At Home <br>
            <span id="subtext">Free Head Massege</span>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {};
</script>

<style scoped>

#photo:hover {
  transition: 0.3s ease-out;
  transform: scale(1.05);
}
#flexbox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

#subtext {
  font-size: 12px;
}
#subtextMain {
  font-size: 14px;
  padding-top: 10px;
}
#strip{
  background:#fff;
  padding-top: 40px;
  padding-bottom: 70px;
}

.img-wrapper{
  height:70%;
  width:100%;
}

.img-wrapper img{
   height:100%;
  width:100%;
  border-radius: 4px;
}
</style>