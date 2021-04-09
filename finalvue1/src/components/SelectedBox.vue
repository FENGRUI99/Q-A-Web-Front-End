<template>
  <div style="display: inline-block;margin: 0 10%;">
    <span>Tags Filter</span>
    <el-select
      filterable
      allow-create
      multiple
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
        value: 'Test & Coursework',
        label: 'Test & Coursework'
      }, {
        value: 'Software Engi',
        label: 'Software Engi'
      }, {
        value: 'Learning Skills',
        label: 'Learning Skills'
      }, {
        value: 'Group Project',
        label: 'Group Project'
      }, {
        value: 'Internship',
        label: 'Internship'
      }, {
        value: 'Academic Courses',
        label: 'Academic Courses'
      }, {
        value: 'Career',
        label: 'Career'
      }, {
        value: 'Life Study Balance',
        label: 'Life Study Balance'
      }, {
        value: 'Graduate Application',
        label: 'Graduate Application'
      }],
      value: []
    }
  },
  methods: {
    filtered () {
      this.axios.post('http://localhost:8080/listbyTag', {
        request: '',
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
