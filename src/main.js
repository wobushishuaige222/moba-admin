// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import http from "./http/http";
Vue.config.productionTip = false
Vue.prototype.$http = http
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.mixin({
  computed: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${sessionStorage.getItem('token') || ''}`
      }
    },
  },
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
