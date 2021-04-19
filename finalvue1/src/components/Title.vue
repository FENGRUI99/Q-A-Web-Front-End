<template>
  <div>
    <div @click="toDetailPage (item)">
      <div class="background" style="left:0;top:0;">
        <img :src="imgSrc"  alt="" />
      </div>
      <div style="width: 35%; margin-left: 10%; z-index: 10">
        <img :src="logo"  alt="" />
        <p style="color: white;font-size: 22px;text-align: left">  Over 1000 questions proposed and got solved<br>
          Now it's your turn to ask louder here </p>
      </div>
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
    toDetailPage (item) {
      this.item = JSON.stringify(item)
      sessionStorage.setItem('item', this.item)
      this.$router.push({
        path: '/Login',
        name: 'Login',
        params: {
          item: this.item
        }
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
