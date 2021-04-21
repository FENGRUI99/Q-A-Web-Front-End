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
import 'keen-ui/dist/keen-ui.css'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: '',
    user_id: '',
    isFind: true,
    liked_list: []
  },
  // vuex中的方法, 在组件中使用commit来调用
  mutations: {
    setList (state, list) {
      state.list = list
      for (let i = 0; i < list.length; i++) {
        Vue.set(state.list[i], 'like_flag', false)
      }
    },
    setUserId (state, id) {
      state.user_id = id
    },
    setIsFind (state, flag) {
      state.isFind = flag
    },
    setLikedList (state, list) {
      state.liked_list = list
    },
    changeList (state, indexAndData) {
      let questionId = indexAndData[0]
      let data = indexAndData[1]
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].question_id === questionId) {
          state.list[i].likes += data
          break
        }
      }
    },
    changeLikedList (state, msg) {
      let flag = msg[0]
      let data = msg[1].toString()
      if (flag === true) {
        state.liked_list.push(data)
      } else {
        for (let i = 0; i < state.liked_list.length; i++) {
          if (state.liked_list[i] === data) {
            state.liked_list.splice(i, 1)
            break
          }
        }
      }
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
    },
    getLikedList (state) {
      return state.liked_list
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
