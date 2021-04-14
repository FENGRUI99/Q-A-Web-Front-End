<template>
<div>
  <el-button type="success" round id= ask ><br>Add Questions<br><br></el-button>
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
  font-size:22px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  /*background: #81D454;*/
  /*border: 1px;*/
  /*border-style: solid;*/
  /*border-color: #81D454;*/
}
br {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 5px;
  color: #68a076;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  background: linear-gradient(to top, rgba(69, 198, 230, 0.58) 10.2%, rgba(131, 237, 203, 0.59) 23.8%, #fff 50.7%);
}

</style>
