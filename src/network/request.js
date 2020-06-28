import axios from 'axios'

export function request(config) {

  //定义局部axios
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000    //请求超时时间
  })

  return instance(config)
}
