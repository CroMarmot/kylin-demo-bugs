<template>
<div class="am-card-item">
  <div class="am-card-minfo">
    <div class="am-card-thumb" v-if="thumb">
      <img :src="thumb" :alt="thumbAlt"/>
    </div>
    <div class="am-card-content">
      <div class="am-card-subtitle" v-if="subtitle && thumb">{{ subtitle }}</div>
      <div class="am-card-title">{{ title }}</div>
      <div class="am-card-subtitle" v-if="subtitle && !thumb">{{ subtitle }}</div>
    </div>
    <div class="am-list-arrow" aria-hidden="true" v-if="arrow"><span class="am-icon arrow horizontal"></span></div>
  </div>
  <div class="am-card-footnote" v-if="footnote">{{ footnote }}</div>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'CardItem',props:{title:{type:String,required:true},subtitle:String,arrow:{type:Boolean,default:false},thumb:String,thumbAlt:String,footnote:String}};</script>

