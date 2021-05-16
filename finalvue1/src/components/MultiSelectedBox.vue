<template>
  <div style="display: inline-block;margin: 0 auto;">
    <span id="Sort">Sorted by</span>
   <span> <el-select v-blur = this.$store.getters.getBlur
      v-model="value"
      default-first-option
      filterable
      allow-create
      placeholder="Likes">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
       <v-btn
         color= #72afff
         elevation="3"
        style="height: 35px;width: 90px;"
         @click="Sorted"><div style="color: white;font-family: Helvetica">{{this.cfr}}</div>
        </v-btn>
   </span>
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
      value: [],
      isDes: 'a',
      cfr: 'descend'
    }
  },
  methods: {
    Sorted () {
      if (this.isDes === 'a') {
        this.isDes = 'b'
      } else {
        this.isDes = 'a'
      }
      if (this.cfr === 'descend') {
        this.cfr = 'ascend '
      } else {
        this.cfr = 'descend'
      }
      if (this.value.toString() === 'Likes') {
        this.axios.post('http://localhost:8080/sortbyLikes', {
          request: this.isDes
        }).then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      } else if (this.value.toString() === 'Time') {
        this.axios.post('http://localhost:8080/sortbyTime', {
          request: this.isDes
        }).then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      } else if (this.value.toString() === 'Comments') {
        this.axios.post('http://localhost:8080/sortbyAnswers', {
          request: this.isDes
        }).then((response) => {
          this.$store.commit('setList', response.data.entity)
        }).catch((response) => {
          console.log(response)
        })
      }
    },
    change () {
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
    font-family: Helvetica;
  }

</style>
