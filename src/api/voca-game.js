import request from '../utils/request'

export function addTopic (topic) {
  return request({
    url: '/topics',
    method: 'post',
    data: topic
  })
}

export function removeTopic (topic) {
  return request({
    url: '/topics',
    method: 'delete',
    params: {
      id: topic
    }
  })
}

export function getTopics () {
  return request({
    url: '/topics',
    method: 'get'
  })
}

export function getTopic (id) {
  return request({
    url: `/topics/${id}`,
    method: 'get'
  })
}

export function addQuestion (question) {
  return request({
    url: '/questions',
    method: 'post',
    data: question
  })
}

export function getQuestions () {
  return request({
    url: '/questions',
    method: 'get'
  })
}

export function getQuestion (id) {
  return request({
    url: `/questions/${id}`,
    method: 'get'
  })
}

export function removeQuestion (id) {
  return request({
    url: `/questions/${id}`,
    method: 'delete'
  })
}

export function addAnswer (question, answer) {
  return request({
    url: '/answers',
    method: 'post',
    data: {
      question: question,
      answer: answer
    }
  })
}

export function updateAnswer (answer) {
  return request({
    url: `/answers/${answer._id}`,
    method: 'patch',
    data: answer
  })
}

export function removeAnswer (id) {
  return request({
    url: `/answers/${id}`,
    method: 'delete'
  })
}

export function getHistory () {
  return request({
    url: `/game/history`,
    method: 'get'
  })
}
