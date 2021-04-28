<template>
  <div id="block" style="z-index: -100" >
    <div v-if="this.$store.getters.getIsFind === true">
      <div v-for="(item,index) in this.$store.getters.getList.slice(0, this.count)" v-bind:key="index">
        <table class="abc">
          <td>
            <div style="display: block; margin: 0 1%">
              <li @click="toDetailPage(item)" align="left" id="title" class="Touchable">{{item.question_description}}</li>
              <li @click="toDetailPage(item)" align="left" class="Touchable">{{item.question_detail}}</li>
              <div class="demo-image" v-if="getImage(item.question_id) === true">
                <el-image
                  style="width: 400px; height: 200px"
                  v-bind:src="'data:image/png;base64,' + pic[item.question_id]"
                ></el-image>
              </div>
              <table style="width: 100%; padding-top: 10px" align="left" >
                <td style="width: 50%;">
                <UL class=fm>
                  <LI style="text-align: left; color: gray;font-size: 14px;margin-left: -10%;z-index: 10;"> Posted by <span style="color: #81D454;text-decoration:underline;">{{item.user_name}}</span> {{item.time}}
                    <ul class="idinfo">
                      <li >
                        id: {{ item.user_id }}
                      </li>
                      <li >
                        likes: {{item.user_info}}
                      </li>
                      <li>
                        email: {{item.user_mail}}
                      </li>
                      <li >
                        XJTLU student
                      </li>
                    </ul>
                  </LI>
                </UL>
                </td>
                <td style="width: 30%;text-align: right;padding-bottom: 10px;margin-top: -50px" v-for="tag in setQuestion_tags_en(item.question_tags)"
                    :key="tag"
                    effect="plain">
                  <el-tag type="success" style="font-weight: bold;font-size: 13px;text-align: left;margin-top: 5px;border-radius: 10px;background: white;border-width: 1.5px;border-color: #81D454;"
                  >  {{ tag }}
                  </el-tag>
                </td>
              </table>
            </div>
          </td>
          <td style="padding: 1% 20px 1% 0;">
            <div v-if="item.like_flag === true">
              <button @click="liked(item)" @onmousedown="mouseDown ('red')" plain size="medium" :class="{like2:button_color===index}" class="like2">
                <br>
                <li><i class="el-icon-star-on" style="font-size: 27px;margin:-5%"></i>{{item.likes}}</li>
              </button>
              <!--                <el-button @click="liked(item)" @ onmouseover="mouseDown ('red')" plain size="medium" id="likes" type="warning" :class="{like2:button_color===index}" class="like2">-->
              <!--                  <li><i class="el-icon-star-on"></i>-->
              <!--                  &nbsp;Likes&nbsp; </li>-->
              <!--                  <li>{{item.likes}}</li>-->
              <!--                </el-button>-->
            </div>
            <div v-else>
              <button @click="liked(item),gethome()" :class="activeClass ==true?'animate':''" class="bubbly-button">
               <br>
                <li><i class="el-icon-star-off" style="font-size: 27px;margin:-5%"></i>{{item.likes}}</li>
              </button>
              <!--                <el-button @click="liked(item)" plain size="medium"  >-->
              <!--                  <li> <i class="el-icon-star-off"></i>-->
              <!--                  &nbsp;Likes&nbsp; </li>-->
              <!--                  <li>{{item.likes}}</li>-->
              <!--                </el-button>-->
            </div>
            <br>
            <el-button @click="toDetailPage1(item)" type="success" plain size="medium">
              <li>Comments</li>
              <div v-if="item.commentList.length === 1">
                <div v-if="item.commentList[0].comment_detail === null">
                  <li>{{0}}</li>
                </div>
                <div v-else>
                  <li>{{item.commentList.length}}</li>
                </div>
              </div>
              <div v-else>
                <li>{{item.commentList.length}}</li>
              </div>
            </el-button>
          </td>
          <br>
          <br>
        </table>
        <div style="height: 10px"></div>
      </div>
      <!--        <div v-if="loading.check && this.$store.getters.getList.length > 5" class="abc loadingStyle" id = 'load'>-->

      <div style="margin-left:5px "><a-skeleton :paragraph="{ rows: 3 ,width: [650,650,200]}" :title="{width: 450}" loading active style="padding-left: 5px;border-radius:10px " class="abc loadingStyle" id = 'load'/></div>
        <a-progress
        :stroke-color="{
        '0%': '#a9e7dd',
        '100%': '#87d068',
      }"
        :percent="60"
        status="active"
      />

    </div>
    <div v-else class = "abc loadingStyle">
      到底啦
    </div>
    <div v-if="this.$store.getters.getIsFind === false">
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
      item: {},
      button_color: ' ',
      activeClass: false,
      pic: {},
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      flag: false
    }
  },
  beforeUpdate: function () {
    let num = 0
    for (let i = 0; i < this.$store.state.list.length; i++) {
      for (let j = 0; j < this.$store.state.liked_list.length; j++) {
        if (this.$store.state.list[i].question_id.toString() === this.$store.state.liked_list[j]) {
          num += 1
          this.$store.state.list[i].like_flag = true
          break
        } else if (this.$store.state.list[i].like_flag === true) {
          this.$store.state.list[i].like_flag = false
        }
      }
      if (num >= this.$store.state.liked_list.length) {
        break
      }
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
    this.axios.post('http://localhost:8080/imglist').then((response) => {
      this.$store.commit('setImgList', response.data.entity)
      console.log(response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    mouseOver () {
      this.active = 'background-color:black'
      // get and change label P
      var acps = this.$refs.Self.innerText
      acps.style.color = 'red'
    },
    mouseLeave () {
      this.active = ''
      this.$refs.acp.style = ''
    },
    handleScroll: function () {
      if (this.change === -1) {
        this.change = this.$store.getters.getList.length
      } else if (this.change !== this.$store.getters.getList.length) {
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
      let tagsList = msg.toString().split(' ')
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
    },
    mouseDown (index) {
      this.button_color = index
    },
    gethome () {
      setTimeout(() => {
        this.activeClass = true
      }, 200)
    },
    getImage (questionId) {
      let imgList = this.$store.getters.getImgList
      for (let i = 0; i < imgList.length; i++) {
        if (questionId === imgList[i].toString()) {
          console.log(questionId + 'yes')
          this.axios.post('http://localhost:8080/img', {
            request: questionId
          }).then((response) => {
            this.$set(this.pic, questionId, response.data.entity[0].toString())
          }).catch((response) => {
            console.log(response)
          })
          return true
        }
      }
      return false
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

.Touchable{
  cursor: pointer;
}
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
  text-transform: capitalize;
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
.like2{
  color: #E6A441;
  background-color:white;
  border-style: solid;
  border-color: white;
  font-size: 18px;
  margin-bottom: -5%;
}
.bubbly-button {
  margin-top: 0%;
  margin-bottom: -5%;
  color: black;
  background-color: white;
  border-style: solid;
  border-color: white;
  font-size: 18px;
}
.bubbly-button:active {
  transform: scale(0.9);
  color: #dd4d24;
}
.fm { list-style-type: none;text-align: left;}/*设置盒子的行高，去掉标记，设置背景颜色*/
.fm a { text-align:left;}/*设置A标签为块元素不显示，宽度，居中*/
.fm a:hover { color:#CCC;text-decoration:none;font-weight:bold; }  /* 当有鼠标悬停在链接上的颜色 */
.fm li ul {  list-style-type: none; left: -999em;  }
.fm li:hover ul { left: auto; }
.fm li.sfhover ul { left: auto; }
#content { clear: left; }
.idinfo{
  border: 1.5px solid #cccccc;
  border-radius: 10px;
  background: white;
  height: auto;
  width: auto;
  position: absolute;
  padding: 1% 2%;
  margin-left: 0%;
}
</style>
