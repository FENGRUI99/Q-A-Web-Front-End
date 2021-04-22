<template>
<div>
  <el-button type="success"  @click="foldText" id= ask >
    <table style="width: 100%">
    <tr style="font-size:30px; text-align: left"> Add </tr>
    <tr style="font-size:30px;font-weight: bolder"> Questions </tr>
    </table>
  </el-button>
  <div v-bind:hidden="isHidden" class="askQ" >
    <ul style="margin:0 auto;width: 80%">
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
        <li>
          <el-input
            type="textarea"
            placeholder="Write your description"
            v-model="text"
            maxlength="200"
            show-word-limit
            resize="none"
            clearable=""
            rows="2"
          >
          </el-input>
        </li>
      </div>
      <li>
        <el-button type="primary">ask question</el-button>
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
  methods: {
    foldText () {
      if (this.isHidden === true) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
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
</style>
