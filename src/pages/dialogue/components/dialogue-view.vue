<template>
  <div id="app">
    <div class="container">
      <button class="button" @click="show=true">显示</button>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      123123<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
      asdfasd<br/>
    </div>
    <dialogue
      :show="show"
      title="标题"
      @close="show=false"
      position="bottom"
    >
      <div class="list">
        <ul>
          <li 
            v-for="i in 4"
            class="item"  
            :key="i"
          >{{i}}</li>
        </ul>
      </div>
    </dialogue>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .container {
    padding: 15px;
    box-sizing: border-box;
  }

  .list {
    width: 100%;
    text-align: center;
  }

  .item {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #EEE;
  }

  .button {
    display: inline-block;
    width: 100%;
    height: 40px;
    font-size: 18px;
    box-sizing: border-box;

    border: 1px solid #ddd;
    color: #000;
    background-color: #fff;
  }

</style>

<dependency component="dialogue" src="common/components/dialogue.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class DialogueView {

    data = {
      show: false
    }

  }

</script>
