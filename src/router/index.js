import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index'
import School from '../views/school'
import Teacher from '../views/teacher'
import Tuition from '../views/tuition'
import coursebasic from '../views/course_basic'

Vue.use(VueRouter)


const router = new VueRouter({
  mode:"history",
  routes:[
    {path:"/",component:Index},
    {path:"/school",component:School},
    {path:"/teacher",component:Teacher},
    {path:'/tuition',component:Tuition},
    {path:'/course_basic',component:coursebasic},
  ]
})

export default router
