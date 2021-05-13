<template>
<div>
  {{this.userName}}
  <JwChat-index
    :taleList="list"
    @enter="bindEnter"
    @clickTalk="talkEvent"
    v-model="inputMsg"
    :toolConfig="tool"
  />
</div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      userId: '',
      userName: '',
      list: [],
      tool: {
        callback: this.toolEvent
      },
      inputMsg: ''
    }
  },
  mounted () {
    this.userId = sessionStorage.getItem('user_id')
    this.userName = JSON.parse(sessionStorage.getItem('user_info')).user_name
    this.list = this.$store.getters.getChatList
  },
  methods: {
    bindEnter (e) {
      const msg = this.inputMsg
      if (!msg) return
      let aData = new Date().toLocaleDateString()
      const msgObj = {
        'date': aData,
        'text': { 'text': msg },
        'mine': true,
        'name': this.userName,
        'img': '../image/three.jpeg'
      }
      this.list.push(msgObj)
      const msg1 = {
        'date': '2021/5/13',
        'text': { 'text': 'i know' },
        'mine': false,
        'name': '2',
        'img': '../image/three.jpeg'
      }
      this.$store.commit('addChatList', msg1)
      if (this.userId === '1') {
        const sendData = {
          'user_id': this.userId,
          'senduser_id': '2',
          'text': msg,
          'date': aData
        }
        this.$global.ws.send(JSON.stringify(sendData))
      } else if (this.userId === '2') {
        const sendData = {
          'user_id': this.userId,
          'senduser_id': '1',
          'text': msg,
          'date': aData
        }
        this.$global.ws.send(JSON.stringify(sendData))
      }
    },
    toolEvent (type, obj) {
      console.log('tools', type, obj)
    },
    talkEvent (play) {
      console.log(play)
    }
    // init: function () {
    //   if (typeof (WebSocket) === 'undefined') {
    //     alert('您的浏览器不支持socket')
    //   } else {
    //     // 实例化socket
    //     this.socket = new WebSocket(`ws://localhost:8080/websocket/${this.userId}`)
    //     // 监听socket连接
    //     this.socket.onopen = this.open
    //     // 监听socket错误信息
    //     this.socket.onerror = this.error
    //     // 监听socket消息
    //     this.socket.onmessage = this.getMessage
    //   }
    // },
    // open: function () {
    //   console.log('socket连接成功')
    // },
    // error: function () {
    //   console.log('连接错误')
    // }
  }

}
</script>

<style scoped>

</style>
