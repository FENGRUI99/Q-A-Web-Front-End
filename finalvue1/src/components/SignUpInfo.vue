<template>
  <div>
    <table style="text-align:left; border:1px solid white" class="p">
      <tr>StudentID</tr>
      <tr><input v-model ="user_id" type = "text" id="user_id" name = "user_id" pattern = "^\d{7}$" required></tr>
      <tr>Password</tr>
      <tr><input v-model ="user_pwd" type="password" id="user_psw" name="user_psw" pattern = "^[A-Za-z0-9]{4,7}?$" required></tr>
      <tr>Password Confirm</tr>
      <tr><input v-model ="user_pwd1" type="password" id="user_psw1" name="user_psw1" required></tr>
      <tr>Username</tr>
      <tr><input v-model ="user_name" type="text" id="user_name" name="user_name" pattern = "^[a-zA-Z0-9_-]{4,16}$" required></tr>
      <tr>Your Email</tr>
      <tr><input v-model ="user_mail" type="text" id="user_mail" name="user_mail" pattern = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$" required></tr>
      <tr><button style="padding: 12px 20px">&nbsp;Log in&nbsp;</button></tr><br/>
    </table>
  </div>
</template>

<script>

export default {
  name: 'SignUpInfo',
  data () {
    return {
      user_id: '',
      user_pwd: '',
      user_pwd1: '',
      user_name: '',
      user_mail: ''
    }
  },
  watch: {
    user_id: {
      handler (newVal, oldVal) {
        this.checkID()
      }
    },
    user_pwd: {
      handler (newVal, oldVal) {
        this.checkPsw()
      }
    },
    user_pwd1: {
      handler (newVal, oldVal) {
        this.checkPsw1()
      }
    },
    user_name: {
      handler (newVal, oldVal) {
        this.checkUsername()
      }
    },
    user_mail: {
      handler (newVal, oldVal) {
        this.checkEmail()
      }
    }
  },
  methods: {
    checkID: function () {
      let id = document.getElementById('user_id')
      let reg = /^\d{7}$/
      console.log(this.user_id.length)
      if (this.user_id.length === 0) {
        id.className = 'nothing'
      } else if (reg.test(this.user_id)) {
        id.className = 'right'
      } else {
        id.className = 'wrong'
      }
    },
    checkPsw: function () {
      let id = document.getElementById('user_psw')
      let reg = /^[A-Za-z0-9]{4,30}?$/
      if (this.user_pwd.length === 0) {
        id.className = 'nothing'
      } else if (reg.test(this.user_pwd)) {
        id.className = 'right'
      } else {
        id.className = 'wrong'
      }
    },
    checkPsw1: function () {
      let id = document.getElementById('user_psw1')
      let reg = /^[A-Za-z0-9]{4,30}?$/
      if (this.user_pwd1.length === 0) {
        id.className = 'nothing'
      } else if (this.user_pwd === this.user_pwd1 && reg.test(this.user_pwd)) {
        id.className = 'right'
      } else {
        id.className = 'wrong'
      }
    },
    checkUsername: function () {
      let id = document.getElementById('user_name')
      let reg = /^[a-zA-Z0-9_-]{4,16}$/
      if (this.user_name.length === 0) {
        id.className = 'nothing'
      } else if (reg.test(this.user_name)) {
        id.className = 'right'
      } else {
        id.className = 'wrong'
      }
    },
    checkEmail: function () {
      let id = document.getElementById('user_mail')
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.user_mail === 0) {
        id.className = 'nothing'
      } else if (reg.test(this.user_mail)) {
        id.className = 'right'
      } else {
        id.className = 'wrong'
      }
    }
  }
}
</script>

<style scoped>
table,td,th
{
  padding: 5px 0;
}
input{
  width: 60%;
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 5px;
  /*padding: 13px 14px;*/
  /*width: 620px;*/
  font-size: 30px;
  font-weight: 700;
  color:darkgreen;
}
.p{
  font-family:Arial, sans-serif;
  /*font-weight: bold;*/
  color: black;
  font-size: large;
}
.right{
  border-color: limegreen;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6)
}
.wrong{
  border-color: darkred;
  outline: 0;
  color:darkred;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(205,50,50,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(205,50,50,.6)
}
.nothing{
  border: 1px solid #ccc;
  outline: 0;
  -webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075),0 0 0px rgba(205,50,50,.6);
  box-shadow: inset 0 0px 0px rgba(0,0,0,.075),0 0 0px rgba(205,50,50,.6)
}
button{
  display: inline-block;
  /*height: 45px;*/
  /*width: 20%;*/
  border-radius: 10px;
  padding: 10px;
  font-size: x-large;
  background: #70e05b;
  color: white;
  border: 1px solid darkgrey;
}
button:hover{
  display: inline-block;
  /*height: 45px;*/
  /*width: 20%;*/
  padding: 10px;
  font-size: x-large;
  background: #44d929;
  color: white;
  border: 1px solid darkgrey;
}
</style>
