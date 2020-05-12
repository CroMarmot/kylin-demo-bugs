<template>
  <div id="app">
    <a href="./loadmore.html">loadmore</a>
    <a href="./dialogue.html">dialogue</a>
    <a href="./listview.html">listview</a>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    height: 100%;
  }

</style>

<dependency component="loadmore" src="common/components/loadmore.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class LoadmoreView {

    }

</script>
