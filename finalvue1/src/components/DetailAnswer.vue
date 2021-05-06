<template>
<div>
  <h1>Answer</h1>
  <h1>{{this.$route.params.id}}</h1>
  <questionItem></questionItem>
</div>
</template>

<script>
import questionItem from './QuestionItem1'

export default {
  name: 'DetailAnswer',
  components: {
    'questionItem': questionItem
  }
}
</script>

<style scoped>

</style>
