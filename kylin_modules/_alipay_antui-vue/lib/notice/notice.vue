<template>
<div class="am-notice" role="alert">
  <div class="am-notice-content"><slot></slot></div>
  <div class="am-notice-operation" v-if="operation">
    <a class="am-notice-go" :href="href" v-if="operation === 'go'"></a>
    <a class="am-notice-close" href="#" v-if="operation === 'close'" @click="onClose"></a>
  </div>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'Notice',props:{operation:String,href:String},methods:{onClose:function onClose(){this.$emit('close')}}};</script>

