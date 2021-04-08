<template>
  <div>
    <div id=bar style="background: #ffffff; width: 90%">
      <multiSelectedBox></multiSelectedBox>
      <selectedBox></selectedBox>
    </div>
    <div>
      <br>
      <br>
    </div>
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
#bar{
  border-radius: 10px;
}
</style>
