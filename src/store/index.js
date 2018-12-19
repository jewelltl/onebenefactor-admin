import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import topic from './modules/vocab/topic'
import question from './modules/vocab/question'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    topic,
    question
  },
  getters
})
