<template>
  <div>
    <selectedBar></selectedBar>
    <infiniteScrolling></infiniteScrolling>
  </div>
</template>
<script>
import SelectedBar from './SelectedBar'
import InfiniteScrolling from './InfiniteScrolling'

export default {
  name: 'Body',
  components: {
    'selectedBar': SelectedBar,
    'infiniteScrolling': InfiniteScrolling
  }
}
</script>
<style scoped>

</style>
