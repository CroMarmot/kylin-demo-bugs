<template>
  <div>
    <h1 @click="routerPush">routerPush</h1>
    <h1 @click="workableTitle">workable title</h1>
    <h2>前端调用无变化，阿里自带的标题栏没有问题，客户端封装一次后的代码，老基线版本没有问题，新基线同样代码出现问题</h2>
    <h2>期望 设置标题后，不会受到hash变化影响(vue-router 提供的 $replace)</h2>
    <h2>问题现象 调用客户端封装以后的initPageTitle 在 hash变化以后 标题会变或者消失，但是AlipayJSBridge.call('setTitle')正常</h2>
    <h2>
正常的（应该是32基线），第一个页面设置标题-> router.replace第二个页面->等待3秒设置标题.
异常的（应该是68基线），第一个页面设置标题-> router.replace第二个页面->等待3秒设置标题.

在异常的手机上，一旦页面调用了 AlipayJSBridge.call('setTitle') 的方法之后，再调用我们封装的设置标题，只要不关闭当前页，在页内切换，就不会再有问题（标题栏显示空白 或者 地址链接）。
    </h2>
  </div>
</template>

<script type="text/javascript">
import { Component } from '@ali/kylin-framework';
import ap from '@alipay/alipayjsapi';

function JsAPI(type, params, fn) {
  ap.call(type, params, fn);
}
function initTitle(params, callback) {
  JsAPI('initPageTitle', params, callback);
}

function popWindow() {
  JsAPI('popWindow', {data: undefined});
}

@Component({})
export default class pageA {
  name = 'Page0'

  mounted() {
    setTimeout(() => {
      this.setTitle();
    }, 1000);
  }
  methods = {
    setTitle() {
      this.bugTitle();
    },
    workableTitle() {
      // 默认的方法没问题
      window.AlipayJSBridge.call('setTitle', {
        title: 'workable'
      });
    },
    bugTitle() {
      // 目前客户端封装的方法，在hash变换后会有空白出现
      initTitle({
        leftButton: { exist: true, name: '' },
        rightButton: { exist: false, name: '' },
        title: 'Home'
      }, e => {
        this.setTitle();
        if (e.index === '0') {
          popWindow();
        }
      });
    },
    routerPush() {
      this.$router.push('/Page1');
    }
  }
}
</script>

<style lang="less" scoped>
</style>
