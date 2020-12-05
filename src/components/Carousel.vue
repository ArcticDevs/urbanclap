<template>
  <div >

    <div class="container">
      <div class="carousel-container">
        <span
          class="scroll-left"
          @click="adscrollLeft"
          :style="{
            visibility: this.adscrollPos <= 0 ? 'hidden' : 'visible',
          }"
        >
          <i class="fa fa-arrow-left"></i>
        </span>
        <div class="carousel-inner-container">
          <div class="carousel-block" v-for="(item, index) in items" :key="index">
            <img :src="item.img_path" alt="" />
          </div>
        </div>
        <span
          class="scroll-right"
          @click="adscrollRight"
          v-if="items.length != 0"
          :style="{
            visibility:
              adscrollPos >= (items.length-add_count_ini)  * adWidth
                ? 'hidden'
                : 'visible',
          }"
        >
          <i class="fa fa-arrow-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      adWidth: 0,
      adscrollPos: 0,
      add_count_ini: 4,
    };
  },
  props:{
    items:{
      type: Array,
      default: function () {
        return []
      }
    },
  },
  mounted() {
    // console.log("mounted called");
    // console.log($(".carousel-inner-container").innerWidth() / this.add_count_ini);
    // console.log(this.items);
    // if (window.innerWidth < 400) {
    //   this.adWidth = $(".carousel-inner-container").innerWidth();
    //   $(".carousel-block").css("width", this.adWidth + "px");
    //   this.add_count_ini = 1;
    // } else {
    //   console.log("desktop design called");
    //   this.adWidth = $(".carousel-inner-container").innerWidth() / this.add_count_ini;
    //   $(".carousel-block").css("width", this.adWidth + "px");
    // }
  },
  methods: {
    adscrollLeft: function(event) {
      if (this.adscrollPos - this.adWidth >= 0) {
        $(".carousel-inner-container").animate(
          { scrollLeft: this.adscrollPos - this.adWidth },
          200
        );
        this.adscrollPos -= this.adWidth;
      }
    },
    adscrollRight: function(event) {
      if (this.adscrollPos < (this.items.length-this.add_count_ini) * this.adWidth) {
        $(".carousel-inner-container").animate(
          { scrollLeft: this.adscrollPos + this.adWidth },
          200
        );
        this.adscrollPos += this.adWidth;
      }
    },
  },
  watch: {
    items: {
      handler: function(newValue) {
        if (window.innerWidth < 400) {
          this.adWidth = $(".carousel-inner-container").innerWidth();
          $(".carousel-block").css("width", this.adWidth + "px");
          this.add_count_ini = 1;
        } else {
          console.log("desktop design called");
          this.adWidth = $(".carousel-inner-container").innerWidth() / this.add_count_ini;
          $(".carousel-block").css("width", this.adWidth + "px");
        }
      },
      deep: true
    }
  }
};
</script>

<style>
.carousel-container {
  position: relative;
}

.carousel-container .scroll-left {
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translate(0%, -50%);
}

.carousel-container .scroll-left svg {
  font-size: 40px;
  background: #fff;
  box-shadow: -2px 1px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 10px;
  border-radius: 60%;
}

.carousel-container .carousel-inner-container {
  white-space: nowrap;
  overflow: hidden;
  transition: scroll 0.2s ease-in;
}

.carousel-container .carousel-inner-container .carousel-block {
  width: 25%;
  display: inline-block;
  padding: 15px;
  transition: all 0.2s ease-in;
}

@media(max-width:400px) {
  .carousel-container .carousel-inner-container .carousel-block {
    width: 100%;
  }
}

.carousel-container .carousel-inner-container .carousel-block img {
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
}

.carousel-container .carousel-inner-container .carousel-block:hover {
  padding: 5px;
}

.carousel-container .scroll-right {
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translate(0%, -50%);
}

.carousel-container .scroll-right svg {
  font-size: 40px;
  background: #fff;
  box-shadow: -2px 1px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 10px;
  border-radius: 60%;
}
</style>