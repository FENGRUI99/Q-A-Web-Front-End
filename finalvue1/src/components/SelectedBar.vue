<template>
  <div>
    <div class=bar v-if="this.$store.state.blurConfig.isBlurred" hidden="true">
      <div style="height: 10px;"></div>
      <span><multiSelectedBox></multiSelectedBox></span>
      <span><selectedBox></selectedBox></span>
    </div>
    <div class=bar v-else>
      <div style="height: 10px"></div>
      <ul style="width: 100%; ">
        <li style="float:left;margin-left: 2%"><multiSelectedBox></multiSelectedBox></li>
        <li style="float:right;margin-right: 2%"><selectedBox></selectedBox></li>
      </ul>
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
.bar{
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  width: 90%;
  height: 60px;
}
li{
  list-style: none;
}
ul{
  display: inline;
}
</style>
