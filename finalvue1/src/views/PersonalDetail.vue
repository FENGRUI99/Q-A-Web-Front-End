<template>
  <div style="background: #f6f6f6">
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=35% style="margin-left: 8%;margin-right: 0">
<!--           Personal Card-->
        <div class="pCard">
          <div @click="changeHidden">
            <changePho style="margin-left: 10px;"></changePho>
          </div>
          <!-- Privacy-->
          <br>
          <div>
            <!--email-->
            <div>
              <div class="side">
                <a-icon type="home" theme="twoTone" /> Email:
              </div>
              <div class="sideright">
                {{this.user_info.user_mail}}
              </div>
            </div>
            <!--Id-->
            <div>
              <div class="side">
               <a-icon type="idcard" theme="twoTone" /> Student ID
              </div>
              <div class="sideright">
                <span>{{this.user_info.user_id}}</span>
              </div>
            </div>
<!--            gender-->
            <div>
              <div class="side">
                <a-icon type="team" style="color: #208cf7"/> Gender
              </div>
              <div class="sideright">
                <div v-if="isSex" style="margin-bottom: 5px">
                  <el-input type="text" v-model="sex" size="small"></el-input>
                </div>
                <div v-else @click="clickSex">{{sex}}</div>
              </div>
            </div>
            <!--// age-->
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Age
              </div>
              <div class="sideright">
                <div v-if="isAge" style="margin-bottom: 5px">
                  <el-input type="text" v-model="age" size="small"></el-input>
                </div>
                <div v-else @click="clickAge">{{ age }}</div>
              </div>
            </div>
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Edit pwd
              </div>
              <div class="sideright">link </div>
            </div>
            <!--Usage-->
            <div>
              <div class="side">
                <a-icon type="calendar" theme="twoTone" />   Usage:
              </div>
              <div class="sideright">
                <div>3 mouths</div>
              </div>
            </div>
            <!--Major-->
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Major
              </div>
              <div class="sideright">
                <div v-if="isMajor" style="margin-bottom: 5px">
                  <el-input type="text" v-model="major" size="small"></el-input>
                </div>
                <div v-else @click="clickMajor">{{ major }}</div>
              </div>
            </div>
            <!--degree-->
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Degree
              </div>
              <div class="sideright">
                <div v-if="isDegree" style="margin-bottom: 5px">
                  <el-input type="text" v-model="degree" size="small"></el-input>
                </div>
                <div v-else @click="clickDegree">{{ degree }}</div>
              </div>
            </div>
            <!--Address-->
            <div>
              <div class="side">
                <a-icon type="pushpin" theme="twoTone"/>
                Slogan
              </div>
              <div class="sideright">
                <div v-if="isAddress" style="margin-bottom: 5px">
                  <el-input type="text" v-model="address" size="small"></el-input>
                </div>
                <div v-else @click="clickAddress">{{ address }}</div>
              </div>
            </div>
            <!--intro-->
            <div>
              <div class="side">
                <a-icon type="alert" theme="twoTone" />Introduction
              </div>
              <div class="sideright">
                <div v-if="isIntroduction" >
                  <el-input  type="textarea" :rows="4" v-model="introduction" size="small"></el-input>
                </div>
                <div v-else @click="clickIntro">{{ introduction }}</div>
              </div>
            </div>
            <div v-if="isShowSubmit">
              <el-button @click="save" type="primary" style="margin-top: 3px;color: white">Save</el-button>
              <el-button @click="cancel" type="text" >Cancel</el-button>
            </div>
            <el-divider></el-divider>
            <div>Interest Tag</div>
            <div style="float: left">tag1</div>
            <div style="float: right">tag2</div>
            <div style="height: 10px"></div>
            <el-divider></el-divider>
          </div>
         </div>
        </el-aside>
          <!--<td style="width:35%"></td>
          <td style="text-align: right;width: 25%; margin-left: 1%" v-for="tag in setQuestion_tags_en(item.question_tags)"
              :key="tag"
              effect="plain">
            <el-tag type="success" style="font-weight: bold;font-size: 13px;margin-top:-3px; border-radius: 10px;background: white;border-width: 1.5px;border-color: #A5D6A7;color: #A5D6A7"
            >  {{ tag }}
            </el-tag>
          </td>
          <div class="blank"></div>
          </table>-->
        <el-main width="55%" style="margin-left: -10%; padding-right: 10%">
          <div style="width: 90%; float: left">
            <div style="background-color: #72AFFF;" class="divS">
              <div style="width: 60%; float: left; color: white; font-size: 44px; font-weight: bold;margin-top: 5%; margin-left:5%;text-align: left">Make Your Question Matter.</div>
              <img style="width: 24%; float: right; transform: rotate(30deg); margin: 4% 7% 2% 0%" src="../assets/logo1111.png">
              <div style="clear: both"></div>
            </div>
            <br>
            <div v-if="!isHidden">
            <v-tabs>
              <v-tab @click="getQuestion" style="width: 33%">{{this.user_info.question_sum}} Questions</v-tab>
              <v-tab @click="getAnswer" style="width: 34%">{{this.user_info.comment_sum}} Answers</v-tab>
              <v-tab @click="getLikes" style="width: 33%">{{this.user_info.like_sum}} likes</v-tab>
            </v-tabs>
            </div>
          </div><div style="clear: both"></div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import changePho from '../components/changePho'

