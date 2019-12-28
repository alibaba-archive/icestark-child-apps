import Vue from 'vue';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI);
Vue.config.productionTip = false;

if (isInIcestark()) {
  const mountNode = getMountNode();
  let vue;
  registerAppEnter(() => {
    vue = new Vue({
      router,
      render: h => h(App),
    }).$mount();
    // for vue don't replace mountNode
    mountNode.appendChild(vue.$el);
  });

  // make sure the unmount event is triggered
  registerAppLeave(() => {
    vue && vue.$destroy();
  });
} else {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
}
