<template>
  <div style="display: inline-block">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'LikeTag',
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
