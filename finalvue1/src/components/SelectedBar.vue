<template>
  <div>
    <selectedBox></selectedBox>
    <multiSelectedBox></multiSelectedBox>
  </div>
</template>

<script>
import MultiSelectedBox from './MultiSelectedBox'
import SelectedBox from './SelectedBox'

export default {
  name: 'SelectedBar',
  components: {
    'multiSelectedBox': MultiSelectedBox,
    'selectedBox': SelectedBox
  }
}
</script>

<style scoped>

</style>
