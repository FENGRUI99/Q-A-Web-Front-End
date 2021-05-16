<template>
  <div id="block" >
    <div>  <el-backtop style="background-color: rgba(201,221,245,0.87);color:#72afff;border-radius: 8px"></el-backtop></div>
    <div v-if="this.$store.getters.getIsFind === true">
      <div v-for="(item,index) in this.$store.getters.getList.slice(0, this.count)" v-bind:key="index">
        <table class="abc">
          <td style="width: 100%;">
            <div style="margin: 1% 3%;width: 97%;">
              <li @click="toDetailPage(item)" align="left" id="title" class="Touchable" v-html="item.question_description">{{item.question_description}}</li>
              <li @click="toDetailPage(item)" align="left" >
                <table>
                  <td>
                    <img v-if="getImage(item.question_id) === true"
                         style="width: 100px; height: 100px;vertical-align: text-top;"
                         v-bind:src="'data:image/png;base64,' + pic[item.question_id]"
                    >
                  </td>
                  <td>
                    <!--                  {{item.question_detail.substring(0,200) + '...'}}-->
                    <span v-html="item.question_detail"> {{item.question_detail.substring(0,200) + '...'}}</span>
                  </td>
                </table>
              </li>
              <li style="float: left;">
                <UL class=fm>
                  <LI style="color: gray;font-size: 14px;z-index: 10;"> Posted by <span style="color: #72afff;text-decoration:underline;">{{item.user_name}}</span> {{item.create_time | getTimeFormat}}
                    <ul class="idinfo">
                      <v-card>
                        <v-list-item-content class="justify-center">
                          <div class="mx-auto text-center">
                            <v-avatar
                              color="#72afff"
                              size = "40"
                            >
<!--                              <img-->
<!--                                src="../assets/back.png"-->
<!--                                alt = item.user_name-->
<!--                                size="25"-->
<!--                              >-->
                              <span class="white--text headline">{{item.user_name.substring(0,2)}}</span>
                            </v-avatar>
