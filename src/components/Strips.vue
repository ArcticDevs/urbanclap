  <template>
  <div id="strip">
    <div
      class="container pt-5 pb-5"
      v-if="
        section.section_type === 'services' ||
        section.section_type === 'reviews'
      "
    >
      <div class="row">
        <!-- Service type -->
        <div
          class="service col-lg-3 col-xl-3 col-md-6 col-sm-6 col-6"
          v-if="section.section_type == 'services'"
          v-for="service in section.home_section_services.slice(0, 4)"
          :key="service.id"
        >
          <div>
            <div class="img-wrapper">
              <router-link :to="'/service' + service.service.url"
                ><img :src="service.bg_img_path" alt="" class="photo"
              /></router-link>
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
        <button class="view_all_options" @click="ModelOpenStatus = true">
          View All Services
        </button>

        <b-sidebar v-model="ModelOpenStatus" right shadow backdrop>
          <div class="py-2">
            <ul class="list-group mt-3">
              <li
                class="list-group-item"
                v-for="(
                  service, service_index
                ) in section.home_section_services"
                :key="service_index"
              >
                <router-link :to="'/service'+service.service.url" class="hover row">
                  <div class="service_icon col-3">
                    <img :src="service.bg_img_path" />
                  </div>
                  <div class="sidebar_service col-7">
                    {{ service.service.name }}
                  </div>
                  <div class="col-1">
                    <i class="fa fa-chevron-right"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </b-sidebar>
      </div>

      <!-- review type -->
      <div class="review" v-if="section.section_type == 'reviews'">
        <Carousel :items="section.home_section_reviews" cid="reviewscopedid" />
      </div>
    </div>
    <!-- Poster type -->
    <div class="poster" v-if="section.section_type == 'poster'">
      <img :src="section.poster_img_path" />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  data(){
    return{
      ModelOpenStatus:false,
    }
  },
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

.poster {
  width: 100%;
  overflow: hidden;
}

.poster img {
  max-width: 100%;
  max-height: 100%;
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
    height: 60px;
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
  object-fit: cover;
}

.view_all_options{
  display: none;
}

@media(max-width:1200px){
.view_all_options {
  display:block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(200, 208, 255);
  color: rgb(48, 79, 254);
  background-color: rgb(247, 248, 255);
  margin: 0 10px;
}
}
.list-group-item{
  padding:0 !important;
  padding-left:10px !important;
}

.hover {
  background: transparent;
  text-decoration: none;
  color: #757575 !important;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  text-align: left;
  margin-right:0 !important;
  margin-left:0 !important;

}

.list-group-item:hover {
  background: #F2F2F2;
}

.col-7 {
  justify-content: center;
  align-items: center;
  height: 60px;
  line-height: 60px;
}

.col-1 svg {
  display: inline !important;
  line-height: 60px !important;
  height: 60px !important;
}

.service_icon {
  cursor: pointer;
  display: inline-block;
}

.sidebar_service{
font-size: 14px;
color:#000;
}

.service_icon img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  /* margin-right: 16px; */
}

.service_icon {
  cursor: pointer;
  display: inline-block;
}

.service_icon img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}
</style>