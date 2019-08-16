import axios from 'axios'
import Vue from "vue";

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})
//在前端封装通用的错误处理接口
http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
    }

    return Promise.reject(err)
})

export default http