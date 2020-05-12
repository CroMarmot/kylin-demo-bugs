<template>
<div class="am-process-item" :class="[type]">
  <slot name="icon">
    <i class="am-icon process" :class="[iconType]" aria-hidden="true"></i>
  </slot>

  <div class="am-process-content">
    <div class="am-process-main"><slot>{{main}}</slot></div>
    <div class="am-process-brief"><slot name="brief">{{brief}}</slot></div>
  </div>
  <div v-if="lineUp" class="am-process-up-border"></div>
  <div v-if="lineDown" class="am-process-down-border"></div>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var ProcessItem={name:'ProcessItem',props:{main:String,brief:String,type:{type:String,default:'pay'},iconType:{type:String,default:'pay'},lineUp:Boolean,lineDown:Boolean}};exports.default=ProcessItem;</script>

