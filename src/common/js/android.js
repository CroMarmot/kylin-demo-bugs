/**
 * @file android 特殊接口
 */
import ap from '@alipay/alipayjsapi';
function JsAPI(type, params, fn) {
  ap.call(type, params, fn);
}

export function pushWindow(url, closeCurrentWindow, params) {
  JsAPI('pushWindow', {
    url,
    param: {
      closeCurrentWindow,
      canPullDown: false,
      readTitle: false,
      showOptionMenu: false,
      params
    }
  });
}

export function getPassData() {
  const param = window.AlipayJSBridge.startupParams.params;
  if (param) {
    return JSON.parse(param);
  }
}
