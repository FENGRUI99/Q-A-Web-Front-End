<template>
  <div style="display: inline-block;margin: 0 10%;">
    <span id="Sort">Tags Filter</span>
    <el-select
      filterable
      allow-create
      multiple
      @change="filtered"
      v-model="value" placeholder="Choose">
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
  name: 'SelectBox',
  data () {
    return {
      options: [{
        value: '1',
        label: 'Test & Coursework'
      }, {
        value: '2',
        label: 'Software Engi'
      }, {
        value: '3',
        label: 'Learning Skills'
      }, {
        value: '4',
        label: 'Group Project'
      }, {
        value: '5',
        label: 'Internship'
      }, {
        value: '6',
        label: 'Academic Courses'
      }, {
        value: '7',
        label: 'Career'
      }, {
        value: '8',
        label: 'Life Study Balance'
      }, {
        value: '9',
        label: 'Graduate Application'
      }],
      value: []
    }
  },
  methods: {
    filtered () {
      this.axios.post('http://localhost:8080/listbyTag', {
        request: this.value.toString(),
        msg: ''}
      ).then((response) => {
        this.$store.commit('setList', response.data.entity)
      }).catch((response) => {
        console.log(response)
      })
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
    padding-right: 5px;
  }

</style>
