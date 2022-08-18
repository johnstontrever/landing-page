
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/3', component: () => import('pages/v3.vue') }
    ]
  },
  {
    path: '/2',
    component: () => import('layouts/LawnLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Lawn.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
