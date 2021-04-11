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
    user_id: '',
    like_flag: {},
    isFind: true
  },
  // vuex中的方法, 在组件中使用commit来调用
  mutations: {
    setList (state, list) {
      state.list = list
      for (let i = 0; i < list.length; i++) {
        state.like_flag[list[i].question_id] = false
      }
    },
    setUserId (state, id) {
      state.user_id = id
    },
    addLike (state, index, number) {
      state.list[index].likes += number
      state.like_flag[state.list[index].question_id] = false
    },
    getLikeFlag (state, index) {
      return state.like_flag[state.list[index].question_id]
    },
    setIsFind (state, flag) {
      state.isFind = flag
    }
  },
  // 计算属性
  getters: {
    getList (state) {
      return state.list
    },
    getUserId (state) {
      return state.user_id
    },
    getIsFind (state) {
      return state.isFind
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
