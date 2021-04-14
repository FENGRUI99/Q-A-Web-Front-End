<template>
  <div>
  <div class="background">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
  </div>
<!--    <el-header>-->
<!--      <div>-->
<!--        <RealHead></RealHead>-->
<!--      </div>-->
<!--    </el-header>-->
    <div>
      <br>
      <br>
      <table class = "side p" style="width: 55%;line-height:45px;background: rgba(256,256,256,.5);">
        <div class="animate seven" style="margin: auto;">
          <br>
          <span>L</span><span>o</span><span>g</span>&nbsp;
          <span>i</span><span>n</span>&nbsp;
          <span>L</span><span>o</span><span>u</span><span>d</span><span>e</span><span>r</span><span>!</span>
          <br>
        </div>
        <div style="width: 70%;margin: auto">
          <div>
            <table style="width: 100%">
              <tr>
                <div class="link-top" style="line-height:30px;width: 70%" ></div>
                <BR/>
              </tr>
              <tr>Student ID</tr>
              <tr><input type="text" required id="id" value=""/></tr>
              <tr>Password</tr>
              <tr><input type="password" required="required" id="password" value=""/></tr>
            </table>
          </div>
             <br/>
          <div style="clear:both;text-align: center">

            <button style="font-size: large; color: white" v-on:click="toPage">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style="font-size: large; color: white"  v-on:click="toRegister">Sign up</button>

          </div>
          <br/></div>
      </table><br/><br/>
      <iframe src="/foot" width="100%" height="50%" frameborder="0"></iframe>
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
      imgSrc: require('../assets/back.png')
    }
  },
  methods: {
    toPage () {
      this.$router.push({
        name: 'HomePage'
      })
      this.$store.commit('setUserId', '1822755')
      sessionStorage.setItem('user_id', '1822755')
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

.side {
  margin:0 auto;
  width: 98%;
  border: 2px solid darkgrey;
  border-radius: 10px;
}

td
{   height: 200%;
  text-align:left;
}
button:hover{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 5px;
  background: limegreen;
  color: white;
}
button{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 5px;
  background: green;
  color: white;
}
input{
  width: 60%;
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 10px;
  /*padding: 13px 14px;*/
  /*width: 620px;*/
  font-size: 30px;
  font-weight: 700;
  color:darkgreen;
}

.p{
  font-family:Arial, sans-serif;
  font-weight: bolder;
  color: black;
  font-size: x-large;

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
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  z-index:-1;
  position: absolute;
}

.front{
  z-index:1;
  position: absolute;
}
</style>
