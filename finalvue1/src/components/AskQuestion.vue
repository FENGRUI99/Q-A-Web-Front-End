<template>
<div>
  <el-button type="success"  @click="foldText" id= ask v-blur = this.$store.getters.getBlur>
    <table style="width: 100%" >
    <tr style="font-size:30px; text-align: left"> Add </tr>
    <tr style="font-size:30px;font-weight: bolder"> Questions </tr>
    </table>
  </el-button>
  <div v-bind:hidden="isHidden" class="askQ" v-blur = false style="position: absolute;z-index: 100;">
    <ul style="margin:0 auto;width: 80%; ">
<!--      question title-->
      <div>
        <li>
          <el-input
            type="textarea"
            placeholder="Write your question"
            v-model="textarea"
            maxlength="200"
            show-word-limit
            resize="none"
            clearable=""
            rows="4"
            >
          </el-input>
        </li>
      </div>
<!--      details about the question-->
      <div v-bind:hidden="describeIsHidden">
        <div>
          <uploadPic></uploadPic>
        </div>
        <li>
          <el-input
            type="textarea"
            placeholder="Write your description"
            v-model="text"
            maxlength="200"
            show-word-limit
            resize="none"
            clearable=""
            rows="3"
          >
          </el-input>
        </li>
      </div>
      <li>
        <el-button @click="submit" type="primary">ask question</el-button>
      </li>
    </ul>

 <ul>
   <li>

   </li>
 </ul>
  </div>
</div>
</template>

<script>
import uploadPic from './uploadPic'

export default {
  name: 'AskQuestion',
  data () {
    return {
      isHidden: true,
      describeIsHidden: true,
      textarea: '',
      text: ''
    }
  },
  components: {
    'uploadPic': uploadPic
  },
  methods: {
    foldText () {
      if (this.isHidden === true) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
      this.blurBackG()
    },
    blurBackG () {
      this.$store.commit('setBlur')
    },
    submit () {
      this.axios.post('http://localhost:8080/publishQuestion', {
        user_id: sessionStorage.getItem('user_id'),
        user_name: JSON.parse(sessionStorage.getItem('user_info')).user_name,
        question_description: this.textarea,
        question_detail: this.text,
        question_tags: '1,3'
      }).then((response) => {
        console.log(response.data.code)
      }).catch((response) => {
        console.log(response)
      })
      this.isHidden = true
      this.describeIsHidden = true
      this.blurBackG()
      this.textarea = null
      this.text = null
    }
  },
  watch: {
    textarea: {
      handler () {
        if (this.textarea.length === 0) {
          this.describeIsHidden = true
        } else {
          this.describeIsHidden = false
        }
      }
    }
  }
}
</script>

<style scoped>
#ask{
  margin: auto;
  width: 50%;
  font-size:27px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  color: white;
  font-style: italic;
  font-weight: bolder;

}
.askQ{
  width: 150%;
  background: #dde7db;
  position: absolute;
  margin-left: 92%;

}
li{
  list-style: none;
}
.blur{
  -webkit-filter: blur(5px); /* Chrome, Opera */

  -moz-filter: blur(5px);

  -ms-filter: blur(5px);

  filter: blur(5px);
}
</style>
