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
    path:'/document',
    name:'Document',
    component:()=>import("@/views/Document.vue"),
    
    children:[
      {
        path:'/document/text',
        component:()=>import("@/components/SideComponents/Test.vue"),
        
      },
      {
        path:'/document/design',
        component:()=>import("@/components/SideComponents/Design.vue"),
      }
      
    ],
    redirect:'/document/text',
  },
  {
    path:'*',
    redirect:'/notfound'
  }
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
