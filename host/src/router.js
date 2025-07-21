import { createRouter, createWebHistory } from 'vue-router'

const UserProfile = () => import('user-profile/UserProfile')
const Dashboard = () => import('dashboard/Dashboard')
import App from './App.vue'
import Home from './components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/user-profile', component: UserProfile },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 