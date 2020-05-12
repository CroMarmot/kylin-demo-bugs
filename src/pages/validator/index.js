import { Page, use } from '@ali/kylin-framework';
import ValidatorView from './components/validator-view.vue';
import store from './store';
import FastClick from 'fastclick';
import Vue from 'vue';
import vverify from 'v-verify';

Vue.use(vverify, {
  mode: 'insert', 
  errorClass: 'verify-error',
  errorForm: 'verify-form-error'
});

FastClick.attach(document.body);

class IndexPage extends Page {

  initOptions() {
    return {
      store
    };
  }

  render() {
    return <ValidatorView></ValidatorView>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
