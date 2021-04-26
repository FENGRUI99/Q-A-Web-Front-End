<template>
  <div v-blur = this.$store.getters.getBlur>
    <table id="t1">
      <h1>Top Louder</h1>
      <table id="tc">
        <tr> CQR </tr>
        <tr>CFR</tr>
        <tr>YRM</tr>
      </table>

    </table>
    <br>
    <table id="t2">
      <h1>Hot Tag Trends</h1>
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
  #ht{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;font-weight: bolder;}
  #tc{margin:0 auto;position: relative; top:0px;height: 50px;left: 0px;
    font-weight: bolder;
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
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04)
  }
  h1 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 5px;
    color: #68a076;
    font-size: 25px;
    font-style: italic;
    background: linear-gradient(to top, rgba(69, 198, 230, 0.58) 10.2%, rgba(131, 237, 203, 0.59) 23.8%, #fff 50.7%);
  }
</style>
