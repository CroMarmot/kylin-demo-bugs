function getUA(userAgent) {
  if (userAgent) {
    return userAgent.toLowerCase();
  } else if (window) {
    return window.navigator.userAgent.toLowerCase();
  } else {
    throw new Error('userAgent is not defined！');
  }
}

function getPhoneSystemType(u) {
  let isAndroid = u.indexOf('android') > -1 || u.indexOf('adr') > -1;
  let isiOS = !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
  let isWinPhone = u.indexOf('Windows Phone'.toLowerCase()) > -1;
  if (isAndroid) return 'Android';
  if (isiOS) return 'IOS';
  if (isWinPhone) return 'Windows Phone';
  return '';
}

export function isIOS() {
  let ua = getUA();
  let ret = true;
  if (ua.match(/(iPhone|iPod|android|ios|iPad|windows phone|tablet)/i)) {
    if (getPhoneSystemType(ua) !== 'IOS') {
      ret = false;
    }
  }
  return ret;
}

import * as iphone from './ios.js';
import * as android from './android.js';
export const client = isIOS() ? iphone : android;
