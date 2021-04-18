<template>
  <div>
    <table>
      <td width="75%">
      <el-input
        placeholder="search something..."
        prefix-icon="el-icon-search"
        v-model="input">
      </el-input>
      </td>
      <td>
      <el-button type="success" icon="el-icon-search" @click="getList">Search</el-button>
      </td>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    getList () {
      this.axios.post('http://localhost:8080/search', {
        request: this.input.toString(),
        msg: ''
      }).then((response) => {
        if (response.data.entity.length === 0) {
          this.$store.commit('setIsFind', false)
        } else {
          this.$store.commit('setList', response.data.entity)
          this.$store.commit('setIsFind', true)
        }
      }).catch((response) => {
        console.log(response)
      })
      console.log(this.$store.state.list)
    }
  }
}
</script>

<style scoped>
</style>
