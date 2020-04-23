
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue') },
      { path: '/detail', component: () => import('pages/PageDetailProduct.vue') },
      { path: '/login', component: () => import('pages/PageLogin.vue') },
      { path: '/registershop', component: () => import('pages/PageRegisterShop.vue') },
      { path: '/product', component: () => import('pages/PageProduct.vue') },
      { path: '/scan', component: () => import('pages/Pagescan.vue') },
      { path: '/register', component: () => import('pages/PageRegister.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
