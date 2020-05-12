<template>
<div class="am-swiper-slide" :style="style" @click="onClick">
  <slot></slot>
</div>
</template>
<style>.am-swiper-slide{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}</style>
<style>.am-swiper-carousel{position:relative}.am-swiper-carousel .am-swiper-carousel-pagination{position:absolute;bottom:5px;width:100%;text-align:center}.am-swiper-carousel .am-swiper-carousel-pagination-dot{display:inline-block;width:7px;height:7px;-webkit-border-radius:50%;border-radius:50%;border:1px solid #e5e5e5;background-color:white;margin:0 3px;cursor:pointer;-webkit-transition:background-color ease-out .15s;transition:background-color ease-out .15s}.am-swiper-carousel .am-swiper-carousel-pagination-dot.active{background-color:#108ee9;border-color:#108ee9}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'SwiperItem',props:{width:[Number,String],height:[Number,String]},computed:{style:function style(){var a={};if(this.width){a.width=this.width}if(this.height){a.height=this.height}return a}},created:function created(){if(this.$parent){this.$parent.$emit('child-created')}},methods:{onClick:function onClick(a){this.$emit('click',a)}}};</script>

