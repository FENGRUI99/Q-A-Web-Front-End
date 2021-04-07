// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: '',
    user_id: ''
  },
  // vuex中的方法, 在组件中使用commit来调用
  mutations: {
    setList (state, list) {
      state.list = list
    },
    setUserId (state, id) {
      state.user_id = id
    }
  },
  // 计算属性
  getters: {
    getList (state) {
      return state.list
    },
    getUserId (state) {
      return state.user_id
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
