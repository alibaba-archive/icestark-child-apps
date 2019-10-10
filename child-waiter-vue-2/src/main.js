import Vue from 'vue';
import { getMountNode, registerAppLeave } from '@ice/stark-app';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

const mountNode = getMountNode(document.getElementById('app'));
const vue = new Vue({
  router,
  render: h => h(App),
}).$mount(mountNode, true);

// trigger unmount manually
registerAppLeave(() => {
  vue.$destroy();
});