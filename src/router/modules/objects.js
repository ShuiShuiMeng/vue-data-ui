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
      component: () => import('@/views/objects/id'),
      name: '根据ID查询',
      meta: { title: '根据ID查询' }
    }
  ]
}

export default objectsRouter