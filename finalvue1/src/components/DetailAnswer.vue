<template>
<div>
  <h1>Answer</h1>
  <questionItem></questionItem>
</div>
</template>

<script>
import questionItem from './QuestionItem'

export default {
  name: 'DetailAnswer',
  components: {
    'questionItem': questionItem
  }
}
</script>

<style scoped>

</style>
