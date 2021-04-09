<template>
  <div id="block">
    <div v-for="(item,index) in this.$store.getters.getList" v-bind:key="index">
     <table class="abc">
      <div style="display: inline-block" >
          <p>{{item.question_description}}</p>
          <p>{{item.question_detail}}</p>
        <div style="display: inline-block">
          <p>Posted by {{item.user_id}} 1min ago test test test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
       <span style="position: relative;margin-right: 35px"> <likeTag></likeTag></span>
      </div>
      <div style="display: inline-block">
        <br>
        <el-button plain size="medium">
          <table>
          <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>{{item.likes}}</tr>
          </table>
        </el-button>
        <br>
        <br>
        <el-button type="success" plain size="medium">
          <table>
          <tr>Comments</tr>
          <tr>{{item.number_comment}}</tr>
          </table>
        </el-button>
      </div>
      <br>
      <br>
     </table>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import LikeTag from './LikeTag'

export default {
  name: 'QuestionItem',
  components: {
    'likeTag': LikeTag
  },
  methods: {
    toDetailPage () {
      this.$router.push({
        path: '/ProblemDetailPage',
        name: 'ProblemDetailPage'
      })
    }
  }
}
</script>

<style scoped>
.abc {
  background: #ffffff;
  border-radius: 10px;
  width: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
#block {
  margin: 0;
  width:100%;
}
</style>
