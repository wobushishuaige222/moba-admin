import axios from "axios";
import Vue from 'vue'
import router from "../router";
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/admin/api/rest',
  // baseURL: 'http://localhost:3000/admin/api/rest'
})
http.interceptors.request.use(config => {
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
  }
  return config
}, err => {
  return Promise.reject(err)
})
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      message: err.response.data.message,
      type: 'error'
    })
  }
  if (err.response.status == 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})
export default http
