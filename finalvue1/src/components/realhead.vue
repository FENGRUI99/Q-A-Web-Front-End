<template>
  <div>
    <table id="tt" height="0px" style="background: white">
      <td>
        <img src="../assets/logo1.png" width="200px"  >
      </td>
      <td>
        <p id="title" rows="3" cols="20" >ask louder here</p>
      </td>
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
#tt {margin:0 auto;width:100%;position: absolute; top:0px;height: min-content;left: 0px}

#title{font-size: xx-large}
</style>
