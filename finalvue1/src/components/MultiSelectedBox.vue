<template>
  <div style="display: inline-block;margin: 0 auto;">
    <span @click="Sorted">Sorted by</span>
    <el-select
      v-model="value"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="Likes">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>

</template>

<script>
export default {
  name: 'MultiSelectBox',
  data () {
    return {
      options: [{
        value: 'Likes',
        label: 'Likes'
      }, {
        value: 'Time',
        label: 'Time'
      }, {
        value: 'Comments',
        label: 'Comments'
      }],
      value: []
    }
  },
  methods: {
    Sorted () {
      if (this.value === 'Likes') {
        this.axios.post('http://localhost:8080/sortbyLikes').then((response) => {
          this.$store.commit('setList', response.data.entity)
          alert()
        }).catch((response) => {
          console.log(response)
        })
      } else if (this.value === 'Time') {
        this.axios.post('http://localhost:8080/sortbyTime').then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      } else if (this.value === 'Comments') {
        this.axios.post('http://localhost:8080/sortbyAnswers').then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
