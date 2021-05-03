<template>
  <div class="homepage-hero-module" @mousewheel.prevent @click="toDetailPage">
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <!--内容-->
      </div>
      <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
        <source src="../assets/lviedo.mp4" type="video/mp4"/>
      </video>
    </div>
    <div style="width: 35%; margin-left: 8%; z-index: 10; position: absolute">
      <img :src="logo"  alt="" />
    </div>
    <div class="logo" style="margin-top: 400px;">
      <div style="width: 100%; margin-left: 8%; z-index: 10;color: white;font-size: 30px;display: inline-block;font-family: 'DIN Alternate';">
        <div style="font-size: 20px;z-index: 10;color: white"> Click to continue</div>
        <div style="margin-right: 3%;display: inline-block; font-family: 'helvetica';font-size: 40px;font-weight: lighter">Over</div>
        <li class="number">
          <span class="animate" id='digit1'>1 2 3 4 5 6 7 8 9 0</span>
        </li>
        <li class="number">
          <span class="animate2" id='digit2'>1 2 3 4 5 6 7 8 9 0</span>
        </li>
        <li class="number">
          <span class="animate3" id='digit3'>1 2 3 4 5 6 7 8 9 0</span>
        </li>
        <li class="number">
          <span class="animate4" id='digit4'>1 2 3 4 5 6 7 8 9 0</span>
        </li>
        <div style="display: inline-block; font-family: 'helvetica';font-size: 40px;font-weight: lighter">questions proposed and got solved</div>
        <div style="display: inline-block; font-family: 'helvetica';font-size: 40px;font-weight: lighter">  Now it's your turn to ask louder here </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  data () {
    return {
      vedioCanPlay: false,
      fixStyle: '',
      imgSrc: require('../assets/background.jpg'),
      coverSrc: require('../assets/cover.png'),
      logo: require('../assets/logo1.png'),
      item: {}
    }
  },
  methods: {
    canplay () {
      this.vedioCanPlay = true
    },
    toDetailPage () {
      this.$router.push({
        path: '/Login',
        name: 'Login'
      })
    }
  },
  mounted () {
    window.addEventListener('keyup', this.toDetailPage)
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
  },
  destroyed () {
    window.removeEventListener('keyup', this.toDetailPage)
  }
}

</script>

<style scoped>
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
.logo{
  width: 100%;
  position: absolute;
  repeat: no-repeat;
  background-attachment: fixed;
}
img{
  width: 100%;
  height: 100%;
  vertical-align: top;
}
div{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.background{
  margin: 0;
  padding: 0;
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  z-index:-1;
  position: fixed;
  repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
}
.number {
  width: 1em;
  height: 1em;
  overflow: hidden;
  line-height: 1em;
  display: inline-block;
  margin-top: 0px;
  padding: -5px;
  font-family: 'helvetica';
  font-size: 80px;
  font-weight: lighter;
  position: relative;
  color: white;
  margin-left: -20px;
  margin-right: -20px;
}
span {
  position: relative;
}
.animate {
  -webkit-animation: spinit 0.1s 4;
  -moz-animation: spinit 0.1s 4;
  animation: spinit 0.1s 4;
}
.animate2 {
  -webkit-animation: spinit 0.2s 5;
  -moz-animation: spinit 0.2s 5;
  animation: spinit 0.2s 5;
}
.animate3 {
  -webkit-animation: spinit 0.3s 5.5;
  -moz-animation: spinit 0.3s 5.5;
  animation: spinit 0.3s 5.5;
}
.animate4 {
  -webkit-animation: spinit 0.35s 6;
  -moz-animation: spinit 0.35s 6;
  animation: spinit 0.35s 6;
}
.animate5 {
  -webkit-animation: spinit 0.2s 6.5;
  -moz-animation: spinit 0.2s 6.5;
  animation: spinit 0.2s 6.5;
}
@-webkit-keyframes spinit {
  0% {
    top: 0em;
  }
  50% {
    top: -5em;
  }
  100% {
    top: -9em;
  }
}
@-moz-keyframes spinit {
  0% {
    top: 0em;
  }
  50% {
    top: -5em;
  }
  100% {
    top: -9em;
  }
}
@keyframes spinit {
  0% {
    top: 0em;
  }
  50% {
    top: -5em;
  }
  100% {
    top: -9em;
  }
}

/* Setting the required value to top will make the spinner end at that number */

#digit1 {
  top: 0em;
  /* -4em means 5 will be the number */
}
#digit2 {
  top: -9em;
  /* -4em means 5 will be the number */
}
#digit3 {
  top: -9em;
  /* -4em means 5 will be the number */
}
#digit3 {
  top: -9em;
  /* -4em means 5 will be the number */
}
li{
  list-style: none;
  text-align: left;
}
div{
  text-align: left;
}
</style>
