<template>
  <div>
<!--    <div class="background1" >-->
<!--      <img :src="imgSrc"  alt="" />-->
<!--    </div>-->
    <div>
      <el-container>
        <el-header height="15px" style="z-index: 999;">
          <header123></header123>
        </el-header>
        <router-view></router-view>
      </el-container>
    </div>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
export default {
  name: 'First',
  components: {
    'header123': RealHead
  },
  getHomepage () {
    this.$router.push({
      path: '/First/homepage'
    })
  },
  getQuestionDetail () {
    this.$router.push({
      path: '/First/ProblemDetailPage/'
    })
  },
  getPersonalDetail () {
    this.$router.push({
      path: '/First/PersonalDetail/'
    })
  }
}
</script>

<style scoped>

</style>
