<template>
  <div>
    <h2>
      现象：安卓68基线，`cnpm run
      dev:mock`，会拦截所有和客户端的交互插件调用，console输出 兜底
    </h2>
    <h2>期望：mock只拦截rpc请求，不拦截其它的客户端插件</h2>
    <h2>下面 alert没有mock时，走的是客户端方法，mock以后走的是html的alert，明显不同,（通讯录更明显）</h2>
    <button @click="rpc">RPC(xxx)</button>
    <button @click="alipayjsbridgeAlert">alipayjsbridge Alert</button>
    <button @click="apAlert">ap.Alert</button>
    <button @click="customApi">customApi</button>
    <button @click="contact">通讯录</button>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
</style>

<script>
import { Component } from "@ali/kylin-framework";
import ap from "@alipay/alipayjsapi";

function JsAPI(type, params, fn) {
  ap.call(type, params, fn);
}

@Component({})
export default class IndexView {
  data = {
    name: "mockBug",
  };
  methods = {
    rpc() {
      JsAPI(
        "rpc",
        {
          operationType: "xxx",
          requestData: [],
          timeout: 60,
          headers: {},
        },
        (e) => {
          alert(JSON.stringify(e));
        }
      );
    },
    apAlert() {
      JsAPI(
        "alert",
        {
          title: "亲",
          message: "你好",
          button: "确定",
        },
        function (e) {
          alert(JSON.stringify(e));
        }
      );
    },
    alipayjsbridgeAlert() {
      // https://myjsapi.alipay.com/jsapi/ui/alert.html
      window.AlipayJSBridge.call(
        "alert",
        {
          title: "亲",
          message: "你好",
          button: "确定",
        },
        function (e) {
          alert(JSON.stringify(e));
        }
      );
    },
    customApi() {
      JsAPI("customApi", {}, function (e) {
        alert(JSON.stringify(e));
      });
    },
    contact(){
      // https://myjsapi.alipay.com/jsapi/native/contact.html
      JsAPI("contact", {}, function (e) {
        alert(JSON.stringify(e));
      });
    }
  };
  mounted() {}
}
</script>
