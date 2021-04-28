
<template>
      <div class="swiper-container">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="swlp in nameList2" :key="swlp.id">
            <h3 class="small" style="line-height: 120px;height: 20px"><a-icon type="sound" theme="twoTone" two-tone-color="red" />{{ swlp.title }}</h3>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
        </swiper>
      </div>
  <!--      <el-carousel height="130px" width="200px" :autoplay="true" type="card" style="border-radius:10px; ">-->
  <!--        <el-carousel-item  width="300px" v-for="item in nameList2" :key="item" style="border-radius:10px;">-->
  <!--          <h1>Top Louder</h1>-->
  <!--          <h3 class="small"><a-icon type="sound" theme="twoTone" two-tone-color="red" />{{ item.title }}</h3>-->
  <!--        </el-carousel-item>-->
  <!--      </el-carousel>-->
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: 'swiper-example-default',
  title: 'Default',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      nameList2: [
        {title: 'YRM', id: 0},
        {title: 'CFR', id: 1},
        {title: 'CQR', id: 2}
      ],
      // 设置属性
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        slidesPerView: 2,
        spaceBetween: 30,
        direction: 'vertical',
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 自动轮播
        autoplay: {
          delay: 1500
        },
        // 开启循环模式
        // loop: true,
        // 开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  }
}
</script>

<style scoped>
  .swiper-container{

    width: 300px;

    height: 300px;

  }
  .swiper {
    height: auto;}

  .swiper-slide {
    height: 100px;
    line-height: 100px;
    background: #ace3b0;
  }
  .swiper-slide:nth-child(2n) {
    height: 40%;
  }
  .swiper-slide:nth-child(3n) {
    height: 20%;
  }
</style>
