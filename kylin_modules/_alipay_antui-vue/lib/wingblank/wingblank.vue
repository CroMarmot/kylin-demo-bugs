<template>
<div class="am-wingblank" :style="{ marginLeft: sizeString, marginRight: sizeString }"><slot></slot></div>
</template>
<style></style>
<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _utils=require('../__utils');exports.default={name:'Wingblank',props:{size:[Number,String]},computed:{sizeString:function sizeString(){return(0,_utils.parseCSSSize)(this.size)}}};</script>

