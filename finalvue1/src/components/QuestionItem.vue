<template>
  <div id="block" >
    <div v-for="(item,index) in this.$store.getters.getList" v-bind:key="index">
     <table class="abc">
       <td>
         <br>
      <div style="display: inline-block; margin: 0 3%" @click="toDetailPage" >
          <p align="left">{{item.question_description}}ssssssssss
            ssssssssssssssssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssss</p>
          <p align="left">{{item.question_detail}}sssssssssssssss
            sssssssssssssssssssssssssssssssssss
            sssssssssssssssssssss</p>
   <table style="width: 100%">
     <td>
       <p align="left">Posted by {{item.user_id}} {{item.time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
     </td>
     <td>
         <likeTag></likeTag>
     </td>
     </table>
      </div>
       </td>
        <td style="margin: auto">
          <br>
        <el-button @click="liked(index, item.question_id)" plain size="medium">
          <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>{{item.likes}}</tr>
        </el-button>
        <br>
        <br>
        <el-button @click="toDetailPage" type="success" plain size="medium">
          <tr>Comments</tr>
          <tr>{{item.number_comment}}</tr>
        </el-button>
        </td>
      <br>
      <br>
     </table>
      <div style="height: 10px"></div>
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
    },
    liked (index, questionId) {
      alert(this.$store.commit('getLikeFlag', index) === false)
      if (this.$store.commit('getLikeFlag', index) === false) {
        this.$store.commit('addLike', index, 1)
        this.axios.post('http://localhost:8080/like', {
          request: questionId,
          msg: 1}
        ).then((response) => {
          console.log(response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      } else {
        this.$store.commit('addLike', index, questionId, -1)
        this.axios.post('http://localhost:8080/like', {
          request: questionId,
          msg: -1}
        ).then((response) => {
        }).catch((response) => {
          console.log(response)
        })
      }
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
