import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import HomePage from '../views/HomePage'
import PersonalDetail from '../views/PersonalDetail'
import Header from '../components/Header'
import Register from '../views/Register'
import ProblemDetailPage from '../views/ProblemDetailPage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/PersonalDetail',
      name: 'PersonalDetail',
      component: PersonalDetail
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ProblemDetailPage',
      name: 'ProblemDetailPage',
      component: ProblemDetailPage
    }
  ]
})
