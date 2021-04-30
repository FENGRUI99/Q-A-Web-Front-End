<template>
  <div>
    <div class="wrapper" v-if = this.$store.state.blurConfig.isBlurred>
      <div class="foreground" style="width: 1000%;margin-top:-10%;height: 2000px;float: right;position: absolute;"></div>
    </div>
    <div class="aside">
    <br>
    <AskQuestion style="padding-left: 5px"></AskQuestion>
    <br>
    <TopContributors v-blur = this.$store.getters.getBlur style="width: 90%;padding-left:60px" ></TopContributors>
    <table style="position:fixed;width:100px;height:30px;align:right;top:90%;left:9%">
      <a href="#top">
        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" v-if = this.$store.state.blurConfig.isBlurred circle v-blur = this.$store.getters.getBlur disabled></el-button>
<!--        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" v- else = !this.$store.state.blurConfig.isBlurred circle></el-button>-->
        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" circle></el-button>
      </a>
    </table>
    </div>
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
.foreground {
  backdrop-filter: saturate(150%) blur(10px);
  background-color:rgba(50,50,50,0.3);
}
</style>
