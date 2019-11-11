import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_ENGINE_API

export function fetchNodeById(query) {
  return axios({
    url: `${baseUrl}/redisobject/get_node_by_id`,
    method: 'get',
    params: query
  })
}

export function fetchTreeByRoot(query) {
  return axios({
    url: `${baseUrl}/redisobject/get_tree_by_root`,
    method: 'get',
    params: query
  })
}
