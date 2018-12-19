import request from '../utils/request'

export function addTopic (topic) {
  return request({
    url: '/api/v1/topics',
    method: 'post',
    data: topic
  })
}

export function removeTopic (topic) {
  return request({
    url: '/api/v1/topics',
    method: 'delete',
    params: {
      id: topic
    }
  })
}

export function getTopics () {
  return request({
    url: '/api/v1/topics',
    method: 'get'
  })
}

export function getTopic (id) {
  return request({
    url: `/api/v1/topics/${id}`,
    method: 'get'
  })
}

export function addQuestion (question) {
  return request({
    url: '/api/v1/questions',
    method: 'post',
    data: question
  })
}

export function getQuestions () {
  return request({
    url: '/api/v1/questions',
    method: 'get'
  })
}

export function getQuestion (id) {
  return request({
    url: `/api/v1/questions/${id}`,
    method: 'get'
  })
}

export function removeQuestion (id) {
  return request({
    url: `/api/v1/questions/${id}`,
    method: 'delete'
  })
}

export function addAnswer (question, answer) {
  return request({
    url: '/api/v1/answers',
    method: 'post',
    data: {
      question: question,
      answer: answer
    }
  })
}

export function updateAnswer (answer) {
  return request({
    url: `/api/v1/answers/${answer._id}`,
    method: 'patch',
    data: answer
  })
}

export function removeAnswer (id) {
  return request({
    url: `/api/v1/answers/${id}`,
    method: 'delete'
  })
}

export function getHistory () {
  return request({
    url: `/api/v1/game/history`,
    method: 'get'
  })
}
