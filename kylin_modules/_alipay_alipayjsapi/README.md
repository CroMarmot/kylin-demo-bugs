## 关于 AlipayJSAPI
- **[AlipayJSAPI 文档地址](http://site.alipay.net/iat/open-nebula/alipayjsapi/index.html)**
- AlipayJSAPI 是基于 AlipayJSBridge 封装的面向外部开发者的一套 API，其目标是统一 AlipayJSBridge 接口命名、入参、出参格式，处理 AlipayJSBridge 的兼性问题，降低容器内开发成本和客服成本。
- **只兼容 支付宝 10.0 以上接口，10.0 以下 JSAPI 兼容性请自行处理。**
- AlipayJSAPI 提供丰富的支付宝原生 API，可以方便调用支付宝提供的能力，达到媲美原生应用的体验，如页面跳转，支付功能等。

### 安装使用  
* 对外版本： `require("@alipay/alipayjsapi");`  
* 对内版本： `require("@alipay/alipayjsapi/lib/alipayjsapi.inc.js");`
* service worker 版本：`require("@alipay/alipayjsapi/lib/alipayjsapi.inc.sw.js")`

### 快速开始
* __Promise 方式：__

```js
ap.httpRequest('http://httpbin.org/ip')
  .then(function(response){
    return ap.confirm('本机IP: ' + response.data.origin);
  })
  .then(function(result){
    return ap.showToast(result.confirm ? '确定' : '取消');
  })
  .catch(function(error){
    console.warn(error);
  });
```

* __回调方式{{{，无需关注 ready 事件，可直接调用}}}：__

```js
ap.httpRequest({
  url: 'http://httpbin.org/ip',
  success: function(response){
    ap.alert('本机IP: ' + response.data.origin);
  },
  fail: function(error){
    console.warn(error);
  }
});
```

```js
ap.confirm('Hello AlipayJSAPI!', function(result){
  ap.showToast(result.confirm ? '确定' : '取消');
});
```

## 其他说明
### 接口约定
- ap.on 开头的 API 是监听某个事件发生的接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。
- 如未特殊约定，其他 API 接口都接收两个参数，一个 Object 类型的 OPTIONS 作为入参，OPTIONS 中可以指定 success / fail / complete 来接收接口调用结果；还有一个可选参数是 Function 类型的 CALLBACK，作为回调函数等同于 OPTIONS.complete。接口参数在文档里没有明确定义时，则无须传入。
- 回调函数的参数始终是 Object 类型，会返回接口调用的结果。注意，并不是每个接口都有回调函数，可在具体接口文档里查看是否定义。
- **有回调函数的接口均支持 Promise 风格调用。**

名称 | 类型 | 必填 | 描述
-----|-----|-----|-----
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）


### 错误约定
AlipayJSAPI 调用出错时 CALLBACK 回调函数的参数里会包含一个特殊的字段 error（Number 类型），作为 API 调用的错误码，示例:

```js
{
  error: 1,
  errorMessage: '接口不存在'
}
```

error | 描述
------|------
1 | 接口不存在
2 | 参数无效
3 | 发生未知错误
4 | 接口无权限
