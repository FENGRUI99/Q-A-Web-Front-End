<template>
<div>
  {{this.userName}}--{{this.winBarConfig.list}}
  <div v-bind:key="this.$store.state.chat_fresh">
    <JwChat-index
      :taleList="this.$store.state.user_chat_list[this.receiverId]"
      @enter="bindEnter"
      @clickTalk="talkEvent"
      v-model="inputMsg"
      :toolConfig="tool"
      :winBarConfig="winBarConfig"
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
        // list: [ {
        //   id: 'win00',
        //   img: '..//image/cover.png',
        //   name: 'JwChat',
        //   dept: '最简单、最便捷',
        //   readNum: 99
        // },
        // {
        //   id: 'win01',
        //   img: '..//image/three.jpeg',
        //   name: '阳光明媚爱万物',
        //   dept: '沙拉黑油',
        //   readNum: 12
        // }],
        list: [],
        callback: this.bindWinBar
      }
    }
  },
  mounted () {
    this.userId = sessionStorage.getItem('user_id')
    this.userName = JSON.parse(sessionStorage.getItem('user_info')).user_name
    this.receiverId = this.$route.params.receiverId
    this.winBarConfig.list = this.$store.getters.getChatMembers
    let flag = false
    for (let i = 0; i < this.winBarConfig.list.length; i++) {
      if (this.winBarConfig.list[i].id === this.receiverId) {
        flag = true
        break
      }
    }
    if (!flag) {
      const item = {
        id: this.receiverId,
        img: '..//image/three.jpeg',
        name: '123',
        dept: '',
        readNum: 0
      }
      this.$store.commit('addUserChatMembers', item)
    }
    this.winBarConfig.active = this.receiverId
    this.axios.post('http://localhost:8080/chatRecords', {
      request: this.userId,
      msg: this.receiverId
    }).then((response) => {
      this.$store.commit('setChatList', [this.receiverId, response.data.entity.list])
    }).catch((response) => {
      console.log(response)
    })
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
      console.log('click talk' + play)
    },
    bindWinBar (play = {}) {
      const {type, data = {}} = play
      console.log(type)
      const { id, dept, name, img } = data
      if (this.winBarConfig.active !== id) {
        this.winBarConfig.active = id
        console.log('id' + id)
        console.log('dept' + dept)
        console.log('name' + name)
        console.log('img' + img)
        this.axios.post('http://localhost:8080/chatRecords', {
          request: this.userId,
          msg: this.receiverId
        }).then((response) => {
          console.log('chat record is: ' + response.data.entity)
          this.$store.commit('setChatList', [this.receiverId, response.data.entity])
        }).catch((response) => {
          console.log(response)
        })
      }
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
