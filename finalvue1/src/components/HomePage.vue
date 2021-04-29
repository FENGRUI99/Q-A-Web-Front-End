<template>
  <div>
  <div v-if = !this.$store.state.blurConfig.isBlurred style="background: #f6f6f6">
    <el-container>
      <el-header height="15px">
        <header123></header123>
      </el-header>
      <el-container>
        <el-aside width=30.5%>
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
    <div v-else style="background: #f6f6f6" @mousewheel.prevent>
      <el-container>
        <el-header height="15px">
          <header123></header123>
        </el-header>
        <el-container>
          <el-aside width=30.5%>
            <Aside></Aside>
          </el-aside>
          <el-container>
            <el-main>
              <body123 style="pointer-events:none;"></body123>
            </el-main>
            <el-footer>
              <footer123></footer123>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
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
.blur-content{
  backdrop-filter:saturate(150%) blur(8px);
  -webkit-backdrop-filter:saturate(150%) blur(8px);
  background-color:rgba(0,0,0,.3);
  z-index: 1;
}
.dialog {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.blur-content::before{
  filter:blur(5px);
  z-index: -1;
}
</style>
