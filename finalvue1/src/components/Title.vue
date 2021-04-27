<template>
  <div>
    <div @click="toDetailPage">
      <div class="background" style="left:0;top:0;">
        <img :src="imgSrc"  alt="" />
      </div>
      <div class="logo">
        <img :src="logo"  alt="" />
        <p style="color: white;font-size: 22px;text-align: left">  Over 1000 questions proposed and got solved<br>
          Now it's your turn to ask louder here </p>
      </div>
<!--      <div style="height: 100px; width: 100%;"></div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      imgSrc: require('../assets/background.jpg'),
      coverSrc: require('../assets/cover.png'),
      logo: require('../assets/logo1.png'),
      item: {}
    }
  },
  methods: {
    toDetailPage () {
      this.$router.push({
        path: '/Login',
        name: 'Login'
      })
    }
  },
  mounted () {
    window.addEventListener('keyup', this.toDetailPage)
  },
  destroyed () {
    window.removeEventListener('keyup', this.toDetailPage)
  }
}
</script>

<style scoped>
.logo{
  width: 30%;
  position: fixed;
  repeat: no-repeat;
  background-attachment: fixed;
  margin-left: 10%;
  margin-top: 5%;
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

</style>
