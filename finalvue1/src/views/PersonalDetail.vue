<template>
  <div>
    <JwChat-index
      :taleList="list"
      @enter="bindEnter"
      v-model="inputMsg"
      :toolConfig="tool"
    />
    <h1>nihao</h1>
  </div>
</template>

<script>
export default {
  name: 'PersonalDetail'
}
</script>

<style scoped>

</style>
