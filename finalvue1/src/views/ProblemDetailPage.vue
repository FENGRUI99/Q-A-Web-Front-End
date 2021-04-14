<template>
  <div style="background: #f6f6f6" >
    <el-container>
      <el-header style="height: 40px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=70%>
          <!--          问题详情框-->

            <table class="intro">
              <tr id="title">
             {{item.question_description}}
              </tr>
              <tr id="small" >
              Posted by {{item.user_name}} {{item.time}}
              </tr>
              <tr>
              {{item.question_detail}}
                this is data for testing  this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
                this is data for testing this is data for testing this is data for testing
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
                  <likeTag></likeTag>
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
            <input type="text" id="inputValue" value="Write your answer here within 200 words">
              <div class="blank"></div>
            <el-button @click="submit" class="butt" type="success">
              Submit
            </el-button>
              <div class="blank"></div>
            </table>
          </div>
          <!--          Comments-->
          <div>
            <!--            {{item}}-->
            <table>
              {{item}}
              {{item.commentList.length}} Answers
              <br>
              <div v-if="item.commentList.length >= 1">
                <div v-for="(comment,index) in item.commentList" v-bind:key="index">
                  {{index+1}}--{{comment.comment_detail}}--aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  <br>
                  Answer by {{comment.user_name}} in aa
                </div>
              </div>
            </table>
          </div>
        </el-aside>
        <el-container>
        <el-main>
<p>sadasdsadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasds
  sadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdsvvsadasds
  sadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdssadasdss</p>
        </el-main>
        <el-footer>
          <footer123></footer123>
        </el-footer>
      </el-container>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import Footer from '../components/Footer'
import LikeTag from '../components/LikeTag'
export default {
  name: 'ProblemDetailPage',
  components: {
    'header123': RealHead,
    'footer123': Footer,
    'likeTag': LikeTag
  },
  data () {
    return {
      item: {},
      isHidden: true
    }
  },
  created () {
    let tmp = sessionStorage.getItem('item')
    this.item = JSON.parse(tmp)
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
    }
  }
}
</script>

<style scoped>
.intro{
  border: 2px;
  border-radius: 10px;
  border-color: #cccccc;
  border-style:solid;
  width: 80%;

  margin-left: 8%;
  background: white;
  padding: 0 2% ;
}
.intro tr{
  text-align: left;
}
.answer{
  border: 2px;
  border-radius: 10px;
  border-color: #cccccc;
  border-style:solid;
  width: 80%;
  margin-left: 8%;
  background: white;
  padding: 0 2% ;
}
#inputValue{
  margin-left: -5%;
  width: 95%;
  height:100px;
  margin-top: 2% ;
}
.butt{
  /*text-align: left;*/
  margin-left: -1%;
  display:block;
  /*alignment: left;*/
  /*width: 20%;*/
}

#title{
  font-size: x-large;
  font-weight: bold;
}
.blank{
  height: 10px;
}
#small{
  font-size: x-small;
}
#likes{
  border-style: solid;
  border-color: white;
}
</style>
