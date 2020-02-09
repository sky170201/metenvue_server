import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index'
import School from '../views/school'
import Teacher from '../views/teacher'
import Tuition from '../views/tuition'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:"/",component:Index},
    {path:"/school",component:School},
    {path:"/teacher",component:Teacher},
    {path:'/tuition',component:Tuition},
  ]
})

export default router
