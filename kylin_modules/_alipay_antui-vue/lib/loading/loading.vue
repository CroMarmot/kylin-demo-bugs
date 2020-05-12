<template>
<div class="am-loading" :class="cType">
  <LoadingIndicator tiny :white="white" v-if="(type === 'refresh' || !type)"/>
  <i class="am-icon loading" v-else-if="type === 'page'"></i>
  <div v-if="divText" class="am-loading-text"><slot></slot></div>
  <span v-else class="am-loading-text"><slot></slot></span>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _loadingIndicator=require('../loading-indicator');var _loadingIndicator2=_interopRequireDefault(_loadingIndicator);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var typeMap={'page':'page','refresh':'am-loading-refresh','nomore':'am-loading-nomore'};var _divText={'page':true,'refresh':true};exports.default={name:'Loading',props:{type:String,white:Boolean},components:{LoadingIndicator:_loadingIndicator2.default},computed:{cType:function cType(){return typeMap[this.type]?typeMap[this.type]:''},divText:function divText(){return!!_divText[this.type]}}};</script>

