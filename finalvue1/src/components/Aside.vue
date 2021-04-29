<template>
  <div class="aside">
    <br>
    <AskQuestion style="padding-left: 5px"></AskQuestion>
    <br>
    <TopContributors v-blur = this.$store.getters.getBlur style="width: 90%;padding-left:60px" ></TopContributors>
<!--    <table class="goTop" style="position:fixed;width:100px;height:30px;align:right;top:90%;left:9%">-->
<!--      <a href="#top">-->
<!--        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" v-if = this.$store.state.blurConfig.isBlurred circle v-blur = this.$store.getters.getBlur disabled></el-button>-->
<!--&lt;!&ndash;        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" v- else = !this.$store.state.blurConfig.isBlurred circle></el-button>&ndash;&gt;-->
<!--        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" circle></el-button>-->
<!--      </a>-->
<!--      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
<!--    </table>-->
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
  width: 28%;
  position: fixed;
  margin-left: 3.5%;
}
.butt{
  margin-left:55%;
  margin-top: 10%;
}
.goTop{
  height: 100vh;
  overflow-x: hidden;
}
</style>
