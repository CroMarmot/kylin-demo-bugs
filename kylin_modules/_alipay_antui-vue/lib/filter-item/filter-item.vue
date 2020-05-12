<template>
<li class="am-filter-item-wrap">
  <label class="am-filter-item" :class="{'am-filter-item-selected': isSelected, 'am-filter-item-disabled': disabled}" @click="onSelect"><slot></slot></label>
</li>
</template>
<style>.am-filter .am-filter-item-wrap .am-filter-item.am-filter-item-disabled,
.am-filter .am-filter-item-wrap .am-filter-item.am-filter-item-disabled.am-filter-item-selected{border-color:#ddd;color:#ddd}.am-filter .am-filter-item-wrap .am-filter-item.am-filter-item-disabled.am-filter-item-selected{background-color:#f5f5f5}.am-filter .am-filter-item-wrap .am-filter-item.am-filter-item-disabled.am-filter-item-selected:after,
.am-filter .am-filter-item-wrap .am-filter-item.am-filter-item-disabled.hover:after,
.am-filter .am-filter-item-wrap .am-filter-item.am-filter-item-disabled:active:after{border-color:#ddd}</style>
<script generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'FilterItem',props:{selected:{type:[Object,Boolean],default:null},value:[String,Number],option:[String,Number],disabled:Boolean},computed:{isSelected:function isSelected(){if(this.selected!==null){return this.selected}return this.option&&this.value===this.option}},methods:{onSelect:function onSelect(){if(this.disabled){return}this.$emit('input',this.option)}}};</script>

