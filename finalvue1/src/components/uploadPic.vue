<template>
  <div>
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
    <button @click="uploadFile">click</button>
  </div>
</template>

<script>

export default {
  name: 'uploadPic',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    removeFile (file) {
      // 移除文件时，要重新给fileList赋值
      const arr = []
      for (let i = 0; i < this.fileList.length; i++) {
        if (this.fileList[i].uid !== file.uid) {
          arr.push(this.fileList[i])
        }
      }
      this.fileList = arr
      this.$store.commit('setFormData', this.fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleChange (fileList) {
      this.fileList.push(fileList)
      this.$store.commit('setFormData', this.fileList)
    },
    uploadFile () {
      if (this.fileList.length === 0) {
        this.$message.warning('请选取文件')
        return
      }
      const formData = new FormData()
      // 因为要传一个文件数组过去，所以要循环append
      this.fileList.forEach((file) => {
        formData.append('files', file.raw)
      })
      this.axios.post('http://localhost:8080/img', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      }).catch(error => {
        alert('更新用户数据失败' + error)
      })
    },
    handleExceed (files, fileList) {
      this.$message.warning('文件个数超出限制')
    }
  }
}
</script>

<style scoped>

</style>
