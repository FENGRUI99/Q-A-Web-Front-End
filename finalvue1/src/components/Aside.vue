<template>
  <div class="aside">
    <br>
    <AskQuestion></AskQuestion>
    <br>
    <TopContributors></TopContributors>
    <table style="position:fixed;width:100px;height:30px;align:right;top:90%;left:9%">
      <a href="#top">
        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" v-if = this.$store.state.blurConfig.isBlurred circle v-blur = this.$store.getters.getBlur disabled></el-button>
        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" v-if = !this.$store.state.blurConfig.isBlurred circle></el-button>
      </a>
    </table>
  </div>
</template>

<script>
import AskQuestion from './AskQuestion'
import TopContributors from './TopContributors'
export default {
  name: 'Aside',
  components: {
    'AskQuestion': AskQuestion,
    'TopContributors': TopContributors
  }
}
</script>

<style scoped>
.aside{
  width: 29%;
  position: fixed;
  margin-left: 4.5%;
}
.butt{
  margin-left:45%;
  margin-top: 10%;
}
</style>
