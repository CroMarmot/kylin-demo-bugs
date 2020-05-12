# AntUI Component

[文档站点](http://site.alipay.net/vue-component/site)

## Install

``` bash
tnpm install @alipay/antui-vue@release-10.1.10 --save
```

### 关于版本

- 我们使用`dist-tag`来维护`npm`包版本与`AntUI`样式库版本之间的关联。当组件需要添加新功能，修复bug，或者其他必须发布新`npm`包时，只要其绑定的`AntUI`样式库版本不变，虽然`npm`包的升级会影响`version`的变更，但是`dist-tag`不变。

- 比如：`@alipay/antui-vue@release-10.1.10` 显式地声明了该`release`需要搭配`AntUI`的`10.1.10`版本的的样式(`https://gw.alipayobjects.com/as/g/antui/antui/10.1.10/dpl/antui.css`)才能正常工作。

- 目前由于钱包视觉规范的要求：大小与`native`保持一致，只维护`px`版本。


| dist-tag | npm version | antui version | doc link | css link | install dependency | 
| ----- |  ----- |  ----- | ----- | ----- |  ----- |
| `release-10.1.10` | ![](http://web.npm.alibaba-inc.com/badge/v/@alipay/antui-vue.svg?tag=release-10.1.10) | `10.1.10/dpl` | [doc link](http://antui.alipay.com/10.1.10/docs/) | [cdn link](https://gw.alipayobjects.com/as/g/antui/antui/10.1.10/dpl/antui.css) | `@alipay/antui-vue@release-10.1.10` |
| `release-10.0.20` | ![](http://web.npm.alibaba-inc.com/badge/v/@alipay/antui-vue.svg?tag=release-10.0.20) | `10.0.20/dpl` | [doc link](http://antui.alipay.com/10.0.20/docs/) | [cdn link](https://a.alipayobjects.com/g/antui/antui/10.0.20/dpl/antui.css) | `@alipay/antui-vue@release-10.0.20` |
| `release-10.0.18` | ![](http://web.npm.alibaba-inc.com/badge/v/@alipay/antui-vue.svg?tag=release-10.0.18) | `10.0.18/dpl` | [doc link](http://antui.alipay.com/10.0.18/docs/) | [cdn link](https://a.alipayobjects.com/g/antui/antui/10.0.18/dpl/antui.css) | `@alipay/antui-vue@release-10.0.18` |


## 用法

### 样式引入注意点

- 出于钱包离线资源复用的角度考虑，开发者有如下两种方式引入`antui.css`(**必须自行引入**)
    - 使用特定版本的`CDN`资源: `https://gw.alipayobjects.com/as/g/antui/antui/10.1.10/dpl/antui.css`
    - 使用特定版本的`npm`包: `@alipay/antui/dist/dpl/antui.css`
- 如果开发者使用了`antui.css`中未集成的部分（集成于`antui-all.css`中），开发者并不需要再引入特定`widget`组件，`@alipay/antui-vue`会进行引入。
    - 如果使用了`按需加载`的配置，只会引入最小粒度需要使用的`widget`样式

### 按需加载

- **推荐**使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
    
    如下配置 `.babelrc`

    ``` javascript
    {
      "plugins": [
        ["import", { libraryName: "@alipay/antui-vue" }] 
      ]
    }
    ```

    直接使用`ES Module`导入，会自动处理最小依赖的`js`和`css`

    ``` javascript
    import { AButton, List } from '@alipay/antui-vue';
    ```

- 普通用法

    ``` javascript
    import AButton from '@alipay/antui-vue/lib/a-button';
    ```

### 非按需加载

- 普通用法(不推荐)

    ``` javascript
    // ES 模块引入
    import { AButton, List } from '@alipay/antui-vue';

    // 声明组件
    Vue.component('AButton', AButton);
    Vue.component('List', List);
    ```
