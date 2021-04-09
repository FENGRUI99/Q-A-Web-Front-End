<template>
  <div id="block" >
    <div v-for="(item,index) in this.$store.getters.getList" v-bind:key="index">
     <table class="abc">
      <div style="display: inline-block" @click="toDetailPage" >
          <p>{{item.question_description}}</p>
          <p>{{item.question_detail}}</p>
        <div style="display: inline-block">
          <p>Posted by {{item.user_id}} 1min ago test test test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
       <span style="position: relative;margin-right: 35px"> <likeTag></likeTag></span>
      </div>
      <div style="display: inline-block">
        <br>
        <el-button @click="liked(index, item.question_id)" plain size="medium">
          <table>
          <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>{{item.likes}}</tr>
          </table>
        </el-button>
        <br>
        <br>
        <el-button @click="toDetailPage" type="success" plain size="medium">
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
