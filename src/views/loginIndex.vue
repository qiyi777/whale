
<template>
  <div class="login">
    <img src="./../assets/logo.jpeg" alt="">
    <div class="hello">
      <p>您好，</p>
      <p>请输入{{ type === 'password' ? '密码' : '购课手机号' }}登录！</p>
    </div>
    <van-form class="my-form" @submit="onSubmit">
      <van-field
        v-model="phone"
        name="手机号"
        label="手机号："
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <div class="password-box" v-if="type === 'password'">
        <van-field
          v-model="password"
          :type="svgStatus === 'off' ? 'password' : ''"
          name="密码"
          label="密码："
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
        <svg @click="svgStatus = 'off' " v-if="svgStatus === 'on'" t="1698663544537" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4060" width="16" height="16">
          <path d="M515.2 224c-307.2 0-492.8 313.6-492.8 313.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2C902.4 585.6 870.4 620.8 832 652.8z" p-id="4061" fill="#bfbfbf"></path>
          <path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6C681.6 422.4 604.8 345.6 512 345.6zM512 640c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6C633.6 582.4 579.2 640 512 640z" p-id="4062" fill="#bfbfbf"></path>
        </svg>
        <svg @click="svgStatus = 'on' " v-if="svgStatus === 'off'" t="1698664139204" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1483" width="16" height="16">
          <path d="M926.03392 339.87072c-9.86624 0-19.16928 4.14208-26.17856 11.0848-14.09024 13.94688-39.44448 30.94016-79.85664 47.27808-79.86176 32.28672-192.12288 50.80064-307.9936 50.80064s-228.13696-18.51392-307.9936-50.80064c-40.41216-16.33792-65.7664-33.3312-79.85664-47.27808-7.0144-6.94272-16.31232-11.07968-26.17856-11.07968-33.05472 0-48.9984 40.35584-24.9856 63.07328 72.832 68.89472 241.9712 117.1712 439.01952 117.1712s366.18752-48.2816 439.01952-117.1712c24.00256-22.72256 8.05376-63.0784-24.99584-63.0784z" fill="#cdcdcd" p-id="1484"></path>
          <path d="M353.83808 642.41152l22.92224-130.00192a35.54816 35.54816 0 0 1 70.00064 12.3392l-22.92224 130.00192a35.53792 35.53792 0 1 1-70.00064-12.3392zM610.31424 654.75584l-22.92224-130.00192a35.5328 35.5328 0 0 1 28.83072-41.16992 35.5328 35.5328 0 0 1 41.16992 28.83072l22.92224 130.00192a35.54816 35.54816 0 0 1-70.00064 12.3392zM878.7968 589.37856l-93.34272-93.34272a35.53792 35.53792 0 1 1 50.26304-50.26304l93.34272 93.34272a35.53792 35.53792 0 1 1-50.26304 50.26304zM105.09824 539.11552l93.34272-93.34272a35.53792 35.53792 0 1 1 50.26304 50.26304l-93.34272 93.34272a35.53792 35.53792 0 1 1-50.26304-50.26304z" fill="#cdcdcd" p-id="1485"></path>
        </svg>
      </div>
      <div class="verify" v-if="type === 'verify'">
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码："
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <van-button class="my-btn" plain type="primary" size="small">获取验证码</van-button>
      </div>
      <div 
        v-if="type === 'password'" 
        @click="$router.push('/editPassword')" 
        class="forget">
        忘记密码
      </div>
      <div style="margin: 16px;">
        <van-button 
          class="submit-btn"
          round 
          block 
          type="info" 
          native-type="submit">
          登录
        </van-button>
        <div v-if="type === 'verify'" class="password" @click="type = 'password'">密码登录</div>
        <div v-if="type === 'password'" class="verify" @click="type = 'verify'">验证码登录</div>
      </div>
  </van-form>
  </div>
</template>

<script>
import api from './../api/api'
export default {
  data () {
    return {
      phone: '',
      verify: '',
      type: 'verify', // verify 验证码登陆 // password 密码登陆
      password: '',
      svgStatus: 'off',
      code: '091T7LHa1dIhzG0MaTIa1hyPzv2T7LHn',
      token: localStorage.getItem('token') || ''
    }
  },
  created () {
    if (!this.token) {
      // 微信授权登录
      if (window.location.href.indexOf('?code') < 0) {
        this.gotoWechatAuth()
      } else {
        this.handleWechatAuth()
        api.getUserInfo({
          appid: 'wxb667b40a682e3e80', 
          secret: 'SECRET', 
          code: this.code, 
          grant_type: 'authorization_code'
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err.message)
        })
      }
    }
    
    
  },
  methods: {
    gotoWechatAuth () {  
      // 微信授权的URL  
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb667b40a682e3e80&redirect_uri=https%3A%2F%2Fwww.jingyushuoyy.com&response_type=code&scope=snsapi_userinfo&state=STATE&forcePopup=true&connect_redirect=1#wechat_redirect'
    },
    handleWechatAuth () {  
      let queryString = window.location.search;  // 获取查询字符串  
      let params = queryString.split('&');  // 将查询字符串拆分成参数数组  
      for (var i = 0; i < params.length; i++) {  
        if (params[i].startsWith('code=')) {  // 查找包含code参数的参数  
          this.code = params[i].split('=')[1];  // 获取code值  
          // 使用code值调用你的后端API，获取用户信息并执行相应的操作  
          // callBackEndAPI(code);
          break;  
        }  
      }  
    },
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>

<style scoped>
.login {
}
img {
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 50%;
}
.my-form {
  padding: 30px 0;
}
.verify {
  position: relative;
}
.my-btn {
  position: absolute;
  right: 10px;
  top: 9px;
  height: 26px;
  border-radius: 15px;
  border-color: #F00723;
  color: #F00723;
}
.submit-btn {
  background: #F00723;
  border-color: #F00723;
}
.password, .verify {
  margin-top: 20px;
}
.password-box {
  position: relative;
}
.password-box svg {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 14px;
}
.hello {
  padding: 0 16px;
}
.hello p {
  font-size: 18px;
  color: #333;
  text-align: left;
}
.forget {
  text-align: right;
  padding: 20px 30px 10px;
  font-size: 14px;
  color: #aaa;
}
</style>