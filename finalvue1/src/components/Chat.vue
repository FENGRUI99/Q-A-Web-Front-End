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
  <el-button @click="send('hello world')">click</el-button>
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
    // this.init()
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
      const sendData = {
        'user_id': this.userId,
        'senduser_id': '18229922',
        'text': msg,
        'date': aData
      }
      this.send(JSON.stringify(sendData))
    },
    toolEvent (type, obj) {
      console.log('tools', type, obj)
    },
    talkEvent (play) {
      console.log(play)
    },
    init: function () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        // 实例化socket
        this.socket = new WebSocket(`ws://localhost:8080/websocket/${this.userId}`)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      console.log('socket连接成功')
    },
    error: function () {
      console.log('连接错误')
    },
    getMessage: function (msg) {
      console.log(msg.data)
    },
    send: function (params) {
      this.socket.send(params)
    },
    close: function () {
      console.log('socket已经关闭')
    }
  }

}
</script>

<style scoped>

</style>
