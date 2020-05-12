import { Page } from '@ali/kylin-framework';
import DialogueView from './components/dialogue-view.vue';
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
    return <DialogueView></DialogueView>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
