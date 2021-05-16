<template>
  <div>
    <br>
<!--    <ul style="float:left; border: 3px;border-color: white #cccccc white white;border-style:solid;padding-right: 3%; padding-bottom: 15%;text-align: left" class="p">-->
    <li style="float: left;">Student ID&nbsp;&nbsp;</li><div v-show="user_id.length !== 0" style="float: left;" id = idCheck></div><div style="float: left; color: darkred">&nbsp;{{id_alert}}</div>
    <li><el-input @blur="checkDupID" v-model ="user_id" type = "text" id="user_id" name = "user_id" pattern = "^\d{7}$" placeholder="Enter your student ID" required></el-input></li>
<!--    -->
    <li style="float: left; width: 45%"><div style="float: left">Password&nbsp;&nbsp;</div><div style="float: left" v-show="user_pwd.length !== 0" id = pswCheck></div><div style="float: left; color: darkred">&nbsp;{{psw_alert}}</div></li><li style="float: left;width:45%;margin-left: 10%"><div style="float: left">Confirm&nbsp;&nbsp;</div><div v-show="user_pwd1.length !== 0" style="float: left;" id = psw1check></div><div style="float: left; color: darkred">&nbsp;{{psw1_alert}}</div></li>
    <li style="float: left; width: 45%"><el-input v-model ="user_pwd" type="password" id="user_psw" name="user_psw" pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/" placeholder="Password" required></el-input></li>
<!--    -->
    <li style="float: left; width: 45%;margin-left: 10%"><el-input v-model ="user_pwd1" type="password" id="user_psw1" name="user_psw1" placeholder="Type again" required></el-input></li>
    <div style="clear: both"></div>
    <li style="float: left;">Username&nbsp;&nbsp;</li><div style="float: left;" v-show="user_name.length !== 0" id = namecheck></div><div style="float: left; color: darkred">&nbsp;{{name_alert}}</div>
    <li><el-input v-model ="user_name" type="text" id="user_name" name="user_name" pattern = "^[a-zA-Z0-9_-]{4,16}$" placeholder="4-12 letters" required></el-input></li>
    <li style="float: left;">Your Email&nbsp;&nbsp;</li><div style="float: left;" id = mailcheck></div><div style="float: left; color: darkred">&nbsp;{{mail_alert}}</div><div style="clear: both"></div>
    <li style="float: left"><el-input v-model ="user_mail" type="text" id="user_mail" name="user_mail" pattern = "^[a-zA-Z0-9_-]+$" placeholder="Exp xx.xx18" style="width:45%;float: left" required></el-input><span style="float: right;margin-top:5%;text-align: inherit"> @student.xjtlu.edu.cn</span></li>
    <!--    -->
    <li style="float: left;">Verification Code&nbsp;&nbsp;</li><div style="clear: both"></div>
    <li style="float: left; width: 45%"><el-input v-model ="validation" type="text" placeholder="Code" required></el-input></li>
    <li>
      <v-btn v-show = "show"
      color="#72afff"
      @click="sendEmail"
      style="float: right"
    >
      Send Email</v-btn>
      <v-btn v-show = "!show"
             color="#72afff"
             style="float: right"
      disabled>
        {{ count }}s</v-btn>
    </li>
<!--    <li style="float: right; width: 45%; margin-left: 10%"><el-button @click="sendEmail" style="padding: 5px; opacity: 4; font-size: large; margin-top: 5%;border-radius: 2px">&nbsp;send Email&nbsp;</el-button></li><br/>-->
    <li style=" float: left; margin-left: 122%;margin-top: -13%">
        <v-btn
          color="#72afff"
          @click="regiser"
          >
      Sign up</v-btn>
    </li><br/>
