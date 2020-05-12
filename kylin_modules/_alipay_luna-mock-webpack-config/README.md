## luna-mock-webpack-config

> 简化 luna-mock 配置

## 配置项

```js
var config = {
  // true 时使用真实接口，但是依然显示 log，用于 模拟器/真机 调试; false 时使用 mock，同时显示 log
  // useRealButLog: true,

  // 延迟时间，用于模拟接口返回慢的情况
  // delay: 0,

  // 指定某个 mock 使用特定延迟时间，优先级大于 delay。例如对于 queryNextAction 这个接口单独设置 1000ms 延迟
  // specialDelay: {
  //   queryNextAction: 1000
  // },

  // 完全禁用本工具，方便使用线上接口进行最后的验证。默认为false会开启所有mock
  // forbidAll: true,

  // 本工具默认会显示每次容器调用的log，如果想关掉请打开下面的配置（例如想使用debug.alipay.net来查看log）
  // disableLog: true,

  // 设为 true 时，会自动触发 AlipayJSBridgeReady 事件，mock 全局变量 AlipayJSBridge，完全忽略容器提供的 AlipayJSBridge
  // 设为 false 时，容器提供的 AlipayJSBridge 会进行兜底
  // 如果不设置，会自动进行判断。如果安装了 luna-devtools 的话相当于 true；如果 ua 中包含 alipayclient 则相当于 false；其他情况相当于 true
  // 一般情况下无需设置。特殊：在 mpaas 这种可以自定义 useragent 的容器中，需要手工设置为 false，否则可能会发现容器中的 jsapi 不生效。
  // runInBrowser: false;


  // 默认会使用 jsapi 中定义的所有容器接口进行 mock，如果想仅仅 mock 部分容器接口，可以在这里配置
  // jsapis: [
  //   'getUserInfo'
  // ],

  // 仅对此列表之中的rpc进行mock，如果不配置此项默认会对所有rpc进行mock
  // rpcMockList: [
  //   'alipay.mobile.relation.findV2',
  //   // 'alipay.mobile.relation.getMenuMetaData',
  //   // 可以用回调方法进行更复杂的定制，返回false说明不进行mock，使用服务端接口的返回
  //   function(opts) {
  //     // mock兴趣这个特殊接口，其他例如获取职业使用服务端接口的返回
  //     var shouldMock = opts.operationType === 'alipay.mobile.relation.getMenuMetaData' &&
  //       (opts.requestData[0].menuType === 'LIKE');
  //     return shouldMock;
  //   }
  // ],

  // 将项目中特定前缀的 rpc，映射到简单的 mock 文件，例如 alipay.antmember.forest.h6.xx => af.xx.js
  // rpcPrefix: {
  //   'alipay.antmember.forest.h6': 'af'
  // },

  // autoMockRpcLimit: true, // 对所有 rpc 自动 mock 限流
  // autoMockRpcLimit: 0.2, // 以 20% 概率自动 mock 限流
  // autoMockRpcLimit: [
  //   'alipay.antmember.forest.h5.queryPlantChallengeUserInfo',
  //   'alipay.antmember.forest.h5.queryPlantChallengeMain',
  //   'alipay.antmember.forest.h5.joinPlantChallenge'
  // ], // 对列表中列出的 rpc 自动 mock 限流

  // autoMockRpcError: true, // 对所有 rpc 自动 mock 错误情况
  // autoMockRpcError: 0.2, // 以 20% 概率自动 mock 错误情况
  // autoMockRpcError: [
  //   'alipay.antmember.forest.h5.queryPlantChallengeUserInfo',
  //   'alipay.antmember.forest.h5.queryPlantChallengeMain',
  //   'alipay.antmember.forest.h5.joinPlantChallenge'
  // ], // 对列表中列出的 rpc 自动 mock 错误情况
};
```

如果页面的 url 中传入了 `luna-mock-scene=xx`, 该页面中调用的所有接口和 rpc 的 mock 文件，都会自动传入第二个参数 `xx`，然后就可以进行多场景的 mock 了，具体例子可见 demo

## kylin 框架

在 mock/mock.config.js 中直接将上面的配置项 export 即可。
```js
var config = {...};
module.exports = config;
```

有如下约定：
* rpc 接口 `rpc/xx.js`
* 其他容器接口 `jsapi/xx.js`

也可以通过 `文件夹/index.js` 这种方式访问，这样就可以将 mock 文件进行进一步地拆分

## 一般的 webpack 项目

需要自己处理 HMR

```js
var config = {...};

var simpleConfig = require('@alipay/luna-mock-webpack-config');

const contextGetter = {
  getRpc() {
    return require.context('./rpc/', true, /\.js$/);
  },
  getJsapi() {
    return require.context('./jsapi/', true, /\.js$/);
  }
};

const contextCache = {
  rpcContext: contextGetter.getRpc(),
  jsapiContext: contextGetter.getJsapi()
};

simpleConfig(config, contextCache);

if (module.hot) {
  module.hot.accept(contextCache.rpcContext.id, function () {
    contextCache['rpcContext'] = contextGetter.getRpc();
  });
  module.hot.accept(contextCache.jsapiContext.id, function () {
    contextCache['jsapiContext'] = contextGetter.getJsapi();
  });
}

```
