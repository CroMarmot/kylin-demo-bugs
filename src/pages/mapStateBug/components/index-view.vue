<dependency component="Child" src="./child.vue" lazy />

<template>
  <div id="app">
    <h2>期望state变量在mutation更改以后，可以同步获得新的值。</h2>
    <h2>实际 阿里提供的mapStateToProps无法同步获取 新的值</h2>
    <h2>样例代码，见mounted和console 输出</h2>
    <Child></Child>
  </div>
</template>

<style lang="less" rel="stylesheet/less">

</style>

<script>
  import { Component } from '@ali/kylin-framework';
  import { mapState } from 'vuex';

  @Component({
    mapStateToProps: ['mapStateToPropsBug'],
    mapMutationsToMethods: ['updateMapStateToPropsBug']
  })
  export default class IndexView {
    data = {
      name: 'mapStateBug'
    }
    props = {
      mapStateToPropsBug: String
    }

    computed= {
      ...mapState({
        rightvalue: (state) => state.mapStateToPropsBug
      })
    }

    mounted() {
      console.log('Bugdemo.IndexView mounted');
      console.log('初始值', this.mapStateToPropsBug);
      this.updateMapStateToPropsBug('new string');
      console.log('阿里mutation 修改');
      console.log('阿里mapstate获取', this.mapStateToPropsBug);
      console.log('vuex mapstate获取', this.rightvalue);
      console.log('阿里mapstate获取', this.mapStateToPropsBug);
      this.updateMapStateToPropsBug('new right string 1');
      console.log('阿里mutation 修改');
      console.log('vuex mapstate获取', this.rightvalue);
      this.updateMapStateToPropsBug('new right string 2');
      console.log('阿里mutation 修改');
      console.log('vuex mapstate获取', this.rightvalue);
      this.updateMapStateToPropsBug('new right string 3');
      console.log('阿里mutation 修改');
      console.log('vuex mapstate获取', this.rightvalue);
    }
  }

</script>
