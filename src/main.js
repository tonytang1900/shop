import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/element.js'
import toast from '@/components/common/toast'
Vue.use(toast)
//解决300毫秒延迟问题
// import attachFastClick from 'fastclick'
// var attachFastClick = require('fastclick');
// attachFastClick(document.body);


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$Bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
