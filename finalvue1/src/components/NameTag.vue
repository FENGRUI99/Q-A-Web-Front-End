<template>
  <div style="display: inline-block">
    <router-link to="/PersonalDetail">
      <table>
        <head-potrait></head-potrait>
        <el-link :underline="false">Username</el-link>
      </table>
    </router-link>
  </div>

</template>

<script>
import HeadPortrait from './HeadPortrait'

export default {
  name: 'NameTag',
  components: {
    'head-potrait': HeadPortrait
  }
}
</script>

<style scoped>

</style>
