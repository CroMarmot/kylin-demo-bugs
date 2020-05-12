<template>
<SwiperItem class="am-tab-item" :class="{ selected: tabParent.currentValue === id }" :style="{ flexBasis: minWidth }" role="tab" @click="tabParent.$emit('input', id)">
  <span><slot></slot></span>
</SwiperItem>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _vueComponentSwiper=require('@ali/vue-component-swiper');exports.default={name:'TabItem',components:{SwiperItem:_vueComponentSwiper.SwiperItem},props:{id:[String,Number],minWidth:{type:[String,Number],default:'100px'}},computed:{tabParent:function tabParent(){var b=this.$parent;while(b&&b.$options.name!=='Tab'){b=b.$parent}return b}}};</script>