export default {
  name: 'PersonalDetail',
  components: {
    'header123': RealHead,
    'changePho': changePho
  },
  data () {
    return {
      nameEditText: 'nameEditText',
      options: [{
        value: '选项1',
        label: 'Female'
      }, {
        value: '选项2',
        label: 'Male'
      }, {
        value: '选项3',
        label: 'Null'
      }],
      value: '',
      isHidden: false,
      user_info: {},
      radio1: '1',
      radio2: '1',
      radio3: '1',
      textarea: '',
      isShowSubmit: false,
      sex: '',
      isSex: false,
      age: 0,
      isAge: false,
      major: '',
      isMajor: false,
      degree: '',
      isDegree: false,
      address: '',
      isAddress: false,
      introduction: '',
      isIntroduction: false
    }
  },
  created () {
    this.user_info = JSON.parse(sessionStorage.getItem('user_info'))
  },
  mounted () {
    this.sex = this.user_info.sex
    this.isSex = false
    this.age = this.user_info.age
    this.isAge = false
    this.major = this.user_info.major
    this.isMajor = false
    this.degree = this.user_info.degree
    this.isDegree = false
    this.address = this.user_info.address
    this.isAddress = false
    this.introduction = this.user_info.introduction
    this.isIntroduction = false
  },
  methods: {
    cancel () {
      this.sex = this.user_info.sex
      this.isSex = false
      this.age = this.user_info.age
      this.isAge = false
      this.major = this.user_info.major
      this.isMajor = false
      this.degree = this.user_info.degree
      this.isDegree = false
      this.address = this.user_info.address
      this.isAddress = false
      this.introduction = this.user_info.introduction
      this.isIntroduction = false
      this.isShowSubmit = false
    },
    save () {
      this.isShowSubmit = false
      this.axios.post('http://localhost:8080/changeInfo', {
        user_id: this.user_info.user_id,
        sex: this.sex,
        age: this.age,
        address: this.address,
        major: this.major,
        degree: this.degree,
        introduction: this.introduction,
        usage_time: '30'
      }).then((response) => {
        if (response.data.code === '200') {
          let user = {
            user_id: this.user_info.user_id,
            user_tags: this.user_info.user_tags,
            user_mail: this.user_info.user_mail,
            user_name: this.user_info.user_name,
            sex: this.sex,
            age: this.age,
            address: this.address,
            degree: this.degree,
            major: this.major,
            introduction: this.introduction,
            usage_time: '30',
            like_sum: this.user_info.like_sum,
            question_sum: this.user_info.question_sum,
            comment_sum: this.user_info.comment_sum
          }
          sessionStorage.setItem('user_info', JSON.stringify(user))
        } else {
          alert('wrong')
        }
        this.isSex = false
        this.isAge = false
        this.isMajor = false
        this.isDegree = false
        this.isAddress = false
        this.isIntroduction = false
      }).catch((response) => {
        console.log(response)
      })
    },
    changeHidden () {
      if (this.isHidden === true) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
    },
    clickIntro () {
      this.isIntroduction = true
      this.isShowSubmit = true
    },
    clickSex () {
      this.isSex = true
      this.isShowSubmit = true
    },
    clickAddress () {
      this.isAddress = true
      this.isShowSubmit = true
    },
    clickAge () {
      this.isAge = true
      this.isShowSubmit = true
    },
    clickDegree () {
      this.isDegree = true
      this.isShowSubmit = true
    },
    clickMajor () {
      this.isMajor = true
      this.isShowSubmit = true
    },
    getQuestion () {
      let id = 'userIDQuestion'
      this.$router.push({
        path: `/PersonalDetail/DetailQuestion/${id}`
      })
    },
    getAnswer () {
      let id = 'userCommentQuestion'
      this.$router.push({
        path: `/PersonalDetail/DetailAnswer/${id}`
      })
    },
    getLikes () {
      let id = 'userLikeQuestion'
      this.$router.push({
        path: `/PersonalDetail/DetailLikes/${id}`
      })
    }
  }
}
</script>

<style scoped>
.side{
  float: left;
  width: 50%;
  text-align: left;
  padding-left: 5px;
  display: inline-block;
  font-weight: bolder;
  font-size: 14px;
  color: #72afff;
  font-family: Helvetica;
}
.sideright{
  width: 50%;
  text-align: left;
  display: inline-block;
}
.pCard{
  margin-left: 5%;
  background: #ffffff;
  border-radius: 10px;
  width: 20%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: #72afff 5px solid;
  position: fixed;
}

.divS{
  border-radius: 10px;
}
button{
  background-color: white;
}
</style>
