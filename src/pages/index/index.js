import { Page } from '@ali/kylin-framework';
import IndexView from './components/index-view.vue';
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
    return <IndexView></IndexView>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
