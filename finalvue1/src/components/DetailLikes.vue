<template>
  <div>
    <h1>Likes</h1>
    <questionItem></questionItem>
  </div>
</template>

<script>
import questionItem from './QuestionItem'

export default {
  name: 'DetailLikes',
  components: {
    'questionItem': questionItem
  }
}
</script>

<style scoped>

</style>
