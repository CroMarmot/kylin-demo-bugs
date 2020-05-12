# babel-plugin-decorators-inject

## options

- className
- propertyName
- propertyIgnoreName
- componentsPropertyName 
- enableComponentLazyRequire
- injectComponentName
- <del>enableRenderInjectH</del>

针对 标记了`className`这个装饰器的class内的所有property，
自动注入`className.propertyName`的装饰器，
除非property的装饰器列表中存在`className.propertyName`或`propertyIgnoreName`

针对 标记了`className`这个装饰器的class内的非`static`的`classProperty`中，如果名称为`componentsPropertyName`
那么认为其是vue的`options.components`，将其标识符的import引入做懒加载处理。该功能默认关闭，通过`enableComponentLazyRequire`来开启

<del>针对 标记了`className`这个装饰器的class内的名为`render`的成员方法，如果在函数作用域没有对h的引用，并且参数列表为空，会改写参数列表为["h"]。
该功能默认关闭，通过`enableRenderInjectH`来开启</del>

针对 未指定`name`成员属性，成员方法的，自动注入。该功能默认关闭。

## example

### 组件懒加载

- input

```
import { Component, Property }
import B from './b.vue';

@Component
class A {
  components = {
    B
  }
}
```

- output

```
import { Component, Property }

@Component
class A {
  components = {
    B: function lazyRequire(resolve) {
      resolve( require('./b.vue').default || require('./b.vue') )
    }
  }
}
```


### 注入property

- input


```
import { Component, Property }

@Component
class A {
  data = {a:1}
  
  @Component.Property
  props = 2
  
  @Property
  extends = {}

}
```

- output


```
import { Component, Property }

@Component
class A {
  @Component.Property  // 自动补全 
  data = {a:1}
  
  @Component.Property // 检测到member存在不补全 
  props = 2

  @Property  // 检测到ignore存在不补全 
  extends = {}
}
```

<!--
### 注入render

- input

```
import { Component, Property }

@Component
class A {
  
  render() {
    return <div></div>
  }
}
```

- output

```
import { Component, Property }

@Component
class A {
  
  render(h) {
    return <div></div>
  }
}
```
-->


