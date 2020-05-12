### 0.6.0
* 修改 pushWindow/popWindow/popTo 为多Tab打开关闭

### 0.5.4
* 防止业务代码中修改 mock 的返回值
* downloadImage 接口可以对 http/https 形式的图片进行 mock

### 0.5.3
* 修复 console 循环调用的问题

### 0.5.2
* 增加对 alipayjsapi 支持

### 0.4.0
* 仓库名改为luna-mock，用户配置变量改为`window.lunaMockConfig`

### 0.3.2
* 配合luna-devtools可以自动识别是否在chrome中运行，因此基本上可以告别配置项config.runInBrowser

### 0.3.0

* 丰富console中log的内容，基本上可以通过console查看所有的容器API调用情况
* 打印callback返回的数据
* 使用disableLog可以关掉log
* 解决call方法可能没传opts的问题，此时mock的方法中依然有opts，为undefined，原生方法确实不传。
