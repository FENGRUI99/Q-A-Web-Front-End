<template>
  <div v-if="this.$store.state.isFind === true">
    <h1>We are a website with the bottom line</h1>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
h1{
  margin-right: 10%;
}
</style>
