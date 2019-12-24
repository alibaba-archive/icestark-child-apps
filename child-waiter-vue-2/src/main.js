import Vue from 'vue';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

const mountNode = getMountNode(document.getElementById('app'));

let vue;
if (isInIcestark()) {
  registerAppEnter(() => {
    console.log('child-waiter-vue-2 ---------> mount');
    vue = new Vue({
      router,
      mounted: () => {
        console.log('App mounted');
      },
      destroyed: () => {
        console.log('App destroyed');
      },
      render: h => h(App),
    }).$mount();
    // for vue don't replace mountNode
    mountNode.innerHTML = '';
    mountNode.appendChild(vue.$el);
  });

  // trigger unmount manually
  registerAppLeave(() => {
    vue && vue.$destroy();
  });

} else {
  console.log('child-waiter-vue-2 ---------> single mount');
  vue = new Vue({
    router,
    mounted: () => {
      console.log('App mounted');
    },
    destroyed: () => {
      console.log('App destroyed');
    },
    render: h => h(App),
  }).$mount();
  // for vue don't replace mountNode
  mountNode.appendChild(vue.$el);
}