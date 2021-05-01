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
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import vBlur from 'v-blur'
import Chat from 'jwchat'
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/lib/util/colors'
import localforage from 'localforage'
Vue.config.productionTip = false

Vue.use(router)
Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(Antd)
Vue.use(vBlur)
Vue.use(Chat)
Vue.use(Vuetify)
Vue.use(localforage)

const store = new Vuex.Store({
  state: {
    list: '',
    user_id: '',
    isFind: true,
    liked_list: [],
    img_list: [],
    blur: false,
    blurConfig: {
      isBlurred: false,
      opacity: 1,
      filter: 'blur(5px)'
    },
    user_tags: ''
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
    setBlur (state) {
      if (state.blurConfig.isBlurred === false) {
        state.blurConfig.isBlurred = true
      } else {
        state.blurConfig.isBlurred = false
      }
    },
    setUser_tags (state, tags) {
      state.user_tags = tags
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
    },
    setImgList (state, msg) {
      state.img_list = msg
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
    },
    getBlur (state) {
      return state.blurConfig
    },
    getUserTags (state) {
      return state.user_tags
    },
    getImgList (state) {
      return state.img_list
    }
  }
})

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})

// export default new Vuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: colors.red.darken1, // #E53935
//         secondary: colors.red.lighten4, // #FFCDD2
//         accent: colors.indigo.base, // #3F51B5
//         green2: colors.green.lighten1
//       }
//     }
//   }
// })
