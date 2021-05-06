<template>
<div>
  <h1>Question</h1>
  <questionItem></questionItem>
</div>
</template>

<script>
import questionItem from './QuestionItem'

export default {
  name: 'DetailQuestion',
  components: {
    'questionItem': questionItem
  }
}
</script>

<style scoped>

</style>
