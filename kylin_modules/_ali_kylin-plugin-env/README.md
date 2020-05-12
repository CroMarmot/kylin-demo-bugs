# @ali/kylin-plugin-env

> 插件 - env

## 介绍

`@ali/kylin-plugin-env`插件

- 在`build`期间，修改了`webpack`配置，注入了`new webpack.DefinePlugin`
- 可以指定`option.var`和`option.export`两者模式
    - `var`直接指定变量的值
    - `export`指定从当前`shell`的运行环境变量中透传哪些到`webpack`中

## 配置插件

- npm包安装

```shell
tnpm install @ali/kylin-plugin-env --save
```

- `package.json`注册插件

### variable 选项

设置`webpack`编译时的变量`__KYLIN_VAR__`为布尔值`true`（会自动经过`JSON.parse`）

```json
{
  "kylinApp": {
    ...
    "plugins": [
      ["env", {
        "variable": {
          "__KYLIN_VAR__": "true"
        }
      }]
    ]
    ...
  }
}
```

### exports 选项

- 设置`webpack`编译时的变量`__KYLIN_EXPORT_STR__`为`SHELL`执行时的环境变量中的`__KYLIN_EXPORT_STR_FROM_ENV__`值（会自动经过`JSON.parse`）
- 设置`webpack`编译时的变量`__KYLIN_EXPORT_BOOL__`为`SHELL`执行时的环境变量中的`__KYLIN_EXPORT_BOOL_FROM_ENV__`值（会自动经过`JSON.parse`）

```javascript
{
  "scripts": {
    "build": "cross-env '__KYLIN_EXPORT_STR_FROM_ENV__=\"\"string\"\"' '__KYLIN_EXPORT_BOOL_FROM_ENV__=false' kylin-build"
  }
}
```

```json
{
  "kylinApp": {
    ...
    "plugins": [
      ["env", {
        "exports": {
          "__KYLIN_EXPORT_STR__": "__KYLIN_EXPORT_STR_FROM_ENV__",
          "__KYLIN_EXPORT_BOOL__": "__KYLIN_EXPORT_BOOL_FROM_ENV__"
        }
      }]
    ]
    ...
  }
}
```

在源码中的替换前后分别为

``` js
if ( __KYLIN_EXPORT_STR__ === 'string' ) {
  console.log('true');
}
if ( __KYLIN_EXPORT_BOOL__ ) {
  console.log('false');
}
```

``` js
if ( true ) {
  console.log('true');
}
if ( false ) {
  console.log('false');
}
```
