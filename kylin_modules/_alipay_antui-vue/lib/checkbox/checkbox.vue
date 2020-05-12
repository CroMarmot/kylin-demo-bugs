<template>
<CheckboxInline class="am-vue-checkbox-wrap mini agreement" :type="type" :id="id" :name="name" :value="value" @input="onInput" :tag="tag" :disabled="disabled">
  <label class="am-vue-checkbox-label" :for="id">{{label}}</label>
</CheckboxInline>
</template>
<style>.am-vue-checkbox-wrap.am-checkbox.agreement .icon-check{margin-left:0px;margin-top:-11px;margin-right:4px}.am-vue-checkbox-wrap.am-checkbox.agreement .am-vue-checkbox-label{color:#888;position:relative;display:inline-block;padding-left:0px;text-indent:24px}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _checkboxInline=require('../checkbox-inline/checkbox-inline.vue');var _checkboxInline2=_interopRequireDefault(_checkboxInline);var _utils=require('../__utils');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={name:'Checkbox',components:{CheckboxInline:_checkboxInline2.default},props:{type:{type:String,default:'checkbox'},id:{type:String,default:function _default(){return(0,_utils.getUID)()}},name:String,value:[String,Boolean],tag:String,disabled:Boolean,label:[String,Boolean]},methods:{onInput:function onInput(b){this.$emit('input',b)}}};</script>

