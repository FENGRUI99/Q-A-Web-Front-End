<template>
  <div>
    <div @click="toDetailPage">
      <div class="background" style="left:0;top:0;">
        <img :src="imgSrc"  alt="" />
      </div>
      <div class="logo">
      <div style="width: 35%; margin-left: 8%; z-index: 10">
        <img :src="logo"  alt="" />
      </div>
      <br>
      <br>
      <div style="width: 55%; margin-left: 8%; z-index: 10;color: white;font-size: 22px;display: inline-block;font-family: 'DIN Alternate';">
        <div style="margin-right: 3%;display: inline-block;">Over</div>
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
        <div style="display: inline-block;">questions proposed and got solved</div>
        <div style="display: inline-block;">  Now it's your turn to ask louder here </div>
      </div>
      </div>
      </div>
<!--      <div style="height: 100px; width: 100%;"></div>-->
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
  width: 70%;
  position: fixed;
  repeat: no-repeat;
  background-attachment: fixed;
  margin-left: 10%;
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
  font-size: 30px;
  margin-bottom: -5px;
  font-family: "DIN Alternate";
  position: relative;
  color: white;
  margin-left: -8px;
  margin-right: -8px;
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
