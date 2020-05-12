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
  export default class Child {
    data = {
      name: 'Child'
    }

    mounted() {
      console.log('component.Child mounted');
    }
  }

</script>
