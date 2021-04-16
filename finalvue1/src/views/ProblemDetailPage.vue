<template>
  <div style="background: #f6f6f6" >
    <el-container>
      <el-header style="height: 40px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=72%>
          <!--          问题详情框-->

            <table class="intro">
              <tr id="title1">
             {{item.question_description}}
              </tr>
              <tr id="small1" >
              Posted by {{item.user_name}} {{item.time}}
              </tr>
              <tr>
              {{item.question_detail}}
              </tr>
              <span class="butt">
                <td>
            <el-button  @click="liked(item)" plain size="medium" id="likes">
              <i class="el-icon-star-on"></i>
             {{item.likes}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes
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
                type="textarea"
                placeholder="Write your answer here within 200 words"
                v-model="textarea"
                maxlength="200"
                show-word-limit
                resize="none"
                clearable="true"
                rows="4"
              >
              </el-input>

<!--              <input type="text" id="inputValue" value="Write your answer here within 200 words">-->
              <div class="blank"></div>
            <el-button @click="submit" class="butt" type="success" >
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
               <p style="border-bottom: 3px solid #299ec7; ">{{item.commentList.length}} Answers</p>
              </tr>
              <div>
                <div v-if="item.commentList.length >= 1">
                  <div v-for="(comment,index) in item.commentList" v-bind:key="index">
                    <el-tag color="#3bc194" style="color: #fffdfd;font-size: 15px;font-weight: bolder">{{index+1}}</el-tag> -  {{comment.comment_detail}}  ||  --aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    <br>
                    <tr id="small" >Answer by {{comment.user_name}} in aa</tr>
                    <br>
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
        </el-aside>
        <el-container>
        <el-main>
          <table class="aside">
            <div class="blank"></div>
            <div id="relatedQuestions">Related Questions</div>
            <div>
              <p>abc</p>
              <p>abc</p>
              <p>abc</p>
              <p>abc</p>
              <p>abc</p>
              <p>abc</p>
              <p>abc</p>
              <p>abc</p>

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
      textarea: ''
    }
  },
  created () {
    let tmp = sessionStorage.getItem('item')
    this.item = JSON.parse(tmp)
    this.isHidden = this.$route.params.isHidden
    this.axios.post('http://localhost:8080/userLike', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.$store.commit('setLikedList', response.data.entity)
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
      alert(this.$store.getters.getLikedList)
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
        console.log(item.commentList)
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
    }
  }
}
</script>

<style scoped>
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
  padding: 0 2% ;
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
  /*alignment: left;*/
  /*width: 20%;*/
  font-weight: bold;
}

#title{
  font-size: x-large;
  font-weight: bold;
}
#title1{
  font-size: x-large;
  font-weight: bold;
}
.blank{
  height: 10px;
}
#small{
  font-size: x-small;
  padding-right: 120px;
  color:gray;
  font-style: italic;
}
#small1{
  font-size: x-small;
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
}
</style>
