<template>
  <div style="display: inline-block">
    <div style="display: inline-block">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input" style="display: inline-block" >
      </el-input>
    </div>
    <div style="display: inline-block">
      <el-button type="primary" icon="el-icon-search" @click="getList" style="display: inline-block" >搜索</el-button>
    </div>
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
        alert(response.data.entity.length)
        this.$store.commit('setList', response.data.entity)
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
