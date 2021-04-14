<template>
  <div id="block" >
    <div v-if="this.$store.getters.getIsFind === true">
      <div v-for="(item,index) in this.$store.getters.getList.slice(0, this.count)" v-bind:key="index">
        <table class="abc">
          <td>
            <div style="display: block; margin: 0 3%">
              <li @click="toDetailPage(item)" align="left" id="title">{{item.question_description}}</li>
              <li @click="toDetailPage(item)" align="left">{{item.question_detail}}
              </li>
              <table style="width: 100%;">
                  <td align="left">Posted by {{item.user_id}} {{item.time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
              <td>
                <div>
                  <table>
                    <td>
                      <el-tag type="success"
                        v-for="tag in setQuestion_tags_en(item.question_tags)"
                        :key="tag"
                        effect="plain">
                        {{ tag }}
                      </el-tag>
                    </td>
                  </table>
                </div>
              </td>
              </table>
            </div>
          </td>
          <td style="padding: 1% 20px">
            <el-button @click="liked(item)" plain size="medium" id="likes">
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes&nbsp;&nbsp;&nbsp;&nbsp; </li>
              <li>{{item.likes}}</li>
            </el-button>
            <br>
            <br>
            <el-button @click="toDetailPage1(item)" type="success" plain size="medium">
              <li>Comments</li>
              <li>{{item.number_comment}}</li>
            </el-button>
          </td>
          <br>
          <br>
        </table>
        <div style="height: 10px"></div>
      </div>
      <div v-if="loading.check && this.$store.getters.getList.length > 5" class="abc loadingStyle" id = 'load'>
        <div class="animate seven" style="margin: auto;">
          <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
          <span>&nbsp;</span><span>.</span><span>.</span><span>.</span><span>!</span>
          <br>
        </div>
      </div>
    </div>
    <div v-else-if="this.$store.getters.getIsFind === false">
      <ul class="notFound">
        <li><p>Your question cannot be found</p></li>
        <li><p>What about ask a question</p></li>
      </ul>
      <br>
      <img src="../assets/cannotfound.jpg" class="pho">
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionItem',
  data () {
    return {
      count: 5,
      change: -1,
      loading: {
        check: true
      },
      item: {}
    }
  },
  created () {
    this.axios.post('http://localhost:8080/listQuestion', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setList', response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
    this.axios.post('http://localhost:8080/userLike', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setLikedList', response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll: function () {
      if (this.change === -1) {
        this.change = this.$store.getters.getList.length
      } else if (this.change !== this.$store.getters.getList.length) {
        console.log(this.$store.getters.getList.likeTag)
        this.count = 5
        this.change = this.$store.getters.getList.length
        this.loading.check = true
      }
      if (document.getElementById('load') && this.$store.getters.getList.length > this.count) {
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        let loadElement = document.getElementById('load')
        let footerHeight = scrollHeight - loadElement.offsetTop
        if (clientHeight + scrollTop + footerHeight > scrollHeight) {
          if (this.$store.getters.getList.length > this.count) {
            this.count += 5
            this.sleep(500)
          }
        }
      } else {
        this.loading.check = false
      }
    },
    async sleep (time) {
      let startTime = new Date().getTime() + parseInt(time, 10)
      while (new Date().getTime() < startTime) {
      }
    },
    toDetailPage (item) {
      this.item = JSON.stringify(item)
      sessionStorage.setItem('item', this.item)
      this.$router.push({
        path: '/ProblemDetailPage',
        name: 'ProblemDetailPage',
        params: {
          item: this.item,
          isHidden: true
        }
      })
    },
    // from comment to detail page
    toDetailPage1 (item) {
      this.item = JSON.stringify(item)
      sessionStorage.setItem('item', this.item)
      this.$router.push({
        path: '/ProblemDetailPage',
        name: 'ProblemDetailPage',
        params: {
          item: this.item,
          isHidden: false
        }
      })
    },
    liked (item) {
      let list = this.$store.getters.getLikedList
      let flag = false
      for (let i = 0; i < list.length; i++) {
        if (list[i].toString() === item.question_id.toString()) {
          this.$store.commit('changeList', [item.question_id, -1])
          this.$store.commit('changeLikedList', [false, item.question_id])
          flag = true
          this.axios.post('http://localhost:8080/like', {
            request: sessionStorage.getItem('user_id') + ' ' + item.question_id,
            msg: -1
          }).then((response) => {
          }).catch((response) => {
            console.log(response)
          })
          break
        }
      }
      if (flag === false) {
        this.$store.commit('changeList', [item.question_id, 1])
        this.$store.commit('changeLikedList', [true, item.question_id])
        this.axios.post('http://localhost:8080/like', {
          request: sessionStorage.getItem('user_id') + ' ' + item.question_id,
          msg: 1
        }).then((response) => {
        }).catch((response) => {
          console.log(response)
        })
      }
    },
    setQuestion_tags_en (msg) {
      let tagsList = msg.toString().split(',')
      let ans = []
      for (let i = 0; i < tagsList.length; i++) {
        if (tagsList[i] === '1') {
          ans[i] = 'Test & Coursework'
        } else if (tagsList[i] === '2') {
          ans[i] = 'Software Engi'
        } else if (tagsList[i] === '3') {
          ans[i] = 'Learning Skills'
        } else if (tagsList[i] === '4') {
          ans[i] = 'Group Project'
        } else if (tagsList[i] === '5') {
          ans[i] = 'Internship'
        } else if (tagsList[i] === '6') {
          ans[i] = 'Academic Courses'
        } else if (tagsList[i] === '7') {
          ans[i] = 'Career'
        } else if (tagsList[i] === '8') {
          ans[i] = 'Life Study Balance'
        } else if (tagsList[i] === '9') {
          ans[i] = 'Graduate Application'
        }
      }
      return ans
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
