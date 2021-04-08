<template>
  <div id="block">
    <div v-for="(item,index) in this.$store.getters.getList" v-bind:key="index">
     <table class="abc">
      <div style="display: inline-block" >
          <p>try to write title here</p>
          <p>try to write introduction here test test test test test test test test test</p>
         <p>{{item.question_description}} -{{index}}</p>
        <div style="display: inline-block">
          <p>Posted by Qirui 1min ago test test test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
       <span style="position: relative;margin-right: 35px"> <likeTag></likeTag></span>
      </div>
      <div style="display: inline-block">
<!--        <el-button type="success" icon="el-icon-check" circle></el-button>-->
        <br>
        <el-button plain size="medium">
          <table>
          <tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </tr>
        <tr>35</tr>
        </table></el-button>
        <br>
        <br>
<!--        <el-button type="warning" icon="el-icon-star-off" circle></el-button>-->
        <el-button type="success" plain size="medium"><table>
          <tr>Comments</tr>
          <tr>35</tr>
        </table></el-button>
      </div>
      <br>
      <br>
     </table>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import LikeTag from './LikeTag'

export default {
  name: 'QuestionItem',
  components: {
    'likeTag': LikeTag
  }
}
</script>

<style scoped>
.abc {
  background: #ffffff;
  border-radius: 10px;
  width: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
#block {
  margin: 0;
  width:100%;
}
</style>
