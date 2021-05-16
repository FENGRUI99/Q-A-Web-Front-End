<template>
  <div style="padding-right: 20px">

<!--      <el-carousel height="130px" width="200px" :autoplay="true" type="card" style="border-radius:10px; ">-->
<!--        <el-carousel-item  width="300px" v-for="item in nameList2" :key="item" style="border-radius:10px;">-->
<!--          <h1>Top Louder</h1>-->
<!--          <h3 class="small"><a-icon type="sound" theme="twoTone" two-tone-color="red" />{{ item.title }}</h3>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
      <Swiper></Swiper>
    <br>
<!--    <h3 style="height: 10%;font-size: 30px  " >Hot tags</h3>-->
<!--    <table id="t2">-->
      <div id="t2">
        <h3 style="height: 30px;font-size: 30px  " >Hot tags</h3>
        <el-carousel  height="250px" indicator-position="none" :autoplay="true" style="border-bottom-left-radius:10px;border-bottom-right-radius: 10px">
          <el-carousel-item v-for="item in imgList" :key="item.id" label="hahah">
            <img :src="item.img" style="height:100%;width:100%;z-index: -1;color: transparent" alt="Hot tag">
            <h1><a-icon type="loading" />Tag:   {{item.title}}</h1>
          </el-carousel-item>
        </el-carousel>
      </div>

<!--    </table>-->
  </div>
</template>

<script>
import AskQuestion from './AskQuestion'
import Swiper from './Swiper'
export default {
  name: 'TopContributors',
  components: {
    'AskQuestion': AskQuestion,
    'Swiper': Swiper
  },
  data () {
    return {
      carouseId: 0,
      imgList: [
        {img: require('../assets/tag1.jpg'), title: 'Test', id: 0},
        {img: require('../assets/tag2.jpg'), title: 'Engineering', id: 1},
        {img: require('../assets/tag3.jpg'), title: 'Skill', id: 2}
      ]
    }
  }
}

</script>

<style scoped>
  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item h3 {
    color: #ffffff;
    font-size: 1em;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
    font-family: Helvetica;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #48c0e0;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color:  #48c0e0;
  }

  #ht{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;font-weight: bolder;}
  #tc{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;
    font-weight: bolder;
  }
  #t1{
    /*margin: 5% 30%; */
    margin:auto;
    background:#ffffff; width:55%; height:150px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  #t2{
    margin: auto;
    background:#ffffff; width:90%; height:150px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04)
  }
  h1 {
    color: #090606;
    font-size: 15px;
    font-style: italic;
    padding-bottom: 0px;
    background: linear-gradient(to top, rgba(69, 198, 230, 0.58) 10.2%, rgba(131, 237, 203, 0.59) 23.8%, #ebf1ef 50.7%);
    text-shadow: #20caf6 0 0 5px;
    margin-bottom: -1px;
  }
  h3{
    color: #515151;
    font-weight: 700;
    /*border-left: 10px #7043ba solid;*/
  }
</style>
