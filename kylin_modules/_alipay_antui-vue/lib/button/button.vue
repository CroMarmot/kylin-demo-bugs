<template>
<component :is="componentType" :type="nativeType" :class="btnClass" :disabled="disabled" @click="mHandleClick" :href="href" :role="cRole">
  <slot name="icon">
    <i v-if="showIcon" class="icon" aria-hidden="true"></i>
    <LoadingIndicator v-if="loading" :white="!cLoadingIsBlue" :blue="cLoadingIsBlue"/>
    {{ loading ? ' ' : '' }}
  </slot><slot></slot>
</component>
</template>
<style>.am-button.amv-inactive-loading.hover.tiny-blue,
.am-button.amv-inactive-loading:active.tiny-blue,
.am-button.amv-inactive-loading.hover.blue,
.am-button.amv-inactive-loading:active.blue,
.am-button.amv-inactive-loading.hover,
.am-button.amv-inactive-loading:active{border-color:#108ee9;color:#fff;background-color:#108ee9}.am-button.amv-inactive-loading.hover.white,
.am-button.amv-inactive-loading:active.white{border-color:#ddd;color:#333;background-color:#fff}.am-button.amv-inactive-loading.hover.tiny,
.am-button.amv-inactive-loading:active.tiny{color:#108ee9;border-color:#108ee9;background-color:#fff}.am-button.amv-inactive-loading.hover.warn,
.am-button.amv-inactive-loading:active.warn{color:#fff;border-color:#E94F4F;background-color:#E94F4F}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _loadingIndicator=require('../loading-indicator');var _loadingIndicator2=_interopRequireDefault(_loadingIndicator);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var tinyTypeMap={'blue':'tiny-blue','white':'tiny'};exports.default={name:'AButton',props:{type:{type:String,default:'blue'},size:{type:String,default:'default'},disabled:Boolean,loading:Boolean,success:Boolean,nativeType:{type:String,default:'button'},href:String,inactiveLoading:Boolean},components:{LoadingIndicator:_loadingIndicator2.default},computed:{cLoadingIsBlue:function cLoadingIsBlue(){switch(this.type){case'white':case'bottom':case'page-result':return true;case'':case'blue':case'warn':default:return false;}},cRole:function cRole(){return this.componentType==='a'?'button':undefined},componentType:function componentType(){if(this.type==='page-result'){return'a'}else if(this.href){return'a'}else{return'button'}},cType:function cType(){if(this.size==='tiny'){return tinyTypeMap[this.type]||this.type}else{return this.type}},btnClass:function btnClass(){switch(this.type){case'page-result':return'am-page-result-button'+(this.platform==='android'?' platform-android':'');default:return['am-button',this.cType,{disabled:this.disabled,loading:this.loading,success:this.success,'amv-inactive-loading':this.inactiveLoading}];}},showIcon:function showIcon(){return this.success}},methods:{mHandleClick:function mHandleClick(b){if(this.loading&&this.inactiveLoading){b.preventDefault();return}this.$emit('click',b)}}};</script>

