<template>
  <div style="background: #f6f6f6;">
    <el-container>
      <el-header style="height: 40px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=72%>
          <!--          问题详情框-->

            <table class="intro">
              <div class="blank"></div>
              <tr id="title1" ><td class="top_chart">{{item.question_description}} ？</td></tr>
              <div class="blank"></div>
              <tr class="small">
                <td class="top_chart">Posted by <span style="color: #81D454;text-decoration:underline">{{item.user_name}}</span> {{item.time}}</td>
              </tr>
              <div class="blank"></div>
              <tr id="detail">
                <td class="top_chart">{{item.question_detail}}</td>
              </tr>
              <div class="blank"></div>
              <span class="butt">
                <td>
            <el-button  @click="liked(item)" plain size="medium" id="likes">
              <i class="el-icon-star-on"></i>
             {{item.likes}}&nbsp;Likes
            </el-button>
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
              <div class="blank"></div>
            <el-button @click="submit" size="medium" class="butt" style="width: 125px;margin-left: 20px" type="success" >
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
              <div v-if="item.commentList.length === 1">
                <div v-if="item.commentList[0].comment_detail === null">
                  <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{comment_number-1}} Answers</p>
                </div>
                <div v-else>
                  <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{comment_number}} Answers</p>
                  <div v-if="item.commentList.length >= 1" style="margin-top:2px ">
                    <div v-for="(comment,index) in item.commentList" v-bind:key="index" >
                      <el-tag color="#81D454" id="tagItem">{{index+1}}</el-tag>
                      <p style="text-align: left;padding-left: 8%;font-size: 18px;margin: 3px">{{comment.comment_detail}}</p>
                      <p class="small2" >Answer by <a style="color: #81D454;font-weight: bold">{{comment.user_name}}</a> in aa</p>
                      <el-divider id="divider"></el-divider>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <p style="border-bottom: 3px solid #299ec7; text-transform: capitalize;font-weight: bolder;font-size: 25px;margin: 10px;text-align: left">{{comment_number}} Answers</p>
                <div v-if="item.commentList.length >= 1" style="margin-top:2px ">
                  <div v-for="(comment,index) in item.commentList" v-bind:key="index" >
                    <el-tag color="#81D454" id="tagItem1">{{index+1}}</el-tag>
                    <p style="text-align: left;padding-left: 8%;font-size: 18px;margin: 3px">{{comment.comment_detail}}</p>
                    <p class="small2" >Answer by <a style="color: #81D454;font-weight: bold">{{comment.user_name}}</a> in aa</p>
                    <el-divider></el-divider>
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
                <div @click="toAnotherQuestion(index)" style="padding-left: 10px">
                  <li style="cursor: pointer;">{{relevant.question_description}}</li>
                  <div v-if="relevant.commentList === null">
                    <li>wait for your answer</li>
                  </div>
                  <li v-else  class="commit">
                    {{relevant.commentList.length}} Answers
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
      if (this.textarea.length === 0) {
        alert('Cannot be null!')
        return null
      }
      this.submit_flag = true
      this.isHidden = true
      this.myComment = this.textarea
      this.comment_number += 1
      this.textarea = ''
      this.item.commentList.push({ 'comment_id': '-1', 'user_id': sessionStorage.getItem('user_id'), 'user_name': 'me', 'comment_detail': this.myComment, 'question_id': this.item.question_id, 'create_time': null })
      sessionStorage.setItem('item', JSON.stringify(this.item))
      this.axios.post('http://localhost:8080/publishComment', {
        user_id: sessionStorage.getItem('user_id'),
        user_name: this.user_info.user_name,
        comment_detail: this.myComment,
        question_id: this.item.question_id
      }).then((response) => {
      }).catch((response) => {
        console.log(response)
      })
      // location.reload()
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
#tagItem1{
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
}
.small2{
  font-size: x-small;
  color:gray;
  font-style: italic;
  padding-left: 500px;
  text-align: right;
  margin-bottom: 10px;
  margin-right: 30px;
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
