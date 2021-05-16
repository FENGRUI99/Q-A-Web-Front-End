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
    <div style="position:relative; z-index: 10;margin:0 auto;width: 20%; background-attachment: fixed;background-repeat:no-repeat;">
      <img :src="logo"  alt="" />
    </div>
    <br>
    <div id="total">
      <div style="text-align: left">
        <el-button type="success" class="button" style=" border-bottom:3px solid #72afff;width: 19%;font-weight:bold; font-size: x-large; padding: 10px;" disabled>Log in</el-button>
        <el-button type="success" plain class="button" style="width: 20%; font-family: Arial, sans-serif; font-size: x-large; padding: 10px" v-on:click="toRegister">Sign up</el-button>
      </div>
      <br>
      <ul style="float:left; padding-right: 3%;width: 40%">
        <li>Student ID</li>
        <li><el-input  v-model="user_id" placeholder="enter your student id"></el-input></li>
        <li>Password</li>
        <li><el-input  v-model="user_pwd"  placeholder="enter your password" show-password @keyup.enter.native="toPage" ></el-input></li>
        <br>
        <li><v-btn
          color="#72afff"
          @click="toPage"
          style="float: left"
        >
          Login</v-btn></li>
<!--        <li style="text-align: center"><el-button type="success" v-on:click="toPage" style="height: 40px;"> Login  </el-button></li>-->
      </ul>
      <ul style="float:left;padding-left: 5%"> <el-divider direction="vertical"></el-divider></ul>
      <ul style="float: left;width: 50%;color: #72afff;font-weight: bold">
        <li class="rightSide">Over 1000 questions proposed and got solved.</li>
        <li class="rightSide">Now it's your turn to ask louder here</li>
      </ul>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import Body from '../components/Body'
export default {
  name: 'Login',
  components: {
    Body, RealHead
  },
  data () {
    return {
      imgSrc: require('../assets/background.jpg'),
      coverSrc: require('../assets/cover.png'),
      logo: require('../assets/logo1.png'),
      user_id: '',
      user_pwd: '',
      fixStyle: '',
      vedioCanPlay: false
    }
  },
  methods: {
    canplay () {
      this.vedioCanPlay = true
    },
    toPage () {
      this.axios.post('http://localhost:8080/login', {
        user_id: this.user_id,
        user_psw: this.user_pwd
      }).then((response) => {
        if (response.data.code === '200') {
          let tmp = JSON.stringify(response.data.entity[0])
          sessionStorage.setItem('user_info', tmp)
          this.$router.push({
            path: '/First/HomePage'
          })
          this.$store.commit('setUserId', this.user_id)
          sessionStorage.setItem('user_id', this.user_id)
        } else {
          alert('Wrong user id or password')
        }
      }).catch((response) => {
        console.log(response)
      })
    },
    toRegister () {
      this.$router.push({
        path: '/Register2',
        name: 'Register2'
      })
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
  .ul {
    display:inline-block;
  }
.el-divider--vertical{
  width: 1px;
  height: 15em;
}
.rightSide{
  font-size: 1.5em;
  font-family: helvetica;
}
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

td
{
  /*height: 100%;*/
  text-align:left;
}
button:hover{
  border: 1px;
  height: 45px;
  border-radius: 5px;
  background: #72afff;
  color: white;
}

button{
  border: 1px;
  height: 45px;
  width: 40%;
  border-radius: 5px;
  border: 1px solid darkgrey;
  background: #72afff;
  color: white;
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
input{
  /*width: 70%;*/
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 1px;
  /*padding: 13px 14px;*/
  /*width: 620px;*/
  font-size: 30px;
  font-weight: 700;
  color:#72afff;
}

.p{
  font-family:Arial, sans-serif;
  /*font-weight: bold;*/
  color: black;
  font-size: large;

}
input:focus{
  border-color: #72afff;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(114, 175, 255);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(114, 175, 255)

}
input[type = checkbox]{
  zoom:1%;
  opacity: 0.5;
}
.link-top {
  width: 25%;
  height: 1px;
}

.animate {
  font-size: 50px;
  margin: 100px 0 0;
  color: white;
}

.animate span {
  display: inline-block;
}

.animate span:nth-of-type(2) {
  animation-delay: .05s;
}
.animate span:nth-of-type(3) {
  animation-delay: .1s;
}
.animate span:nth-of-type(4) {
  animation-delay: .15s;
}
.animate span:nth-of-type(5) {
  animation-delay: .2s;
}
.animate span:nth-of-type(6) {
  animation-delay: .25s;
}
.animate span:nth-of-type(7) {
  animation-delay: .3s;
}
.animate span:nth-of-type(8) {
  animation-delay: .35s;
}
.animate span:nth-of-type(9) {
  animation-delay: .4s;
}
.animate span:nth-of-type(10) {
  animation-delay: .45s;
}
.animate span:nth-of-type(11) {
  animation-delay: .5s;
}
.animate span:nth-of-type(12) {
  animation-delay: .55s;
}
.animate span:nth-of-type(13) {
  animation-delay: .6s;
}
.animate span:nth-of-type(14) {
  animation-delay: .65s;
}
.animate span:nth-of-type(15) {
  animation-delay: .7s;
}
.animate span:nth-of-type(16) {
  animation-delay: .75s;
}
.animate span:nth-of-type(17) {
  animation-delay: .8s;
}
.animate span:nth-of-type(18) {
  animation-delay: .85s;
}
.animate span:nth-of-type(19) {
  animation-delay: .9s;
}
.animate span:nth-of-type(20) {
  animation-delay: .95s;
}

/* Animation One */

.seven span {
  color: #72afff;
  opacity: 0;
  transform: translate(-150px, 0) scale(.3);
  animation: leftRight .5s forwards;
}

@keyframes leftRight {
  40% {
    transform: translate(50px, 0) scale(.7);
    opacity: 1;
    color: #72afff;
  }

  80% {
    transform: translate(0) scale(2);
    opacity: 0;
  }

  100% {
    transform: translate(0) scale(1);
    opacity: 1;
  }
}
.background{
  left:0;
  top:0;
  margin: 0;
  padding: 0;
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  z-index:-1;
  position: fixed;
  repeat: no-repeat;
  attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;

}

li{
  list-style: none;
  text-align: left;
}
#total{
  z-index: -20;
  width: 50%;
  margin:0px auto;
  background: #fffdfd;
  border: 1px;
  border-color:#cccccc;
  border-style:solid;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  opacity: 0.9;
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
