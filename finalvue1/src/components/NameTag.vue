<template>
  <div>
    <router-link to="/PersonalDetail">
        <td style="margin-left: -30px;position: absolute;">
          <UL class=fm>
          <LI><A href="#">  <el-avatar :size="30" :src="circleUrl" style="position:absolute;margin-left:25px"></el-avatar>
          </A>
            <ul>
              <li>
                完全显示的头像放在这里
              </li>
            </ul>
          </LI>
        </UL>
        </td>
      <td>
        <ul class=fm>
          <LI><A href="#"> <el-link :underline="false">Username</el-link>
          </A>
            <ul class="idinfo">
              <li>
                name:wahahahaha
              </li>
              <li >
                id:123123123
              </li>
              <li >
                likes:ababab sss
              </li>
              <li >
                XJTLU student
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </router-link>
  </div>

</template>

<script>
import HeadPortrait from './HeadPortrait'

export default {
  name: 'NameTag',
  components: {
    'head-potrait': HeadPortrait
  },
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
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
