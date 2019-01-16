
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//Configuration of Vue-Router library
import VueRouter from 'vue-router';
Vue.use(VueRouter); 

//Configuration of Vue-Axios library
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

//Imporation of the App.vue in order to build the rendering
import App from './App.vue';

//we have imported the four components and also defined the routes for our application. Then we have created a router object and passed it to our Vue application.
import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import RegistrationComponent from './components/RegistrationComponent.vue';
import ConnectionComponent from './components/ConnectionComponent.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    },
    {
        name: 'connection',
        path: '/connect',
        component: ConnectionComponent
    },
    {
        name: 'registration',
        path: '/register',
        component: RegistrationComponent
    },
]

const router = new VueRouter ({mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({router}, App)).$mount('#app'); // vm.$mount() peut être utilisé pour démarrer manuellement le montage d’une Instance de Vue non montée.
