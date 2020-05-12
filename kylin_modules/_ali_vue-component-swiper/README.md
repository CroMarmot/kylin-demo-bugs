# @ali/vue-component-swiper

![](http://web.npm.alibaba-inc.com/badge/v/@ali/vue-component-swiper.svg)

> 滑动slide

## 特点

## 引用方法

`tnpm install @ali/vue-component-swiper --save`

然后在 vue 中调用
``` js
import { Swiper, SwiperItem, Carousel } from '@ali/vue-component-swiper';
```

## ApI

### Swiper

#### Props

|参数|说明|类型|可选值|默认值|
|-----|-----|-----|-----|-----|
|dirDegree|滑动方向允许角度|Number|20|
|direction|滑动方向|String|`horizontal`,`vertical`|`"horizontal"`|
|freeMode|是否允许放手后继续滚动|Boolean|-|true|
|height|高度，在滑动方向为`vertical`时必需|Number|-|-|
|resistant|滑动超出屏幕时的速度减缓比率|Number|-|0.2|
|reverseTime|到边框后反弹时间，单位秒|Number|-|0.15|
|slideTime|放手后滑动时间，单位秒|Number|-|1.0|
|slideRate|放手后滑动距离比率|Number|-|0.33|

#### Methods

|方法名|说明|参数|
|-----|-----|-----|
|scrollToIndex|滑动到对应子元素的位置|Fnuction(index: Number): void|

#### Slots

|name|说明|Scope|
|-----|-----|-----|
|before|wrapper 之前的元素|-|
|-|默认slot，用于放置 wrapper 中的元素|-|
|after|wrapper 之后的元素|-|

### Carousel

#### Props

|参数|说明|类型|可选值|默认值|
|-----|-----|-----|-----|-----|
|autoScroll|是否开启自动滚动|Boolean|-|false|
|autoScrollDelay|自动滚动延时，毫秒|Number|-|1500|
|criticalDistance|滑到下一屏的临界区域|Number, String|`x%` / `x(px)`|`20%`|
|cacheLength|左右缓存的屏幕数量|Number|-|1|
|transitionTime|手指放开后的过渡时间，秒|Number|-|0.15|
|transitionTimingFunction|手指放开后的缓动函数|String|-|linear|
|pagination|是否开启分页指示符|Boolean|-|false|

#### Methods

|方法名|说明|参数|
|-----|-----|-----|
|scrollToIndex|滑动到对应子元素的位置|Fnuction(index: Number): void|

#### Slots

|name|说明|Scope|
|-----|-----|-----|
|-|默认slot，用于放置 wrapper 中的元素|-|
