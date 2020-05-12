<template>
<div class="am-card" :class="icon ? '' : 'am-card-noicon'">
  <div class="am-card-header"><slot name="header"></slot></div><slot></slot>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'Card',props:{icon:{type:Boolean,default:false}}};</script>

