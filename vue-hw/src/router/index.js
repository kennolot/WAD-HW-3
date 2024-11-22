import { createRouter, createWebHistory } from 'vue-router';
import HtmlLoader from '../components/HtmlLoader.vue'; // for laoding static html files.


//import MainPage from '../views/MainPage.vue'
//import SignupPage from '../views/SignupPage.vue'

const routes = [
  {
    path: '/',
    component: HtmlLoader,
    props: { htmlFile: '/index.html' },
  },
  {
    path: '/addPost',
    component: HtmlLoader,
    props: { htmlFile: '/addPost.html' },
  },
  {
    path: '/signup',
    component: HtmlLoader,
    props: { htmlFile: '/signup.html' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
