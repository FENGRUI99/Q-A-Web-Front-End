<template>
  <div>
    <table style="border:1px solid white">
      <tr style="text-align:left">
<!--      <td style="font-size: x-large">&nbsp;Choose Interested Tags</td>-->
      </tr>
        <tr><td>
        </td></tr>
          <button class="tag" @click="tags(0)" id = 'tags_0'>Graduate Application</button>
        <tr><td>
          <button class="tag" @click="tags(1)" id = 'tags_1'>Academic Courses</button>&nbsp;
          <button class="tag" @click="tags(2)" id = 'tags_2'>Software Engi</button>
        </td></tr>
      <tr><td>
        <button class="tag" @click="tags(3)" id = 'tags_3'>Life Study Balance</button>&nbsp;
        <button class="tag" @click="tags(4)" id = 'tags_4'>Learning Skills</button>
      </td></tr>
      <tr><td>
        <button class="tag" @click="tags(5)" id = 'tags_5'>Test & Coursework</button>&nbsp;
        <button class="tag" @click="tags(6)" id = 'tags_6'>Career</button>
      </td></tr>
      <tr><td>
        <button class="tag" @click="tags(7)" id = 'tags_7'>Group Project</button>&nbsp;
        <button class="tag" @click="tags(8)" id = 'tags_8'>Internship</button>
      </td></tr>
      <tr v-if = moreTwo style="color: red"><td>
        you can only select not more than two interested tags
      </td></tr>
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
      ],
      choose_tags: '',
      moreTwo: 0
    }
  },
  methods: {
    step: function (i) {
      console.log(28389789789)
      return 'step' + i
    },
    tags (num) {
      let id = 'tags_' + num
      if (this.list[num].select === 0) {
        let two = 0
        for (let i = 0; i < 9; i++) {
          if (this.list[i].select === 1) {
            two = two + 1
          }
        }
        if (two < 2) {
          this.list[num].select = 1
          document.getElementById(id).className = 'click'
        } else {
          this.moreTwo = 1
        }
      } else {
        let two = 0
        for (let i = 0; i < 9; i++) {
          if (this.list[i].select === 1) {
            two = two + 1
          }
        }
        if (two < 3) {
          this.moreTwo = 0
        }
        this.list[num].select = 0
        document.getElementById(id).className = 'button'
      }
      let first = 1
      for (let i = 0; i < 9; i++) {
        if (this.list[i].select === 1) {
          if (first === 1) {
            this.$store.state.user_tags = (i + 1)
            first = 0
          } else {
            this.$store.state.user_tags += ',' + (i + 1)
          }
        }
      }
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
  text-align: left;
}
button{
  display: inline-block;
  /*height: 45px;*/
  /*width: 20%;*/
  padding: 2px;
  font-size: large;
  background: white;
  color: #72afff;
  border-radius: 3px;
  border: 1px solid #f6f6f6;
  opacity: 1.0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-weight: bold;
}
button:hover{
  /*display: inline-block;*/
  /*height: 45px;*/
  /*width: 20%;*/
  /*padding: 10px;*/
  /*font-size: x-large;*/
  background: #4e87d0;
  color: white;
  border: 1px solid darkgrey;
}
.click {
  background: #72afff;
  font-weight: bold;
  color: white;
}
.unclick {
  background: #cccccc;
}
.p{
  font-family:Helvetica;
  /*font-weight: bold;*/
  color: black;
  font-size: x-large;
}
  .tag{
    font-weight: bold;
    font-family:Helvetica;
  }
</style>
