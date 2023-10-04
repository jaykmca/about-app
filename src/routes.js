import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from './components/HomeView.vue';
import About from './components/AboutView.vue'
import Contcat from './components/ContactView.vue';

Vue.use(VueRouter);
//const baseUrl='/apptwo'

const routes = [
    { path: '/', component: Home, name: 'HomeView'},
    { path: '/about', component: About, name: 'AboutView'},
    { path: '/contact', component: Contcat, name: 'ContcatView'},
   
  ];
  const router = new VueRouter({
    routes,
  });

  export default router;
