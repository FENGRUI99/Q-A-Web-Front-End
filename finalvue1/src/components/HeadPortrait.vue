<template>
  <div style="display: inline-block">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <img style="width: 100px; height: 100px;vertical-align: text-top;"
         v-bind:src="'data:image/png;base64,' + pic[item.question_id]"
    >
  </div>
</template>

<script>
export default {
  name: 'HeadPortrait'
}
</script>

<style scoped>

</style>
