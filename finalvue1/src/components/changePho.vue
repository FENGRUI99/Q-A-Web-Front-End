<template>
  <div>
    <v-row >
      <v-avatar
        class="white--text"
        size="65"
        @click="overlay = !overlay"
        style="margin-top: -10%">
        <img style="width: 100px; height: 100px;vertical-align: text-top;"
             v-bind:src="'data:image/png;base64,' + pic"
             alt="../assets/tag1.jpg"
        >
      </v-avatar>
      <v-overlay
        :z-index="zIndex"
        :value="overlay"
      >
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
          :limit="1"
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
        <v-btn
          color= #72afff
          elevation="3"
          @click="submit"
          style="width: 130px;"
        >add</v-btn>
        <v-btn
          color= #72afff
          elevation="3"
          @click="overlay = !overlay"
          style="width: 130px;"
        >close</v-btn>
      </v-overlay>
    </v-row>
  </div>

</template>

<script>
export default {
  name: 'changePho',

  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      pic: '',
      overlay: false,
      zIndex: 999,
      isHidden: true,
      describeIsHidden: false,
      textarea: '',
      text: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      imageUrl: '',
      hideUploadEdit: false, // 隐藏'上传按钮'
      limitNum: 1, // 图片数量
      fileList: [] // 图片列表
    }
  },
  created () {
    this.axios.post('http://localhost:8080/getPhoto', {
      request: sessionStorage.getItem('user_id')
    }).then((response) => {
      this.pic = response.data.entity
    }).catch((response) => {
      console.log(response)
    })
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
      this.overlay = !this.overlay
      this.uploadFile()
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
        formData.append('file', file.raw)
      })
      formData.append('user_id', sessionStorage.getItem('user_id'))
      this.axios.post('http://localhost:8080/Upload', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
        if (res.data.code === '200') {
          this.axios.post('http://localhost:8080/getPhoto', {
            request: sessionStorage.getItem('user_id')
          }).then((response) => {
            this.pic = response.data.entity
          }).catch((response) => {
            console.log(response)
          })
        }
      }).catch(error => {
        alert('更新用户数据失败' + error)
      })
    }
  }
}
</script>

<style scoped>
.fm { list-style-type: none; margin-top: 20px;}/*设置盒子的行高，去掉标记，设置背景颜色*/
.fm a { text-align:center;font-size: 17px;margin-bottom: -8%}/*设置A标签为块元素不显示，宽度，居中*/
.fm a:hover { color:#CCC;text-decoration:none;font-weight:bold; }  /* 当有鼠标悬停在链接上的颜色 */
/*.fm li { float: left; width: 150px; }*/
.fm li ul { line-height: 27px; list-style-type: none;text-align:left; left: -999em;  position: absolute; }
.fm li:hover ul { left: auto; }
.fm li.sfhover ul { left: auto; }
#content { clear: left; }
.idinfo{
  border: 2px solid #cccccc;
  border-radius: 10px;
  background: white;
  height: auto;
  width: auto;
  padding: 5% 10%;
  position: absolute;
  margin-left: -50%;
  margin-top: 5%;
  font-size: 16px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
