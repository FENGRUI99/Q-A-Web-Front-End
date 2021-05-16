<template>
  <div style="background: #f6f6f6;">
    <div class="background1" >
      <img :src="imgSrc"  alt="" />
    </div>
    <el-container style="z-index: 10;position: relative" >
      <el-header style="height: 40px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=72%>
          <!--          问题详情框-->
            <table class="intro">
              <div class="blank"></div>
              <tr id="title1" ><td class="top_chart" v-html="item.question_description">{{item.question_description}} ？</td></tr>
              <tr class="small">
                <td class="top_chart">Posted by <span style="color: #72afff;text-decoration:underline">{{item.user_name}}</span> {{item.create_time | getTimeFormat}}</td>
              </tr>
              <tr id="detail">
                <div v-if="viewAll_flag === false">
                  <td class="top_chart"><span v-html="item.question_detail" >{{item.question_detail.substring(0,40) + '...'}} </span><el-link style="color: #72afff" @click="viewAll" >view all</el-link></td>
                </div>
                <div v-else>
                  <td  class="top_chart" ><span v-html="item.question_detail" >{{item.question_detail}}</span>&nbsp;&nbsp;<el-link  style="color: #72afff" @click="viewAll">fold</el-link></td>
                  <div v-if="pic_flag === true">
                    <div v-for="(picture,pic_index) in pic" v-bind:key="pic_index">
                      <img
                        style="width: 100px; height: 100px;margin-left: 5%"
                        v-bind:src="'data:image/png;base64,' + picture"
                      >
                      <div class="blank"></div>
                    </div>
                  </div>
                </div>
<!--                <div @click="viewAll" style="float:right;">    </div>-->
              </tr>
              <div class="blank"></div>
              <table class="butt" style="width: 90%;margin-left: 3%;">
                <td width="10%">
                  <div v-if="item.like_flag === '1'">
                    <v-btn
                      class="ma-2"
                      text
                      icon
                      color="orange lighten-2"
                      @click="liked(item)"
                      style="margin-top:-5%; z-index: 1"
                    >
                      <v-icon>mdi-thumb-up</v-icon>&nbsp;{{item.likes}}
                    </v-btn>
<!--                    <button @click="liked(item)" @onmousedown="mouseDown ('red')" plain size="medium" :class="{like2:button_color===index}" class="like2">-->
<!--                      <li><i class="el-icon-star-on" style="font-size: 27px;margin:-5%"></i>{{item.likes}}</li>-->
<!--                    </button>-->
                  </div>
                  <div v-else>
<!--                    <button @click="liked(item),gethome()" :class="activeClass ==true?'animate':''" class="bubbly-button">-->
<!--                      <li><i class="el-icon-star-off" style="font-size: 27px;margin:-5%"></i>{{item.likes}}</li>-->
<!--                    </button>-->
                    <v-btn
                      class="ma-2"
                      text
                      icon
                      color="grey lighten-2"
                      @click="liked(item),gethome()"
                      style="margin-top:-5%; z-index: 1"
                    >
                      <v-icon>mdi-thumb-up</v-icon>&nbsp;{{item.likes}}
                    </v-btn>
                  </div>
                </td>
                <td width="20%">
                  <v-row
                  align="center"
                  justify="space-around"
                  >
                    <v-btn
                      @click="foldText"
                      class="ma-2"
                      elevation="3"
                      depressed
                      color=#72afff>
                           Answer
                      <a-icon type="edit" theme="twoTone" two-tone-color="white" />
                    </v-btn>
                  </v-row>
<!--                <el-button plain size="medium" @click="foldText" type="success">-->
<!--                  <i class="el-icon-edit"></i>-->
<!--              &nbsp;&nbsp;Answer &nbsp;&nbsp;-->
<!--            </el-button>-->
                </td>
                <td style="width:35%"></td>
                 <td style="text-align: right;width: 25%; margin-left: 1%" v-for="tag in setQuestion_tags_en(item.question_tags)"
                           :key="tag"
                           effect="plain">
                  <el-tag type="success" style="font-weight: bold;font-size: 13px;margin-top:-3px; border-radius: 10px;background: white;border-width: 1.5px;border-color: #72afff;color: #a5bbd9"
                  >  {{ tag }}
                  </el-tag>
                  </td>
                <div class="blank"></div>
              </table>
            </table>
