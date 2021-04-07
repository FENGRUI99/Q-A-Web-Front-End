<template>
  <div>
    <table class="abc" v-for="(item,index) in this.$store.getters.getList" v-bind:key="index">
      <div style="display: inline-block">
        <table>
           {{item.question_description}} -{{index}}
        </table>
        <div style="display: inline-block">
          <span>Posted by Qirui 1min ago</span>
        </div>
        <likeTag></likeTag>
      </div>

      <div style="display: inline-block">
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <br>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      </div>
    </table>
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

  background: #d9fff8;

  border-radius: 25px;
}
</style>
