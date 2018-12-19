import axios from 'axios'
import store from '../store'
import { getToken } from './auth'

// create an axios instance
const service = axios.create({
  baseURL: `${[process.env.API_HOST, process.env.API_NAMESPACE].join('/')}`, // api 的 base_url
  timeout: 5000, // request timeout,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- 'Authorization token'为自定义key 请根据实际情况自行修改
      config.headers.authorization = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log('// Do something with request error')
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
