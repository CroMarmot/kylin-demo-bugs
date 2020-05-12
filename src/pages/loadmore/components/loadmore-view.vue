<template>
  <div id="app">
    <loadmore
      class="loadmore-container"
      ref="loadmore"
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="loaded"
    >
      <div 
        v-for="item in list"
        :key="item"
        class="item"
      >
        <span>{{item}}</span>
      </div>
    </loadmore>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

</style>

<dependency component="loadmore" src="common/components/loadmore.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class LoadmoreView {

    data = {
      list: [0]
    }

    get loaded() {
      return this.data.list.length > 50;
    }

    addItems(plus, count) {
      if (plus > 0) {
        let base = this.data.list[ this.data.list.length - 1 ];
        while (count--) {
          base += plus;
          this.data.list.push(base);
        }
      } else if (plus < 0) {
        let base = this.data.list[ 0 ];
        while (count--) {
          base += plus;
          this.data.list.unshift(base);
        }
      }
    }

    loadTop() {
      setTimeout(() => {
        this.addItems(-1, 5);
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    }

    loadBottom() {
      setTimeout(() => {
        this.addItems(1, 5);
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    }

    mounted() {
      this.addItems(1, 20);
    }
  }

</script>
