import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import HomePage from '../views/HomePage'
import PersonalDetail from '../views/PersonalDetail'
import Header from '../components/Header'
import Register from '../views/Register'
import ProblemDetailPage from '../views/ProblemDetailPage'
import Register2 from '../views/Register2'
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
      component: HomePage,
      children: [
      ]
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
    },
    {
      path: '/Register2',
      name: 'Register2',
      component: Register2
    }
  ]
})
