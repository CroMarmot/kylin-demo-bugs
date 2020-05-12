<template>
<a v-if="entrance" class="am-search-link" aria-label="搜索" :href="href">
  <div class="am-search-input" aria-hidden="true">
    <i class="am-icon search"></i>
    <span class="am-search-ph">{{ placeholder }}</span>
  </div>
</a>
<div v-else class="am-search-inpage" :class="{ 'am-input-autoclear': autoClear }">
  <div class="am-search-input">
    <div class="am-search-icon" aria-hidden="true">
      <i class="am-icon search-inpage"></i>
    </div>
    <input class="am-search-value" :placeholder="placeholder" :type="type" :value="value" @input="onInput" aria-label="关键词"/>
    <div v-if="autoClear" class="am-search-clear" tabindex="0" @click="$emit('clear')">
      <i class="am-icon-clear am-icon clear-tiny" :class="{ show: showClear }" aria-hidden="true"></i>
    </div>
  </div>
</div>
</template>
<style>.am-search-inpage .am-icon-clear{visibility:hidden}.am-input-autoclear .am-icon-clear.show{visibility:visible}</style>
<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'Search',props:{entrance:Boolean,href:String,autoClear:Boolean,value:String,type:{type:String,default:'text'},placeholder:{type:String,default:'\u641C\u7D22'}},computed:{showClear:function showClear(){return!!this.value}},methods:{onInput:function onInput(b){this.$emit('input',b.target.value)}}};</script>

