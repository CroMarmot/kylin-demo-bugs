'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.closeAll=closeAll;exports.close=close;exports.destroy=destroy;exports.default=PageResultShow;var _vue=require('vue');var _vue2=_interopRequireDefault(_vue);var _pageResult=require('./page-result.vue');var _pageResult2=_interopRequireDefault(_pageResult);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var PageResultConstructor=_vue2.default.extend(_pageResult2.default);var instance=void 0;var cid=1;var instances=[];function closeAll(){instances.forEach(function(b){if(b){destroy(b)}});instances.length=0}function close(d){instances.forEach(function(a,b){if(a&&a.id===d){destroy(instances[b]);instances[b]=undefined}});instances=instances.filter(Boolean)}function destroy(b){b.vm.$destroy();b.vm=null;if(b.dom){try{b.dom.parentNode.removeChild(b.dom)}catch(b){}b.dom=null}}function PageResultShow(j){if(typeof document==='undefined'){return}var a=j||{};if(typeof a==='string'){a={content:a}}var k=typeof a.zIndex==='undefined'?9000:a.zIndex;var c=a.title||'';var l=a.content||'\u7CFB\u7EDF\u6B63\u5FD9\uFF0C\u7A0D\u540E\u518D\u8BD5';var m=a.type||'busy';var n=a.btns||[{text:'\u91CD\u65B0\u52A0\u8F7D',click:function click(){window.location.reload()}}];if(instance){if(instance.vm){instance.vm.$destroy();instance.vm=null}if(instance.dom){var h=instance.dom;if(h.parentNode){h.parentNode.removeChild(h)}instance.dom=null}instance=null}var o='antui_pageresult_'+cid++;instance=new PageResultConstructor({propsData:{type:m,title:c,brief:l,internalButtons:n}});instances.push(instance);instance.id=o;instance.vm=instance.$mount();document.body.appendChild(instance.vm.$el);instance.dom=instance.vm.$el;instance.dom.style.zIndex=k;instance.dom.style.position='fixed';instance.dom.style.top=0;instance.dom.style.left=0;return instance.vm}