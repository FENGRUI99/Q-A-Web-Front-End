<template>
  <div id = "div">
    <questionItem></questionItem>
  </div>
</template>

<script>
import QuestionItem from './QuestionItem'
export default {
  name: 'InfiniteScrolling',
  components: {
    'questionItem': QuestionItem
  },
  data () {
    return {
      data: [],
      busy: false,
      itemsPerLoad: 1,
      pageIndex: 1,
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 1000
    },
    disabled () {
      return this.loading || this.noMore
    }
  }
}
</script>

<style scoped>

</style>
