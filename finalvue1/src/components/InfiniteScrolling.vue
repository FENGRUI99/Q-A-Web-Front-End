<template>
<!--  <div class="infinite-list-wrapper" style="overflow:auto">-->
<!--    <div-->
<!--      class="list"-->
<!--      v-infinite-scroll="load"-->
<!--      infinite-scroll-disabled="disabled">-->
<!--      <li v-for="i in count" v-bind:key="i" class="list-item">-->
<!--        <questionItem v-bind:index="i"></questionItem>-->
<!--        <br>-->
<!--      </li>-->
<!--    </div>-->
<!--  </div>-->
  <div>
    <questionItem></questionItem>
  </div>
</template>

<script>
import QuestionItem from './QuestionItem'

export default {
  name: 'InfiniteScrolling',
  components: {'questionItem': QuestionItem},
  data () {
    return {
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
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
