<template>
  <div class="aside" >
    <br>
    <AskQuestion></AskQuestion>
    <br>
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
.aside{
  width: 400px;
  position: fixed;
}
</style>
