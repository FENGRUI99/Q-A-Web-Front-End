import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import HomePage from '../views/HomePage'
import PersonalDetail from '../views/PersonalDetail'
import Header from '../components/Header'
import Register from '../views/Register'
import ProblemDetailPage from '../views/ProblemDetailPage'
import Register2 from '../views/Register2'
import Cover from '../views/Cover'
import DetailAnswer from '../components/DetailAnswer'
import DetailLikes from '../components/DetailLikes'
import DetailQuestion from '../components/DetailQuestion'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
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
      component: PersonalDetail,
      children: [
        {
          path: 'DetailAnswer/:id',
          name: 'DetailAnswer',
          component: DetailAnswer
        },
        {
          path: 'DetailLikes/:id',
          name: 'DetailLikes',
          component: DetailLikes
        },
        {
          path: 'DetailQuestion/:id',
          name: 'DetailQuestion',
          component: DetailQuestion
        }
      ]
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
    },
    {
      path: '/',
      name: 'Cover',
      component: Cover
    }
  ]
})
