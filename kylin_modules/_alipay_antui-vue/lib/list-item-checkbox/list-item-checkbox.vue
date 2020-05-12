<template>

<CheckboxInline v-if="type === 'agreement'" class="mini agreement" type="checkbox" :id="id" :name="name" v-model="cValue" :disabled="disabled" :label="label">
  <slot name="label"><label v-if="label" class="am-ft-md" :for="id">{{label}}</label></slot>
</CheckboxInline>
<label v-else-if="type === 'radio'" class="am-list-item radio">
  <div v-if="thumb" class="am-list-thumb">
    <img :src="thumb" :alt="thumbAlt"/>
  </div>
  <div class="am-list-content">
    <div class="am-list-title"><slot name="label"><span>{{label}}</span></slot></div>
    <div v-if="brief" class="am-list-brief">{{ brief }}</div>
  </div>
  <CheckboxInline class="middle" :type="type" :id="id" :name="name" :tag="tag" v-model="cValue" :disabled="disabled"/>
</label>

<label v-else class="am-list-item check">
  <div v-if="thumb" class="am-list-thumb">
    <img :src="thumb" :alt="thumbAlt"/>
  </div>
  <div class="am-list-content">
    <div class="am-list-title"><slot name="label"><span>{{label}}</span></slot></div>  
    <div v-if="brief" class="am-list-brief">{{ brief }}</div>
  </div>
  <CheckboxInline :type="type" :id="id" :name="name" :tag="tag" v-model="cValue" :disabled="disabled"/>
</label>
</template>

<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _checkboxInline=require('../checkbox-inline/checkbox-inline.vue');var _checkboxInline2=_interopRequireDefault(_checkboxInline);var _utils=require('../__utils');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={name:'ListItemCheckbox',props:{type:{type:String,default:'checkbox'},name:String,id:{type:String,default:function _default(){return(0,_utils.getUID)()}},value:[String,Boolean],tag:String,disabled:Boolean,label:String,thumb:String,thumbAlt:String,brief:String},components:{CheckboxInline:_checkboxInline2.default},computed:{cValue:{get:function get(){return this.value},set:function set(b){this.$emit('input',b)}}}};</script>

