<template>
<div class="am-checkbox am-vue-checkbox-inline">
  <input :id="id" :type="type" :name="name" :value="tag" :checked="cChecked" :disabled="disabled" @change="onChange"/> <span class="icon-check" aria-hidden="true"></span><slot :id="id"></slot>
</div>
</template>
<style scoped>.am-checkbox.am-vue-checkbox-inline input{position:absolute;left:0}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _utils=require('../__utils');exports.default={name:'CheckboxInline',props:{type:{type:String,default:'checkbox'},id:{type:String,default:function _default(){return(0,_utils.getUID)()}},name:String,value:[String,Boolean],tag:String,disabled:Boolean,label:[String,Boolean]},computed:{cChecked:{get:function get(){if(this.type==='radio'){return this.tag===this.value}else{return this.value}}}},methods:{onChange:function onChange(b){if(this.type==='radio'){this.$emit('input',b.target.value)}else{this.$emit('input',b.target.checked)}}}};</script>

