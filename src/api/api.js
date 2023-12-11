import request from './axios'

// 获取用户信息
export const getUserInfo = (params) => request({
  url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${params.appid}&secret=${params.secret}&code=${params.code}&grant_type=${params.grant_type}`,
  method: 'get'
})

export default {
  getUserInfo
}