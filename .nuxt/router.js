import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e3ebd7b6 = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _311dbecc = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _29c5b608 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6d189dc0 = () => interopDefault(import('../pages/compounded.vue' /* webpackChunkName: "pages/compounded" */))
const _9a35dc82 = () => interopDefault(import('../pages/consultation.vue' /* webpackChunkName: "pages/consultation" */))
const _4a8d99f8 = () => interopDefault(import('../pages/contactus.vue' /* webpackChunkName: "pages/contactus" */))
const _20968b9b = () => interopDefault(import('../pages/lab-tests.vue' /* webpackChunkName: "pages/lab-tests" */))
const _10709bba = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3dc18b33 = () => interopDefault(import('../pages/medicines.vue' /* webpackChunkName: "pages/medicines" */))
const _4d887f4e = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _348ec9a4 = () => interopDefault(import('../pages/admin/addproduct.vue' /* webpackChunkName: "pages/admin/addproduct" */))
const _657a9ca6 = () => interopDefault(import('../pages/admin/addtest.vue' /* webpackChunkName: "pages/admin/addtest" */))
const _2f75294e = () => interopDefault(import('../pages/admin/chat.vue' /* webpackChunkName: "pages/admin/chat" */))
const _1259ea4a = () => interopDefault(import('../pages/admin/orders.vue' /* webpackChunkName: "pages/admin/orders" */))
const _06979d07 = () => interopDefault(import('../pages/admin/productlist.vue' /* webpackChunkName: "pages/admin/productlist" */))
const _1bf3a49b = () => interopDefault(import('../pages/admin/tests.vue' /* webpackChunkName: "pages/admin/tests" */))
const _84f0f4c0 = () => interopDefault(import('../pages/admin/userslist.vue' /* webpackChunkName: "pages/admin/userslist" */))
const _2e200f0c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _29e699e4 = () => interopDefault(import('../pages/admin/chatUser/_id.vue' /* webpackChunkName: "pages/admin/chatUser/_id" */))
const _325c1ac5 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _b8ab45f4 = () => interopDefault(import('../pages/tests/_id.vue' /* webpackChunkName: "pages/tests/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _e3ebd7b6,
    name: "aboutus"
  }, {
    path: "/admin",
    component: _311dbecc,
    name: "admin"
  }, {
    path: "/checkout",
    component: _29c5b608,
    name: "checkout"
  }, {
    path: "/compounded",
    component: _6d189dc0,
    name: "compounded"
  }, {
    path: "/consultation",
    component: _9a35dc82,
    name: "consultation"
  }, {
    path: "/contactus",
    component: _4a8d99f8,
    name: "contactus"
  }, {
    path: "/lab-tests",
    component: _20968b9b,
    name: "lab-tests"
  }, {
    path: "/login",
    component: _10709bba,
    name: "login"
  }, {
    path: "/medicines",
    component: _3dc18b33,
    name: "medicines"
  }, {
    path: "/signup",
    component: _4d887f4e,
    name: "signup"
  }, {
    path: "/admin/addproduct",
    component: _348ec9a4,
    name: "admin-addproduct"
  }, {
    path: "/admin/addtest",
    component: _657a9ca6,
    name: "admin-addtest"
  }, {
    path: "/admin/chat",
    component: _2f75294e,
    name: "admin-chat"
  }, {
    path: "/admin/orders",
    component: _1259ea4a,
    name: "admin-orders"
  }, {
    path: "/admin/productlist",
    component: _06979d07,
    name: "admin-productlist"
  }, {
    path: "/admin/tests",
    component: _1bf3a49b,
    name: "admin-tests"
  }, {
    path: "/admin/userslist",
    component: _84f0f4c0,
    name: "admin-userslist"
  }, {
    path: "/",
    component: _2e200f0c,
    name: "index"
  }, {
    path: "/admin/chatUser/:id?",
    component: _29e699e4,
    name: "admin-chatUser-id"
  }, {
    path: "/products/:id?",
    component: _325c1ac5,
    name: "products-id"
  }, {
    path: "/tests/:id?",
    component: _b8ab45f4,
    name: "tests-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
