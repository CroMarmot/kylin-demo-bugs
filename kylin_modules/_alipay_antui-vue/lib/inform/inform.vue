<template>
<div class="am-inform" role="alert">
  <div class="am-inform-content"><slot></slot></div>
  <div class="am-inform-operation" v-if="operation">
    <a class="am-inform-button" role="button" @click="onClick" v-if="operation === 'button'"><slot name="button">{{ buttonText }}</slot></a>
    <a class="am-inform-go" :href="href" v-if="operation === 'go'"></a>
  </div>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'Inform',props:{operation:String,buttonText:{type:String,default:'\u77E5\u9053\u4E86'},href:String},methods:{onClick:function onClick(){this.$emit('buttonClick')}}};</script>

