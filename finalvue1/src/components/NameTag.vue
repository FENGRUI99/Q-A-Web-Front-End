<template>
  <div @click="toDetail">
    <table>
      <td style="margin-left: -30px;">
        <UL class=fm>
          <LI><A href="#">
            <div style="display: inline-block">
              <v-avatar style="margin-top: -10%;"   size="36">
                <img style="vertical-align: text-top;"
                     v-bind:src="'data:image/png;base64,' + pic"
                     alt="../assets/tag1.jpg"
                >
              </v-avatar>
            </div>
          </A>
            <ul>
              <li>
                <img style="width: 180px; height: 180px;vertical-align: text-top;position: absolute;margin-left: -350%"
                     v-bind:src="'data:image/png;base64,' + pic"
                     alt="../assets/tag1.jpg"
                >
              </li>
            </ul>
          </LI>
        </UL>
      </td>
      <td>
           <el-link :underline="false">Username</el-link>
      </td>
    </table>
  </div>

</template>

<script>

export default {
  name: 'NameTag',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      pic: ''
    }
  },
  created () {
    this.axios.post('http://localhost:8080/getPhoto', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      console.log('photo length is: ' + response.data.entity.length)
      this.pic = response.data.entity
    }).catch((response) => {
      console.log(response)
    })
  },
  methods: {
    toDetail () {
      let id = 'userIDQuestion'
      this.$router.push({
        path: `/First/PersonalDetail/DetailQuestion/${id}`
      })
    }
  }
}
</script>

<style scoped>
.fm { list-style-type: none; margin-top: 20px;}/*设置盒子的行高，去掉标记，设置背景颜色*/
.fm a { text-align:center;font-size: 17px;margin-bottom: -8%}/*设置A标签为块元素不显示，宽度，居中*/
.fm a:hover { color:#CCC;text-decoration:none;font-weight:bold; }  /* 当有鼠标悬停在链接上的颜色 */
/*.fm li { float: left; width: 150px; }*/
.fm li ul { line-height: 27px; list-style-type: none;text-align:left; left: -999em;  position: absolute; }
.fm li:hover ul { left: auto; }
.fm li.sfhover ul { left: auto; }
#content { clear: left; }
.idinfo{
  border: 2px solid #cccccc;
  border-radius: 10px;
  background: white;
  height: auto;
  width: auto;
  padding: 5% 10%;
  position: absolute;
  margin-left: -50%;
  margin-top: 5%;
  font-size: 16px;
}
</style>