<!--    </ul>-->
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
      user_mail: '',
      validation: '',
      show: true,
      count: '',
      timer: null,
      id_alert: '',
      psw_alert: '',
      psw1_alert: '',
      name_alert: '',
      mail_alert: ''
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
    getCode () {
      console.log(1111)
      const TIME_COUNT = 30
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    checkID: function () {
      let id = document.getElementById('idCheck')
      let reg = /^\d{7}$/
      console.log(this.user_id.length)
      if (this.user_id.length === 0) {
        id.className = '-status nothing'
        this.id_alert = ''
      } else if (reg.test(this.user_id)) {
        id.className = '-status correct'
        this.id_alert = ''
      } else {
        this.id_alert = 'not correct format'
        id.className = '-status incorrect'
      }
      this.checkDupID()
    },
    checkDupID: function () {
      if (this.user_id.length !== 0) {
        this.axios.post('http://localhost:8080/checkID', {
          user_id: this.user_id
        }).then((response) => {
          console.log(2122)
          if (response.data.code === '400') {
            // alert('The id has already been used')
            this.id_alert = 'The id has already been used'
            document.getElementById('idCheck').className = '-status incorrect'
          }
        }).catch((response) => {
          console.log(response)
        })
      }
    },
    checkPsw: function () {
      let id = document.getElementById('pswCheck')
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      if (this.user_pwd === this.user_pwd1 && reg.test(this.user_pwd)) {
        document.getElementById('psw1check').className = '-status correct'
      } else if (this.user_pwd1.length !== 0) {
        document.getElementById('psw1check').className = '-status incorrect'
      }
      if (this.user_pwd.length === 0) {
        id.className = '-status nothing'
        this.psw_alert = ''
      } else if (reg.test(this.user_pwd)) {
        this.psw_alert = ''
        id.className = '-status correct'
      } else {
        if (this.user_pwd.length < 8) {
          this.psw_alert = 'too short'
        } else if (this.user_pwd.length > 16) {
          this.psw_alert = 'too long'
        } else {
          this.psw_alert = 'too easy'
        }
        id.className = '-status incorrect'
      }
    },
    checkPsw1: function () {
      let id = document.getElementById('psw1check')
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      if (this.user_pwd1.length === 0) {
        id.className = '-status nothing'
        this.psw1_alert = ''
      } else if (this.user_pwd === this.user_pwd1 && reg.test(this.user_pwd)) {
        id.className = '-status correct'
        this.psw1_alert = ''
      } else {
        if (this.user_pwd1.length < 8) {
          this.psw1_alert = 'too short'
        } else if (this.user_pwd1.length > 16) {
          this.psw1_alert = 'too long'
        } else {
          this.psw1_alert = 'not same'
        }
        id.className = '-status incorrect'
      }
    },
    checkUsername: function () {
      let id = document.getElementById('namecheck')
      let reg = /^[a-zA-Z0-9_-]{4,12}$/
      if (this.user_name.length === 0) {
        id.className = '-status nothing'
        this.name_alert = ''
      } else if (reg.test(this.user_name)) {
        id.className = '-status correct'
        this.name_alert = ''
      } else {
        if (this.user_name.length < 4) {
          this.name_alert = 'too short'
        } else {
          this.name_alert = 'too long'
        }
        id.className = '-status incorrect'
      }
    },
    checkEmail: function () {
      let id = document.getElementById('mailcheck')
      // let reg = ''
      if (this.user_mail.length === 0) {
        console.log(123213)
        id.className = '-status nothing'
      } else if (this.mail_alert.length === 0) {
        id.className = '-status correct'
      } else {
        id.className = '-status incorrect'
      }
    },
    regiser: function () {
      if (this.user_mail.length === 0 || this.validation.length === 0 || this.user_name.length === 0 || this.user_pwd === 0 || this.user_pwd1 === 0 || this.user_id === 0) {
        alert('Please enter all information')
      } else {
        this.axios.post('http://localhost:8080/register', {
          user_id: this.user_id,
          user_mail: this.user_mail + '@student.xjtlu.edu.cn',
          user_name: this.user_name,
          user_psw: this.user_pwd,
          user_tags: this.$store.getters.getUserTags,
          code: this.validation
        }).then((response) => {
          if (response.data.code === '200') {
            this.$router.push({
              name: 'Login'
            })
          } else {
            alert('wrong validation code')
          }
          console.log(response.data.code)
        }).catch((response) => {
          console.log(response)
        })
      }
    },
    sendEmail: function () {
      if (this.user_mail.length > 0) {
        this.axios.post('http://localhost:8080/sendEmail', {
          request: this.user_mail + '@student.xjtlu.edu.cn'
        }).then((response) => {
          console.log(response.data.code)
          if (response.data.code === '400') {
            console.log(11111)
            this.mail_alert = response.data.msg.toString()
          } else {
            this.mail_alert = ''
          }
          this.checkEmail()
        }).catch((response) => {
        })
        const TIME_COUNT = 30
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
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
li{
  margin-bottom: 1%;
}
/*input{*/
/*  width: 100%;*/
/*  outline-style: none ;*/
/*  border: 1px solid #ccc;*/
/*  border-radius: 1px;*/
/*  !*padding: 13px 14px;*!*/
/*  !*width: 620px;*!*/
/*  font-size: 30px;*/
/*  font-weight: 700;*/
/*  color:darkgreen;*/
/*}*/
.p{
  font-family:Arial, sans-serif;
  /*font-weight: bold;*/
  color: black;
  font-size: x-large;
}
.right{
  border-color: limegreen;
  /*outline: 0;*/
  /*-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6);*/
  /*box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6)*/
}
.wrong{
  border-color: darkred;
  /*outline: 0;*/
  /*color:darkred;*/
  /*-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(205,50,50,.6);*/
  /*box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(205,50,50,.6)*/
}
.nothing{
  border: 1px solid #ccc;
  /*outline: 0;*/
  /*-webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075),0 0 0px rgba(205,50,50,.6);*/
  /*box-shadow: inset 0 0px 0px rgba(0,0,0,.075),0 0 0px rgba(205,50,50,.6)*/
}
/*button{*/
/*  display: inline-block;*/
/*  !*height: 45px;*!*/
/*  !*width: 20%;*!*/
/*  border-radius: 0px;*/
/*  padding: 2px;*/
/*  font-size: x-large;*/
/*  background: #70e05b;*/
/*  color: white;*/
/*  border: 1px solid darkgrey;*/
/*}*/
/*button:hover{*/
/*  display: inline-block;*/
/*  !*height: 45px;*!*/
/*  !*width: 20%;*!*/
/*  padding: 10px;*/
/*  font-size: x-large;*/
/*  background: #44d929;*/
/*  color: white;*/
/*  border: 1px solid darkgrey;*/
/*}*/
li{
  list-style: none;
  text-align: left;
  margin-top: -1%;
}
input[type = checkbox]{
  zoom:1%;
  opacity: 0.5;
}
.correct:before {
  content: '\2714';
  color: #008100;
}
.incorrect:before {
  content: '\2716';
  color: #b20610;
}
.nothing:before {
  content: '';
  color: #b20610;
}
</style>
