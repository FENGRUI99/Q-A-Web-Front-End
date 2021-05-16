<template>
  <div>
    <table>
      <td width="72%">
      <el-input
        placeholder="search something..."
        prefix-icon="el-icon-search"
        v-model="input"
        @keyup.enter.native="getList">
      </el-input>
      </td>
      <td width="3%"></td>
      <td style="font-family: Helvetica">
        <v-btn
          color= #72afff
          elevation="3"
          @click="getList">Search
        </v-btn>
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
          console.log(response.data.entity)
        }
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>
