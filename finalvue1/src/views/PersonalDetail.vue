<template>
  <div style="background: #f6f6f6">
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=40.5%>
<!--           Personal Card-->
        <div class="pCard">
          <div>niubiu</div>
          <div>username</div>
          <div>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <el-divider></el-divider>
          <div>InTerest Tag</div>
        </div>

        </el-aside>
        <el-main width="60%">
          <el-button @click="getQuestion" >queston</el-button>
          <el-button @click="getAnswer">answer</el-button>
          <el-button @click="getLikes ">likes</el-button>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'

export default {
  name: 'PersonalDetail',
  components: {
    'header123': RealHead
  },
  methods: {
    getQuestion () {
      let id = 'question'
      this.$router.push({
        path: `/PersonalDetail/DetailQuestion/${id}`
      })
    },
    getAnswer () {
      let id = 'answer'
      this.$router.push({
        path: `/PersonalDetail/DetailAnswer/${id}`
      })
    },
    getLikes () {
      let id = 'likes'
      this.$router.push({
        path: `/PersonalDetail/DetailLikes/${id}`
      })
    }
  }
}
</script>

<style scoped>
.pCard{
  margin-left: 45%;
  margin-top: 10%;
  background: #ffffff;
  border-radius: 10px;
  width: 40%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 80%;
}
</style>
