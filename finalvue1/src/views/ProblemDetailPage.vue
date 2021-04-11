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
            <el-button plain size="medium">
              <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
              <tr>{{item.likes}}</tr>
            </el-button>
            <el-button plain size="medium" @click="foldText">
              <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Answer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
            </el-button>
          </div>
<!--          answer question-->
          <div v-bind:hidden="isHidden">
            <input type="text" value="Write your answer here within 200 words">
            <br>
            <el-button>
              Submit
            </el-button>
          </div>
<!--          Comments-->
          <div>
<!--            {{item}}-->
            <table>
              {{item.commentList.length}} Answers
              <br>
              <div v-if="item.commentList.length >= 1">
                <div v-for="(comment,index) in item.commentList" v-bind:key="index">
                  {{index+1}}--{{comment.comment_dtail}}-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  <br>
                  Answer by {{comment.user_name}} in aa
                </div>
              </div>

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
      item: this.$route.params.item,
      isHidden: true
    }
  },
  methods: {
    foldText () {
      if (this.isHidden === true) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
    },
    submit () {

    }
  }
}
</script>

<style scoped>

</style>
