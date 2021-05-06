<template>
<div>
  <h1>Question</h1>
  <h1>{{this.$route.params.id}}</h1>
  <questionItem></questionItem>
</div>
</template>

<script>
import questionItem from './QuestionItem1'

export default {
  name: 'DetailQuestion',
  components: {
    'questionItem': questionItem
  }
}
</script>

<style scoped>

</style>
