<template>
  <div>
    <div class="background" style="left:0;top:0">
      <img :src="imgSrc"  alt="" />
    </div>
    <div  class="side" style="width: 60%;line-height:45px;background: rgba(232,231,231,0.5);box-shadow: #cccccc;-moz-box-shadow: #2c3e50">
      <table style="margin: auto">
        <tr style="vertical-align:top; width: 90%">
          <td><sign-up-info></sign-up-info></td>
          <td><InterestTag></InterestTag></td>
        </tr>
      </table>
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
      imgSrc: require('../assets/background.jpg')
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
</style>
