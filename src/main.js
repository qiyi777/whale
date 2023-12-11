import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/common.css'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

const epApp = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


window.epApp = epApp