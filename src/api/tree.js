import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_ENGINE_API

export function fetchNodeByKey(query) {
  return axios({
    url: `${baseUrl}/tree/find_node`,
    method: 'get',
    params: query
  })
}
