<template>
<!--  <div style="display: inline-block">-->
<!--    <el-tag-->
<!--      v-for="tag in tags"-->
<!--      :key="tag.name"-->
<!--      closable-->
<!--      :type="tag.type">-->
<!--      {{tag.name}}-->
<!--    </el-tag>-->
<!--  </div>-->
  <div>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'LikeTag',
  data () {
    return {
      items: [
        { type: 'success', label: 'Software Eng' },
        { type: 'success', label: 'Coding Test' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
