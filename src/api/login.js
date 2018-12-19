import request from '../utils/request'

export function login (userInfo) {
  return request({
    url: '/token',
    method: 'post',
    data: {
      email: userInfo.email.trim(),
      password: userInfo.password
    }
  })
}

export function logout (token) {
  return request({
    url: '/token',
    method: 'delete'
  })
}

export function getInfo (token) {
  return request({
    url: '/user/me',
    method: 'post'
  })
}
