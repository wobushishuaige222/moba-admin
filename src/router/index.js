import Vue from 'vue'
import Router from 'vue-router'
import Main from "../view/Main";
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [{
   path:'/login',
   name:'login',
   component: resolve => require(['../view/login.vue'], resolve),
   meta: {
     commonPage: true
   }
  },{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: '/',
      redirect: '/categories/create'
    }, {
      path: '/categories/create',
      component: resolve => require(['../view/CategoryEdit.vue'], resolve)
    }, {
      path: '/categories/list',
      component: resolve => require(['../view/CategoryList.vue'], resolve)
    }, {
      path: '/categories/edit/:id',
      component: resolve => require(['../view/CategoryEdit.vue'], resolve),
      props: true
    }, {
      path: '/items/create',
      component: resolve => require(['../view/itemEdit.vue'], resolve),
    }, {
      path: '/items/edit/:id',
      component: resolve => require(['../view/itemEdit.vue'], resolve),
      props: (router) => ({
        id: router.params.id
      })
    }, {
      path: '/items/list',
      component: resolve => require(['../view/itemList.vue'], resolve),
    }, {
      path: '/hero/create',
      component: resolve => require(['../view/heroEdit.vue'], resolve),
    }, {
      path: '/hero/edit',
      component: resolve => require(['../view/heroEdit.vue'], resolve),
      props: (router) => ({
        id: router.query.id
      })
    }, {
      path: '/hero/list',
      component: resolve => require(['../view/heroList.vue'], resolve),
    }, {
      path: '/article/create',
      component: resolve => require(['../view/articleEdit.vue'], resolve),
    }, {
      path: '/article/edit/:id',
      component: resolve => require(['../view/articleEdit.vue'], resolve),
      props: true
    }, {
      path: '/article/list',
      component: resolve => require(['../view/articleList.vue'], resolve),
    },{
      path: '/ads/create',
      component: resolve => require(['../view/adsEdit.vue'], resolve),
    }, {
      path: '/ads/edit/:id',
      component: resolve => require(['../view/adsEdit.vue'], resolve),
      props: true
    }, {
      path: '/ads/list',
      component: resolve => require(['../view/adsList.vue'], resolve),
    },{
      path: '/adminUser/create',
      component: resolve => require(['../view/adminUserEdit.vue'], resolve),
    }, {
      path: '/adminUser/edit/:id',
      component: resolve => require(['../view/adminUserEdit.vue'], resolve),
      props: true
    }, {
      path: '/adminUser/list',
      component: resolve => require(['../view/adminUserList.vue'], resolve),
    },{
      path:'/inscription/create',
      component: resolve => require(['../view/inscriptionEdit.vue'], resolve)
    },{
      path:'/inscription/list',
      component: resolve => require(['../view/inscriptionList.vue'], resolve)
    },{
      path:'/inscription/edit/:id',
      component: resolve => require(['../view/inscriptionEdit.vue'], resolve),
      props: true
    }]
  }]
})
router.beforeEach((to,from,next) => {
  if (!to.meta.commonPage && !sessionStorage.getItem('token')) {
    next('/login')
  }
  next()
})
export default router
