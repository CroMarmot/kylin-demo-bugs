# @ali/kylin-plugin-resource

> 插件 - 全局注入资源定制化

## 介绍

`@ali/kylin-plugin-resource`插件

- 在`build`期间，修改了`全局公共资源`配置

## 配置插件

- npm包安装

```shell
tnpm install @ali/kylin-plugin-open --save
```

- 选项
  - onlyMap: `true`时移除原有注入资源，只使用提供的
  - map: 格式为 `[npm-name]: { external, js, css }`


- `package.json`注册插件

```json
{
  "kylinApp": {
    ...
    "plugins": [
      ["resource", {
        "onlyMap": true,
        "map": {
          "vue": {
            "external": "Vue",
            "js": "https://xxx.vue.js",
            "css": undefined
          },
          "fastclick": {
            "external": "FastClick",
            "js": "https://xxx.fastclick.js",
            "css": undefined
          }
        }
      }]
    ]
    ...
  }
}
```

