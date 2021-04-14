<template>
  <div>
    <table id="tt">
      <img src="../assets/logo1.png" width="200px" class="pho">
      <td style="width: 20%"></td>
        <p id="title">Ask Louder Here! </p>
      <td style="width: 30%"></td>
      <td>
        <searchBox></searchBox>
      </td>
      <td>
        <nameTag></nameTag>
      </td>
    </table>
  </div>
</template>

<script>
import NameTag from './NameTag'
import SearchBox from './SearchBox'
export default {
  name: 'RealHead',
  components: {
    'nameTag': NameTag,
    'searchBox': SearchBox
  }
}

</script>

<style scoped>
#tt {
  background: white;
  border: 1px;
  border-style: solid;
  border-color: #ffffff #ffffff #81D454 #ffffff;
  position: fixed;
  z-index:5;
  margin:10px  auto;
  width:100%;
  top:-10px;
  left: 0;
  padding: 0px 0px 10px 0px ;
}
#title{
  font-size: xx-large;
  position: absolute;
  margin-top: 7px;
  font-family: "Helvetica Neue";
  color: #81D454;
  margin-left: 50px;
}
.pho{
  position: absolute;
  margin-top: -15px;
  margin-left: 3%;
}
</style>
