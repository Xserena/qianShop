import Vue from 'vue'
import Router from 'vue-router'
import HeaderNav from '../components/HeaderNav'
import About from '../components/about/About'
import Admin from '../components/about/Admin'
import Home from '../components/about/Home'
import Menu from '../components/about/Menu'
import Register from '../components/about/Register'
import Sign from '../components/about/Sign'
import Person from '../components/about/Person'

//二级路由
import Hamburger from '../components/about/menudetail/Hamburger'
import Snack from '../components/about/menudetail/Snack'
import Drinks from '../components/about/menudetail/Drinks'
import SetMeal from '../components/about/menudetail/SetMeal'

import OurLink from '../components/about/menudetail/OurLink'
import NewsLink from '../components/about/menudetail/NewsLink'
import ContactLink from '../components/about/menudetail/ContactLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
       children: [
        {
          path: '/about/ourLink',
          name: 'ourLink',
          component: OurLink
        },
          {
          path: '/about/newsLink',
          name: 'newsLink',
          component: NewsLink
        },
          {
          path: '/about/contactLink',
          name: 'contactLink',
          component: ContactLink
        }
      ],
      redirect:{ name: 'ourLink' }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      //组件独享
      beforeEnter:()=>{
        alert("请以管理员身份登录");
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      children: [
        {
          path: '/menu/hamburger',
          name: 'hamburger',
          component: Hamburger
        },
          {
          path: '/menu/drinks',
          name: 'drinks',
          component: Drinks
        },
          {
          path: '/menu/snack',
          name: 'snack',
          component: Snack
        },
          {
          path: '/menu/setmeal',
          name: 'setmeal',
          component: SetMeal
        }
      ],
      redirect:{ name: 'hamburger' }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '*',
      redirect:"/home"
    }
  ],
  mode:"history"
})
