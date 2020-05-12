<template>
<transition name="antui-toast" appear>
  <div v-show="cShow" class="am-toast" :class="{text: type === 'text'}" ref="root">
    <div class="am-toast-text amv-toast-break" :class="multiline ? 'amv-toast-multiline' : ''">
      <span v-if="type && (type !== 'text' && type !== 'loading')" class="am-icon toast" :class="type" aria-hidden="true"></span>
      <LoadingIndicator v-else-if="type === 'loading'" white/><slot>{{text}}</slot>
    </div>
  </div>
</transition>
</template>
<style>.antui-toast-enter-active,
.antui-toast-leave{opacity:1;-webkit-transition:all .3s ease;transition:all .3s ease}.antui-toast-leave-active{opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease}.antui-toast-enter{opacity:0}.amv-toast-break{word-break:break-all}.amv-toast-multiline{padding-top:20px!important;padding-bottom:20px!important;max-height:initial!important}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _loadingIndicator=require('../loading-indicator');var _loadingIndicator2=_interopRequireDefault(_loadingIndicator);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={name:'Toast',props:{value:Boolean,type:{type:String,default:'text'},duration:{type:Number,default:3000},text:String,onClose:Function,onDestroy:Function,service:Boolean,multiline:Boolean},data:function data(){return{tid:null,serviceShow:this.value}},components:{LoadingIndicator:_loadingIndicator2.default},computed:{cShow:{get:function get(){var b=this.service?this.serviceShow:this.value;return b},set:function set(b){this.$emit('input',b);this.serviceShow=b;if(!b){if(typeof this.onClose==='function'){this.onClose()}if(this.service){this.$el.addEventListener('transitionend',this._destroyElement)}}}}},watch:{value:function value(b){clearTimeout(this.tid);if(b){this._autoHide()}}},methods:{hide:function hide(){this.cShow=false},_destroyElement:function _destroyElement(){this.$destroy(true);this.$el.parentNode.removeChild(this.$el);var b=this.onDestroy;setTimeout(function(){if(typeof b==='function'){b()}})},_autoHide:function _autoHide(){var b=this;if(this.duration>0){this.tid=setTimeout(function(){b.cShow=false},this.duration)}}},mounted:function mounted(){if(this.cShow){this._autoHide()}}};</script>

