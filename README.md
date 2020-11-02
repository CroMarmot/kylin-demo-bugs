# H5App Open

## 命令

- `cnpm install` 安装依赖
- `cnpm run dev` 启动kylin开发服务器，监听8090端口
- `cnpm run dev:preview` 启动kylin开发服务器，并打开chrome
- `cnpm run dev:watch` 启动kylin开发模式，但不启动server，会监听构建到`./www/`目录
- `cnpm run lint` eslint standard
- `cnpm run build:debug` 不压缩构建到`./www/`
- `cnpm run build` 构建到`./www/`


## Bin

`kylin build` => `./node_modules/.bin/kylin build`

# About

![CI](https://github.com/CroMarmot/kylin-demo-bugs/workflows/CI/badge.svg)

基于`https://help.aliyun.com/document_detail/87472.html`下载的`Kylin-demo.zip`进行演示

组件文档`https://help.aliyun.com/document_detail/72599.html`

## 问题一览

|描述|详情和重现方式|临时方案|
|---|---|---|
|package.json文件依赖书写方式不支持npm和yarn|仅`cnpm install`能安装依赖，`npm i` 和`yarn`运行报错|只使用cnpm|
|cnpm 不会生成lock文件 有版本管理风险|运行`cnpm i`不会生成|暂无|
|kylin提供的mapStateToProps无法同步得到变量修改|相对的 vuex 官方提供的`mapState`可以做到,`localhost:8090/mapStateBug.html`|原生vuex的Helper|
|package.json书写不支持package.json默认支持的多版本依赖|见下[版本冲突](#版本冲突)|外层仓库|
|kylin提供的Component导致vue原生$emit不可用(缺少对外的文档支持?)|在Component中带有map映射以后，会无法emit出消息|原生,(最新的文档增加了mapEvents,但是没有相应说明)|
|kylin提供的Component导致官方vue-router的守卫事件不可用|`https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards` 失效|原生vuex的Helper|
|android **68版本基线**升级后，启动[mock](https://help.aliyun.com/document_detail/72531.html?spm=a2c4g.11186623.6.1385.28ed7836pfwp8f)无法和客户端通讯|android对应基线,运行`cnpm run mock:dev`,调用[ap或AlipayJSBridge](https://myjsapi.alipay.com/index.html)的方法 均调用mock兜底，期望没有mock的方法应该走客户端, 见`src/pages/mockBug`|暂无|
|kylin dependency 书写 无有效的报错提示|dependency 的尾部漏写关闭符合` /> `写成`>`|原生 coponents 写法|
|kylin map state/map mutation/map actions映射 无有效的报错提示|map不存在的方法，重复map均无报错|原生vuex的Helper|
|node 12.18.x 运行直接报错|对应[node版本](https://nodejs.org/en/download/releases/)，直接运行`cnpm i && cnpm run dev`|node 12.16.1|
|mPaas环境，上包以后fallback资源不删除不更新，下载后的离线包无此问题|新增离线包，增加文件，下架或更新文件后上包，通过链接地址依然访问的是首次上传的资源|保证离线包大小在100k上下，让用户能下载新的离线包|
|ios pushWindow参数传递 会对字符转化，安卓正常工作|`pages/pushWindowBug`|手动对可能有'\r\n','\r','\n'的字段进行split分组，不能预防问题，可能|
|无法USB连接，用chrome进行调试|同样的debug安卓包(68基线)，usb连接电脑，chrome打开chrome://inspect，在android 10及以下可以看到手机上chrome的标签页和应用内的页面，在android 11上，能看到手机chrome的标签页，看不到应用内的页面|已经解决(https://help.aliyun.com/document_detail/184898.html)|

### 版本冲突

按理说npm本身已经解决了冲突发生，之前具体是那一个会冲突，没具体记录，记得下面某几个依赖需要的时候会和kylin内部的冲突。

```
"deep-extend": "^0.6.0",
"jsdom": "^15.2.1",
"@babel/core": "^7.9.0",
"@babel/preset-env": "^7.9.5",
"babel-loader": "^8.1.0",
"babel-plugin-istanbul": "^6.0.0",
"istanbul-instrumenter-loader": "^3.0.1",
"jasmine-core": "^3.5.0",
"karma": "^5.0.2",
"karma-chrome-launcher": "^3.1.0",
"karma-coverage-istanbul-reporter": "^2.1.1",
"karma-jasmine": "^3.1.1",
"karma-jasmine-html-reporter": "^1.5.3",
"karma-webpack": "^4.0.2",
"rimraf": "^2.6.1",
"webpack": "^4.42.1",
"archiver": "^3.1.1",
"fs-extra": "^9.0.1",
"gulp": "^4.0.2",
"gulp-less": "^4.0.1",
"minimist": "^1.2.5"
```
