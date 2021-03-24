import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/recent',
    name: 'Recent',
    component: () => import('../views/Recent.vue')
  },
  {
    path: '/popular',
    name: 'Popular',
    component: () => import('../views/Popular.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/Archive.vue')
  },
  {
    path: '/rss',
    name: 'Rss',
    component: () => import('../views/Rss.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 't-green',
  base: process.env.BASE_URL,
  routes
})

export default router
