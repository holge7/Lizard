require('./bootstrap');

import vue from 'vue';
window.Vue = vue;


import App from './components/App.vue';

//Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Route
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';

//Not to return to the same route
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

//Vuex
import {store} from './store.js';

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

const app = new Vue({
    el: '#app',
    store:store,
    router:router,
    render: h => h(App),
});
