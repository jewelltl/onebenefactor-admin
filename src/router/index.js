import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/views/layout'
import Login from '@/views/login'
import Dashboard from '@/views/Dashboard'
import Topic from '@/views/vocaGames/topic'
import Question from '@/views/vocaGames/question'
import QuestionDetail from '@/views/vocaGames/question-detail'
import GameHistory from '@/views/vocaGames/history'

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'voca-game',
          redirect: '/voca-game/topic',
          name: 'Vocabulary Game',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'topic',
              name: 'Topics',
              component: Topic
            },
            {
              path: 'questions',
              name: 'Questions',
              component: Question
            },
            {
              path: 'questions/:question_id',
              name: 'Register Answers',
              component: QuestionDetail
            },
            {
              path: 'histories',
              name: 'Game History',
              component: GameHistory
            }
          ]
        }
      ]
    }
  ]
})
