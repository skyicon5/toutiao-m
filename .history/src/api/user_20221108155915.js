// 导入请求对象
import request from '@/utils/request'

/**
 * 登录接口
 */
export const loginApi = (data) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'post',
    data
  })
}

/**
 * 获取短信验证码
 * 每手机号每分钟1次
 */
export const sendSms = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`,
    method: 'get'
  })
}
