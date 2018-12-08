import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Article from '@/components/article'
import Cart from '@/components/Cart'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Index from '@/components/index'
import Main from '@/components/Main'
import Classify from '@/components/Classify'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Discuss from '@/components/Discuss'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {path: "/", component: Main},
        {path: "/classify", component: Classify},
        {path: "/discuss", component: Discuss},
        {path: "/mine", component: Mine}
      ]
    },
    {path: '/detail/:pid', component: Detail},
    {path: '/classify/:i', component: Classify},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/cart', component: Cart},
    {path: '/article/:i', component: Article}

  ]
})
