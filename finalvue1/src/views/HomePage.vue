<template>
  <div>
    <div class="background1" >
      <img :src="imgSrc"  alt="" />
    </div>
  <div v-if = !this.$store.state.blurConfig.isBlurred style="z-index: 10;position: relative" >
      <el-container>
        <el-aside width=26.5%>
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            {{this.$store.state.chat_flag}}
            <div v-if="this.$store.state.chat_flag">
              <Chat></Chat>
            </div>
            <body123></body123>
          </el-main>
          <el-footer>
            <footer123></footer123>
          </el-footer>
        </el-container>
      </el-container>
  </div>
  <div v-else  @mousewheel.prevent style="z-index: 10;position: relative">
        <el-container>
          <el-aside width=27.5%>
            <Aside></Aside>
          </el-aside>
          <el-container>
            <el-main>
              <body123></body123>
            </el-main>
            <el-footer>
              <footer123></footer123>
            </el-footer>
          </el-container>
        </el-container>
    </div>
  </div>
</template>
<script>
import Body from '../components/Body'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
import Chat from '../components/Chat'
export default {
  name: 'HomePage',
  components: {
    'body123': Body,
    'footer123': Footer,
    'Aside': Aside,
    'Chat': Chat
  },
  data () {
    return {
      imgSrc: require('../assets/Image 2021-4-29 at 23.50.jpg'),
      test: []
    }
  },
  created () {
    this.userId = sessionStorage.getItem('user_id')
    this.userName = JSON.parse(sessionStorage.getItem('user_info')).user_name
    this.axios.post('http://localhost:8080/getRecentChat', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setUserChatMembers', response.data.entity)
      this.test = response.data.entity
    }).catch((response) => {
      console.log(response)
    })
    let that = this
    if ('WebSocket' in window) {
      that.ws = new WebSocket(`ws://localhost:8080/websocket/${this.userId}`)
      that.$global.setWs(that.ws)
      that.$global.ws.onopen = function () {
        console.log('socket连接成功')
      }
      that.$global.ws.onerror = function () {
        console.log('错误')
      }
      that.$global.ws.onmessage = function (res) {
        let data = JSON.parse(res.data)
        const msgObj = {
          'date': data.date,
          'text': { 'text': data.text },
          'mine': false,
          'name': data.name,
          'img': '../image/three.jpeg'
        }
        that.$store.commit('addChatList', [data.user_id, msgObj])
      }
    } else {
      // 浏览器不支持 WebSocket
      console.log('您的浏览器不支持 WebSocket!')
    }
  },
  destroyed () {
    let that = this
    // 销毁监听
    that.ws.onclose = function () {
      // 关闭 websocket
      console.log('连接已关闭...')
    }
  }
}

</script>

<style scoped>
.blur-content{
  backdrop-filter:saturate(150%) blur(8px);
  -webkit-backdrop-filter:saturate(150%) blur(8px);
  background-color:rgba(0,0,0,.3);
  z-index: 1;
}
.dialog {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.blur-content::before{
  filter:blur(5px);
  z-index: -1;
}
.foreground {
  backdrop-filter: saturate(150%) blur(10px);
  background-color:rgba(50,50,50,0.3);
}
.background1{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  z-index:0;
  zoom: 0.85;
  /*transform:translatey(50px);*/
  /*background-color: #fff;*/
  /*background-repeat: repeat;*/
  /*background-size: cover;*/
  /*-webkit-background-size: cover;*/
  /*-o-background-size: cover;*/
  /*background-position: center 0;*/
  /*background-size: 100% 100%;*/
  opacity:30%;

}
</style>
