<template>
<div>
  <div v-if="title" class="am-filter-class-title">{{ title }}</div>
  <ul class="am-filter-list" :class="{'am-filter-recomend': recommend}"><slot></slot></ul>
</div>
</template>

<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'FilterList',props:{recommend:Boolean,title:String}};</script>

