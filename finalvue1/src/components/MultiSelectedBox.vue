<template>
  <div style="display: inline-block;margin: 0 auto;">
    <span>Sorted by</span>
    <el-select
      v-model="value"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="Likes">
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
