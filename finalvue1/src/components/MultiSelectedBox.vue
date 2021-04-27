<template>
  <div style="display: inline-block;margin: 0 auto;">
    <span id="Sort">Sorted by</span>
    <el-select v-blur = this.$store.getters.getBlur
      v-model="value"
      default-first-option
      filterable
      allow-create
      @change="Sorted"
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
      if (this.value.toString() === 'Likes') {
        this.axios.post('http://localhost:8080/sortbyLikes').then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      } else if (this.value.toString() === 'Time') {
        this.axios.post('http://localhost:8080/sortbyTime').then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      } else if (this.value.toString() === 'Comments') {
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
  #Sort {
    font-weight: bold;
    text-align: left;
    white-space: normal;
    text-transform: capitalize;
    font-size: 18px;
    padding-right: 3px;
  }

</style>
