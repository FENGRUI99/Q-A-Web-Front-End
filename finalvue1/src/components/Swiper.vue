
<template>
      <div class="swiper-container">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="swlp in nameList2" :key="swlp.id">
              <h1>Top louder</h1>
            <h3 class="small" style="line-height: 40px"> {{swlp.title}}<a-icon type="rocket" theme="twoTone" two-tone-color="#eb2f96" :style="{ fontSize: '20px', color: 'blue' }" /></h3>
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
        slidesPerView: 2,
        spaceBetween: 30,
        direction: 'vertical',
        coverflowEffect: {
          rotate: 10,
          stretch: 2,
          depth: 150,
          modifier: 2,
          slideShadows: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许分页点击跳转
        },
        //
        // 自动轮播
        autoplay: {
          delay: 500
        },
        // 开启循环模式
        loop: true,
        // 开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  }
}
</script>

<style scoped>
  .swiper-container{
    width: 81%;
    height: 150px;
  }
  .li{
    line-height: 10px;
  }

  .swiper-slide {
    background: #ace3b0;
    border-radius: 10px;
    height: 20px;
  }
  h1 {
    color: #090606;
    font-size: 19px;
    font-style: italic;
    padding-bottom: 0px;
    background: linear-gradient(to top, rgba(69, 198, 230, 0.58) 10.2%, rgba(131, 237, 203, 0.59) 23.8%, #ebf1ef 50.7%);
    text-shadow: #20caf6 0 0 5px;
    margin-bottom: -1px;
    border-radius: 10px;
  }

</style>
