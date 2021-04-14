<template>
  <div>
    <div id=bar>
      <div style="height: 10px"></div>
      <multiSelectedBox></multiSelectedBox>
      <selectedBox></selectedBox>
    </div>
    <div>
      <div style="height: 10px"></div>
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  width: 90%;
  height: 60px;
}
</style>
