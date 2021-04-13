<template>
  <div id="block" >
    <div v-if="this.$store.getters.getIsFind === true">
      <div v-for="(item,index) in this.$store.getters.getList.slice(0, count)" v-bind:key="index">
        <table class="abc">
          <td>
            <div style="display: block; margin: 0 3%" @click="toDetailPage(item)" >
              <li align="left" id="title">{{item.question_description}}</li>
              <li align="left">{{item.question_detail}}
                this is data for testing  this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
              </li>
              <table style="width: 100%;">
                  <td align="left">Posted by {{item.user_id}} {{item.time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
              <td><likeTag></likeTag></td>
              </table>
            </div>
          </td>
          <td style="padding: 1% 20px">
            <el-button @click="liked(index, item.question_id)" plain size="medium" id="likes">
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes&nbsp;&nbsp;&nbsp;&nbsp; </li>
              <li>{{item.likes}}</li>
            </el-button>
            <br>
            <br>
            <el-button @click="toDetailPage(item)" type="success" plain size="medium">
              <li>Comments</li>
              <li>{{item.number_comment}}</li>
            </el-button>
          </td>
          <br>
          <br>
        </table>
        <div style="height: 10px"></div>
      </div>
      <div class="abc loadingStyle" id = 'load'>
        <div class="animate seven" style="margin: auto;">
          <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
          <span>&nbsp;</span><span>.</span><span>.</span><span>.</span><span>!</span>
          <br>
        </div>
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
      loading: {
        check: false
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
      let loadElement = document.getElementById('load')
      let footerHeight = scrollHeight - loadElement.offsetTop
      if (clientHeight + scrollTop + footerHeight > scrollHeight) {
        this.count += 2
        this.sleep(1000)
        console.log(this.count)
      }
    },
    async sleep (time) {
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
  },
  watch: {
    loading: {
      handler (val, oldVal) {
        console.log(val, oldVal)
        console.log('-----')
        this.count += 2
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.abc {
  background: #ffffff;
  border-radius: 10px;
  width: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.abc td{
  margin: auto;
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
#likes{
  border-style: solid;
  border-color: white;
}
#title{
  font-size: large;
  font-weight: bold;
}
li{
  list-style: none;
}
.blank{
  height: 10px;
}
.animate {
  font-size: xx-large;
  margin: 100px 0 0;
}
.animate span {
  display: inline-block;
}
.animate span:nth-of-type(2) {
  animation-delay: .05s;
}
.animate span:nth-of-type(3) {
  animation-delay: .1s;
}
.animate span:nth-of-type(4) {
  animation-delay: .15s;
}
.animate span:nth-of-type(5) {
  animation-delay: .2s;
}
.animate span:nth-of-type(6) {
  animation-delay: .25s;
}
.animate span:nth-of-type(7) {
  animation-delay: .3s;
}
.animate span:nth-of-type(8) {
  animation-delay: .35s;
}
.animate span:nth-of-type(9) {
  animation-delay: .4s;
}
.animate span:nth-of-type(10) {
  animation-delay: .45s;
}
.animate span:nth-of-type(11) {
  animation-delay: .5s;
}
.animate span:nth-of-type(12) {
  animation-delay: .55s;
}
.animate span:nth-of-type(13) {
  animation-delay: .6s;
}
.animate span:nth-of-type(14) {
  animation-delay: .65s;
}
.animate span:nth-of-type(15) {
  animation-delay: .7s;
}
.animate span:nth-of-type(16) {
  animation-delay: .75s;
}
.animate span:nth-of-type(17) {
  animation-delay: .8s;
}
.animate span:nth-of-type(18) {
  animation-delay: .85s;
}
.animate span:nth-of-type(19) {
  animation-delay: .9s;
}
.animate span:nth-of-type(20) {
  animation-delay: .95s;
}
.seven span {
  color: #1a601f;
  opacity: 1;
  transform: translate(50px, 0) scale(.3);
  animation: leftRight 1s forwards infinite;
}
@keyframes leftRight {
  from {transform: translatex(0);}
  50% {transform: translatex(50px);
  opacity: .5}
  to {transform: translatex(0);}
  /*40% {*/
  /*  transform: translate(50px, 0) scale(.7);*/
  /*  opacity: 1;*/
  /*  color: #1a601f;*/
  /*}*/
  /*60% {*/
  /*  transform: translate(0) scale(1.2);*/
  /*  opacity: 0;*/
  /*}*/
  /*80% {*/
  /*  transform: translate(0) scale(1);*/
  /*  opacity: 1;*/
  /*}*/
}
</style>
