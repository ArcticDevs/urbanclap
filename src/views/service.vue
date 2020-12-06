<template>
  <div class="service">
    <SecondMod :data="service"/>
  </div>
</template>

<script>
import axios from "axios";
import SecondMod from "@/components/SecondMod.vue";
export default {
  components: {
    SecondMod,
  },
  data() {
    return {
      service: {},
    };
  },
  mounted() {
    var self = this;
    axios
      .get("http://fixorie.herokuapp.com/fo/services/1/")
      .then(function (response) {
        self.service = response.data;
      });
  },
};
</script>