<!--                            <v-divider class="my-3"></v-divider>-->
                            <h3 style="font-weight: bold">{{item.user_name}}</h3>
                            <p class="caption mt-1">
                              ID: {{ item.user_id }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn
                              depressed
                              rounded
                              text
                              @click="toChat(item.user_id)"
                            >
                              Send Message
                            </v-btn>
<!--                            <v-divider class="my-3"></v-divider>-->
                          </div>
                        </v-list-item-content>
                      </v-card>
<!--                      <li>-->
<!--                        likes: {{item.user_info}}-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        email: {{item.user_mail}}-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        XJTLU student-->
<!--                      </li>-->
                    </ul>
                  </LI>
                </UL>
              </li>
              <li style="text-align: right;float: right;display:inline-block;margin-left: 1%" v-for="tag in setQuestion_tags_en(item.question_tags)"
                  :key="tag"
                  effect="plain">
                <el-tag type="success" style="font-weight: bold;font-family:Helvetica; font-size: 13px;margin-top:-3px; border-radius: 10px;background: white;border-width: 1.5px;border-color: #97b9e7;color: #72afff"
                >  {{ tag }}
                </el-tag>
              </li>
            </div>
          </td>
          <br>
          <div v-bind:key="keyValue">
            <div v-if="item.like_flag === '1'">
              <!--                  <button @click="liked(item)" @onmousedown="mouseDown ('red')" plain size="medium" :class="{like2:button_color===index}" class="like2">-->
              <!--                    <li><i class="el-icon-star-on" style="font-size: 27px;margin:-5%"></i>{{item.likes}}</li>-->
              <!--                  </button>-->
              <a-icon type="like" theme="twoTone" v-show="!isBlur"  @click="liked(item)" two-tone-color="#b20610" style="font-size: large"/>
              {{item.likes}}
              <!--                    <v-btn-->
              <!--                      class="ma-2"-->
              <!--                      text-->
              <!--                      icon-->
              <!--                      color="orange lighten-2"-->
              <!--                      @click="liked(item)"-->
              <!--                      style="margin-top:-5%"-->
              <!--                      v-show="!isBlur"-->
              <!--                    >-->
              <!--                      <v-icon>mdi-thumb-up</v-icon>&nbsp;{{item.likes}}-->
              <!--                    </v-btn>-->
            </div>
            <div v-else>
              <!--                  <button @click="liked(item),gethome()" :class="activeClass ==true?'animate':''" class="bubbly-button">-->
              <!--                    <li><i class="el-icon-star-off" style="font-size: 27px;margin:-5%"></i>{{item.likes}}</li>-->
              <!--                  </button>-->
              <!--                  <v-btn-->
              <!--                    class="ma-2"-->
              <!--                    text-->
              <!--                    icon-->
              <!--                    color="grey lighten-2"-->
              <!--                    @click="liked(item),gethome()"-->
              <!--                    style="margin-top:-5%; z-index: 1"-->
              <!--                    v-show="!isBlur"-->
              <!--                  >-->
              <!--                    <v-icon>mdi-thumb-up</v-icon>&nbsp;{{item.likes}}-->
              <!--                  </v-btn>-->
              <a-icon type="like" theme="twoTone" v-show="!isBlur"  @click="liked(item),gethome()" two-tone-color="#cccccc" style="font-size: large"/>
              {{item.likes}}
            </div>
            <div class="blank"></div>
          </div>
          <br>
          <el-button @click="toDetailPage1(item)" style="background-color: rgba(100,149,237,0.76)" plain size="medium">
            <table>
              <td><i class="el-icon-edit"></i></td>
              <td>{{item.number_comment}}</td>
            </table>
          </el-button>
          <br>
        </table>
        <div style="height: 10px"></div>
      </div>
      <!--        <div v-if="loading.check && this.$store.getters.getList.length > 5" class="abc loadingStyle" id = 'load'>-->
      <!--      Skeleton&SPin-->
      <div class="demo-search-div">

        <v-skeleton-loader
          type="article"
          style="border-radius:10px ;z-index: -1"
          class="abc loadingStyle" id = 'load'

        ></v-skeleton-loader>

      </div>
    </div>
    <div v-else class = "abc loadingStyle">
      there is no questions
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
import localforage from 'localforage'
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
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      flag: false,
      keyValue: 0,
      pic: {},
      tmpValue: null,
      isBlur: false
    }
  },
  beforeUpdate: function () {
    let num = 0
    for (let i = 0; i < this.$store.state.list.length; i++) {
      for (let j = 0; j < this.$store.state.liked_list.length; j++) {
        if (this.$store.state.list[i].question_id.toString() === this.$store.state.liked_list[j]) {
          num += 1
          this.$store.state.list[i].like_flag = '1'
          break
        }
      }
      if (num >= this.$store.state.liked_list.length) {
        break
      }
    }
    this.isBlur = this.$store.state.blurConfig.isBlurred
  },
  created () {
    this.axios.post('http://localhost:8080/listQuestion', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setList', response.data.entity)
      console.log('list is: =  ' + response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
    this.isBlur = this.$store.state.blurConfig.isBlurred
  },
  mounted: function () {
    this.axios.post('http://localhost:8080/UserInfo', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      sessionStorage.setItem('user_info', JSON.stringify(response.data.entity))
    }).catch((response) => {
      console.log(response)
    })
    this.axios.post('http://localhost:8080/userLike', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setLikedList', response.data.entity)
      console.log(response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
    this.axios.post('http://localhost:8080/imglist').then((response) => {
      this.$store.commit('setImgList', response.data.entity)
      sessionStorage.setItem('imglist', JSON.stringify(response.data.entity))
    }).catch((response) => {
      console.log(response)
    })
    window.addEventListener('scroll', this.handleScroll, true)
    // window.addEventListener('mousedown', this.getBlur, true)
    // if (this.keyValue >= 10) {
    //   console.log('refresh finishes')
    //   clearInterval(this.timer)
    // } else {
    //   this.timer = setInterval(() => {
    //     this.refresh()
    //   }, 1000)
    // }
    this.timer = setInterval(this.refresh, 500)
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
    getBlur () {
      this.isBlur = this.$store.state.blurConfig.isBlurred
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
            this.sleep(800)
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
        path: '/First/ProblemDetailPage',
        name: 'ProblemDetailPage',
        params: {
          item: this.item,
          isHidden: false
        }
      })
    },
    // from comment to detail page
    toDetailPage1 (item) {
      this.item = JSON.stringify(item)
      sessionStorage.setItem('item', this.item)
      this.$router.push({
        path: '/First/ProblemDetailPage',
        name: 'ProblemDetailPage',
        params: {
          item: this.item,
          isHidden: true
        }
      })
    },
    liked (item) {
      let likedlist = this.$store.getters.getLikedList
      let flag = false
      for (let i = 0; i < likedlist.length; i++) {
        if (likedlist[i].toString() === item.question_id.toString()) {
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
          localforage.getItem(questionId).then((value) => {
            this.tmpValue = value
            if (value === null) {
              this.axios.post('http://localhost:8080/img', {
                request: questionId
              }).then((response) => {
                this.$set(this.pic, questionId, response.data.entity[0].toString())
                localforage.setItem(questionId, JSON.stringify(response.data.entity))
              }).catch((response) => {
                console.log(response)
              })
            } else {
              this.$set(this.pic, questionId, JSON.parse(this.tmpValue)[0].toString())
            }
          }).catch(function (err) {
            console.log(err)
          })
          return true
        }
      }
      return false
    },
    refresh () {
      if (this.keyValue >= 10) {
        clearInterval(this.timer)
      } else {
        this.keyValue += 1
      }
    },
    GetDateStr (sjStr) {
      var data = new Date().toLocaleDateString()
      var dd = Date.parse(data) / 1000
      console.log(dd)
      console.log(data)
      var iday = Math.floor(parseInt(dd - sjStr) / 60 / 60 / 24)
      if (iday === -1) {
        return 'today'
      } else if (iday === 0) {
        return 'yestoday'
      } else {
        dd = []
        dd = new Date(sjStr * 1000).toLocaleDateString().split('/')
        var y = dd[0]
        var m = dd[1]
        var d = dd[2]
        return y + '-' + this.num(m) + '-' + this.num(d)
      }
    },
    num (s) {
      return s < 10 ? '0' + s : s
    },
    toChat (receiverId) {
      this.$store.commit('changeChatFlag')
      this.$store.commit('setReceiverId', receiverId)
    }
  },
  destroyed () {
    clearInterval(this.timer)
  },
  watch: {
    loading: {
      handler (val, oldVal) {
        this.count += 2
        console.log('count = ' + this.count)
      },
      deep: true
    }
  }
}
</script>
<style scoped>
.demo-search-div{
}

