<template>
<div class="am-message" :class="messageClass" role="alert">
  <i class="am-icon" :class="iconClass" aria-hidden="true"></i>
  <div class="am-message-main" v-if="main!==false"><slot name="main">{{main}}</slot></div>
  <div class="am-message-sub" v-if="sub!==false"><slot name="sub">{{sub}}</slot></div><slot></slot>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var messageTypeMap={'result':'result','multi':'message-multi','week':'message-week','':'message'};exports.default={name:'Message',props:{type:{type:String,default:''},icon:{type:String,default:'success'},main:{type:[String,Boolean],default:''},sub:{type:[String,Boolean],default:''}},computed:{messageClass:function messageClass(){return this.type},iconClass:function iconClass(){return this.icon+' '+(messageTypeMap[this.type]?messageTypeMap[this.type]:'')}},methods:{}};</script>