<!--          -->
<!--          -->
<!--          -->
<!--          -->
          <!--          answer question-->
          <div v-bind:hidden="!isHidden">
            <div class="blank"></div>
            <table class="answer">
              <div class="blank"></div>
              <el-input
                style="padding-left: 10px;padding-right: 5px"
                type="textarea"
                placeholder="Write your answer here within 200 words"
                v-model="textarea"
                maxlength="200"
                show-word-limit
                resize="none"
                clearable=""
                rows="4"
                size="medium"
              >
              </el-input>
              <v-btn
               @click="submit"
                class="ma-2"
                elevation="3"
                depressed
               style="float: left"
                color=#72afff>
                Submit
              </v-btn>
            </table>
          </div>
          <br>
          <!--          Comments-->
          <div>
            <table class="intro">
              <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{item.number_comment}} Answers</p>
              <div v-if="item.number_comment===0">
                <p style="color: grey;font-weight: bold;font-size: 35px">Wait for your Louder Voice . . .</p>
              </div>
              <div v-else>
                <div v-for="(comment, index) in item.commentList" v-bind:key="index">
                  <div v-if="index===item.number_comment-1">
                    <el-tag color="#72afff" class="tagItem1">{{index+1}}</el-tag>
                    <p style="text-align: left;padding-left: 8%;font-size: 18px;margin: 3px">{{comment.comment_detail}}</p>
                    <p class="small2" >Answer by <a style="color: #72afff;font-weight: bold">{{comment.user_name}}</a> {{comment.create_time | getTimeFormat}}</p>
                  </div>
                  <div v-else>
                    <el-tag color="#72afff" class="tagItem1">{{index+1}}</el-tag>
                    <p style="font-family:Helvetica;text-align: left;padding-left: 8%;font-size: 18px;margin: 3px">{{comment.comment_detail}}</p>
                    <p class="small2" >Answer by <a style="color: #72afff;font-weight: bold">{{comment.user_name}}</a> {{comment.create_time | getTimeFormat}}</p>
                    <el-divider></el-divider>
                  </div>
                </div>
              </div>
            </table>
<!--              <div v-if="item.commentList.length === 1">-->
<!--                &lt;!&ndash;no answer remain&ndash;&gt;-->
<!--                <div v-if="item.commentList[0].comment_detail === null">-->
<!--                  <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{comment_number-1}} Answers</p>-->
<!--                  <p style="color: grey;font-weight: bold;font-size: 35px">Wait for your Louder Voice . . .</p>-->
<!--                </div>-->
<!--                &lt;!&ndash;have item&ndash;&gt;-->
<!--                <div v-else>-->
<!--                  <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{comment_number}} Answers</p>-->
<!--                  <div v-if="item.commentList.length >= 1" style="margin-top:2px ">-->
<!--                    <div v-for="(comment,index) in item.commentList" v-bind:key="index" >-->
<!--                      <el-tag color="#72afff" id="tagItem">{{index+1}}</el-tag>-->
<!--                      <p style="text-align: left;padding-left: 8%;font-size: 18px;margin: 3px">{{comment.comment_detail}}</p>-->
<!--                      <p class="small2" >Answer by <a style="color: #72afff;font-weight: bold">{{comment.user_name}}</a> in aa</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div v-else>-->
<!--                <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{comment_number}} Answers</p>-->
<!--                <div v-if="item.commentList.length >= 1" style="margin-top:2px ">-->
<!--                  <div v-for="(comment,index) in item.commentList" v-bind:key="index" >-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--&lt;!&ndash;                <div style="">Waiting for More Louder Voice! </div>&ndash;&gt;-->
<!--              </div>-->
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </el-aside>
        <el-container>
        <el-main>
          <table class="aside">
            <div class="blank"></div>
            <div id="relatedQuestions">Related Questions</div>
            <div class="blank"></div>
            <div class="website" v-for="(relevant, index) in this.relevant_question" v-bind:key="index">
              <div v-if="index < 5">
                <div @click="toAnotherQuestion(index)" style="padding-left: 10px">
                  <li style="cursor: pointer;">{{relevant.question_description}}</li>
                  <div v-if="relevant.commentList === null">
                    <li >wait for your answer</li>
                  </div>
                  <li v-else  class="commit">
                    <div v-if="relevant.number_comment === 0">
                      Wait for your Louder Voice . . .
                    </div>
                    <div v-else>
                      {{relevant.number_comment}} Answers
                    </div>
                  </li>
                </div>
                <div class="blank"></div>
              </div>
            </div>
          </table>
        </el-main>
        <el-footer>