.demo-search-div >>> .v-skeleton-loader__heading{
  height: 25px;
  margin:16px 0 1px 16px;
}
.demo-search-div >>> .v-skeleton-loader__text{
  height: 20px;
  width: 80%;
}
.demo-search-div >>>.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){
  max-width: 75%;
}
.Touchable{
  height: auto;
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
.fm { list-style-type: none;text-align: left;margin-left: -20px}/*设置盒子的行高，去掉标记，设置背景颜色*/
.fm a { text-align:left;}/*设置A标签为块元素不显示，宽度，居中*/
.fm a:hover { color:#CCC;text-decoration:none;font-weight:bold; }  /* 当有鼠标悬停在链接上的颜色 */
.fm li ul {  list-style-type: none; left: -999em;  }
.fm li:hover ul { left: auto; }
.fm li.sfhover ul { left: auto; }
#content { clear: left; }
.idinfo{
  /*border: 1.5px solid #cccccc;*/
  /*border-radius: 10px;*/
  background: none;
  height: auto;
  width: auto;
  position: absolute;
  /*padding: 1% 2%;*/
  margin-left: 0%;
}
.demo-image{
  width: 100px;
  height: 100px;
}
.foreground {
  backdrop-filter: saturate(150%) blur(10px);
  background-color:rgba(50,50,50,0.3);
}
</style>
