<template>
  <div>
<!--    <div v-if="cover === 0">-->

    <div class="background" style="left:0;top:0;z-index:1" id = 'cover'>
      <img :src="imgSrc"  alt="" />
    </div>
<!--  <div class="background" style="z-index: 20; width: 50%;height: 60%; margin: 30px" id = 'cover2'>-->
    <div style="text-align: center;width: 60%; margin: auto" id="logo">
      <img :src="logo"  alt="" />
    </div>
<!--  </div>-->
<!--    <el-header>-->
<!--      <div>-->
<!--        <RealHead></RealHead>-->
<!--      </div>-->
<!--    </el-header>-->
    <div id = 'home'>
      <br>
      <br>
      <div style="width: 20%; margin: auto">
        <img :src="logo"  alt="" />
      </div>
      <br>
      <div>
      <table class = "side p" style="width: 45%;line-height:45px;background: rgba(232,231,231,0.5);box-shadow: #cccccc;-moz-box-shadow: #2c3e50">
<!--        <div class="animate seven" style="margin: auto;">-->
<!--          <br>-->
<!--          <span style="color: white">L</span><span style="color: white">o</span><span style="color: white">g</span>&nbsp;-->
<!--          <span style="color: white">i</span><span style="color: white">n</span>&nbsp;-->
<!--          <span style="color: white">L</span><span style="color: white">o</span><span style="color: white">u</span><span style="color: white">d</span><span style="color: white">e</span><span style="color: white">r</span><span style="color: white">!</span>-->
<!--          <br>-->
<!--        </div>-->
        <div style="text-align: left">
          <button class="button" style=" border-bottom:3px solid green;width: 15%;font-weight:bold; font-size: x-large; padding: 10px" disabled>Log in</button>
          <button class="button" style="width: 15%; font-family: Arial, sans-serif; font-size: x-large; padding: 10px" v-on:click="toRegister">Sign up</button>
        </div>
        <br>
<!--/*        <div style="width: 100%;margin: auto">*/-->
<!--            <td style="width: 100%">-->
<!--                <td colspan="2" style="width: 50%">-->
<!--&lt;!&ndash;                  <div class="link-top" style="line-height:30px;width: 70%" ></div>&ndash;&gt;-->
<!--                  <br>-->
<!--                </td>-->
<!--              <td>-->
          <ul style="display: inline">
            <li>
            <ul>
                    <li>Student ID</li>
                   <li><el-input v-model="user_id" placeholder="请输入内容"></el-input></li>
                    <li>Password</li>
                    <li><el-input v-model="user_pwd" placeholder="请输入内容"></el-input></li>
                    <li><button style="font-size: large; color: white" v-on:click="toPage">Login</button></li>
            </ul>
              </li>
            <li  style="width: 80%; margin: 0 -10px; padding: 0px; font-weight: bold; color: #302e2e">
              Over 1000 questions proposed and got solved<br>
              Now it's your turn to ask louder here

            </li>
          </ul>

<!--          <div style="clear:both;text-align: center">-->

<!--            <button style="font-size: large; color: white" v-on:click="toPage">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
<!--            <button style="font-size: large; color: white"  v-on:click="toRegister">Sign up</button>-->

<!--          </div>-->
          <br/>
      </table><br/><br/>
      <iframe src="/foot" width="100%" height="50%" frameborder="0"></iframe>
      </div>
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
      user_pwd: ''
    }
  },
  mounted () {
    document.addEventListener('click', e => {
      document.getElementById('cover').style.zIndex = '-100'
      document.getElementById('logo').style.zIndex = '-300'
      // document.getElementById('home').style.zIndex = '200'
    })
  },
  methods: {
    toPage () {
      this.axios.post('http://localhost:8080/login', {
        user_id: this.user_id,
        user_psw: this.user_pwd
      }).then((response) => {
        if (response.data.code === '200') {
          let tmp = JSON.stringify(response.data.entity[0])
          sessionStorage.setItem('user_info', tmp)
          this.$router.push({
            name: 'HomePage'
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
        path: '/Register',
        name: 'Register'
      })
    }
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

td
{
  /*height: 100%;*/
  text-align:left;
}
button:hover{
  border: 1px;
  height: 45px;
  border-radius: 5px;
  background: limegreen;
  color: white;
}

button{
  border: 1px;
  height: 45px;
  width: 40%;
  border-radius: 5px;
  border: 1px solid darkgrey;
  background: #6add6a;
  color: white;
}
.button:hover{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 0px;
  background: none;
  color: black;
  border-bottom:3px solid green;
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
  color:darkgreen;
}

.p{
  font-family:Arial, sans-serif;
  /*font-weight: bold;*/
  color: black;
  font-size: large;

}
input:focus{
  border-color: limegreen;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6)

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
  color: #1a601f;
  opacity: 0;
  transform: translate(-150px, 0) scale(.3);
  animation: leftRight .5s forwards;
}

@keyframes leftRight {
  40% {
    transform: translate(50px, 0) scale(.7);
    opacity: 1;
    color: #1a601f;
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
  margin: 0;
  padding: 0;
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  z-index:-100;
  position: fixed;
  repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
}

.front{
  z-index:1;
  position: absolute;
}
li{
  list-style: none;
  text-align: left;
}
</style>
