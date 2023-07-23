import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d7d9cb8 = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _98b67442 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _2bcaa26e = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _ba4a2f66 = () => interopDefault(import('../pages/compounded.vue' /* webpackChunkName: "pages/compounded" */))
const _fd8225e8 = () => interopDefault(import('../pages/consultation.vue' /* webpackChunkName: "pages/consultation" */))
const _2b4149cb = () => interopDefault(import('../pages/contactus.vue' /* webpackChunkName: "pages/contactus" */))
const _014a3b6e = () => interopDefault(import('../pages/lab-tests.vue' /* webpackChunkName: "pages/lab-tests" */))
const _119a4376 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1e753b06 = () => interopDefault(import('../pages/medicines.vue' /* webpackChunkName: "pages/medicines" */))
const _6e08185b = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _40c03671 = () => interopDefault(import('../pages/admin/addproduct.vue' /* webpackChunkName: "pages/admin/addproduct" */))
const _653773db = () => interopDefault(import('../pages/admin/chat.vue' /* webpackChunkName: "pages/admin/chat" */))
const _fed86c4c = () => interopDefault(import('../pages/admin/productlist.vue' /* webpackChunkName: "pages/admin/productlist" */))
const _083ecb33 = () => interopDefault(import('../pages/admin/userslist.vue' /* webpackChunkName: "pages/admin/userslist" */))
const _47f2a05f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _00b5f612 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))

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
    component: _7d7d9cb8,
    name: "aboutus"
  }, {
    path: "/admin",
    component: _98b67442,
    name: "admin"
  }, {
    path: "/checkout",
    component: _2bcaa26e,
    name: "checkout"
  }, {
    path: "/compounded",
    component: _ba4a2f66,
    name: "compounded"
  }, {
    path: "/consultation",
    component: _fd8225e8,
    name: "consultation"
  }, {
    path: "/contactus",
    component: _2b4149cb,
    name: "contactus"
  }, {
    path: "/lab-tests",
    component: _014a3b6e,
    name: "lab-tests"
  }, {
    path: "/login",
    component: _119a4376,
    name: "login"
  }, {
    path: "/medicines",
    component: _1e753b06,
    name: "medicines"
  }, {
    path: "/signup",
    component: _6e08185b,
    name: "signup"
  }, {
    path: "/admin/addproduct",
    component: _40c03671,
    name: "admin-addproduct"
  }, {
    path: "/admin/chat",
    component: _653773db,
    name: "admin-chat"
  }, {
    path: "/admin/productlist",
    component: _fed86c4c,
    name: "admin-productlist"
  }, {
    path: "/admin/userslist",
    component: _083ecb33,
    name: "admin-userslist"
  }, {
    path: "/",
    component: _47f2a05f,
    name: "index"
  }, {
    path: "/products/:id?",
    component: _00b5f612,
    name: "products-id"
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
