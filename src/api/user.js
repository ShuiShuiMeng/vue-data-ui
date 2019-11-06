import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BASE_API

export function login(data) {
  return request({
    url: `${baseUrl}/user/login`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: `${baseUrl}/user/info`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `${baseUrl}/user/logout`,
    method: 'post'
  })
}
