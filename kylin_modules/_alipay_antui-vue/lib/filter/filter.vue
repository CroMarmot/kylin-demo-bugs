<template>
<transition v-if="type === 'page'" :name="transitionName">
  <div v-show="value" class="am-filter am-filter-full-page">
    <slot></slot>
    <slot name="footer">
      <div class="am-filter-button-wrap">
        <button class="am-filter-button-clear" @click="$emit('reset')">重置</button>
        <button class="am-filter-button-confirm" @click="onConfirm">确定</button>
      </div>
    </slot>
  </div>
</transition>
<BoardDialog v-else :value="value" @input="onInput" :animation="animation">
  <slot></slot>
</BoardDialog>
</template>
<style scoped>.am-filter-full-page{display:block}.antui-popmenu-enter-active,
.antui-popmenu-leave{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:all .3s ease;transition:all .3s ease}.antui-popmenu-leave-active{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:all .3s ease;transition:all .3s ease}.antui-popmenu-enter{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.am-filter-button-wrap button{-webkit-border-radius:0;border-radius:0}</style>
<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _index=require('../board-dialog/index.js');var _index2=_interopRequireDefault(_index);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={name:'Filter',components:{BoardDialog:_index2.default},props:{animation:{type:Boolean,default:true},type:{type:String,default:'dialog'},value:{type:Boolean,default:true}},computed:{transitionName:function transitionName(){return this.animation?'antui-popmenu':''}},methods:{onConfirm:function onConfirm(){this.$emit('confirm');this.$emit('input',false)},onInput:function onInput(b){this.$emit('input',b)}}};</script>

