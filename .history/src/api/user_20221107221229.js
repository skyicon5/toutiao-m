// 导入请求对象
import request from '@/utils/request'

/**
 * 登录接口
 */
export const loginAPI = (data) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'post',
    data
  })
}
