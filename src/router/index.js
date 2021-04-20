import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path:'/notfound',
    name:'NotFound',
    component:()=>import("@/views/NotFound404.vue")
  },
  {
    path:'*',
    redirect:'/notfound'
  }
  
]

const router = new VueRouter({
  routes,
  history
})

export default router
