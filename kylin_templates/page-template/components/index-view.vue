<dependency component="Child" src="./child.vue" lazy />

<template>
  <div id="app">
    Hello {{name}}
    <Child></Child>
  </div>
</template>

<style lang="less" rel="stylesheet/less">

</style>

<script>

  import { Component } from '@ali/kylin-framework';

  @Component
  export default class IndexView {
    data = {
      name: '<%=pageName%>'
    }

    mounted() {
      console.log('<%=pageName%>.IndexView mounted');
    }
  }

</script>
