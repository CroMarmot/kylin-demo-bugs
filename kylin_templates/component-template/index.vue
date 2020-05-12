<template>
  <div>
    Hello {{name}}
  </div>
</template>

<style lang="less" rel="stylesheet/less">

</style>

<script>

  import { Component } from '@ali/kylin-framework';

  @Component
  export default class <%=componentName%> {
    data = {
      name: '<%=componentName%>'
    }

    mounted() {
      console.log('component.<%=componentName%> mounted');
    }
  }

</script>
