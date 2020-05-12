import { Page } from '@ali/kylin-framework';
import ListviewView from './components/listview-view.vue';
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
    return <ListviewView></ListviewView>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
