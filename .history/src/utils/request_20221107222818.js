// 导入axios
import axios from 'axios'

// 创建一个新的请求对象，并设置基地址
const request = axios.create({
  baseURL: 'http://geek.itheima.net/'
})

// 请求拦截器

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (e) => {
    return Promise.reject(e)
  }
)

// 暴露出去
export default request
