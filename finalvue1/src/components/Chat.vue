<template>
<div @mousewheel.prevent>
<!--  <v-row >-->
<!--    <v-avatar-->
<!--      class="white&#45;&#45;text"-->
<!--      size="65"-->
<!--      @click="overlay = !overlay"-->
<!--      style="margin-top: -10%">-->
<!--    </v-avatar>-->
    <v-overlay
      :z-index="100"
      :value="overlay"
    >
      <div style="z-index: 200;margin-left: 15%;color: black; height: 70%">
      <JwChat-index
        :taleList="getList"
        @enter="bindEnter"
        @clickTalk="talkEvent"
        v-model="inputMsg"
        :toolConfig="tool"
        :winBarConfig="winBarConfig"
        scrollType="scroll"
      />
        {{this.winBarConfig.list}}--{{this.winBarConfig.active}}
      </div>
      <div style="height: 10px;width: 100px"></div>
      <v-btn
        color= #A5D6A7
        elevation="3"
        @click="clickClose"
        style="width: 130px;"
      >close</v-btn>
    </v-overlay>
<!--  </v-row>-->
</div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      userId: '',
      overlay: true,
      userName: '',
      receiverName: '',
      tool: {
        callback: this.toolEvent
      },
      inputMsg: '',
      receiverId: '',
      winBarConfig: {
        active: 'win00',
        width: '160px',
        listHeight: '60px',
        list: [],
        callback: this.bindWinBar
      }
    }
  },
  created () {
    this.userId = sessionStorage.getItem('user_id')
    this.userName = JSON.parse(sessionStorage.getItem('user_info')).user_name
    this.receiverId = this.$store.getters.getReceiverId
  },
  mounted () {
    this.winBarConfig.list = this.$store.getters.getChatMembers
    let flag = false
    for (let i = 0; i < this.winBarConfig.list.length; i++) {
      if (this.winBarConfig.list[i].id === this.receiverId) {
        flag = true
        this.winBarConfig.active = this.receiverId
        break
      }
    }
    if (flag === false && this.receiverId !== '') {
      this.axios.post('http://localhost:8080/UserInfo', {
        request: this.receiverId
      }).then((response) => {
        this.receiverName = response.data.entity.user_name
        console.log('name ' + this.receiverName)
        const item = {
          id: this.receiverId,
          img: '../assets/head.jpeg',
          name: this.receiverName,
          dept: '',
          readNum: 0
        }
        this.$store.commit('addUserChatMembers', item)
      }).catch((response) => {
        console.log(response)
      })
    }
    if (this.receiverId === '' && this.winBarConfig.list.length > 0) {
      this.winBarConfig.active = this.winBarConfig.list[0].id
      this.receiverId = this.winBarConfig.list[0].id
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
        'img': '../assets/head.jpeg'
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
        this.receiverId = id
        console.log('id' + id)
        console.log('dept' + dept)
        console.log('name' + name)
        console.log('img' + img)
        if (this.$store.getters.getChatList[id] === undefined) {
          this.axios.post('http://localhost:8080/chatRecords', {
            request: this.userId,
            msg: this.receiverId
          }).then((response) => {
            this.$store.commit('setChatList', [this.receiverId, response.data.entity.list])
          }).catch((response) => {
            console.log(response)
          })
        }
      }
    },
    clickClose () {
      this.$store.commit('changeChatFlag')
      this.overlay = !this.overlay
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
  },
  computed: {
    getList () {
      if (this.$store.state.user_chat_list[this.receiverId] === undefined) {
        const ans = [{
          'date': '2020/05/20',
          'text': { 'text': 'wodemaya' },
          'mine': false,
          'name': 'JwChat',
          'img': ''
        }]
        return ans
      }
      return this.$store.state.user_chat_list[this.receiverId]
    }
  }
}
</script>

<style scoped>

</style>
