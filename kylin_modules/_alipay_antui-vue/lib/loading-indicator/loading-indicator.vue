<template>
<div class="am-loading-indicator" :class="cType">
  <div class="am-loading-item"></div>
  <div class="am-loading-item"></div>
  <div class="am-loading-item"></div>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'LoadingIndicator',props:{tiny:Boolean,white:Boolean},computed:{cType:function cType(){var b='';b+=this.tiny?' tiny':'';b+=this.white?' white':'';return b}}};</script>

