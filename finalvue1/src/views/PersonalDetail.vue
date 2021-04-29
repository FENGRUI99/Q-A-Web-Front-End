<template>
  <div style="background: #f6f6f6">
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
<!--    <JwChat-index-->
<!--      :taleList="list"-->
<!--      @enter="bindEnter"-->
<!--      v-model="inputMsg"-->
<!--      :toolConfig="tool"-->
<!--    />-->
      <el-container>
        <el-aside width=27.5%>

        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import RealHead from '../components/realhead'

export default {
  name: 'PersonalDetail',
  components: {
    'header123': RealHead
  }
}
</script>

<style scoped>

</style>
