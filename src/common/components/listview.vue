<template>
  <div class="loadmore-wrap" ref="wrap">
    <loadmore
      class="loadmore-container" ref="loadmore"
      :top-method="dCanScroll && enableRefresh && _loadTop"
      :bottom-method="_loadBottom"
      :bottom-all-loaded="!cShouldLoadMore"
    ><template v-if="dListData.length">
        <div 
          v-for="(item,index) in dListData" :key="item" :data-index="index"
        >
          <slot :item="item" :list="dListData" :index="index">
            <span>{{item}}</span>
          </slot>
        </div>
      </template>
      <div v-else-if="empty"><slot name="empty">没有数据</slot></div>
    </loadmore>
  </div>
</template>
<style lang="less" scoped>
  .loadmore-wrap {
    height: 100%;
    overflow: scroll;
  }
  .loadmore-container {
    min-height: 100%;
  }
</style>
<script>
import Loadmore from './loadmore.vue';
export default {
  components: {
    Loadmore
  },
  name: 'ListView',
  props: {
    enableRefresh: {
      type: Boolean,
      default: true
    },
    afterLoadData: {
      type: Function
    },
    pageSize: {
      type: Number,
      default: 5
    },
    maxPageNum: {
      type: Number,
      default: 10
    },
    // 请求数据
    onRequestData: Function,
    // 请求参数构造自定义函数
    beforeLoadData: {
      type: Function
    },
    // 参数模板
    params: {
      type: Object,
      default() {
        return {};
      }
    },
    // 上送参数的页码字段
    pageStartField: {
      type: String,
      default: 'NEXT_KEY'
    },
    // 上送参数的第几条下标字段
    pageIndexField: {
      type: String,
      default: 'NEXT_INDEX'
    },
    // 上送参数的一页几行字段
    pageLimitField: {
      type: String,
      default: 'PAGE_SIZE'
    },
    // 返回数据的是否有更多字段
    resultHasMoreField: {
      type: String,
      default: 'HAS_MORE'
    },
    // 返回参数的列表字段
    resultListField: {
      type: String,
      default: 'LIST'
    },
    empty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dPageNum: 1,
      dHasMore: true,
      dListData: [],
      dCanScroll: true
    };
  },
  watch: {
    dListData() {
      // 当列表改变时，检查是否占满屏幕，如果不占满，关闭
      // 需求方看不懂代码，关闭屏幕检测功能
      // this.updateCanScroll();
    }
  },
  computed: {
    // 先看有没有传入自定义 beforeLoadData 函数，没有的话用内置的
    cBeforeLoadData() {
      return typeof this.beforeLoadData === 'function' ? this.beforeLoadData : this.internalBeforeLoadData;
    },
    // 先看有没有传入自定义 afterLoadData 函数，没有的话用内置的
    cAfterLoadData() {
      return typeof this.afterLoadData === 'function' ? this.afterLoadData : this.internalAfterLoadData;
    },
    // 是否还需要显示加载更多
    cShouldLoadMore() {
      return this.dPageNum <= this.maxPageNum && this.dHasMore && !this.empty;
    }
  },
  methods: {
    // 内置处理返回数据
    internalAfterLoadData(data) {
      const dHasMore = data[this.resultHasMoreField];
      const list = data[this.resultListField];
      return {
        list,
        dHasMore
      };
    },
    _afterLoadDataTop(data) {
      this.setPageNum(2);

      const {
        dHasMore,
        list
      } = this.cAfterLoadData(data);

      this.dListData = list;
      this.dHasMore = dHasMore;

      this.$refs.loadmore.onTopLoaded();
    },
    _afterLoadDataBottom(nextPageNum, data) {
      this.setPageNum(nextPageNum);

      const {
        dHasMore,
        list
      } = this.cAfterLoadData(data);

      this.dListData = this.dListData.concat(list);
      this.dHasMore = dHasMore;

      this.$refs.loadmore.onBottomLoaded();
    },
    setPageNum(num) {
      if (!isNaN(Number(num))) {
        this.dPageNum = Number(num);
      } else {
        // throw error
      }
    },
    // 内置处理参数
    internalBeforeLoadData({
      pageNum,
      length,
      pageSize,
      type
    }, callback) {
      const params = Object.assign({}, this.params);

      params[this.pageIndexField] = this.dListData.length;
      params[this.pageStartField] = this.dPageNum;
      params[this.pageLimitField] = this.pageSize;

      this.onRequestData(params, callback);
    },
    resetAndReload(clearList = false) {
      this.setPageNum(1);
      if ( clearList ) {
        this.dListData = [];
      }

      this.cBeforeLoadData({
        pageNum: this.dPageNum,
        length: this.dListData.length,
        pageSize: this.pageSize,
        type: 'RELOAD'
      }, this._afterLoadDataTop);

    },
    // 触发下滑refresh
    _loadTop() {
      // 重置pageCount
      this.setPageNum(1);

      this.cBeforeLoadData({
        pageNum: this.dPageNum,
        length: this.dListData.length,
        pageSize: this.pageSize,
        type: 'REFRESH'
      }, this._afterLoadDataTop);
    },
    // 触发达到底部
    _loadBottom() {
      // 不用加载更多了
      if (!this.cShouldLoadMore) {
        return;
      }

      // 期望的新下标
      const nextPageNum = this.dPageNum + 1;

      // 构造参数
      this.cBeforeLoadData({
        pageNum: nextPageNum,
        length: this.dListData.length,
        pageSize: this.pageSize,
        type: 'MORE'
      },
      // 返回参数处理
      this._afterLoadDataBottom.bind(this, nextPageNum));
    },
    updateCanScroll() {
      const $wrap = this.$refs.wrap;
      const $loadmore = this.$refs.loadmore.$el;
      const canScroll = $loadmore.clientHeight > $wrap.clientHeight;
      if ( this.dCanScroll !== canScroll ) {
        this.dCanScroll = canScroll;
      }
    }
  },
  mounted() {
    // 组件初始化首次请求数据
    // loadmore组件会触发loadBottom
    this.$nextTick(() => {
      this.$refs.loadmore.triggerBottomLoad();
      // 需求方看不懂代码，关闭屏幕检测功能
      // this.updateCanScroll();
    });
  }
};
</script>
