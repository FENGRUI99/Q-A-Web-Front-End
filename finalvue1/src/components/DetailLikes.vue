<template>
  <div>
    <h1>Likes</h1>
    <h1>{{this.$route.params.id}}</h1>
    <questionItem :id="this.$route.params.id"></questionItem>
  </div>
</template>

<script>
import questionItem from './QuestionItem1'

export default {
  name: 'DetailLikes',
  components: {
    'questionItem': questionItem
  }
}
</script>

<style scoped>

</style>
