<template>
  <div>
    <div class="background" style="left:0;top:0">
      <img :src="imgSrc"  alt="" />
    </div>
    <div style="width: 20%; margin: auto">
      <img :src="logo"  alt="" />
    </div>
    <br>
    <div id = total class="side">
        <div style="text-align: left">
          <button class="button" style="width: 15%; font-family: Arial, sans-serif;font-size: x-large; padding: 10px; margin-left: 1%" v-on:click="toLog">Login</button>
          <button class="button" style="border-bottom:3px solid green;width: 15%; font-family: Arial, sans-serif; font-size: x-large; padding: 10px; font-weight:bold;" disabled >Sign up</button>
        </div>
<!--      <ul style="margin: auto">-->
<!--        <div style="text-align: left">-->
<!--          <button class="button" style=" border-bottom:3px solid green;width: 19%;font-weight:bold; font-size: x-large; padding: 10px; margin-left: 1%" disabled>Log in</button>-->
<!--          <button class="button" style="width: 20%; font-family: Arial, sans-serif; font-size: x-large; padding: 10px" v-on:click="toRegister">Sign up</button>-->
<!--        </div>-->
<!--        <tr style="vertical-align:top; width: 90%">-->
      <ul style="float:left; width: 35%; opacity: 1.0; margin-left: 10%">
        <sign-up-info></sign-up-info>
      </ul>
      <ul style="float:left; width: 40%; margin-left: 5%">
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
      imgSrc: require('../assets/background.jpg')
    }
  },
  methods: {
    toLog () {
      this.$router.push({
        path: '/Login',
        name: 'Login'
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
#total{
  z-index: -20;
  width: 60%;
  margin:0 auto;
  background: #fffdfd;
  border: 1px;
  border-color:#cccccc;
  border-style:solid;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  opacity: 0.95;
}
</style>
