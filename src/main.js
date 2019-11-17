import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/home/home.vue';
import Header from './components/header/header.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

Vue.component('app-home', Home);
Vue.component('app-header', Header);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
