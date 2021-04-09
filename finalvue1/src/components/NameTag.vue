<template>
  <div>
    <router-link to="/PersonalDetail">
      <table>
        <tr>
        <head-potrait></head-potrait>
        </tr>
        <tr>
        <el-link :underline="false">Username</el-link>
        </tr>
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
