<template>
  <div style="background: #f6f6f6">
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside>
<!--           Personal Card-->
        <div class="pCard">
          <nameTag style="margin-left: 10px"></nameTag>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            style="margin-left:70%"
          ></el-button>
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
                <div v-if="isEdit">
                  <el-input type="text" v-model="Gender" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ Gender }}</div>
              </div>
            </div>
            <!--// age-->
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Age
              </div>
              <div class="sideright">
                <div v-if="isEdit">
                  <el-input type="text" v-model="age" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ age }}</div>
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
                <div v-if="isEdit">
                  <el-input type="text" v-model="Usgae" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ Usgae }}</div>
              </div>
            </div>
            <!--Major-->
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Major
              </div>
              <div class="sideright">
                <div v-if="isEdit">
                  <el-input type="text" v-model="Major" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ Major }}</div>
              </div>
            </div>
            <!--degree-->
            <div>
              <div class="side">
                <a-icon type="container" theme="twoTone" /> Degree
              </div>
              <div class="sideright">
                <div v-if="isEdit">
                  <el-input type="text" v-model="Degree" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ Degree }}</div>
              </div>
            </div>
            <!--Slogan-->
            <div>
              <div class="side">
                <a-icon type="pushpin" theme="twoTone"/>
                Slogan
              </div>
              <div class="sideright">
                <div v-if="isEdit">
                  <el-input type="text" v-model="Slogan" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ Slogan }}</div>
              </div>
            </div>
            <!--intro-->
            <div>
              <div class="side">
                <a-icon type="alert" theme="twoTone" />Introduction
              </div>
              <div class="sideright">
                <div v-if="isEdit">
                  <el-input  type="textarea" :rows="2" v-model="Introduction" size="small"></el-input>
                  <el-button @click="save" type="text">保存</el-button>
                  <el-button @click="cancel" type="text">取消</el-button>
                </div>
                <div v-else @dblclick="edit">{{ Introduction }}</div>
              </div>
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
        <el-main width="50%" style="margin-left: 10%">
          {{this.user_info.question_sum}}<el-button @click="getQuestion" >queston</el-button>
          {{this.user_info.comment_sum}}<el-button @click="getAnswer">comment</el-button>
          {{this.user_info.like_sum}}<el-button @click="getLikes ">likes</el-button>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'
import NameTag from '../components/NameTag'

export default {
  name: 'PersonalDetail',
  components: {
    'header123': RealHead,
    'nameTag': NameTag
  },
  data () {
    return {
      nameEditText: 'nameEditText',
      Usgae: '3 year',
      Gender: 'Null',
      age: '18',
      Major: 'IMAIS',
      Degree: 'Y3',
      Slogan: 'Loderrrrrr',
      Introduction: '你根本想象不到，鸡胸竟然可以这么好吃？！为什么健身要吃鸡胸？鸡胸到底有哪些我们想象不到的秘密？来看全叔叨一叨~',
      backUp: null,
      isEdit: false,
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
      user_info: {},
      radio1: '1',
      radio2: '1',
      radio3: '1',
      input: '',
      textarea: '',
      flag: 'true'
    }
  },
  created () {
    this.user_info = JSON.parse(sessionStorage.getItem('user_info'))
  },
  methods: {
    cancel () {
      this.newVal = this.backUp
      this.isEdit = false
    },
    edit () {
      // 先让其他的 编辑框为 flase
      this.$parent.$children
        // eslint-disable-next-line eqeqeq
        .filter(item => item.nameEditText === 'nameEditText')
        .forEach(items => {
          items.isEdit = false
        })
      this.isEdit = true
      this.backUp = this.newVal
    },
    save () {
      this.isEdit = false
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
</style>
