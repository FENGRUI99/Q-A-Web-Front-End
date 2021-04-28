<template>
  <JwChat-index
    :taleList="list"
    @enter="bindEnter"
    v-model="inputMsg"
    :toolConfig="tool"
  />
</template>

<script>
export default {
  name: 'PersonalDetail'
}
</script>

<style scoped>

</style>
