<template>
  <div>
<!--    <div class="wrapper" v-if = this.$store.state.blurConfig.isBlurred>-->
<!--      <div class="foreground" style="width: 1000%;margin-top:-20%;height: 2000px;float: right;position: absolute;"></div>-->
<!--    </div>-->
    <div class="background1"  >
      <img :src="imgSrc"  alt="" />
    </div>
  <div v-if = !this.$store.state.blurConfig.isBlurred style="background: #f6f6f6">
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=26.5%>
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            <body123></body123>
          </el-main>
          <el-footer>
            <footer123></footer123>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
    <div v-else style="background: #f6f6f6" @mousewheel.prevent>
      <el-container>
        <el-header height="15px">
          <header123></header123>
        </el-header>
        <el-container>
          <el-aside width=27.5%>
            <Aside></Aside>
          </el-aside>
          <el-container>
            <el-main>
              <body123></body123>
            </el-main>
            <el-footer>
              <footer123></footer123>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import RealHead from '../components/realhead'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
export default {
  name: 'HomePage',
  components: {
    'header123': RealHead,
    'body123': Body,
    'footer123': Footer,
    'Aside': Aside
  },
  data () {
    return {
      imgSrc: require('../assets/Image 2021-4-29 at 23.50.jpg')
    }
  }
}

</script>

<style scoped>
.blur-content{
  backdrop-filter:saturate(150%) blur(8px);
  -webkit-backdrop-filter:saturate(150%) blur(8px);
  background-color:rgba(0,0,0,.3);
  z-index: 1;
}
.dialog {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.blur-content::before{
  filter:blur(5px);
  z-index: -1;
}
.foreground {
  backdrop-filter: saturate(150%) blur(10px);
  background-color:rgba(50,50,50,0.3);
}
.background1{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  z-index:-1;
  zoom: 1.1;
  /*transform:translateX(-10px);*/
  /*transform:translatey(50px);*/
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  background-size: 100% 100%;
  opacity:5%;

}
</style>
