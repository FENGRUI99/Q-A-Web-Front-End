<template>
  <!--  NO USE-->
<div width="100%">
  <div class="wrapper" v-if = this.$store.state.blurConfig.isBlurred>
    <div class="foreground" style="width: 1000%;margin-top:-40%;margin-left:-100%;height: 2000px;float: right;position: absolute;"></div>
    </div>
    <v-btn
      color=  #72afff
      elevation="3"
      @click="foldText"
      x-large
      id="ask">
      <table style="width: 100%;border: #72afff 1px" >
        <tr style="font-size:25px; text-align: left;color: white"> Add </tr>
        <tr style="font-size:25px;font-weight: bolder;border-bottom: 1px;color: white"> Questions </tr>
      </table>
    </v-btn>
  <ul v-bind:hidden="isHidden" class="askQ" v-blur = false>
<!--      question title-->
      <div>
          <el-input
            type="textarea"
            placeholder="Write your question"
            v-model="textarea"
            maxlength="100"
            show-word-limit
            resize="none"
            clearable=""
            rows="3"
            >
          </el-input>
      </div>
<!--      details about the question-->
    <el-collapse-transition>
      <div v-show="describeIsHidden">
        <div style="width: 100%;height: auto;text-align: left">
          <div class="blank"></div>
          <el-upload
            action="#"
            list-type="picture-card"
            :class="{hide:hideUploadEdit}"
            :auto-upload="false"
            :on-preview="handlePreview"
            :http-request="uploadFile"
            :on-change="beforeUpload"
            :on-exceed="handleExceed"
            :file-list="fileList"
            accept="image/png,image/jpg,image/jpeg"
            :on-success="handleAvatarSuccess"
            multiple
            :limit="3"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
            </div>
          </el-upload>
          <el-dialog style="z-index: 10000;" :visible.sync="dialogVisible">
            <el-image width="100%" :src="dialogImageUrl" alt=""></el-image>
          </el-dialog>
          <el-select
            style="width: 88%;"
            multiple
            :multiple-limit=2
            v-model="value" placeholder="Choose">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
<!--          <el-upload-->
<!--            class=""-->
<!--            action="#"-->
<!--            :show-file-list="true"-->
<!--            :auto-upload="false"-->
<!--            :on-preview="handlePreview"-->
<!--            :on-remove="removeFile"-->
<!--            :file-list="fileList"-->
<!--            :http-request="uploadFile"-->
<!--            :on-change="handleChange"-->
<!--            :on-exceed="handleExceed"-->
<!--            list-type="picture">-->
<!--            <table style="width: 200%;margin-left: -45%">-->
<!--              <td style="text-align: left;">-->
<!--                <el-select-->
<!--                  style="width: 88%;"-->
<!--                  multiple-->
<!--                  :multiple-limit=2-->
<!--                  v-model="value" placeholder="Choose">-->
<!--                  <el-option-->
<!--                    v-for="item in options"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value">-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--              </td>-->
<!--              <td style="width: 25%;"><i class="el-icon-picture" style="font-size: 20px;position:relative;"></i></td>-->
<!--              &lt;!&ndash;            <div slot="tip" class="el-upload__tip"> Only .jpg or .png documents，no more than 500kb</div>&ndash;&gt;-->
<!--            </table>-->
<!--          </el-upload>-->
          <div class="blank"></div>
          <el-input
            type="textarea"
            placeholder="Write your description"
            v-model="text"
            maxlength="400"
            show-word-limit
            resize="none"
            clearable=""
            rows="4"
          >
          </el-input>
        </div>
      </div>
    </el-collapse-transition>
    <div class="blank"></div>
    <li style="display: inline-block;">
      <v-btn
        depressed
        elevation="3"
      @click="foldText"
        style="width: 130px;color: grey">close </v-btn>
    </li>
    <li style="display:inline-block;width: 25%;"></li>
    <li style="display: inline-block;">
      <v-btn
        color= #72afff
        elevation="3"
        @click="submit"
        style="width: 130px;"
      >ask question</v-btn>
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
      describeIsHidden: false,
      textarea: '',
      text: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      imageUrl: '',
      hideUploadEdit: false, // 隐藏'上传按钮'
      limitNum: 3, // 图片数量
      fileList: [], // 图片列表
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
    handleRemove (file) {
      if (this.fileList.indexOf(this.baseImg + file.url)) {
        this.fileList.splice(this.fileList.indexOf(this.baseImg + file.url), 1)
      }
      // 删除
      for (let key in file) {
        delete file[key]
      }
    },
    // 这是在用的

    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeUpload (file, fileList) { // 图片状态改变时的钩子
      this.isUpload = 1
      const isImage = file.raw.type === 'image/png' || file.raw.type === 'image/jpg' || file.raw.type === 'image/jpeg'
      const isLt5M = file.size < 1024 * 500
      if (!isImage) {
        this.$message.error('Uploads can only be in PNG, JPG, JPEG format!')
        this.forbidUpload = false
      }
      if (!isLt5M) {
        this.$message.error('Upload image size cannot exceed 500KB!')
        this.forbidUpload = false
      }

      if (isImage && isLt5M) {
        this.forbidUpload = true
        // this.uploadFile = file.raw || null
        this.fileList.push(file)
        console.log('fileList is: ' + fileList)
      } else {
        this.fileList.splice(-1, 1)
      }
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    splitComma () {
      let tagsList = this.value.toString().split(',')
      let ans = ''
      for (let i = 0; i < tagsList.length; i++) {
        ans += tagsList[i] + ' '
      }
      return ans
    },
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
    // removeFile (file) {
    //   // 移除文件时，要重新给fileList赋值
    //   const arr = []
    //   for (let i = 0; i < this.fileList.length; i++) {
    //     if (this.fileList[i].uid !== file.uid) {
    //       arr.push(this.fileList[i])
    //     }
    //   }
    //   this.fileList = arr
    // },
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
          'question_tags': this.splitComma(this.value)
        }).then(res => {
          if (res.data.code === '200') {
            alert('Publish question successfully')
          }
        }).catch(error => {
          alert('更新用户数据失败' + error)
        })
      } else {
        formData.append('user_id', sessionStorage.getItem('user_id'))
        formData.append('user_name', JSON.parse(sessionStorage.getItem('user_info')).user_name)
        formData.append('question_description', this.textarea)
        formData.append('question_detail', this.text)
        formData.append('question_tags', this.splitComma(this.value))
        this.axios.post('http://localhost:8080/publishQuestionWP', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
          if (res.data.code === '200') {
            alert('Publish question successfully')
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
    }
  },
  watch: {
    textarea: {
      handler () {
        if (this.textarea.length === 0) {
          this.describeIsHidden = false
        } else {
          this.describeIsHidden = true
        }
      }
    }
  }
}
</script>

<style scoped>
#ask{
  margin: auto;
  width: 65%;
  height: 100px;
  font-size:27px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  font-style: italic;
  font-weight: bolder;
  border: white 1px solid;
  border-radius: 10px;
}
.askQ{
  width: 160%;
  background: #f6f6f6;
  position: absolute;
  margin-left: 92%;
  margin-top: -100px;
  border-radius: 10px;
  z-index: 999;
  padding: 5%;
  box-shadow:5px 5px 10px #797676
}
li{
  list-style: none;
}
.foreground {
  backdrop-filter: saturate(150%) blur(10px);
  background-color:rgba(50,50,50,0.3);
} /* No .wrapper needed! */
.blank{
  height: 10px;
}
.ans{
  border: #f6f6f6 solid 1px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #5579a7;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.tag{
  width: 100%;
}
</style>
