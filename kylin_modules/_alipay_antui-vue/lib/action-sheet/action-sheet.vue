<template>
<div class="am-action-sheet" :class="{hide: !show || forceHide}">
  <div class="am-action-sheet-mask" @click="onClick(-1)" :style="computedTransitionDuration"/>
  <div ref="list" class="am-action-sheet-list" :style="computedTransitionDuration">
    <div v-if="title" class="am-action-sheet-title">
      {{ title }}
    </div>
    <div v-for="(item, index) in items" :key="''+item+index" :class="{'am-action-sheet-destructive': destructiveBtnIndex === index}" @click="onClick(index)">
      <div class="am-action-sheet-option" v-touchable="'am-action-sheet-hover'">
        <slot name="label" :item="item">{{ item }}</slot>
      </div>
    </div>
    <div @click="onClick(-1)">
      <div class="am-action-sheet-option am-action-sheet-cancel" v-touchable="'am-action-sheet-hover'">
      {{cancelButtonText}}
      </div>
    </div>
  </div>
</div>
</template>
<style>.am-action-sheet-option.am-action-sheet-hover{background-color:#EEE}.am-action-sheet-option.am-action-sheet-hover.am-action-sheet-cancel{background-color:#DDD}.am-action-sheet{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.am-action-sheet-mask{width:100%;height:100%;overflow:hidden;background-color:rgba(0, 0, 0, 0.4);opacity:1;-webkit-transition:opacity 0.15s;transition:opacity 0.15s}.am-action-sheet-title{color:#888;font-size:15px;line-height:21px;padding:16px 32px;text-align:center;background-color:white}.am-action-sheet-list{position:absolute;bottom:0;left:0;width:100%;background-color:#F5F5F5;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.15s;transition:-webkit-transform 0.15s;transition:transform 0.15s;transition:transform 0.15s, -webkit-transform 0.15s}.am-action-sheet-option{background-color:white;font-size:18px;line-height:25px;text-align:center;vertical-align:middle;padding:12px}.am-action-sheet-option,
.am-action-sheet-title{position:relative}.am-action-sheet-option::after,
.am-action-sheet-title::after{bottom:0;background:-webkit-linear-gradient(to top, #ddd, #ddd 33%, transparent 33%) no-repeat left bottom transparent;background:-webkit-gradient(linear, left bottom, left top, from(#ddd), color-stop(33%, #ddd), color-stop(33%, transparent)) no-repeat left bottom transparent;background:-webkit-linear-gradient(bottom, #ddd, #ddd 33%, transparent 33%) no-repeat left bottom transparent;background:linear-gradient(to top, #ddd, #ddd 33%, transparent 33%) no-repeat left bottom transparent;content:' ';width:100%;height:1px;overflow:hidden;position:absolute;left:0}.am-action-sheet-cancel{margin-top:7px;border:none}.am-action-sheet-cancel::after{top:0;background:-webkit-linear-gradient(to bottom, #ddd, #ddd 33%, transparent 33%) no-repeat left top transparent;background:-webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(33%, #ddd), color-stop(33%, transparent)) no-repeat left top transparent;background:-webkit-linear-gradient(top, #ddd, #ddd 33%, transparent 33%) no-repeat left top transparent;background:linear-gradient(to bottom, #ddd, #ddd 33%, transparent 33%) no-repeat left top transparent;content:' ';width:100%;height:1px;overflow:hidden;position:absolute;left:0}.am-action-sheet-destructive{color:#F4333C}.am-action-sheet .half-height-border{content:' ';width:100%;height:1px;overflow:hidden;position:absolute;left:0}.hide.am-action-sheet{pointer-events:none}.hide.am-action-sheet .am-action-sheet-mask{opacity:0}.hide.am-action-sheet .am-action-sheet-list{-webkit-transform:translateY(100%);transform:translateY(100%)}</style>
<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _touchable=require('../__directives/touchable');var _touchable2=_interopRequireDefault(_touchable);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={name:'ActionSheet',directives:{touchable:_touchable2.default},props:{show:Boolean,title:String,items:Array,cancelButtonText:{type:String,default:'\u53D6\u6D88'},destructiveBtnIndex:{type:Number,default:-1},transitionDuration:{type:String,default:'0.3s'},service:Boolean,serviceCallback:Function,serviceDestory:Function},data:function data(){return{forceHide:false}},computed:{computedTransitionDuration:function computedTransitionDuration(){if(!this.transitionDuration){return{}}return{transitionDuration:this.transitionDuration,webkitTransitionDuration:this.transitionDuration}}},methods:{onClick:function onClick(c){var d=this;this.$emit('click',c);if(c===-1)this.$emit('cancel');if(this.service){if(typeof this.serviceCallback==='function'){this.serviceCallback(c)}this.forceHide=true;this.$refs.list.addEventListener('transitionend',function(){var b=d.serviceDestory;d.$destroy(true);d.$el.parentNode.removeChild(d.$el);setTimeout(function(){if(typeof b==='function'){b()}})})}}}};</script>

