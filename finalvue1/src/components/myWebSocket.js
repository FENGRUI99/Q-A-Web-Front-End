export default{
  ws: {},
  setWs: function (newWs) {
    this.ws = newWs
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
