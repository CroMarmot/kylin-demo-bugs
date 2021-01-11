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

|描述|详情和重现方式|临时方案|解决耗时|影响程度|
|---|---|---|---|---|
|package.json文件依赖书写方式不支持npm和yarn|仅`cnpm install`能安装依赖，`npm i` 和`yarn`运行报错|只使用cnpm|20201015提出|影响开发工具使用|
|cnpm 不会生成lock文件 有版本管理风险|运行`cnpm i`不会生成|暂无|20201015提出|影响开发|
|kylin提供的mapStateToProps无法同步得到变量修改|相对的 vuex 官方提供的`mapState`可以做到,`localhost:8090/mapStateBug.html`|原生vuex的Helper|20201015提出|影响开发|
|package.json书写不支持package.json默认支持的多版本依赖|见下[版本冲突](#版本冲突)|外层仓库|20201015提出|影响开发|
|kylin提供的Component导致vue原生$emit不可用(缺少对外的文档支持?)|在Component中带有map映射以后，会无法emit出消息|原生,(最新的文档增加了mapEvents,但是没有相应说明)|20201015提出|影响开发|
|kylin提供的Component导致官方vue-router的守卫事件不可用|`https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards` 失效|原生vuex的Helper|20201015提出|影响开发|
|android **68版本基线**升级后，启动[mock](https://help.aliyun.com/document_detail/72531.html?spm=a2c4g.11186623.6.1385.28ed7836pfwp8f)无法和客户端通讯|android对应基线,运行`cnpm run mock:dev`,调用[ap或AlipayJSBridge](https://myjsapi.alipay.com/index.html)的方法 均调用mock兜底，期望没有mock的方法应该走客户端, 见`src/pages/mockBug`| [已解决](#mock)|20200915提出-20201113解决|影响开发|
|kylin dependency 书写 无有效的报错提示|dependency 的尾部漏写关闭符合` /> `写成`>`|原生 coponents 写法|20201015提出|影响开发|
|kylin map state/map mutation/map actions映射 无有效的报错提示|map不存在的方法，重复map均无报错|原生vuex的Helper|20201015提出|影响开发|
|node 12.18.x 运行直接报错|对应[node版本](https://nodejs.org/en/download/releases/)，直接运行`cnpm i && cnpm run dev`|node 12.16.1|20201015提出|影响开发|
|mPaas环境，上包以后fallback资源不删除不更新，下载后的离线包无此问题|新增离线包，增加文件，下架或更新文件后上包，通过链接地址依然访问的是首次上传的资源|保证离线包大小在100k上下，让用户能下载新的离线包|20201015提出|影响测试环节|
|ios pushWindow参数传递 会对字符转化，安卓正常工作|`pages/pushWindowBug`,数据有单引号时甚至会整个`window.AlipayJSBridge` 为`undefined` |手动对可能有'\r\n','\r','\n'的字段进行split分组，不能预防问题（可能还有更多的字符转义），临时方案 BASE64 包裹整个串传递 |20201012提出,尚未解决|影响生产，用户感知|
|无法USB连接，用chrome进行调试|同样的debug安卓包(68基线)，usb连接电脑，chrome打开chrome://inspect，在android 10及以下可以看到手机上chrome的标签页和应用内的页面，在android 11上，能看到手机chrome的标签页，看不到应用内的页面|已经解决(https://help.aliyun.com/document_detail/184898.html)|20201027 提出/解决|影响开发|
|eslint 受到父级文件夹影响？|[eslint](#eslint)自定义的Components相关书写，没有对应的eslint,prettier等配套工具, 默认的`.eslintrc`里关掉了`no-unused-vars`,调为2相关内容会有报错|暂无|20201015提出|影响开发|
|内网`mappcenter.mpaas.com`打开网页加载很久|经过排查是加载css和字体耗时导致|利用firefox或chromium的按url屏蔽功能，屏蔽`http://at.alicdn.com/`和`https://at.alicdn.com/`两个|20201015提出|影响开发|
|`mock`模式下无法跨页传参|之前在android的web中通过[这样](https://github.com/CroMarmot/kylin-demo-bugs/blob/6f741cf0e82d3c8745ced136cc266e3a1e95bf30/src/common/js/android.js#L9-L27)的方式进行跨页传参和获取参数,但在启用mock后，无法传参|暂无，手动写死接受参数的部分 `= getPassData() \|\| {...}` |20201116提出|影响开发调试|
|mappcenter.mpaas.com新版右侧弹出界面，在不同包之间切换上包时，存在入口URL不更新导致上包无法打开的问题|暂无准确复现步骤|暂无，出现一个问题解决一个|2021-01-04|影响测试|
|mappcenter.mpaas.com新版批量上包csv字段校验规则和单个页面填写规则不一致|单独上包时无需填写最高版本|临时方案，最高版本填写99.99.99.99|2021-01-04|影响开发|


### 版本冲突

按理说`npm`本身已经解决了冲突发生，之前具体是那一个会冲突，下面几个依赖需要的时候会和kylin内部(cnpm的问题?)的冲突。

```
"babel-loader": "^8.1.0",
"webpack": "^4.42.1",
```

> 重现步骤

`package.json`中增加上面两项，执行`cnpm run build`报错

### eslint

eslint插件相关问题？

> 重现步骤

[src/pages/eslintBug/demo.sh](src/pages/eslintBug/demo.sh)

或`curl https://raw.githubusercontent.com/CroMarmot/kylin-demo-bugs/master/src/pages/eslintBug/demo.sh | bash`

输入命令

`./node_modules/.bin/eslint --ext js --ext vue ./src/pages/eslintBug/components/index-view.vue`


期望输出(不应该受到任何上层文件夹的影响)

```
  34:9  error  'a' is defined but never used  no-unused-vars
```

实际

```
  11:10  error  'Component' is defined but never used  no-unused-vars
  19:3   error  'components' is not defined            no-undef
  19:18  error  'PlanCard' is not defined              no-undef
  20:3   error  'data' is not defined                  no-undef
  22:3   error  'filters' is not defined               no-undef
  25:3   error  'watch' is not defined                 no-undef
  28:3   error  'computed' is not defined              no-undef
  31:3   error  'props' is not defined                 no-undef
  34:9   error  'a' is defined but never used          no-unused-vars
  37:3   error  'methods' is not defined               no-undef
```

### mock

修复方案

修改`kylin_modules/_alipay_luna-mock/dist/index.js` 中`var n=/alipayclient/i.test(window.navigator.userAgent)`为`var n=/mpaasclient|alipayclient/i.test(window.navigator.userAgent)` 后 重新安装依赖


