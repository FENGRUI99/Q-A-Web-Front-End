<template>
<div>
  {{this.userName}}
  <div v-bind:key="this.$store.state.chat_fresh">
    <JwChat-index
      :taleList="this.$store.state.user_chat_list[this.$route.params.receiverId]"
      @enter="bindEnter"
      @clickTalk="talkEvent"
      v-model="inputMsg"
      :toolConfig="tool"
    />
  </div>
</div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      userId: '',
      userName: '',
      tool: {
        callback: this.toolEvent
      },
      inputMsg: '',
      receiverId: '',
      winBarConfig: {
        active: 'win00',
        width: '160px',
        listHeight: '60px',
        list: [ {
          id: 'win00',
          img: '..//image/cover.png',
          name: 'JwChat',
          dept: '最简单、最便捷',
          readNum: 99
        },
        {
          id: 'win01',
          img: '..//image/three.jpeg',
          name: '阳光明媚爱万物',
          dept: '沙拉黑油',
          readNum: 12
        },
        {
          id: 'win02',
          img: '..//image/two.jpeg',
          name: '只盼流星不盼雨',
          dept: '最后说的话'
        },
        {
          id: 'win03',
          img: '..//image/one.jpeg',
          name: '留恋人间不羡仙',
          dept: '这里可以放万物'
        },
        {
          id: 'win04',
          img: '..//image/three.jpeg',
          name: '阳光明媚爱万物',
          dept: '官方客服'
        }],
        callback: this.bindWinBar
      }
    }
  },
  mounted () {
    this.userId = sessionStorage.getItem('user_id')
    this.userName = JSON.parse(sessionStorage.getItem('user_info')).user_name
    this.receiverId = this.$route.params.receiverId
  },
  methods: {
    bindEnter (e) {
      const msg = this.inputMsg
      if (msg.length === 0) return
      let aData = new Date().toLocaleDateString()
      const msgObj = {
        'date': aData,
        'text': { 'text': msg },
        'mine': true,
        'name': this.userName,
        'img': '../image/three.jpeg'
      }
      this.$store.commit('addChatList', [this.receiverId, msgObj])
      const sendData = {
        'user_id': this.userId,
        'senduser_id': this.receiverId,
        'text': msg,
        'date': aData,
        'name': this.userName
      }
      this.$global.ws.send(JSON.stringify(sendData))
      this.inputMsg = ''
    },
    toolEvent (type, obj) {
      console.log('tools', type, obj)
    },
    talkEvent (play) {
      console.log(play)
    },
    bindWinBar (play = {}) {
      // const {type, data = {}} = play
      // console.log(data)
      // if (type === 'winBar') {
      //   const { id, dept, name, img } = data
      //   this.winBarConfig.active = id
      // }
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
