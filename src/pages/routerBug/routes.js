import Page0 from './components/Page0.vue';
import Page1 from './components/Page1.vue';

const routes = [{
  path: '/',
  redirect: '/Page0'
},
  {
    path: '/Page0',
    component: Page0
  },
  {
    path: '/Page1',
    component: Page1
  }
];

export default routes;
