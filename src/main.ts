import svg4everybody from 'svg4everybody';
import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

svg4everybody();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
