import { addTopic, removeTopic, getTopics } from '@/api/voca-game.js'

const topic = {
  namespaced: true,
  state: {
    topics: []
  },
  actions: {
    addTopic ({commit}, topicInfo) {
      return new Promise((resolve, reject) => {
        addTopic(topicInfo).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getTopics ({commit}) {
      return new Promise((resolve, reject) => {
        getTopics().then(response => {
          const data = response.data
          commit('SET_TOPICS', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    removeTopic ({commit}, topicId) {
      return new Promise((resolve, reject) => {
        removeTopic(topicId).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    SET_TOPICS: (state, topics) => {
      state.topics = topics
    }
  },
  getters: {
  }
}

export default topic
