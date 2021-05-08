<template>
<div>
  <JwChat-index
    :taleList="list"
    @enter="bindEnter"
    v-model="inputMsg"
    :toolConfig="tool"
  />
</div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      list: []
    }
  }
}
</script>

<style scoped>

</style>
