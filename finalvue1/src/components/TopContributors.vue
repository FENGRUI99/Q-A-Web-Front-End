<template>
  <div>
    <table id="t1">
      <p>Top Contributors</p>
      <table id="tc">
        <tr> CQR </tr>
        <tr>CFR</tr>
        <tr>YRM</tr>
      </table>

    </table>
    <br>
    <table id="t2">
      <p>Hot Tag Trend</p>
      <div>
        <table id="ht">
          <tr>UCSD</tr>
          <tr>WLB</tr>
          <tr>aaa</tr>
        </table>
      </div>
    </table>
  </div>
</template>

<script>
import AskQuestion from './AskQuestion'
export default {
  name: 'TopContributors',
  components: {AskQuestion}
}
</script>

<style scoped>
#ht{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px}
#tc{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;
}
#t1{
  /*margin: 5% 30%; */
  margin:auto;
  background:#ffffff; width:50%; height:150px;
  border-radius: 10px;

  box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
#t2{
  margin: auto;
  background:#ffffff; width:50%; height:150px;
  border-radius: 10px;
;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
