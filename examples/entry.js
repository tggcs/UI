import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import routes from './route/route.config';
// import Element from 'main/index.js';

// Vue.use(Element);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({
  ...entry,
  router
}).$mount('#app');