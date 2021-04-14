<template>
<div>
  <el-button type="success" round id= ask >
    <table style="width: 100%">
    <tr style="font-weight: 700;font-size: x-large"> Add </tr>
    <tr style="font-weight: 900"> Questions </tr>
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
<!--  </v-btn>-->
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
  /*background: #81D454;*/
  /*border: 1px;*/
  /*border-style: solid;*/
  /*border-color: #81D454;*/
  color: #eff1f1;
  font-style: italic;
  font-weight: bolder;

}
</style>
