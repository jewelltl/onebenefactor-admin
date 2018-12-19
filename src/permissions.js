import router from './router'
import {getToken} from './utils/auth'
import store from './store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.authenticated) {
        next()
      } else {
        store.dispatch('user/GetInfo').then(res => {
          next()
        }).catch((err) => {
          store.dispatch('user/FedLogOut').then(() => {
            console.log(err || 'Verification failed, please login again')
          })
          next({path: '/'})
        })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
