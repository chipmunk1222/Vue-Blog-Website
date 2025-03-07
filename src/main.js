import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '@/router/index.js';
import './EventBus'
import vLazy from '@/directives/lazy';
import "@/assets/style/global.scss";
import store from '@/store/index.js';
Vue.config.productionTip = false

import './mock/index.js'


store.dispatch('setting/getSetting')
Vue.directive('lazy',vLazy)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

