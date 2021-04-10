<template>
  <div style="background: #f6f6f6" >
    <el-container>
      <el-header style="height: 40px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-main>
<!--          问题详情框-->
          <div>
            <table>
              {{item.question_description}}
              <br>
              <span>
                Posted by {{item.user_name}} in {{item.time}}
              </span>
              <br>
              {{item.question_detail}}
            </table>

          </div>
        </el-main>
        <el-footer>
          <footer123></footer123>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import Footer from '../components/Footer'

export default {
  name: 'ProblemDetailPage',
  components: {
    'header123': RealHead,
    'footer123': Footer
  },
  data () {
    return {
      item: this.$route.params.item
    }
  }
}
</script>

<style scoped>

</style>
