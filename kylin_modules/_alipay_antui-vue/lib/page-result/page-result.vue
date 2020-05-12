<template>
<div class="am-page-result" role="alert">
  <div class="am-page-result-wrap">
    <div class="am-page-result-pic am-icon" :class="cType" aria-hidden="true"></div>
    <div class="am-page-result-title" v-if="cShowTitle"><slot name="title">{{title}}</slot></div>
    <div class="am-page-result-brief" v-if="cShowBrief"><slot name="brief">{{brief}}</slot></div>
  </div>
  <div class="am-page-result-button">
      <slot>
        <AButton v-for="(btn, idx) in internalButtons" :key="idx" type="page-result" @click="btn.click">{{btn.text}}</AButton>
      </slot>
  </div>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _button=require('../button');var _button2=_interopRequireDefault(_button);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var typeMap={'busy':'page-busy','empty':'page-empty','error':'page-error','network':'page-network','nofound':'page-nofound'};exports.default={name:'PageResult',props:{type:{type:String,default:''},title:String,brief:String,internalButtons:Array},components:{AButton:_button2.default},computed:{cType:function cType(){return typeMap[this.type]||this.type},cShowTitle:function cShowTitle(){return this.title||this.$slots.title},cShowBrief:function cShowBrief(){return this.brief||this.$slots.brief}}};</script>

