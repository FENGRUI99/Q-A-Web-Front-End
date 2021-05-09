<template>
<div>
  <questionItem v-bind:id="this.$route.params.id"></questionItem>
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
