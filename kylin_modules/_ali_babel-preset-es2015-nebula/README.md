# @ali/babel-preset-es2015-nebula

该项目fork自 babel-preset-es2015

## 差异
1. 默认不启用 "babel-plugin-transform-es2015-typeof-symbol", 需要通过参数 `enableTypeofSymbol`
2. 默认不启用 "babel-plugin-transform-es2015-for-of", 需要通过参数 `enableForOfArray`
3. 默认不启用 "babel-plugin-transform-regenerator", 需要通过参数 `enableGenerator`
4. 自动引入 "@ali/babel-plugin-transform-runtime-nebula", 针对nebula容器进行特定es6转换

## Install

```sh
tnpm install --save-dev @ali/babel-preset-es2015-nebula
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@ali/babel-preset-es2015-nebula"]
}
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["@ali/babel-preset-es2015-nebula"]
});
```

## Options

* `loose` - Enable "loose" transformations for any plugins in this preset that allow them (Disabled by default).
* `modules` - Enable transformation of ES6 module syntax to another module type (Enabled by default to `"commonjs"`).
  * Can be `false` to not transform modules, or one of `["amd", "umd", "systemjs", "commonjs"]`
* `spec` - Enable "spec" transformations for any plugins in this preset that allow them (Disabled by default)
* `enableTypeofSymbol` - 开启则引入`babel-plugin-transform-es2015-typeof-symbol`, 默认**不开启**
* `enableForOfArray` - 开启则引入`babel-plugin-transform-es2015-for-of`, 默认**不开启**,遇到`for-of`语法会直接抛错
* `enableGenerator` - 开启则引入`babel-plugin-transform-regenerator`, 并且配置`runtime-nebula`支持, 默认**不开启**
* `nebulaTarget` - 默认**common**,可选["common","ios8","u4"],指定兼容到的`nebula`容器版本
* `requeue` - <del>废弃选项</del>
```js
{
  presets: [
    // by default
    ["@ali/babel-preset-es2015-nebula", { 
      "loose": false,
      "modules": "commonjs",
      "spec": false,
      "enableTypeofSymbol": false,
      "enableForOfArray": false,
      "enableGenerator": false,
      "nebulaTarget": "common"
    }]
  ]
}
```
