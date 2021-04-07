<template>
  <div style="display: inline-block">
    <el-select
      v-model="value"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>

</template>

<script>
export default {
  name: 'MultiSelectBox',
  data () {
    return {
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value: []
    }
  }
}
</script>

<style scoped>

</style>
