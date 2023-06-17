import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/products'
import ProductDetail from '@/components/ProductDetail'
import main from '@/components/main'
import author from '@/components/author'
import authorDetail from '@/components/authorDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/main',
      name:'main',
      component:main
    },
    {
      path:'/products',
      name:'Products',
      component:Products
    },
    {
      path:'/products/:productId',
      name:'ProductDetail',
      component:ProductDetail,
    },
    {
      path:'/author',
      name:'author',
      component:author,
    },
    {
      path:'/author/:authorId',
      name:'authorDetail',
      component:authorDetail,
    },
    {
      path:'main'
      ,redirect:'/main'
    }
  ]
})
