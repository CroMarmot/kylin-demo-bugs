<template>
  <div class="loadmore">
    <div ref="content" class="loadmore-content" :class="{ 'is-dropped': topDropped || bottomDropped}">
      <slot name="top" :status="topStatus">
        <div class="loadmore-top" v-if="topMethod">
          <span class="loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom" :status="bottomStatus">
        <div class="loadmore-bottom" v-if="bottomMethod && !bottomAllLoaded" @click="triggerBottomLoad">
          <span class="loadmore-text">{{ bottomText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>

  @ppx: 1px;
  .loadmore {
    overflow: hidden;

    &-content {
      &.is-dropped {
        -webkit-transition: all 200ms linear;
      }
    }

    &-top, &-bottom {
      text-align: center;
      height: 50 * @ppx;
      line-height: 50 * @ppx;
    }

    &-top {
      margin-top: -50 * @ppx;
    }

    &-bottom {
      // margin-bottom: -50 * @ppx;
    }

    &-text {
      vertical-align: middle;
    }
  }

</style>

<script>
  import throttle from './throttle.js';

  export default {
    name: 'mt-loadmore',
    props: {
      maxDistance: {
        type: Number,
        default: 0
      },
      autoFill: {
        type: Boolean,
        default: false
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadingText: {
        type: String,
        default: '加载中...'
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      bottomPullText: {
        type: String,
        default: '加载更多数据'
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: '',
        bottomStatus: '',
        bottomLock: false
      };
    },
    computed: {
      scrollThrottleFunc() {
        return throttle(this.handlerScroll, 100, {
          leading: false,
          trailing: true
        });
      }
    },
    watch: {
      topStatus(val) {
        this.$emit('top-status-change', val);
        switch (val) {
          case 'pull':
            this.topText = this.topPullText;
            break;
          case 'drop':
            this.topText = this.topDropText;
            break;
          case 'loading':
            this.topText = this.topLoadingText;
            break;
        }
      },
      bottomStatus(val) {
        this.$emit('bottom-status-change', val);
        switch (val) {
          case 'pull':
            this.bottomText = this.bottomPullText;
            break;
          case 'drop':
            this.bottomText = this.bottomDropText;
            break;
          case 'loading':
            this.bottomText = this.bottomLoadingText;
            break;
        }
      }
    },
    methods: {
      setTranslate(val) {
        this.translate = val;
        var $content = this.$refs.content;
        if ($content) {
          $content.style.webkitTransform = $content.style.transform = 'translate3d(0, ' + this.translate + 'px, 0)';
        }
      },
      onTopLoaded() {
        this.setTranslate(0);
        setTimeout(() => {
          this.topStatus = 'pull';
        }, 200);
      },
      onBottomLoaded() {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
        setTimeout(() => {
          this.bottomLock = false;
        }, 200);
      },
      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },
      getScrollTop(element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
        } else {
          return element.scrollTop;
        }
      },
      bindScrollEvents() {
        let target = this.scrollEventTarget === window ? document : this.scrollEventTarget;

        target.addEventListener('scroll', this.handlerScroll);
      },
      bindTouchEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      },
      init() {
        this.topStatus = 'pull';
        this.bottomStatus = 'pull';
        this.topText = this.topPullText;
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        if (typeof this.bottomMethod === 'function') {
          this.fillContainer();
          this.bindScrollEvents();
        }
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents();
        }
      },
      fillContainer() {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                document.documentElement.getBoundingClientRect().bottom;
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                this.scrollEventTarget.getBoundingClientRect().bottom;
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading';
              this.bottomMethod();
            }
          });
        }
      },
      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
        } else {
          return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom + 20;
        }
      },
      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
      },
      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;
        this.direction = distance > 0 ? 'down' : 'up';
        if (typeof this.topMethod === 'function' && this.direction === 'down' &&
          this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.setTranslate(distance <= this.maxDistance ? distance - this.startScrollTop : this.translate);
          } else {
            this.setTranslate(distance - this.startScrollTop);
          }
          if (this.translate < 0) {
            this.setTranslate(0);
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
        }

        this.$emit('translate-change', this.translate);
      },
      handleTouchEnd() {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.setTranslate(50);
            this.topStatus = 'loading';
            this.topMethod();
          } else {
            this.setTranslate(0);
            this.topStatus = 'pull';
          }
        }

        this.$emit('translate-change', this.translate);
        this.direction = '';
      },
      handlerScroll(event) {
        if( this.bottomLock ) return
        if (this.bottomAllLoaded) return;
        this.bottomReached = this.bottomReached || this.checkBottomReached();
        if (this.bottomReached && this.bottomStatus !== 'loading') {
          this.bottomDropped = true;
          this.bottomReached = false;
          this.bottomLock = true;
          this.bottomStatus = 'loading';
          this.bottomMethod();
        }
      },
      triggerBottomLoad() {
        if( this.bottomLock ) return
        if (this.bottomAllLoaded) return;
        if (this.bottomStatus !== 'loading') {
          this.bottomDropped = true;
          this.bottomReached = false;
          this.bottomLock = true;
          this.bottomStatus = 'loading';
          this.bottomMethod();
        }
      }
    },
    mounted() {
      this.init();
    }
  };
</script>