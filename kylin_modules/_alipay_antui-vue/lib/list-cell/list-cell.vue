<template>
<div :class="cClassCell" @click="clickHandler">
  <template v-if="noDefaultSlots">
    <img v-if="type === 'thumb'" :src="src"/>
    <slot name="before"></slot>
    <div v-if="title" class="am-list-title" :class="{'am-ft-ellipsis':titleEllips}">{{title}}</div>
    <div v-if="brief" class="am-list-brief" :class="{'am-ft-ellipsis':briefEllips}">{{brief}}</div>
    <slot name="after"></slot>
    <span v-if="type === 'arrow'" class="am-icon arrow horizontal"></span>
  </template>
  <slot v-else></slot>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'ListCell',props:{type:{type:String,default:'content'},noFlex:Boolean,noEllips:Boolean,alignTop:Boolean,twoColumn:Boolean,src:String,title:String,brief:String,titleEllips:Boolean,briefEllips:Boolean},computed:{noDefaultSlots:function noDefaultSlots(){return(!this.$scopedSlots.default||!this.$scopedSlots.default.length)&&(!this.$slots.default||!this.$slots.default.length)},cClassCell:function cClassCell(){var b='';if(this.type){b+=' am-list-'+this.type+' '}b+=this.noFlex?' am-list-cell-noflex ':'';b+=this.noEllips?' am-list-cell-noellips ':'';b+=this.alignTop?' am-list-cell-aligntop ':'';b+=this.type==='title'&&!!this.twoColumn?' am-list-cell-twocolumn ':'';return b}},methods:{clickHandler:function clickHandler(b){this.$emit('click',b)}}};</script>

