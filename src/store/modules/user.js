import { login, logout, getInfo } from '../../api/login'
import { getToken, setToken, removeToken } from '../../utils/auth'

const user = {
  namespaced: true,
  state: {
    token: getToken(),
    authenticated: false,
    user: {}
  },
  actions: {
    Login ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const data = response.data
          if (data.user.role === 0) {
            setToken(data.token.hash)
            commit('SET_TOKEN', data.token.hash)
            commit('SET_USER', data.user)
            commit('SET_AUTHENTICATED', true)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        console.log(state.token)
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_USER', data)
          commit('SET_AUTHENTICATED', true)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_USER', {})
          commit('SET_AUTHENTICATED', false)
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    FedLogOut ({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_AUTHENTICATED: (state, value) => {
      state.authenticated = value
    }
  },
  getters: {
    currentUser (state) {
      return state.user
    }
  }
}

export default user
