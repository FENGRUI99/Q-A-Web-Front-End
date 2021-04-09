<template>
  <div id="block">
    <div v-for="(item,index) in this.$store.getters.getList" v-bind:key="index">
     <table class="abc">
       <td>
      <div >
          <p>{{item.question_description}}</p>
          <p>{{item.question_detail}}</p>
        <table style="margin: 0 5%;width: 100%;">
         <td> <p>Posted by {{item.user_id}} 1min ago </p></td>
         <td> <likeTag></likeTag></td>
        </table>
    </div>
       </td>
        <br>
       <td>
        <el-button plain size="medium">
          <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>{{item.likes}}</tr>
        </el-button>
        <br>
        <br>
        <el-button type="success" plain size="medium">
          <tr>Comments</tr>
          <tr>{{item.number_comment}}</tr>
        </el-button>
       </td>
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
