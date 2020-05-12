# kylin-build

![tnpm](http://web.npm.alibaba-inc.com/badge/v/@ali/kylin-build.svg?tag=open)

## Changelog

- 0.1.35
    - `变更` `-type component` 构建方式修改为`Vue`版本无关
- 0.1.34
    - `修复` window环境处理路径符号`\`解析报错
    - `修复` `npm@2`非拍平`node_modules`模块查找问题
    - `修复` less/sass/css loader的相对路径解析问题
- 0.1.26
    - `新增` 自动集成`@ali/kylin-plugin-perf`, `@ali/kylin-plugin-mock`
    - `修复` 升级`@alipay/luna-mock@0.5.1`处理模拟器上与`alipayjsapi`的兼容性
- 0.1.21
    - `新增` 添加适配`atool-build`的webpackConfig处理逻辑
    - `新增` 添加开关`kylinApp.options.enableChunkHashName`，默认开启
    - `修复` 修复hpm domain获取逻辑
- 0.1.19
    - `新增` 新增`kylinApp.plugins`插件机制
- 0.1.14
    - `新增` 添加开关`kylinApp.options.preferExternalPromise`，默认关闭
- 0.1.13
    - `变更` 更新全局资源宝`React`,`ReactDom`版本从`15.3.2`到`15.5.4`
    - `新增` 添加全局资源包注入开关`kylinApp.options.enableGlobalResourceInject`，默认开启注入
    - `新增` 添加`IIFE`加括号方式提升v8编译性能开关，`kylinApp.options.enableOptimizeIIFE`，默认关闭
    - `新增` 添加`ES6``babel loose`模式开关`kylinApp.options.enableES6LooseTrue`，默认关闭
- 0.1.10
    - `修复` 默认图像资源转`base64`的`limit`改为`10000`
    - `修复` 使用`npm link`运行`build`时的依赖路径解析问题
- 0.1.8
    - `新增` -t component 时可自定义环境变量,通过`env: {}`定义
    - `新增` --config-path指定kylinApp配置，默认优先读取当前目录下`kylin.config.js`不存在则读取`"package.json"."kylinApp"`
- 0.1.7
    - `新增` 支持`@ali/kylin-i18n`多语言插件的语言配置自动加载
    - `修复` 修正组件模式构建时`webpack.externals`配置不正确
    - `新增` 新增组件模式构建时`notExternals`的白名单列表配置
    - `移除` 移除组件模式构建时开发者可配置`webpack.externals`，只能通过上述白名单列表配置
- 0.1.5
    - `新增` 支持`@alipay/luna-mock`(`^0.4.x`)，读取文件`./mock/mock.config.js`
- 0.1.4
    - `新增` 全局公共资源依赖`FastClick`增加别名`fastclick`适配npm包
- 0.1.3
    - `修复` 模板extends变动支持watch
- 0.1.2
    - `修复` 模板变动支持watch
    - `修复` 自动注入公共资源在dev时不支持watch
- 0.1.1
    - `修改` enableTemplateNunjucks`默认值由false改为true    
- 0.0.21
    - `新增` --sim 启动模拟器
    - `修改` --qrcode 修改生成二维码服务地址
- 0.0.20
    - `新增` 加入babel-helper-vue-jsx-merge-props
    - `新增` 加入`dirAlias`透传
- 0.0.19
    - `修复` 修复全局公共资源注入顺序
    - `新增` 补充全局公共资源包列表
- 0.0.18
    - `新增` 加入nunjucks模板支持
- 0.0.17
    - `修改` 修改html-webpack-plugin的removeAttributeQuotes=false, removeComments=false
    - `修复` 修复gitlab预览readme
- 0.0.16
    - `新增` 加入<component> vue解析块

    

## install

``` js
tnpm install @ali/kylin-build -g
```

## command

### build

根据`--type`来确定是进行`component`构建还是`project`构建，默认进行`project`构建

#### project

常用使用

``` bash
kylin build --dev     # dev构建及静态服务器
kylin build --server --no-prod     # dev构建及静态服务器
kylin build --server  # prod构建及静态服务器
kylin build --no-prod --watch  # dev构建及监听文件变化
```

命令行入参

|参数名|类型|备注|
|----|----|----|
|--dev|boolean|同老buildtool一致，使用dev的conf并开启server。开启该选项会强制设置`prod=false`,`server=true`,`hot=true`,`compress=false`|
|--no-prod|boolean|`prod`为`true`时使用prod的conf编译，为`false`时使用dev的conf编译，同理设置`NODE_ENV`|
|--server|boolean|只开启静态服务器，开启该选项会强制设置`watch=true`|
|--https|boolean|只有当开启`--server`才有效，如果指定，会强制`kyilnApp.useHttps=true`，不指定无影响|
|--verbose|boolean|webpack输出明细|
|--watch|boolean|是否检测文件变化|
|--no-compress|boolean|关闭压缩，默认启用压缩|
|--no-common|boolean|关闭`CommonsChunkPlugin`，默认开启common|
|--hot|boolean|开启热更新，默认关闭，只能在`prod=false`且`server=true`时使用|
|--hpm-domain|boolean|调用`hpm domain`生成内网域名|
|--open [entry]|boolean,string|只能在`--server`时有效，会打开`entry`指定的入口`URL`，只`--open`但未明确指定`entry`时会处理第一个|
|--qrcode [entry]|boolean,string|只能在`--server`时有效，会生成`entry`指定的入口`URL`的二维码，只`--qrcode`但未明确指定`entry`时会处理第一个|
|--sim [entry]|boolean,string|`0.0.21+`只能在`--server`时有效，会调用`hpm sim start`打开`entry`指定的入口`URL`，只`--sim`但未明确指定`entry`时会处理第一个|
|--mock|boolean|开启读取`./mock/mock.config.js`运行`@alipay/luna-mock`|
|--config-path|string|默认使用`kylin.config.js`读取配置，如果不存在则降级使用`package.json`中`kylinApp`字段，如果指定则读取特定文件|

`kylinApp`配置选项

|参数名|类型|备注|
|----|----|----|
|useHttps|boolean|默认关闭， 是否使用https的server|
|pageTemplate|string|页面模板路径|
|output|string|输出相对目录|
|options|Object|额外选项，如下|
|dirAlias|Object|`0.0.20+`等同于`webpack.resolve.alias`，如{ common:'./src/common/' }|
|env|Object|`0.1.8+`等同于`webpack.DefinePlugin`的配置|

`kylinApp.options`配置选项

|参数名|类型|默认值|备注|
|----|----|----|----|
|customVueUrl|string|''|是否自定义Vue为CDN地址|
|enableGenerator|boolean|false|是否开启babel中generator的转换支持 *有风险*|
|enableForOfArray|boolean|false|是否开启babel中的for-of循环支持 *性能消耗较高*|
|enableTypeofSymbol|boolean|false|是否开启babel中的typeof-symbol支持 *性能消耗较高*|
|enableDecoratorInject|boolean|true|是否开启kylin框架的装饰器注入功能|
|enableComponentLazyRequire|boolean|true|是否开启kylin组件懒加载|
|enableDecorator|boolean|true|是否开启babel中的decorator-legacy插件处理装饰器|
|enableRefresh|boolean|false|在启动`--hot`时是热替换局部模块还是刷新全页面|
|enableTemplateNunjucks|boolean|true|`0.0.x为false`使用`nunjucks`解析模板，优先使用`pages[].index`，不存在使用`pageTemplate`|
|minChunks|Number|undefined|`CommonChunkPlugin`属性`minChunks`|
|enableChunkHashName|boolean|true|`prod`模式下是否需要对`chunk`开启`hash`模式|

#### component

把所有`.vue`文件中的`style`进行编译，`script`进行`babel`转换，所有.js文件进行`babel`转换

常用使用

``` bash
kylin build -t component   # 组件构建
kylin build -t component --watch  # 组件构建及监听变化
kylin build -t component --no-compress  # 组件构建不压缩
```

命令行入参

|参数名|类型|备注|
|----|----|----|
|--verbose|boolean|webpack输出明细|
|--watch|boolean|是否检测文件变化|
|--no-compress|boolean|关闭压缩，默认启用压缩|
|--config-path|string|默认使用`kylin.config.js`读取配置，如果不存在则降级使用`package.json`中`kylinComponent`字段，如果指定则读取特定文件|

`kylinComponent`配置选项

|参数名|类型|默认值|备注|
|----|----|----|----|
|entry|array|["js","vue"]|构建文件后缀|
|sourceDir|string|`./src/`|源码目录|
|buildDir|string|`./dist`|构建目录|
|options|Object|-|额外选项，如下|
|env|Object|等同于`webpack.DefinePlugin`的配置|




#### component-old`待废弃`

常用使用

``` bash
kylin build -t component-old   # 组件构建
kylin build -t component-old --watch  # 组件构建及监听变化
kylin build -t component-old --no-compress  # 组件构建不压缩
```

命令行入参

|参数名|类型|备注|
|----|----|----|
|--verbose|boolean|webpack输出明细|
|--watch|boolean|是否检测文件变化|
|--no-compress|boolean|关闭压缩，默认启用压缩|
|--config-path|string|默认使用`kylin.config.js`读取配置，如果不存在则降级使用`package.json`中`kylinComponent`字段，如果指定则读取特定文件|

`kylinComponent`配置选项

|参数名|类型|默认值|备注|
|----|----|----|----|
|entry|string|`index`|构建入口，默认`index`|
|sourceDir|string|`./src/`|源码目录|
|buildDir|string|`./dist`|构建目录|
|library|string|`kylinComponent`|输出umd库名称|
|options|Object|-|额外选项，如下|
|libMode|boolean|`false`|组件库模式，会自动根据`./packages`目录下的组件打包每个组件，详见**注意1**|
|notExternals|Array<String>| [] | 默认移除所有外部依赖`/^[a-z0-9\@]/i`，如果某些不需要命中，配置在这个字符串数组里|
|env|Object|`0.1.8+`等同于`webpack.DefinePlugin`的配置|

`kylinComponent.options`配置选项

在继承所有`kylinApp.options`外，还支持以下

`kylinComponent.options`配置选项

|参数名|类型|默认值|备注|
|----|----|----|----|
|componentImport|Object|{libraryName: '@ali/kylin-component-vue',style: true}|如果为`null`则为关闭，开启`babel-plugin-import`模式|

**注意1**: 会把`./packages/*`匹配的每个目录，当做一个组件`entry`进行独立输出，输出结果为`./${buildDir}/${chunkName}/index.js`，同时，样式被输出在`./${buildDir}/${chunkName}/style/index.css`（配合`babel-plugin-import`）
**注意2.1**: 如果希望构建的组件是可以独立发布的，可能需要修改`externals`选项
**注意2.2**: 如果只作为`NPM`包发布，只需要确保`package.json`中的依赖正确，不需要修改`externals`选项


