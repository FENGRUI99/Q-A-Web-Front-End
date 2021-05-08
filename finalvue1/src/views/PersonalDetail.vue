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
         <!-- Privacy-->
          <br>
          <div style="text-align: left;padding-left: 5px">
            <div>Email</div>
            <div>StudentId</div>
            <div>Gender</div>
            <div>Usage</div>
            <div>Slogan</div>
            <div>Introducrtion</div>
            <el-divider></el-divider>
          </div>
          <div>Interest Tag</div>
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
        </div>

        </el-aside>
        <el-main width="80%">
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
      user_info: {}
    }
  },
  created () {
    this.user_info = JSON.parse(sessionStorage.getItem('user_info'))
  },
  methods: {
    getQuestion () {
      let id = 'question'
      this.$router.push({
        path: `/PersonalDetail/DetailQuestion/${id}`
      })
    },
    getAnswer () {
      let id = 'answer'
      this.$router.push({
        path: `/PersonalDetail/DetailAnswer/${id}`
      })
    },
    getLikes () {
      let id = 'likes'
      this.$router.push({
        path: `/PersonalDetail/DetailLikes/${id}`
      })
    }
  }
}
</script>

<style scoped>
.pCard{
  margin-left: 20%;
  margin-top: 10%;
  background: #ffffff;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: #20caf6 3px solid;
  height: 500px;
}
</style>
