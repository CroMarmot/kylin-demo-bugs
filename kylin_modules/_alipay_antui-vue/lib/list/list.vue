<template>
<div class="am-list" :class="cType">
  <slot name="header">
    <div v-if="header" class="am-list-header">
      {{header}}
    </div>
  </slot>
  <div class="am-list-body" v-if="!cNoBody">
    <slot>
    </slot>
  </div>
  <slot v-else></slot>
  <slot name="footer">
    <div v-if="footer" class="am-list-footer">
      {{footer}}
    </div>
  </slot>
</div>
</template>
<style>.am-list-item-button{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;height:100%}.am-list-item-cancel{background-color:#ddd;color:white;padding:0 12px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-list-item-delete{background-color:#f4333c;color:white;padding:0 12px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-list .swipe-wrap{background-color:#FFF}.am-list .swipe-wrap .am-list-item,
.am-list .swipe-wrap .am-list-item:last-child,
.am-list .swipe-wrap .am-list-item:first-child:last-child{-webkit-background-size:15px 1px, 15px 1px, 100% 0, 100% 1px;background-size:15px 1px, 15px 1px, 100% 0, 100% 1px}.am-list .am-list-body .swipe-wrap:first-child .am-list-item{-webkit-background-size:0 0, 15px 1px, 100% 1px, 100% 1px;background-size:0 0, 15px 1px, 100% 1px, 100% 1px}.am-list .am-list-body .swipe-wrap:last-child .am-list-item{-webkit-background-size:15px 1px, 0 0, 100% 0, 100% 1px;background-size:15px 1px, 0 0, 100% 0, 100% 1px}.am-list .am-list-body .swipe-wrap:first-child:last-child .am-list-item{-webkit-background-size:0 0, 0 0, 100% 1px, 100% 1px;background-size:0 0, 0 0, 100% 1px, 100% 1px}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'List',props:{type:String,header:String,footer:String,noBody:Boolean},computed:{cNoBody:function cNoBody(){return this.noBody},cType:function cType(){return this.type?'am-list-'+this.type:''}}};</script>

