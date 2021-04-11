<template>
  <div id = "div">
    <questionItem></questionItem>
  </div>
</template>

<script>
import QuestionItem from './QuestionItem'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'InfiniteScrolling',
  components: {
    'questionItem': QuestionItem,
    directives: { infiniteScroll }
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
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 10000)
    },
    handleScroll: function () {
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      let scrollObj = document.getElementById('div')
      let scrollTop = scrollObj.scrollTop
      let scrollHeight = scrollObj.scrollHeight
      if (scrollTop + clientHeight === scrollHeight) {
        alert('heh')
        this.count += 2
      }
    }
  }
}
</script>

<style scoped>

</style>
