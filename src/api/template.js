import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_ENGINE_API

export function fetchTemplateById(query) {
  return axios({
    url: `${baseUrl}/redisobject/get_template_by_id`,
    method: 'get',
    params: query
  })
}
