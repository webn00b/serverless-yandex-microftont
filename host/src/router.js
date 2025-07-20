import { createRouter, createWebHistory } from 'vue-router'

const UserProfile = () => import('user-profile/UserProfile')
const Dashboard = () => import('dashboard/Dashboard')

const routes = [
  { path: '/', redirect: '/user-profile' },
  { path: '/user-profile', component: UserProfile },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 