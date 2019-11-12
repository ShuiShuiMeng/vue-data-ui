import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_ENGINE_API

export function fetchObjectById(query) {
  return axios({
    url: `${baseUrl}/test/obj`,
    method: 'get',
    params: query
  })
}

export function addAttr(query) {
  return axios({
    url: `${baseUrl}/test/add`,
    method: 'get',
    params: query
  })
}