<!--          <footer123></footer123>-->
        </el-footer>
      </el-container>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import Footer from '../components/Footer'
// import localforage from 'localforage'
import localforage from 'localforage'
export default {
  name: 'ProblemDetailPage',
  components: {
    'header123': RealHead,
    'footer123': Footer
  },
  data () {
    return {
      item: {},
      isHidden: true,
      textarea: '',
      myComment: '',
      comment_number: 0,
      user_info: {},
      submit_flag: false,
      relevant_question: [],
      pic: {},
      pic_number: 0,
      pic_flag: false,
      viewAll_flag: false,
      tmpValue: null,
      imgSrc: require('../assets/Image 2021-4-29 at 23.50.jpg')
    }
  },
  created () {
    let tmp = sessionStorage.getItem('item')
    this.item = JSON.parse(tmp)
    let tmp1 = sessionStorage.getItem('user_info')
    this.user_info = JSON.parse(tmp1)
    this.comment_number = this.item.commentList.length
    this.isHidden = this.$route.params.isHidden
    this.axios.post('http://localhost:8080/userLike', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setLikedList', response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
    this.axios.post('http://localhost:8080/relevant', {
      request: this.item.question_tags
    }).then((response) => {
      this.relevant_question = response.data.entity
      console.log('relevant question : ' + response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
  },
  mounted () {
    window.scroll(0, 0)
    this.axios.post('http://localhost:8080/listQuestion', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setList', response.data.entity)
      console.log('list is : ' + response.data.entity)
    }).catch((response) => {
      console.log(response)
    })
    let imgList = JSON.parse(sessionStorage.getItem('imglist'))
    if (imgList === null) {
      this.axios.post('http://localhost:8080/imglist').then((response) => {
        imgList = response.data.entity
      }).catch((response) => {
        console.log(response)
      })
    }
    for (let i = 0; i < imgList.length; i++) {
      if (this.item.question_id === imgList[i].toString()) {
        this.pic_flag = true
        localforage.getItem(this.item.question_id).then((value) => {
          this.pic = JSON.parse(value)
        }).catch(function (err) {
          console.log(err)
        })
        if (this.pic === null) {
          this.axios.post('http://localhost:8080/img', {
            request: this.item.question_id
          }).then((response) => {
            this.pic = response.data.entity
          }).catch((response) => {
            console.log(response)
          })
        }
        this.pic_number = this.pic.length
      }
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
      if (this.textarea.length === 0) {
        alert('Cannot be null!')
        return null
      }
      this.submit_flag = true
      this.isHidden = false
      this.myComment = this.textarea
      this.textarea = ''
      // this.item.commentList.push({'-1': { 'comment_id': '-1', 'user_id': sessionStorage.getItem('user_id'), 'user_name': 'me', 'comment_detail': this.myComment, 'question_id': this.item.question_id, 'create_time': ' ' }})
      this.item.number_comment += 1
      let commentId = -this.item.number_comment
      console.log('comemnt id = ' + commentId)
      this.item.commentList.push({ 'comment_id': commentId.toString(), 'user_id': sessionStorage.getItem('user_id'), 'user_name': 'me', 'comment_detail': this.myComment, 'question_id': this.item.question_id, 'create_time': new Date().getTime() })
      sessionStorage.setItem('item', JSON.stringify(this.item))
      this.axios.post('http://localhost:8080/publishComment', {
        user_id: sessionStorage.getItem('user_id'),
        user_name: this.user_info.user_name,
        comment_detail: this.myComment,
        question_id: this.item.question_id
      }).then((response) => {
        console.log(response.data.code)
      }).catch((response) => {
        console.log(response)
      })
    },
    liked (item) {
      let likedlist = this.$store.getters.getLikedList
      console.log(item.likes)
      let flag = false
      for (let i = 0; i < likedlist.length; i++) {
        if (likedlist[i].toString() === item.question_id.toString()) {
          this.$store.commit('changeList', [item.question_id, -1])
          this.$store.commit('changeLikedList', [false, item.question_id])
          this.item.likes -= 1
          this.item.like_flag = '0'
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
        this.item.likes += 1
        this.item.like_flag = '1'
        this.axios.post('http://localhost:8080/like', {
          request: sessionStorage.getItem('user_id') + ' ' + item.question_id,
          msg: 1
        }).then((response) => {
        }).catch((response) => {
          console.log(response)
        })
      }
      sessionStorage.setItem('item', JSON.stringify(this.item))
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
    gethome () {
      setTimeout(() => {
        this.activeClass = true
      }, 200)
    },
    toAnotherQuestion (index) {
      sessionStorage.setItem('item', JSON.stringify(this.relevant_question[index]))
      location.reload()
    },
    viewAll () {
      if (this.viewAll_flag === false) {
        this.viewAll_flag = true
      } else {
        this.viewAll_flag = false
      }
    }
  }
}
</script>

<style scoped>
.top_chart{
  padding-left: 25px;
}

.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 10px 0;
}
#tagItem{
  color: #fffdfd;
  font-size: 15px;
  font-weight: bolder;
  text-align: left;
  margin: 0 auto;
  /*display: flex;*/
  float: left;
  margin-top: 1%;
  margin-left: 20px;
}
.tagItem1{
  color: #fffdfd;
  font-size: 15px;
  font-weight: bolder;
  text-align: left;
  margin: 0 auto;
  /*display: flex;*/
  float: left;
  margin-top: 1%;
  margin-left: 20px;
}
.intro{
  width: 80%;
  margin-left: 18%;
  background: #ffffff;
  padding: 0 10px ;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1.5px solid ;
  border-radius: 10px;
  border-color: #cccccc;
  border-collapse: separate;
}

.intro tr{
  text-align: left;
}
.aside{
  width: 250px;
  position: fixed;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 0 5px;
  border-collapse: separate;
  border: 1.5px solid #cccccc;
  border-radius: 10px;
}
.answer{
  width: 80%;
  margin-left: 18%;
  background: white;
  padding: 0 2% ;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-collapse: separate;
  border: 1.5px solid #cccccc;
  border-radius: 10px;

}
#inputValue{
  margin-left: -5%;
  width: 95%;
  height:100px;
  margin-top: 2% ;
}
.butt{
  /*margin-left: 1%;*/
  display:block;
  font-weight: bold;
}

#detail{
  font-size: x-large;
  margin:5%;
  font-family: Arial;
  font-size: 16px;
  border-radius:100px;

}
#title1{
  font-size: 1.5em;
  font-weight: bolder;
  text-transform: capitalize;
  font-family:Arial, sans-serif;
  word-spacing: 2px;

}
.blank{
  height: 10px;
}
.small{
  font-size: x-small;
  padding-right: 120px;
  color:gray;
  font-style: italic;
  margin-top: 4px;
  font-family: Helvetica;
}
.small2{
  font-size: x-small;
  color:gray;
  font-style: italic;
  padding-left: 500px;
  text-align: right;
  margin-bottom: 10px;
  margin-right: 30px;
  font-family: Helvetica;
}

#likes{
  border-style: solid;
  border-color: white;
}
#relatedQuestions{
  border: 1px;
  border-color: white white #cccccc white;
  border-style:solid;
  font-size: 20px;
  text-align: left;
  font-family: Helvetica;
}
.website{
  color: #72afff;
  text-align: left;
  font-family: Helvetica;
}
.commit{
  color:gray;
}
li{
  list-style: none;
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
.like2{
  color: #E6A441;
  background-color:white;
  border-style: solid;
  border-color: white;
  font-size: 18px;
}
.background1{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  z-index:0;
  zoom: 0.85;
  /*transform:translatey(50px);*/
  /*background-color: #fff;*/
  /*background-repeat: repeat;*/
  /*background-size: cover;*/
  /*-webkit-background-size: cover;*/
  /*-o-background-size: cover;*/
  /*background-position: center 0;*/
  /*background-size: 100% 100%;*/
  opacity:30%;

}
</style>
