import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import EzPage from '@/pages/detail/1ez'
import LakesiPage from '@/pages/detail/2lakesi'
import KatelinPage from '@/pages/detail/3katelin'
import SonaPage from '@/pages/detail/4sona'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage,
    },
    {
      path: '/detail',
      name: 'indexPage',
      component: DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'1ez',
          component: EzPage,
        },
        {
          path:'2lakesi',
          component: LakesiPage,
        },
        {
          path:'3katelin',
          component: KatelinPage,
        },
        {
          path:'4sona',
          component: SonaPage,
        },
      ],
    },
  ]
})
