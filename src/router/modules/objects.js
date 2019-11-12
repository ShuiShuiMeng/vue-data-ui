import Layout from '@/layout'

const objectsRouter = {
  path: '/objects',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Objects',
  meta: {
    title: '对象',
    icon: 'example'
  },
  children: [
    {
      path: 'id',
      component: () => import('@/views/objects/FindById'),
      name: '根据ID查询',
      meta: { title: '根据ID查询' }
    },
    {
      path: 'time',
      component: () => import('@/views/objects/time'),
      name: '根据时间查询',
      meta: { title: '根据时间查询' }
    }
  ]
}

export default objectsRouter
