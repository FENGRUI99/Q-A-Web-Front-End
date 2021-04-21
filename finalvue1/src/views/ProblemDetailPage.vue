<template>
  <div>
    <el-container>
      <el-header style="height: 40px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=72%>
          <!--          问题详情框-->

            <table class="intro">
              <div class="blank"></div>
              <tr id="title1">
             {{item.question_description}}
              </tr>
              <div class="blank"></div>
              <tr class="small">
                Posted by <span style="color: #81D454;text-decoration:underline;">{{item.user_name}}</span> {{item.time}}
              </tr>
              <div class="blank"></div>
              <tr>
              {{item.question_detail}}
              </tr>
              <div class="blank"></div>
              <span class="butt">
                <td>
                  <div v-if="item.like_flag === true">
                    <el-button  @click="liked(item)" plain size="medium" id="likes">
                    <i class="el-icon-star-on"></i>
                    {{item.likes}}&nbsp;Likes
                    </el-button>
                  </div>
                  <div v-else>
                    <el-button  @click="liked(item)" plain size="medium">
                      <i class="el-icon-star-off"></i>
                    {{item.likes}}&nbsp;Likes
                    </el-button>
                  </div>
                </td>
                <td>
                <el-button plain size="medium" @click="foldText" type="success">
                  <i class="el-icon-edit"></i>
              &nbsp;&nbsp;Answer &nbsp;&nbsp;
            </el-button>
                </td>
                <td style="width: 30%">
                </td>
                 <td>
                  <table>
                    <td>
                      <el-tag type="success"
                        v-for="tag in setQuestion_tags_en(this.item.question_tags)"
                        :key="tag"
                        effect="plain">
                        {{ tag }}
                      </el-tag>
                    </td>
                  </table>
                </td>
              </span>
            </table>
<!--          -->
<!--          -->
<!--          -->
<!--          -->
          <!--          answer question-->
          <div v-bind:hidden="isHidden">
            <div class="blank"></div>
            <table class="answer">
              <div class="blank"></div>
              <el-input
                type="textarea"
                placeholder="Write your answer here within 200 words"
                v-model="textarea"
                maxlength="200"
                show-word-limit
                resize="none"
                clearable=""
                rows="4"
              >
              </el-input>
              <div class="blank"></div>
            <el-button @click="submit" size="medium" class="butt" style="width: 125px;" type="success" >
              Submit
            </el-button>
              <div class="blank"></div>
            </table>
          </div>
          <br>
          <!--          Comments-->
          <div>
            <!--            {{item}}-->
            <table class="intro">
              <tr id="title">
               <p style="border-bottom: 3px solid #299ec7; ">{{comment_number}} Answers</p>
              </tr>
              <div>
                <div v-if="item.commentList.length >= 1">
                  <div v-for="(comment,index) in item.commentList" v-bind:key="index" >
                    <el-tag color="#81D454" id="tagItem">{{index+1}}</el-tag>
                    <p style="text-align: left;padding-left: 50px">{{comment.comment_detail}}</p>
                    <tr class="small" >Answer by {{comment.user_name}} {{comment.create_time}}</tr>
                  </div>
                </div>
                <div v-else>
                  <div>
                    no commment
                  </div>
                </div>
            </div>
            </table>
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
            <div class="website" v-for="(relevant,index) in this.relevant_question" v-bind:key="index">
              <div v-if="index < 5">
                <div @click="toAnotherQuestion(index)">
                  <li style="cursor: pointer;">{{relevant.question_description}}</li>
                  <div v-if="relevant.commentList === null">
                    <li>wait for your answer</li>
                  </div>
                  <li v-else  class="commit">
                    {{relevant.commentList.length}} Answers
                  </li>
                </div>
                <div class="blank"></div>
                <table style="position:fixed;width:100px;height:30px;align:right;top:90%;right:-2%">
                  <a href="#top">
                    <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" circle></el-button>
                  </a>
                </table>
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
      relevant_question: []
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
    }).catch((response) => {
      console.log(response)
    })
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
      this.submit_flag = true
      this.isHidden = true
      this.myComment = this.textarea
      this.comment_number += 1
      this.textarea = ''
      this.item.commentList.push({ 'comment_id': '-1', 'user_id': sessionStorage.getItem('user_id'), 'user_name': 'me', 'comment_detail': this.myComment, 'question_id': this.item.question_id, 'create_time': 'now' })
      sessionStorage.setItem('item', JSON.stringify(this.item))
      this.axios.post('http://localhost:8080/comment', {
        user_id: sessionStorage.getItem('user_id'),
        user_name: this.user_info.user_name,
        comment_detail: this.myComment,
        question_id: this.item.question_id
      }).then((response) => {
      }).catch((response) => {
        console.log(response)
      })
    },
    liked (item) {
      let list = this.$store.getters.getLikedList
      let flag = false
      for (let i = 0; i < list.length; i++) {
        if (list[i].toString() === item.question_id.toString()) {
          this.$store.commit('changeList', [item.question_id, -1])
          this.$store.commit('changeLikedList', [false, item.question_id])
          this.item.likes -= 1
          flag = true
          this.item.like_flag = false
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
        this.axios.post('http://localhost:8080/like', {
          request: sessionStorage.getItem('user_id') + ' ' + item.question_id,
          msg: 1
        }).then((response) => {
        }).catch((response) => {
          console.log(response)
        })
        this.item.like_flag = true
      }
      sessionStorage.setItem('item', JSON.stringify(this.item))
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
    },
    toAnotherQuestion (index) {
      sessionStorage.setItem('item', JSON.stringify(this.relevant_question[index]))
      location.reload()
    }
  }
}
</script>

<style scoped>
#tagItem{
  color: #fffdfd;
  font-size: 15px;
  font-weight: bolder;
  text-align: left;
  margin: 0 auto;
  /*display: flex;*/
  float: left;
}
.intro{
  border: 1px;
  border-radius: 10px;
  border-color: #cccccc;
  border-style:solid;
  width: 92%;
  margin-left: 8%;
  background: white;
  padding: 0 2% ;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.aside{
  border: 1px;
  border-radius: 10px;
  border-color: #cccccc;
  border-style:solid;
  width: 250px;
  position: fixed;
  background: white;
  padding: 0 1% ;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.intro tr{
  text-align: left;
}
.answer{
  border: 1px;
  border-radius: 10px;
  border-color: #cccccc;
  border-style:solid;
  width: 92%;
  margin-left: 8%;
  background: white;
  padding: 0 2% ;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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

#title{
  font-size: x-large;
  font-weight: bold;
}
#title1{
  font-size: 28px;
  font-weight: bold;
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
}
.website{
  color: #81D454;
  text-align: left;
}
.commit{
  color:gray;
}
li{
  list-style: none;
}
</style>
