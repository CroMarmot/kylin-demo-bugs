<template>
<div class="am-list-item" :class="cClassInput" @click="mHandleClick">
  <slot>
    <div v-if="label" class="am-list-label" :style="cStyleLabel" :id="labelId">{{label}}</div>
  </slot>
  <div class="am-list-control">
    <input :id="inputId" :type="inputType" :placeholder="placeholder" :value="value" :disabled="disabled" @input="onInput" @focus="onFocus" @blur="onBlur" :maxlength="maxlength" :aria-labelledby="labelId"/><slot name="input_after"></slot>
  </div>
  <div v-if="clear" class="am-list-clear" tabindex="0" aria-label="清空输入框" :aria-controls="inputId">
    <i @click="clearValue" :style="{
        opacity: showClear ? 1 : 0,
        visibility: 'visible'
      }" class="am-icon-clear am-icon" aria-hidden="true"></i>
  </div>
  <div v-if="error" class="am-list-thumb right" @click.stop="onClickErrorTip"><i class="am-icon form am-error-tip"></i></div>
  <div v-if="!(clear&&showClear) && !error && !button && rightIcon">
    <slot name="right">
      <div class="am-list-thumb right"><i class="am-icon form" :class="rightIcon"></i></div>
    </slot>
  </div>
  <slot name="button">
    <div v-if="button" class="am-list-button">
      <button type="button" :disabled="buttonDisabled" @click.stop="onClickButton">{{button}}</button>
    </div>
  </slot>
</div>
</template>
<style></style>
<script type="text/javascript" generated>'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default={name:'ListItemInput',props:{value:String,label:String,labelWidth:[Number,String],placeholder:String,inputType:{type:String,default:'text'},clear:Boolean,clearOnFocus:Boolean,rightIcon:String,labelId:String,inputId:String,disabled:Boolean,error:Boolean,button:String,buttonDisabled:Boolean,maxlength:Number},data:function data(){return{currentFocus:false}},computed:{cClassInput:function cClassInput(){var b='';b+=this.clear?' am-input-autoclear ':' ';b+=this.error?' am-list-item-error ':' ';return b},userShowClear:function userShowClear(){return this.clear&&this.value&&!this.disabled},showClear:function showClear(){var b=this.userShowClear;if(this.clearOnFocus){return b&&this.currentFocus}else{return b}},cStyleLabel:function cStyleLabel(){var c='auto';var a=this.labelWidth;if(typeof a==='number'){c=a+'em'}else if(typeof a==='string'){c=a}return'width: '+c+';'}},methods:{mHandleClick:function mHandleClick(b){this.$emit('click',b)},onInput:function onInput(b){this.$emit('input',b.target.value)},clearValue:function clearValue(){console.log('clearValue',this.currentFocus);this.$emit('input','')},onClickErrorTip:function onClickErrorTip(b){this.$emit('error-click',b);this.$emit('errorClick',b);if(this.$listeners&&(this.$listeners['error-click']||this.$listeners['errorClick'])){return};this.mHandleClick(b)},onClickButton:function onClickButton(b){this.$emit('button-click',b);this.$emit('buttonClick',b);if(this.$listeners&&(this.$listeners['button-click']||this.$listeners['buttonClick'])){return}this.mHandleClick(b)},onFocus:function onFocus(b){this.currentFocus=true;this.$emit('focus',b);clearTimeout(this.focusTid)},onBlurLater:function onBlurLater(b){this.currentFocus=false;this.$emit('blur-later',b);this.$emit('blurLater',b)},onBlur:function onBlur(c){var a=this;this.$emit('blur',c);this.focusTid=setTimeout(function(){a.onBlurLater(c)},100)}}};</script>

