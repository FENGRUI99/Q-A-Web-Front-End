<template>
  <div>
    <table id="t1">
      <el-carousel height="200px" direction="vertical" :autoplay="true" style="border-radius:10px;">
        <el-carousel-item v-for="item in nameList2" :key="item">
          <h1>Top Louder</h1>
          <h3 class="medium"><a-icon type="sound" theme="twoTone" two-tone-color="red" />  {{ item.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </table>
    <br>
<!--    <table id="t2">-->
      <div id="t2">
        <el-carousel height="300px" arrow="always" direction="vertical" :autoplay="true" style="border-radius:10px;">
          <el-carousel-item v-for="item in imgList" :key="item">

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
export default {
  name: 'TopContributors',
  components: {AskQuestion},
  data () {
    return {
      carouseId: 0,
      imgList: [
        {img: require('../assets/tag1.jpeg'), title: 'Test', id: 0},
        {img: require('../assets/tag2.jpeg'), title: 'Engineering', id: 1},
        {img: require('../assets/tag3.jpeg'), title: 'Skill', id: 2}
      ],
      nameList2: [
        {title: 'YRM', id: 0},
        {title: 'CFR', id: 1},
        {title: 'CQR', id: 2}
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
    font-size: 3em;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    font-family: Helvetica;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99bfab;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #8fcba1;
  }

  #ht{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;font-weight: bolder;}
  #tc{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;
    font-weight: bolder;
  }
  #t1{
    /*margin: 5% 30%; */
    margin:auto;
    background:#ffffff; width:50%; height:150px;
    border-radius: 10px;

    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  #t2{
    margin: auto;
    background:#ffffff; width:50%; height:150px;
    border-radius: 10px;
  ;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04)
  }
  h1 {
    color: #090606;
    font-size: 25px;
    font-style: italic;
    padding-bottom: 0px;
    background: linear-gradient(to top, rgba(69, 198, 230, 0.58) 10.2%, rgba(131, 237, 203, 0.59) 23.8%, #ebf1ef 50.7%);
    text-shadow: #20caf6 0 0 5px;
    margin-bottom: -1px;
  }
</style>
