import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import(''); // fixida
const AddPost = () => import('');
const SignUp = () => import('');


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/addPost', name: 'AddPost', component: AddPost },
    { path: '/signup', name: 'SignUp', component: SignUp }
  ];

const router = createRouter({
history: createWebHistory(),
routes,
});
export default router;