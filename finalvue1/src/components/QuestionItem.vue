<template>
  <div id="block" >
    <div v-if="this.$store.getters.getIsFind === true">
      <div v-for="(item,index) in this.$store.getters.getList.slice(0,count)" v-bind:key="index">
        <table class="abc">
          <td>
            <br>
            <div style="display: inline-block; margin: 0 3%" @click="toDetailPage(item)" >
              <p align="left">{{item.question_description}}</p>
              <p align="left">{{item.question_detail}}</p>
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
          <td style="margin-right: 20px">
            <br>
            <el-button @click="liked(index, item.question_id)" plain size="medium">
              <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes&nbsp;&nbsp;&nbsp;&nbsp; </tr>
              <tr>{{item.likes}}</tr>
            </el-button>
            <br>
            <br>
            <el-button @click="toDetailPage(item)" type="success" plain size="medium">
              <tr>Comments</tr>
              <tr>{{item.number_comment}}</tr>
            </el-button>
          </td>
          <td style="width: 10px;"> </td>
          <br>
          <br>
        </table>
        <div style="height: 10px"></div>
      </div>
      <div class="abc loadingStyle" id = 'load'>
        Loading ... {{msg.item}}
      </div>
    </div>
    <div v-else-if="this.$store.getters.getIsFind === false">
      <ul class="notFound">
        <li><p>Youe question cannot be found</p></li>
        <li><p>What about ask a question</p></li>
      </ul>
      <br>
      <img src="../assets/cannotfound.jpg" class="pho">
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
  data () {
    return {
      count: 5,
      msg: {
        item: ''
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll: function () {
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (clientHeight + scrollTop === scrollHeight) {
        this.sleep(1000)
        this.count += 2
      }
    },
    sleep: function (time) {
      let startTime = new Date().getTime() + parseInt(time, 10)
      while (new Date().getTime() < startTime) {
      }
    },
    toDetailPage (item) {
      this.$router.push({
        path: '/ProblemDetailPage',
        name: 'ProblemDetailPage',
        params: {
          item: item
        }
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
.notFound{
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
  font-size: x-large;
}

.notFound li {
  list-style: none;
  margin: 0 20px;
}
.notFound li p{
  alignment: left;
}
.pho{
  width: 50%;
}
.loadingStyle{
  font-size: xx-large;
}
</style>
