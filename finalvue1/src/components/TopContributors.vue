<template>
<div>
  <div style=" background:#ffffff; width:180px; height:150px;">
    <p>Top Contributors</p>
    <div>
      <table id="tc">
        <tr>CQR</tr>
        <tr>CFR</tr>
        <tr>YRM</tr>
      </table>
    </div>
  </div>
  <div style=" background:#ffffff; width:180px; height:150px">
    <p>Hot Tag Trend</p>
    <div>
  <table id="ht">
    <tr>UCSD</tr>
    <tr>WLB</tr>
    <tr>aaa</tr>
  </table>
    </div>
  </div>
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
#ht{margin:0 auto;width:180px;position: relative; top:0px;height: 50px;left: 0px}
#tc{margin:0 auto;width:180px;position: relative; top:0px;height: 50px;left: 0px}
</style>
