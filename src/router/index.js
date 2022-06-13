import { createRouter, createWebHashHistory ,createWebHistory} from 'vue-router'
import paypage from '../views/paypage.vue'

const routes = [
  {
    path: '/',
    name: 'paypage',
    component: paypage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
