import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import(/* webpackChunkName: "produtos" */ '../views/ProdutosView.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/ProdutoEditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
