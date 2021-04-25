<template>
  <div>
    <el-upload
      class="upload-demo"
      action=""
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-change="change"
      :http-request="uploadFile"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <button @click="uploadFile">click</button>
  </div>
</template>

<script>
export default {
  name: 'uploadPic',
  data () {
    return {
      length: 0,
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      // console.log(file, fileList)
      console.log(typeof file)
    },
    handlePreview (file) {
      // console.log(file)
      console.log(file)
    },
    change () {
      this.length = document.querySelector('input[type=file]').files.length
      if (this.length > 0) {
        Array.from(document.querySelector('input[type=file]').files).forEach(file => {
          if (this.fileList.indexOf(file) === -1) {
            this.fileList.push(file)
          }
        })
      }
      return false
    },
    uploadFile (content) {
      let formData = new FormData()
      if (this.fileList.length > 0) {
        this.fileList.forEach(file => {
          formData.append('files', file)
        })
        if (formData.getAll('files').length === this.length && this.length > 0) {
          console.log(formData.getAll('files'))
          let _url = 'http://localhost:8080/img'
          this.axios({
            url: _url,
            method: 'post',
            data: formData
          }).then((res) => {
            this.fileList = []
            if (res.data.ok === true) {
              this.$message.success(`成功`)
            } else {
              this.$message.success(`失败`)
            }
            // eslint-disable-next-line handle-callback-err
          }, (err) => {
            this.fileList = []
            this.$message.success(`失败`)
          })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
