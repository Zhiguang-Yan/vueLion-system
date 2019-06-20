<template>
  <div class="userList">
    <router-view></router-view>
    <el-main>
      <el-row>
        <el-col :span="12" :offset='6'>
          <div class="swiper-container">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item, id) in src" :key="id">
                <img :src="item">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
            <!-- 滚动条 -->
            <!--  -->
            <!-- 下一项 -->
            <div class="swiper-button-next outinlie" slot="button-next"></div>
            <!-- 上一项 -->
            <div class="swiper-button-prev outinlie" slot="button-prev"></div>
            <!-- 标页码 -->
          </div>
        </el-col>
        <el-col :span="24">
          <el-carousel :interval="2000" type="card" height="200">
            <el-carousel-item v-for="item in src" :key="item" class="item1">
              <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        speed: 1000,
        effect: "fade",
        spaceBetween: 30,
        slidesPerView: 3,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true
        },
        autoplay: {
          delay: 1000
        },

        loop: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        mousewheel: {
          enabled: true
        },
        zoom: {
          enabled: true,
          maxRatio: 3
        }
      },
      src: [
        "../../static/swiper/1.jpg",
        "../../static/swiper/2.jpg",
        "../../static/swiper/3.jpg",
        "../../static/swiper/4.jpg",
        "../../static/swiper/5.jpg",
        "../../static/swiper/6.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.userList {
  width: 100%;
  background:rgba(23, 25, 65, .7)
}
.outinlie {
  outline: none;
}
.swiper-slide img {
  width: 100%;
  height: 200px;
}
.swiper-scrollbar-drag {
  margin-top: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.item1 img{
  width: 100%;
  height: 100%;
}
</style>
