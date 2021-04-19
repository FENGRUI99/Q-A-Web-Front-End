<template>
  <div>
    <el-header>
      <div>
        <RealHead></RealHead>
      </div>
    </el-header>
    <body>

    <div class="side"><BR/>
      <div class = "side center p" style="width: 70%; flex-direction: column">
        <div style="width: 90%">
          <form id="form">
            <h2 style="color: forestgreen;line-height:30px;" >
              SIGN UP
            </h2>
            <div class="link-top" style="line-height:30px;" ></div>
            <table style="text-align: right;table-layout: fixed">
              <tr><p>
                <td colspan="2" ><span>Username: </span></td>
                <td colspan="2" style= "border-right-color:darkgrey;"><span>Your Email: </span></td>  <div class="link-right" ></div>
                <div colspan="2" style="margin: 0 auto" >&nbsp;Interest Tags</div>
              </tr>
              <tr><p>
                <td colspan="2"><input type="text" id="user_name" name="user_name" required></td><td colspan="2" style= "border-right-color:darkgrey;"><input type="text" id="user_mail" name="user_mail" required></td>
                <td><div id="div1" class="bord">
                  &nbsp;&nbsp;&nbsp;java&nbsp;&nbsp;&nbsp;&nbsp;
                </div></td>
                <td><div id="div2" class="bord">&nbsp;&nbsp;python&nbsp;&nbsp;&nbsp;&nbsp;</div></td>
              </tr>

              <tr><p>
                <td colspan="2"><span>Password: </span></td><td colspan="2" style= "border-right-color:darkgrey;"><span>Student ID: </span></td>
                <td><div id="div3" class="bord">&nbsp;&nbsp;&nbsp;C++&nbsp;&nbsp;&nbsp;</div></td>
              </tr>
              <tr><p>
                <td colspan="2"><input type="password" id="user_psw" name="user_psw" required></td><td colspan="2" style= "border-right-color:darkgrey;"><input type="text" id="user_id" name="user_id" onblur="checkID()" required></td>
              </tr>
              <tr><p>
                <td colspan="4" style= "border-right-color:darkgrey;"><span>Double check: </span></td>
              </tr>
              <tr>
                <p><td colspan="4"><input type="password" id="user_psw1" name="user_psw1" required style="width: 30%"></td>
              </tr>
              <!--        <tr><p>-->
              <!--            <td colspan="2" style="text-align: center" >-->
              <!--            <span>Select tags: </span>-->
              <div style="position: absolute">
                <input type="checkbox" value="1" id = "checkbox1" name="user_tags"  style="display: none">
                <input type="checkbox" value="2" id = "checkbox2" name="user_tags" style="display: none">
                <input type="checkbox" value="3"  id = "checkbox3" name="user_tags" style="display: none">
              </div>
              <!--            </td>-->
              <!--        </p></tr>-->
            </table>
          </form>
        </div>
        <p style="width: 90%; margin: 0 auto">
          <button style="font-size: large; color: white" onclick="submit()" class="p">sign up</button>
          <button style="font-size: large; color: white" onclick="back()" v-on:click="toLog" class="p">back</button>
        </p>
        <br/>
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
  name: 'register',
  components: {
    Body, RealHead
  },
  methods: {
    toLog () {
      this.$router.push({
        name: 'Login'
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
