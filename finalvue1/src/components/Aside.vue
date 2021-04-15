<template>
  <div class="aside" >
    <br>
    <AskQuestion></AskQuestion>
    <br>
    <TopContributors></TopContributors>
    <dSkeletoniv style="position:fixed;width:100px;height:30px;align:right;top:90%;left:10%">
      <a href="#top">
        <el-button title="Click back to the top" type="success" class="butt" icon="el-icon-top" circle></el-button>
      </a>
    </dSkeletoniv>
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
  width: 400px;
  position: fixed;
}
.butt{
  margin-left:20%;
  margin-top: 10%;
}
</style>
