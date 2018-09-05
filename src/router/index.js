import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Article from '@/components/article'
import Cart from '@/components/Cart'
import Register from '@/components/Register'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
import Index from '@/components/index'
import Main from '@/components/Main'
import Classify from '@/components/Classify'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {path: "/", component: Detail}
      ]
    }
  ]
})
