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
  import { mapState } from 'vuex';

  @Component({
    mapStateToProps: ['mapStateToPropsBug'],
    mapMutationsToMethods: ['updateMapStateToPropsBug']
  })
  export default class IndexView {
    data = {
      name: 'Bugdemo'
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
      console.log(this.mapStateToPropsBug);
      this.updateMapStateToPropsBug('new string');
      console.log(this.mapStateToPropsBug);
      console.log(this.rightvalue);
      console.log(this.mapStateToPropsBug);
      this.updateMapStateToPropsBug('new right string 1');
      console.log(this.rightvalue);
      this.updateMapStateToPropsBug('new right string 2');
      console.log(this.rightvalue);
      this.updateMapStateToPropsBug('new right string 3');
      console.log(this.rightvalue);

    }
  }

</script>
