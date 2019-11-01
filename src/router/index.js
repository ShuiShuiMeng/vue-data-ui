import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/index'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
