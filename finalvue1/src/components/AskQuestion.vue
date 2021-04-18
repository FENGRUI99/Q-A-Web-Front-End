<template>
<div>
  <el-button type="success" round id= ask >
    <table style="width: 100%">
    <tr style="font-size:30px;x-large; text-align: left"> Add </tr>
    <tr style="font-size:30px;font-weight: bolder"> Questions </tr>
    </table>
  </el-button>
<!--  <div>-->
<!--    <v-btn-->
<!--    class="mx-2"-->
<!--    fab-->
<!--    dark-->
<!--    large-->
<!--    color="cyan"-->
<!--  >-->
<!--    <v-icon dark>-->
<!--      mdi-pencil-->
<!--    </v-icon>-->
<!--  </v-btn>--s-->
<!--  </div>-->
</div>
</template>

<script>
export default {
  name: 'AskQuestion'
}
</script>

<style scoped>
#ask{
  margin: auto;
  width: 50%;
  font-size:27px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  color: #eff1f1;
  font-style: italic;
  font-weight: bolder;

}
</style>
