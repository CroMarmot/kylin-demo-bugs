# @ali/kylin-plugin-vue

> 插件 - vue

## 介绍

`@ali/kylin-plugin-vue`插件

- 配置`vue`特定版本的编译环境和运行时特定依赖

|npm版本|vue版本|
|-----|-----|
|`^0.1.0`|`2.1.6`|
|`^0.4.0`|`2.4.2`|
|`^0.5.0`|`2.4.4`|
|`^0.6.0`|`2.5.2`|
|`^0.7.0`|`2.5.3`|
|`^0.8.0`|`2.5.13`|

## 配置插件

- npm包安装

```shell
tnpm install @ali/kylin-plugin-vue --save
```

- `package.json`注册插件

默认`external`选项为`true`，若指定为`"external": false`，则不会注入`script`而使用`npm`引入模式。

```json
{
  "kylinApp": {
    ...
    "plugins": [
      ["vue", {
        "external": true
      }]
    ]
    ...
  }
}
```

