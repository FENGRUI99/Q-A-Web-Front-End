<template>
<div>
  <div class="wrapper" v-if = this.$store.state.blurConfig.isBlurred>
    <div class="foreground" style="width: 1000%;margin-left: 0%;margin-top:-10%;height: 800px;float: right;position: absolute"></div>
    </div>
  <el-button type="success"  @click="foldText" id= ask>  <table style="width: 100%" >
    <tr style="font-size:30px; text-align: left"> Add </tr>
    <tr style="font-size:30px;font-weight: bolder"> Questions </tr>
    </table>
  </el-button>
  <ul v-bind:hidden="isHidden" class="askQ" v-blur = false>
<!--      question title-->
      <div>
          <el-input
            type="textarea"
            placeholder="Write your question"
            v-model="textarea"
            maxlength="200"
            show-word-limit
            resize="none"
            clearable=""
            rows="3"
            >
          </el-input>
        <div class="blank"></div>
      </div>
<!--      details about the question-->
      <div v-bind:hidden="describeIsHidden">
          <el-upload
            class=""
            action="#"
            :show-file-list="true"
            :auto-upload="false"
            :on-preview="handlePreview"
            :on-remove="removeFile"
            :file-list="fileList"
            :http-request="uploadFile"
            :on-change="handleChange"
            :on-exceed="handleExceed"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
        <el-select
          filterable
          allow-create
          multiple
          v-model="value" placeholder="Choose">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <li style="text-align: left;">
        <el-button @click="submit" type="primary">ask question</el-button>
      </li>
    </ul>
 <ul>
   <li>
   </li>
 </ul>
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
      text: '',
      fileList: [],
      options: [{
        value: '1',
        label: 'Test & Coursework'
      }, {
        value: '2',
        label: 'Software Engi'
      }, {
        value: '3',
        label: 'Learning Skills'
      }, {
        value: '4',
        label: 'Group Project'
      }, {
        value: '5',
        label: 'Internship'
      }, {
        value: '6',
        label: 'Academic Courses'
      }, {
        value: '7',
        label: 'Career'
      }, {
        value: '8',
        label: 'Life Study Balance'
      }, {
        value: '9',
        label: 'Graduate Application'
      }],
      value: []
    }
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
      if (this.text.length === 0 || this.textarea.length === 0 || this.value.length === 0) {
        alert('Cannot be null')
        return
      }
      this.uploadFile()
    },
    removeFile (file) {
      // 移除文件时，要重新给fileList赋值
      const arr = []
      for (let i = 0; i < this.fileList.length; i++) {
        if (this.fileList[i].uid !== file.uid) {
          arr.push(this.fileList[i])
        }
      }
      this.fileList = arr
    },
    handlePreview (file) {
      console.log(file)
    },
    handleChange (fileList) {
      this.fileList.push(fileList)
    },
    uploadFile () {
      const formData = new FormData()
      // 因为要传一个文件数组过去，所以要循环append
      this.fileList.forEach((file) => {
        formData.append('files', file.raw)
      })
      if (formData.get('files') === null) {
        this.axios.post('http://localhost:8080/publishQuestion', {
          'user_id': sessionStorage.getItem('user_id'),
          'user_name': JSON.parse(sessionStorage.getItem('user_info')).user_name,
          'question_description': this.textarea,
          'question_detail': this.text,
          'question_tags': this.value.toString()
        }).then(res => {
          if (res.data.code === 200) {
            alert('finish')
          }
        }).catch(error => {
          alert('更新用户数据失败' + error)
        })
      } else {
        formData.append('user_id', sessionStorage.getItem('user_id'))
        formData.append('user_name', JSON.parse(sessionStorage.getItem('user_info')).user_name)
        formData.append('question_description', this.textarea)
        formData.append('question_detail', this.text)
        formData.append('question_tags', '1,3')
        this.axios.post('http://localhost:8080/publishQuestionWP', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
          if (res.data.code === 200) {
            alert('finish')
          }
        }).catch(error => {
          alert('更新用户数据失败' + error)
        })
      }
      this.isHidden = true
      this.describeIsHidden = true
      this.blurBackG()
      this.textarea = ''
      this.text = ''
    },
    handleExceed (files, fileList) {
      this.$message.warning('文件个数超出限制')
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
  background: #f6f6f6;
  position: absolute;
  margin-left: 92%;
  margin-top: -70px;
  z-index: 100;
  padding: 5%;
}
li{
  list-style: none;
}
.foreground {
backdrop-filter: blur(10px);
} /* No .wrapper needed! */
.blank{
  height: 10px;
}
.ans{
  border: #f6f6f6 solid 1px;
}
</style>
