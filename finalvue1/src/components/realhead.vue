<template>
  <div>
    <table id="tt">
      <td>
        <img src="../assets/logo1.png" width="100px"  >
      </td>
      <span>
        <p id="title">ask louder here</p>
      </span>
      <td>
        <searchBox></searchBox>
      </td>
<!--      <td>-->
<!--        <nameTag></nameTag>-->
<!--      </td>-->
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
  margin:0px auto;
  width:100%;
  top:0px;
  left: 0px;
  height: 20px;
}
#title{font-size: large}
</style>
