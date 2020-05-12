# kylin-framework

完整文档可参考 [kylin.aliay.net](http://kylin.aliay.net)

## install

```
tnpm install @ali/kylin-framework --save
```

## Page

# Page 页面

## 页面声明结构

``` js
import { Page } from '@ali/kylin-framework';
import IndexComponent from './indexComponent.vue';

class IndexPage extends Page {
  
  initOptions() {
    return {}
  }
  
  render(h) {
    return <IndexComponent></IndexComponent>
  }
  
}

new IndexPage('#app');
```

# Component 组件

`Kylin Component` 扩充自`Vue`的组件, 提供了`Vue`组件对等的输入参数能力。在代码书写时提供类`class`的装饰器`Decorator`风格。

## 代码引入

``` js
import { Component, Watch } from '@ali/kylin-framework';

```

## 组件声明结构

一个组件可以包含数据、JSX渲染函数、模板、挂在元素、方法、声明周期等`Vue`的`options`选项的对等配置。
组件声明包括以下几部分, 分别使用`@Component`, `@Watch`两种不同装饰器进行包装：

- class类声明, 使用装饰器`@Component`
- 类成员声明, 不使用装饰器
- 类成员方法声明, 一般不装饰器, 除非该方法需要`watch`另外一个已声明的变量

### JSX组件

``` js
/* Hello.js */
import { Component } from '@ali/kylin-framework';
import Child from './child.vue';

@Component
class Hello {
  data = {
    name: 'world'
  }
  
  render() {
    return (
      <div>hello {this.data.name}
        <Child></Child>
      </div>)
  }
}
```

### `*.vue`单文件组件

``` html
<!-- Hello.vue --> 

<template>
  <div>hello {{name}}
    <Child></Child>
  </div>
</template>

<style>
  /* put style here */
</style>

<component default="Child" src="./child.vue" />

<script>
  import { Component } from '@ali/kylin-framework';
  
  @Component
  class Hello {
    data = {
      name: 'world'
    }
  }
 
  export default Hello;
</script>
```
