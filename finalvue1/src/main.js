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
import { mdiThumbUp } from '@mdi/js'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import localforage from 'localforage'
import 'vue-awesome/icons'
/* 引入Vue组件 */
import Icon from 'vue-awesome/components/Icon'
import global from '../src/components/myWebSocket'
Vue.prototype.$global = global
Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(router)
Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(Antd)
Vue.use(vBlur)
Vue.use(Chat)
Vue.use(Vuetify)
Vue.use(localforage)
Vue.use(mdiThumbUp)
const store = new Vuex.Store({
  state: {
    list: [],
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
    user_tags: '',
    user_chat_list: {},
    user_chat_members: [],
    chat_flag: false,
    receiver_id: '',
    chat_member_number: 0
  },
  // vuex中的方法, 在组件中使用commit来调用
  mutations: {
    setList (state, list) {
      state.list = list
      // for (let i = 0; i < list.length; i++) {
      //   Vue.set(state.list[i], 'like_flag', false)
      // }
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
          if (data === 1) {
            state.list[i].like_flag = '1'
          } else {
            state.list[i].like_flag = '0'
          }
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
    },
    setChatList (state, data) {
      let id = data[0]
      let list = data[1]
      // state.user_chat_list[id] = list
      Vue.set(state.user_chat_list, id, list)
      for (let i = 0; i < list.length; i++) {
        // state.user_chat_list[id][i].text = {'text': list[i].text}
        // state.user_chat_list[id][i].img = ''
        Vue.set(state.user_chat_list[id][i], 'text', {'text': list[i].text})
        Vue.set(state.user_chat_list[id][i], 'img', '/assets/head.jpeg')
      }
    },
    addChatList (state, data) {
      let id = data[0]
      let msg = data[1]
      // if (state.user_chat_list[id] === undefined) {
      //   state.user_chat_list[id] = []
      // }
      state.user_chat_list[id].push(msg)
    },
    setUserChatMembers (state, data) {
      state.chat_member_number = data.length
      state.user_chat_members = data
      for (let i = 0; i < data.length; i++) {
        Vue.set(state.user_chat_members[i], 'img', 'assets/hBg.jpg')
      }
    },
    addUserChatMembers (state, data) {
      // state.user_chat_members.push(data)
      Vue.set(state.user_chat_members, state.chat_member_number, data)
      state.chat_member_number++
    },
    setReceiverId (state, id) {
      state.receiver_id = id
    },
    changeChatFlag (state) {
      if (state.chat_flag === true) {
        state.chat_flag = false
      } else {
        state.chat_flag = true
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
    },
    getBlur (state) {
      return state.blurConfig
    },
    getUserTags (state) {
      return state.user_tags
    },
    getImgList (state) {
      return state.img_list
    },
    getChatList (state, id) {
      if (state.user_chat_list[id] === undefined) {
        return []
      }
      return state.user_chat_list[id]
    },
    getChatMembers (state) {
      return state.user_chat_members
    },
    getReceiverId (state) {
      return state.receiver_id
    },
    getChatFlag (state) {
      return state.chat_flag
    }
  }
})

Vue.filter('getTimeFormat', function (valueTime) {
  if (valueTime) {
    // let newData = Date.parse(new Date() + '')
    // let diffTime = Math.abs(newData - valueTime)
    let diffTime = Math.abs(new Date().getTime() - new Date(valueTime).getTime())
    if (diffTime > 7 * 24 * 3600 * 1000) {
      let date = new Date(valueTime)
      // let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let minute = date.getMinutes()
      let second = date.getSeconds()
      console.log(second)
      minute = minute < 10 ? ('1' + minute) : minute
      second = second < 10 ? ('0' + second) : second
      return m + '-' + d + ' ' + h + ':' + minute
    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // //注释("一周以内");
      // var time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000))
      return dayNum + ' days ago'
    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      // //注释("一天以内");
      // var time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (60 * 60 * 1000))
      return dayNum + ' hours ago'
    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
      // //注释("一小时以内");
      // var time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (60 * 1000))
      return dayNum + ' minutes ago'
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
