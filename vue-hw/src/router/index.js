import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})