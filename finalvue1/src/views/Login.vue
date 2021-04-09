<template>
  <div>
    <el-header>
      <div>
        <RealHead></RealHead>
      </div>
    </el-header>
    <body>

    <!--  <iframe src="/head" width="100%" height="50%" frameborder="0"></iframe>-->
    <div class="side" style="height: 700px"><BR/>
      <div class = "side p" style="width: 70%;line-height:50px;">
        <div style="width: 70%;margin: auto">
          <h2 style="color: forestgreen;line-height:30px;flex-direction: column-reverse" >
            LOG IN
          </h2>
          <div style="width: 50%;float: left">
            <table style="border-right-color: #cccccc;width: 100%">
              <tr><td><div class="link-top" style="line-height:30px;width: 70%" ></div><BR/></td></tr>
              <tr><td>Student ID</td></tr>
              <tr><td><input type="text" required id="id" value=""/></td></tr>
              <tr><td>Password</td></tr>
              <tr><td><input type="password" required="required" id="password" value=""/></td></tr>
            </table>
          </div>
          <div >
            <table style="color: green">
              <tr><td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Louder Slogan !!!!!<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And Ambition !!!!!!<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goes Here !!!!!!!!!!!<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Louder Slogan !!!!!<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goes Here !!!!!!!!!!!<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Louder Slogan !!!!!<br/>
              </td></tr>
            </table>
          </div><br/>
          <div style="clear:both;text-align: center">

            <button style="font-size: large; color: white" v-on:click="toPage">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style="font-size: large; color: white"  v-on:click="toRegister">Sign up</button>

          </div>
          <br/></div>
      </div><br/><br/>
      <iframe src="/foot" width="100%" height="50%" frameborder="0"></iframe>
    </div>
    </body>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import Body from '../components/Body'
export default {
  name: 'Login',
  components: {
    Body, RealHead
  },

  methods: {
    toPage () {
      this.$router.push({
        name: 'HomePage'
      })
      this.$store.commit('setUserId', '1824094')
      this.axios.post('http://localhost:8080/listQuestion', {
        user_id: this.$store.getters.getUserId,
        user_name: '1231'
      }).then((response) => {
        this.$store.commit('setList', response.data.entity)
      }).catch((response) => {
        console.log(response)
      })
    },
    toRegister () {
      this.$router.push({
        path: '/Register',
        name: 'Register'
      })
    }
  }
}

</script>

<style scoped>
.center {
  border-spacing: 20px;
  /*margin:0 auto;*/
  line-height:50px;
  width: 70%;
  border-radius: 10px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.side {
  margin:0 auto;
  width: 98%;
  border: 2px solid darkgrey;
  border-radius: 10px;
}
table,td,th
{
  border:2px solid white;
}
td
{   height: 200%;
  text-align:left;
}
button:hover{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 5px;
  background: limegreen;
  color: white;
}
button{
  border: 1px;
  height: 45px;
  width: 20%;
  border-radius: 5px;
  background: green;
  color: white;
}
input{
  width: 60%;
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 10px;
  /*padding: 13px 14px;*/
  /*width: 620px;*/
  font-size: 30px;
  font-weight: 700;
  color:darkgreen;
}

.p{
  font-family:Arial, sans-serif;
  font-weight: bolder;
  color: black;
  font-size: x-large;

}
input:focus{
  border-color: limegreen;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(50,205,50,.6)

}
input[type = checkbox]{
  zoom:1%;
  opacity: 0.5;
}
.link-top {
  width: 25%;
  height: 1px;
  border-top: solid darkgrey 2px;
}
.link-right {
  width: 50px;
  height: 100%;
  border-right: solid darkgrey 2px;
}
.bord{
  margin:0 auto;
  width: 80%;
  border: 2px solid darkgrey;
  border-radius: 10px;
  font-size: large;
  color: limegreen;
}
</style>
