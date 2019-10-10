import { renderNotFound } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';

import Home from '@/pages/Home';
import Message from '@/pages/Message';
import About from '@/pages/About';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/message',
        component: Message,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  },
];

export default routerConfig;
