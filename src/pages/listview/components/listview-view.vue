<template>
  <div id="app">
    <listview
      ref="list"
      :params="paramsTemplate"
      :page-size="5"
      :max-page-num="5"
      page-start-field="current_page"
      page-limit-field="page_row_count"
      result-has-more-field="hasMore"
      result-list-field="list"
      :on-request-data="onRequestData"
      :has-more="true"
    >
      <!-- 这是循环的每一块的模板，独立状态来自于state.item -->
      <div 
        slot-scope="state"
        class="item"
      >
        <span>自定义模板{{state.item}}xx
          <button @click="onClickButton" class="btn">重置</button>
        </span>
      </div>
    </listview>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
  }

  .btn {
    background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
    background-color: #f8f8f8;
    border-radius: 2px;
    color: #757575;
    font-size: 13px;
    font-weight: bold;
    margin: 11px 4px;
    min-width: 54px;
    padding: 0 16px;
    text-align: center;
    border: 1px solid #c6c6c6;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    color: #222;
  }

  .item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

</style>

<dependency component="listview" src="common/components/listview.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class ListviewView {

    data = {
      paramsTemplate: {
        bankUserId: '123',
        fileType: '321',
        productCode: 'asdf',
        current_page: 1,
        page_row_count: 2
      }
    }

    onClickButton() {
      this.$refs.list.resetAndReload(true);
    }

    onRequestData(params, callback) {
      // 真实rpc调用
      // AlipayJSBridge.call('rpc', params, callback);

      // 伪造数据
      /* eslint-disable */
      const {
        current_page,
        page_row_count
      } = params;
      /* eslint-disable */
      const arr = new Array(page_row_count).join(',').split(',').map((_, i) => `${(current_page - 1) * page_row_count + i} 内容`);
      setTimeout(() => {
        callback({
          list: arr,
          hasMore: true
        });
      }, 500);
    }

    mounted() {
      // this.addItems(1, 20);
    }
  }

</script>
