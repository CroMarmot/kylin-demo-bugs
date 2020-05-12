# luna-mock

## 简介
钱包 H5 容器的完美 mock 方案

### 功能一览

* 无侵入mock
* 任意设备，无需环境配置
* 随意切换真实与mock的接口
* 本地查看log，查看调用栈

具体解决的痛点和使用场景，请见：http://gitlab.alipay-inc.com/luna/luna-mock/blob/master/docs/painPoints.md

## 使用指南

推荐使用 [luna-mock-webpack-config](http://gitlab.alipay-inc.com/luna/luna-mock-webpack-config) ，通过简单配置的方式来统一所有项目的 mock 使用方式。

## 接入指南

下面列举了各种开发方案的 mock 接入方法，如果您的项目在接入 luna-mock 的过程中遇到问题，可以直接联系: @简钰

### 场景 1. 凤蝶活动

如果您要开发凤蝶活动，或者使用 dora 作为开发服务器，可以直接使用 dora 插件：http://luna.alipay.net/#/tools/dora-plugin-luna-mock

### 场景 2. 使用 webpack-dev-server 的项目

对于直接使用 webpack-dev-server 作为本地开发服务器的项目，可以参考 demo：http://gitlab.alipay-inc.com/luna_release/luna-train-demo/tree/master/mock

1. 安装 `@alipay/luna-mock`

    ```sh
    $ tnpm install @alipay/luna-mock --save
    ```

2. 为 `webpack-dev-server` 配置 mock 专用的 config

    为了避免 mock 脚本对线上使用的打包代码造成侵入，mock 代码只能在本地开发 server 中加载，千万不要直接在原来的 `webpack.config.js` 中加入 mock 脚本。

    ``` json
    "scripts": {
      "dev": "webpack-dev-server --devtool source-map --inline --hot --host 0.0.0.0 --config ./mock/webpack.config.js",
      "build": "webpack --progress --colors",
    }
    ```

3. 在项目根目录中新建 mock 目录，所有 mock 相关的内容都放在这个目录里

    ```
    ├── mock
       ├── webpack.config.js                       (webpack-dev-server 使用的配置文件)
       ├── mock.config.js                          (luna-mock 使用的配置文件)
       └── rpc                                     (所有 rpc 接口可以放到这个目录中)
           ├── alipay.mobile.relation.findV2.js
           └── alipay.mobile.relation.getMenuMetaData.js
    ```

4. mock 目录中的 webpack.config.js

    这是 `webpack-dev-server` 所要使用的配置文件，会读取项目根目录下的 `webpack.config.js`，然后将 `mock.config.js` 及其所引用的文件使用 webpack 进行编译，然后连同 `luna-mock` 一起注入到页面中。

    如果使用默认的 mock 目录结构，可以直接复制这个样例： http://gitlab.alipay-inc.com/luna_release/luna-train-demo/blob/master/mock/webpack.config.js

5. mock 目录中的 mock.config.js

    所有的 mock 配置都写在这个文件里。本例中只自定义了 rpc 返回，如下：

    ``` js
    const config = {};

    // 用户自定义mock
    config.call = {
      rpc: function (opts, callback) {
        var type = opts.operationType;
        var rpc = require('./rpc/' + type);
        var data = typeof rpc === 'function' ? rpc(opts) : rpc;
        callback && callback(data);
      }
    };

    window.lunaMockConfig = config;
    ```

    更多的配置项，可见：http://gitlab.alipay-inc.com/luna/luna-mock/blob/master/demo/mock.config.js

### 场景 3. luna 组件

luna 组件实际上也是用的 `webpack-dev-server`，因此 mock 方案跟场景 2 类似，区别在于默认 webpack 会生成两个目标文件，因此第 4 步的 `webpack.config.js` 配置有所不同，可以直接复制样例：http://gitlab.alipay-inc.com/luna-component/luna-core/blob/master/mock/webpack.config.js

### 场景 4. vue-cli 项目

使用 vue 脚手架生成的项目，实际上是用 express 调用 `webpack-dev-middleware` 实现的开发服务器。因此我们对默认的 webpack 配置做了一个封装，在 express 服务启动时实现了 mock 注入功能，详见：http://gitlab.alipay-inc.com/H5App/vue-dearpay/blob/feature/mock/build/mock-webpack-patch.js

完整的 mock 方案可见 `亲密付` 的 mock 代码: http://gitlab.alipay-inc.com/H5App/vue-dearpay/tree/feature/mock/mock

### 场景 5. 只想在 Chrome 中打开页面

下载浏览器插件[luna-devtools](http://gitlab.alipay-inc.com/luna/luna-devtools)，无需任何配置，你的 H5 页面就可以在 Chrome 中打开使用了。

当然，这时只是在页面中自动注入了 AlipayJSBridge，然后提供默认的兜底返回，没法进行自定义。

如果需要自定义等高级功能，还是要用上面的开发 server 接入方案。

### 场景 6. [kylin 项目](http://kylin.alipay.net/kylin/cli/help.html#luna-mock)

在`@ali/kylin-build`的`0.1.5+`版本上，可以通过`kylin build --dev --mock`指令来开启`luna-mock`，其中：

- 默认的配置在`./mock/mock.config.js`下
- 如果有多个mock配置，可以通过`kylin build --dev --mock path/to/mock.config.js`来指定
- 对于配置文件的使用，与正常`luna-mock`项目一致
