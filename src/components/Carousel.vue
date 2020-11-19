  <template>
  <div id="strip">
    
    <div class="container">
      <VueSlickCarousel
        :arrows="true"
        :infinite="true"
        :speed="500"
        :slidesToShow="3"
        :slidesToScroll="1"
        :swipeToSlide="true"
      >
        <img src="/off1.png">
        <img src="/off1.png">
        <img src="/off1.png">
        <img src="/off1.png">
      </VueSlickCarousel>
    </div>
  </div>
</template>

    <script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#strip {
  background: #fff;
  padding-top: 40px;
  padding-bottom: 70px;
}
</style>
<style>

button.slick-prev:before, button.slick-next:before {
     color: #000 !important;
      /* max-width:50px;
      max-height:50px;
      width:5vw !important;
      height:5vw !important;
      box-shadow: 0px 0px 5px #000;
      border-radius:35px;
      display:flex;
      justify-content: center;
      align-items: center; */
    
     /* display:none; */
     
}

.slick-slide img{
    padding-left:25px;
}
</style>