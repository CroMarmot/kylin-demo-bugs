<template>
<div class="am-tab am-tab-vue" role="tablist">
  <Swiper v-if="scroll" class="am-tab-scroll-nav" ref="nav" :resistant="resistant" :reverseTime="reverseTime" :slideTime="slideTime" :slideRate="slideRate"><slot></slot></Swiper>
  <slot v-else></slot>
  <div class="am-tab-scroll-left" :class="{ show: !leftVisible }" v-if="scroll"></div>
  <div class="am-tab-scroll-right" :class="{ show: !rightVisible }" v-if="scroll"></div>
</div>
</template>
<style>.am-tab-vue.am-tab{min-height:42px}.am-tab-vue.am-tab-scroll-nav{width:100%}.am-tab-vue.am-tab .am-tab-scroll-nav .am-tab-item{-webkit-box-flex:1;-webkit-flex:1 0 100px;flex:1 0 100px}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _tabNav=require('./tab-nav');var _tabNav2=_interopRequireDefault(_tabNav);var _vueComponentSwiper=require('@ali/vue-component-swiper');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={name:'Tab',components:{Swiper:_vueComponentSwiper.Swiper},props:{scroll:{type:Boolean,default:false},initialValue:[Number,String],value:[Number,String],resistant:{type:Number,default:0.2},reverseTime:{type:Number,default:0.15},slideTime:{type:Number,default:0.3},slideRate:{type:Number,default:0.1},reverseTimingFunction:{type:String}},watch:{value:function value(b){this.currentValue=b}},data:function data(){return{currentValue:null,leftVisible:true,rightVisible:true}},created:function created(){var c=this;this.currentValue=this.value!==undefined?this.value:this.initialValue;this.$on('input',function(a){c.currentValue=a})}};</script>

