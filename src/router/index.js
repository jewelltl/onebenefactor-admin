import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '../views/layout/index.vue'
import Login from '../views/login/index.vue'
import Topic from '../views/vocaGames/topic.vue'
import Question from '../views/vocaGames/question.vue'
import QuestionDetail from '../views/vocaGames/question-detail.vue'
import GameHistory from '../views/vocaGames/history.vue'

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/voca-game',
      name: 'Vocabulary Game',
      children: [
        {
          path: 'voca-game',
          component: Topic
        },
        {
          path: 'voca-game/questions',
          component: Question
        },
        {
          path: 'voca-game/questions/{:question_id}',
          name: 'Question Detail',
          component: QuestionDetail
        },
        {
          path: 'voca-game/histories',
          name: 'Game History',
          component: GameHistory
        }
      ]
    }
  ]
})
