<template>
<transition :name="animationName">
  <div class="dialog-panel" role="dialog" v-show="cShowing">
    <div class="am-dialog-mask show" @click="onClickMask"></div>
    <div class="am-dialog show" :class="{ image: isImageType, precise: (precise || type === 'image-fill') }">
      <div class="am-dialog-wrap" role="document">
        <div class="am-dialog-img" v-if="isImageType" :class="{ fill: type === 'image-fill' }">
          <slot name="image"></slot>
        </div>

        <div class="am-dialog-header" v-if="title">
          <h3>{{title}}</h3>
        </div>

        <div class="am-dialog-body">
          <p class="am-dialog-brief" v-if="content">{{content}}</p><slot></slot>
        </div>

        <div class="am-dialog-footer" :class="[selection ? 'selection': '']">
          <slot name="button" buttons="buttons">
            <button class="am-dialog-button" ref="button" v-for="button in buttons" :class="[button.key]" :disabled="button.disabled" @click="onClickButton($event, button.key)">
              {{button.text}}
            </button>
          </slot>
        </div>
        <a class="am-dialog-close" :class=" closableWhite ? 'white' : '' " aria-label="关闭" role="button" v-if="closable" @click="onClose"></a>
      </div>
    </div>
  </div>
</transition>
</template>
<style scoped>.am-dialog.precise{left:0!important;-webkit-transform:translateY(-50%)!important;transform:translateY(-50%)!important}.antui-dialog-enter-active,
.antui-dialog-leave{opacity:1;-webkit-transition:all .3s ease;transition:all .3s ease}.antui-dialog-leave-active{opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease}.antui-dialog-enter{opacity:0}.am-dialog-wrap{position:relative}.am-dialog-mask.show{position:fixed}</style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _event=require('../__utils/event');exports.default={name:'Dialog',props:{animation:{type:Boolean,default:true},value:Boolean,closable:Boolean,closableWhite:Boolean,type:{type:String,default:'text'},title:String,content:String,buttons:{type:Array,default:function _default(){return[]}},selection:Boolean,preventMove:{type:Boolean,default:true},precise:Boolean},computed:{animationName:function animationName(){return this.animation?'antui-dialog':''},cShowing:{get:function get(){return this.value},set:function set(b){this.$emit('input',b);if(b){this.$emit('show')}else{this.$emit('hide')}}},isImageType:function isImageType(){return this.type==='image'||this.type==='image-fill'}},watch:{cShowing:function cShowing(c,a){this.processMaskMove(c)}},methods:{processMaskMove:function processMaskMove(b){if(this.preventMove){if(b){(0,_event.preventDocumentMove)()}else{(0,_event.restoreDocumentMove)()}}},onClickButton:function onClickButton(c,a){this.$emit('buttonClick',c,a)},onClose:function onClose(b){this.cShowing=false},onClickMask:function onClickMask(b){this.$emit('maskClick',b)}},beforeDestroy:function beforeDestroy(){this.processMaskMove(false)},mounted:function mounted(){this.processMaskMove(this.cShowing)}};</script>

