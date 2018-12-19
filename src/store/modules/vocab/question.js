import { addQuestion, removeQuestion, getQuestions } from '@/api/voca-game.js'

const question = {
  namespaced: true,
  state: {
    questions: []
  },
  actions: {
    addQuestion ({commit}, questionInfo) {
      return new Promise((resolve, reject) => {
        addQuestion(questionInfo).then(response => {
          const data = response.data
          commit('ADD_QUESTION', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getQuestions ({commit}) {
      return new Promise((resolve, reject) => {
        getQuestions().then(response => {
          const data = response.data
          commit('SET_QUESTIONS', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    removeQuestion ({commit}, questionId) {
      return new Promise((resolve, reject) => {
        removeQuestion(questionId).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    SET_QUESTIONS: (state, questions) => {
      state.questions = questions
    },
    ADD_QUESTION: (state, question) => {
      state.questions.push(question)
    }
  },
  getters: {
  }
}

export default question
