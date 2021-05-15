<template>
  <div>
<!--    <div class="background1" >-->
<!--      <img :src="imgSrc"  alt="" />-->
<!--    </div>-->
    <div>
      <el-container>
        <el-header height="15px" style="z-index: 999;">
          <header123></header123>
        </el-header>
        <router-view></router-view>
      </el-container>
    </div>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
export default {
  name: 'First',
  components: {
    'header123': RealHead
  },
  created () {
    this.userId = sessionStorage.getItem('user_id')
    this.userName = JSON.parse(sessionStorage.getItem('user_info')).user_name
    this.axios.post('http://localhost:8080/getRecentChat', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setUserChatMembers', response.data.entity)
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

</style>
