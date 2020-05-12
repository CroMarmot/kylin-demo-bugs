import { Page } from '@ali/kylin-framework';
import LoadmoreView from './components/loadmore-view.vue';
import store from './store';
import FastClick from 'fastclick';

FastClick.attach(document.body);

class IndexPage extends Page {

  initOptions() {
    return {
      store
    };
  }

  render() {
    return <LoadmoreView></LoadmoreView>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
