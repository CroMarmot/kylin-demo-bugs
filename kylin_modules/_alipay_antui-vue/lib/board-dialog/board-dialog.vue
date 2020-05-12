<template>
<div class="am-board-dialog">
  <div class="am-filter-mask" :class="{show: value}" @click="$emit('input', false)"></div>
  <div class="am-filter" :class="{show: value, noanimation: !animation}"><slot></slot></div>
</div>
</template>
<style>.am-board-dialog .am-filter-mask{opacity:0;-webkit-transition:opacity 0.15s;transition:opacity 0.15s;display:block;pointer-events:none}.am-filter-mask.show{opacity:1;pointer-events:auto}.am-board-dialog .am-filter{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 0.15s;transition:-webkit-transform 0.15s;transition:transform 0.15s;transition:transform 0.15s, -webkit-transform 0.15s;display:block}.am-filter.show{-webkit-transform:translateY(0);transform:translateY(0)}.am-filter.noanimation{-webkit-transition-duration:1ms!important;transition-duration:1ms!important}</style>
<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'BoardDialog',props:{value:Boolean,animation:Boolean}};</script>

