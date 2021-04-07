<template>
<div>
  <AskQuestion></AskQuestion>
  <TopContributors></TopContributors>
</div>
</template>

<script>
import AskQuestion from './AskQuestion'
import TopContributors from './TopContributors'

export default {
  name: 'Aside',
  components: {
    'AskQuestion': AskQuestion,
    'TopContributors': TopContributors
  }
}
</script>

<style scoped>

</style>
