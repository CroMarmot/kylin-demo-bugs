import {
  Page
} from '@ali/kylin-framework';
// eslint-disable-next-line no-unused-vars
import IndexView from './components/index-view.vue';
import FastClick from 'fastclick';
import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

FastClick.attach(document.body);

class IndexPage extends Page {

  initOptions() {
    return {
      store,
      router
    };
  }

  render() {
    return <IndexView / > ;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
