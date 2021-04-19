<template>
  <div>
    <table style="border:1px solid white">
      <tr style="text-align:left">
      <td style="font-size: x-large">&nbsp;Choose Interested Tags</td>
      </tr>
      <div v-for="(item, i) in this.list" v-bind:key="i">
      <td v-if="i===0"><button class="tag">{{list[0].tag}}</button></td>
      <td v-if="i%2 == 1">
        <button class="tag">{{item.tag}}</button>
        <button class="tag">{{list[i+1].tag}}</button>
      </td>
      </div>
    </table>
  </div>

</template>

<script>
export default {
  name: 'InterestTag',
  data () {
    return {
      list: [
        {tag: 'Graduate Application', select: 0},
        {tag: 'Academic Courses', select: 0},
        {tag: 'Software Engi', select: 0},
        {tag: 'Life Study Balance', select: 0},
        {tag: 'Learning Skills', select: 0},
        {tag: 'Test & Coursework', select: 0},
        {tag: 'Career', select: 0},
        {tag: 'Group Project', select: 0},
        {tag: 'Internship', select: 0}
      ]
    }
  }
  // methods: {
  //   // onclick
  // }
}
</script>

<style scoped>
table,td,th
{
  padding: 5px 0;
}
button{
  display: inline-block;
  /*height: 45px;*/
  /*width: 20%;*/
  padding: 10px;
  font-size: x-large;
  background: #8ae779;
  color: white;
  border: 1px solid darkgrey;
}
.p{
  font-family:Arial, sans-serif;
  /*font-weight: bold;*/
  color: black;
  font-size: x-large;
}
</style>
