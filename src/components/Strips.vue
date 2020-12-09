  <template>
  <div id="strip">
    <div class="container pt-5 pb-5" v-if="section.section_type==='services' || section.section_type==='reviews'">
      <div class="row">
        <!-- Service type -->
        <div
          class="service col-lg-3 col-xl-3 col-md-6 col-sm-6 col-6"
          v-if="section.section_type === 'services'"
          v-for="service in section.home_section_services"
          :key="service.id"
        >
          <div>
            <div class="img-wrapper">
              <img :src="service.bg_img_path" alt="" class="photo" />
            </div>
            <div class="subt">
              <h6 class="subtextMain">
                {{ service.title }} <br />
                <span class="subtext">
                  {{ service.subtitle }}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <!-- review type -->
      <div class="review" v-if="section.section_type === 'reviews'">
        <Carousel :items="section.home_section_reviews" cid="reviewscopedid"/>
      </div>
</div>
      <!-- Poster type -->
      <div class="poster" v-if="section.section_type === 'poster'">
        <img :src="section.poster_img_path">
      </div>
    
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  props: {
    section: {},
  },
  components: {
    Carousel,
  },
};
</script>

<style scoped>
#strip {
  background: #fff;
}

.poster{
  width:100%;
  /* height:18vh; */
  overflow:hidden;
}

.poster img{
  width:100%;
  height:100%;
}
@media(max-width:600px){
  .poster img{
    width:160%;
    margin-left:-30%;
  }
}

.photo:hover {
  transition: 0.3s ease-out;
  transform: scale(1.05);
}
#flexbox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.subt {
  height: 5vh;
}

@media (max-width: 1200px) {
  .subt {
    height: 18vh;
  }
}

.subtext {
  font-size: 0.7rem;
}
.subtextMain {
  font-size: 0.8rem;
  padding-top: 10px;
}

.img-wrapper {
  height: 18vh;
  width: 100%;
}

.img-wrapper img {
  height: 100%;
  width: 100%;
  border-radius: 4px;
}
</style>