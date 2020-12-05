<template>
    <div id="promoted">
        <div>
            <Carousel :items="this.promoted_items">
                </Carousel>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import Carousel from "@/components/Carousel.vue";

export default {
  data() {
    return {
      promoted_items: [],
    };
  },
  components:{
      Carousel
  },
  mounted() {
    var self = this;
    axios
      .get("http://fixorie.herokuapp.com/fo/home_promoted")
      .then(function (response) {
        self.promoted_items = response.data;
      });
  },
};
</script>