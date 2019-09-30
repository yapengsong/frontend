import request from '@/utils/request'

/**
 *  调用地址
 * @param data
 */

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 用户信息

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

// 登出
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
