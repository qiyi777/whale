import axios from 'axios'

const service = axios.create({
    timeout: 15000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})

service.interceptors.request.use(
    config => {
        //微信登录特殊处理
        if(!config.headers.Authorization){
            config.headers.Authorization = localStorage.getItem('token');
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        if (response.status == 401) {
            console.log(response)
        }
        const res = response.data || response
        if (res) {
          return res.data || res
        } else {
          return Promise.reject(res)
        }
    },
    error => {
        if(error){
            console.log(error)
        }
        return Promise.reject(error)
    }
)
service.defaults.withCredentials = true
export default service
