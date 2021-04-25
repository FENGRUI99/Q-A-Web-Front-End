<template>
  <el-upload
    class="upload-demo"
    action="http://localhost:8080/img"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
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
    handleRemove (file, fileList) {
      console.log(111)
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>

</style>
