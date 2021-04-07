<!--不需要调用 使用RealHead-->

<template>
  <div>
    <searchBox></searchBox>
    <nameTag></nameTag>
  </div>
</template>

<script>
import NameTag from './NameTag'
import SearchBox from './SearchBox'

export default {
  name: 'Header',
  components: {
    'nameTag': NameTag,
    'searchBox': SearchBox
  }
}
</script>

<style scoped>

</style>
