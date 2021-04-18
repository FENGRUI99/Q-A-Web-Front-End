<template>
  <div style="background: #f6f6f6" >
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=27.5%>
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            <body123></body123>
          </el-main>
          <el-footer>
            <footer123></footer123>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import RealHead from '../components/realhead'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Aside from '../components/Aside'

export default {
  name: 'HomePage',
  components: {
    'header123': RealHead,
    'body123': Body,
    'footer123': Footer,
    'Aside': Aside
  }
}

</script>

<style scoped>

</style>
