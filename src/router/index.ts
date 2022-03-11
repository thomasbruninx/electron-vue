import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
    { 
      path: '/', 
      name: 'Main',
      component: Main 
    },
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    { 
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') 
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
