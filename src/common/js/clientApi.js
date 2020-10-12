import {client} from './client';
import ap from '@alipay/alipayjsapi';
function JsAPI(type, params, fn) {
  ap.call(type, params, fn);
}

export function popWindow(data) {
  JsAPI('popWindow', {data});
}

export function pushWindow(...args) {
  return client.pushWindow(...args);
}

export function getPassData() {
  return client.getPassData();
}
