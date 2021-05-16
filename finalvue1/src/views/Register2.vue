<template>
  <div @mousewheel.prevent>
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <!--内容-->
      </div>
      <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
        <source src="../assets/lviedo.mp4" type="video/mp4"/>
      </video>
    </div>
    <div style="width: 20%; margin: 0 auto;position:relative;z-index: 10;">
      <img :src="logo"  alt="" />
    </div>
    <br>
    <div id = total class="side">
        <div style="text-align: left">
          <button class="button" style="width: 15%; font-family: helvetica;font-size: x-large; padding: 10px; margin-left: 1%" v-on:click="toLog">Login</button>
          <button class="button" style="border-bottom:3px solid #72afff;width: 15%; font-family: helvetica; font-size: x-large; padding: 10px; font-weight:bold;" disabled >Sign up</button>
        </div>
      <ul style="float:left; width: 40%; margin-left: 5%; opacity: 1.0">
        <sign-up-info></sign-up-info>
      </ul>
      <ul style="float:left; width: 45%; margin-left: 5%">
        <br>
        <div style = "text-align: left">Choose Interested Tags</div>
         <InterestTag></InterestTag>
      </ul>
      <div style="clear:both"></div>
      <!--        </tr>-->
<!--      </ul>-->
    </div>
  </div>
</template>

<script>
import SignUpInfo from '../components/SignUpInfo'
import InterestTag from '../components/InterestTag'
export default {
  name: 'Register2',
  components: {
    'SignUpInfo': SignUpInfo,
    'InterestTag': InterestTag
  },
  data () {
    return {
      logo: require('../assets/logo1.png'),
      imgSrc: require('../assets/background.jpg'),
      fixStyle: '',
      vedioCanPlay: false
    }
  },
  methods: {
    toLog () {
      this.$router.push({
        path: '/Login',
        name: 'Login'
      })
    },
    canplay () {
      this.vedioCanPlay = true
    }
  },
  mounted () {
    // window.onresize = () => {
    //   const windowWidth = document.body.clientWidth
    //   const windowHeight = document.body.clientHeight
    //   const windowAspectRatio = windowHeight / windowWidth
    //   let videoWidth
    //   let videoHeight
    //   if (windowAspectRatio < 0.5625) {
    //     videoWidth = windowWidth
    //     videoHeight = videoWidth * 0.5625
    //     this.fixStyle = {
    //       height: windowWidth * 0.5625 + 'px',
    //       width: windowWidth + 'px',
    //       'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
    //       'margin-left': 'initial'
    //     }
    //   } else {
    //     videoHeight = windowHeight
    //     videoWidth = videoHeight / 0.5625
    //     this.fixStyle = {
    //       height: windowHeight + 'px',
    //       width: windowHeight / 0.5625 + 'px',
    //       'margin-left': (windowWidth - videoWidth) / 2 + 'px',
    //       'margin-bottom': 'initial'
    //     }
    //   }
    //   // window.onresize()
    // }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.side {
  margin:0 auto;
  width: 98%;
  border: 2px solid darkgrey;
  border-radius: 10px;
}
.button:hover{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 0px;
  background: none;
  color: black;
  border-bottom:3px solid #72afff;
  font-weight: bold;
}
.button{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 0px;
  background: none;
  color: black;
  outline: none;
}
#total{
  z-index: -20;
  width: 65%;
  margin:0 auto;
  background: #fffdfd;
  border: 1px;
  border-color:#72afff;
  border-style:solid;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  opacity: 0.95;
}
.video-container {
  position: absolute;
  height: 120%;
  width: 120%;
  margin-top: -5%;
  overflow: hidden;
}

.video-container .poster img{
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0);
  width: 100%;
}

.fillWidth {
  width: 100%;
}
</style>
