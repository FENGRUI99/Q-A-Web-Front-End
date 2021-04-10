<template>
  <div>
    <router-link to="/PersonalDetail">
      <table>
        <tr>
          <el-avatar :size="30" :src="circleUrl"></el-avatar>
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
  },
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style scoped>

</style>
