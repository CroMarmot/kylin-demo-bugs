# @ali/kylin-plugin-mock

> 插件 - mock数据

## 介绍

`@ali/kylin-plugin-mock`插件，方便在`kylin`项目中使用[`@ali/luna-mock`](http://gitlab.alipay-inc.com/luna/luna-mock)进行数据`mock`

- 在`build`期间，自动修改`@ali/kylin-build`的构建配置，注入`@ail/luna-mock`的加载器及配置项
- 在运行时，前置运行`@ail/luna-mock`代码，完成容器对象mock

## 配置插件

- npm包安装

```shell
tnpm install @ali/kylin-plugin-mock --save
```

- `package.json`注册插件

```json
{
  "kylinApp": {
    ...
    "plugins": [
      ["mock", {
        "enable": true,
        "config": "./mock/mock.config.js"
      }]
    ]
    ...
  }
}
```

## mock配置

### 配置文件`./mock/mock.config.js`

可以参见如下示例 

- [http://gitlab.alipay-inc.com/luna/luna-mock](http://gitlab.alipay-inc.com/luna/luna-mock)
- [http://gitlab.alipay-inc.com/luna/luna-mock/blob/master/demo/mock.config.js](http://gitlab.alipay-inc.com/luna/luna-mock/blob/master/demo/mock.config.js)

``` javascript

window.lunaMockConfig = {
  // 拦截所有 AlipayJSBridge 的调用
  call: function (opts, callback) {
    // do some thing
  }
};

```

## 命令行支持

在`@ali/kylin-build`进行构建的命令行`kylin-build`中，可以通过指令`---mock [configFilePath]`设置`mock`的开关

### 是否开启`mock`

判断是否开启`mock`的顺序

- 如果有`--mock`指令
- `option.enable`为布尔类型
- 以上三者都没命中，默认关闭

### 使用`mock`文件路径

判断使用哪个`mock.config.js`配置文件

- 如果`--mock [configFilePath]`指令中, `configFilePath`参数不为空
- `option.config`为字符串类型
- 以上两者都没命中，默认`./mock/mock.config.js`







 