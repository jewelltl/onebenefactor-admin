import request from '../utils/request'

export function login (userInfo) {
  return request({
    url: '/api/v1/token',
    method: 'post',
    data: {
      email: userInfo.email.trim(),
      password: userInfo.password
    }
  })
}

export function logout (token) {
  return request({
    url: '/api/v1/token',
    method: 'delete'
  })
}

export function getInfo (token) {
  return request({
    url: '/api/v1/user/me',
    method: 'post'
  })
}
