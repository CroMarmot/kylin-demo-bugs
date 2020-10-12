<template>
  <div>
    <h2>期望pushWindow传递的数据前后一致</h2>
    <h2>实际 阿里提供的android是能用的，ios在一些\r \n 之类的会多次转义出现问题</h2>
    <h2>样例代码，见mounted和methods</h2>
    <h2>api:[{{ios?'ios':'android'}}]</h2>
    <button @click="pushData({})">{}</button>
    <button @click="pushData({text:1})">{text:1}</button>
    <button @click="pushData({text:'\r'})">{text:'\r'}</button>
    <button @click="pushData({text:'\n'})">{text:'\n'}</button>
    <button @click="pushData({text:'\r\n'})">{text:'\r\n'}</button>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
</style>

<script>
import { Component } from '@ali/kylin-framework';
import { popWindow, pushWindow, getPassData } from 'common/js/clientApi.js';
import {isIOS} from 'common/js/client.js';

@Component({})
export default class IndexView {
  data = {
    name: 'pushWindowBug',
    ios: isIOS()
  };
  methods = {
    pushData(data) {
      pushWindow('pushWindowBug.html', false, data);
    }
  };
  mounted() {
    try {
      let data = getPassData();
      window.alert(JSON.stringify(data));
      if (data) {
        popWindow();
      }
    } catch (e) {
      window.alert('error');
      window.alert(e);
    }
  }
}
</script>
