<template>
  <div>
    <table id="tt">
      <!--      <div class="wrapper" v-if = this.$store.state.blurConfig.isBlurred>-->
      <!--         <div class="foreground" style="width: 2000px;height: 80px;position: absolute;margin-top: -15%;z-index: 20;"></div>-->
      <!--        </div>-->
      <img src="../assets/logo1.png" width="200px"  class="pho">
      <td @click="toHomePage" style="width: 22%; cursor: pointer;"></td>
      <!--        <p id="title">Ask Louder Here! </p>-->
      <!--      -->
      <h1 id="title" data-shadow='Ask Louder Here!' style="margin-top: 10px;z-index:10;">Ask Louder Here!</h1>
      <!--      -->
      <td style="width: 28%"></td>
      <td>
        <div style=";width: 10px;margin-top: 20px;"></div>
        <searchBox></searchBox>
        <div style="height: 10px;"></div>
      </td>
      <td class="notify">
      <div @click="toChat"> <i class="el-icon-message-solid"></i></div>
      </td>
      <td style="margin: auto">
        <nameTag></nameTag>
      </td>
    </table>
  </div>
</template>

<script>
import NameTag from './NameTag'
import SearchBox from './SearchBox'

export default {
  name: 'RealHead',
  data () {
    return {
      reLoad: 0
    }
  },
  components: {
    'nameTag': NameTag,
    'searchBox': SearchBox
  },
  methods: {
    toHomePage () {
      this.$router.push({
        path: '/First/HomePage',
        name: 'HomePage'
      })
      window.location.reload()
    },
    refresh () {
      if (this.reLoad < 10) {
        this.reLoad += 1
        console.log(this.reLoad)
      }
    },
    toChat () {
      this.$store.commit('changeChatFlag')
    }
  }
}

</script>

<style scoped>
#tt {
  background: white;
  border: 1px;
  border-style: solid;
  border-color: #ffffff #ffffff #72afff #ffffff;
  position: fixed;
  z-index:5;
  margin:0px  auto;
  width:100%;
  top:-10px;
  left: 0;
  padding: 0px 0px 0px 0px ;
}
#title {
  /*font-size: xx-large;*/
  position: absolute;
  /*font-family: "Helvetica Neue";*/
  /*color: #81D454;*/
  margin-left: -5px;
  font-family: helvetica;
}
.pho{
  position: absolute;
  margin-top: -5px;
  margin-left: 3%;
}
@import url(https://fonts.googleapis.com/css?family=Righteous);
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}
html, body {
  height: 100%;
}
body {
  text-align: center;
  background-color: hsl(0, 0%, 100%);
}
body:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  height: 100%;
}
.notify:hover{
  cursor: pointer;
}
h1 {
  display: inline-block;
  color: #72afff;
  font-family: 'Righteous', serif;
  font-size: 3em;
  text-shadow: .03em .03em 0 hsl(220, 10%, 94%);
}
h1:after {
  content: attr(data-shadow);
  position: absolute;
  /*margin-top: 1px;*/
  margin-left: -25px;
  width: 100%;
  top: .06em; left: .6em;
  z-index: -1;
  text-shadow: none;
  background-image:
    linear-gradient(
      45deg,
      transparent 45%,
      hsl(214, 100%, 72%) 45%,
      hsl(225, 100%, 5%) 55%,
      transparent 0
    );
  background-size: .1em .1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shad-anim 35s linear infinite;
}
@keyframes shad-anim {
  0% {
    background-position: 0 0
  }
  0% {
    background-position: 100% -100%
  }

}
.foreground {
  backdrop-filter: saturate(150%) blur(10px);
  background-color:rgba(50,50,50,0.3);
}/* No .wrapper needed! */
</style>
