<template>
  <Popup 
    :show="show"
    :animation="animation"  
    :mask="mask"
    @close="onCancel"
    :position="position"
  >
    <div class="popup-wrapper">
      <div v-if="noHeaderSlot" class="popup-header">
        <slot name="left" :confirm="onConfirm" :cancel="onCancel">
          <div class="popup-button" @click="onCancel">{{cancelText}}</div>
        </slot>
        <slot name="title">
          <div class="popup-title" >{{title}}</div>
        </slot>
        <slot name="right" :confirm="onConfirm" :cancel="onCancel">
          <div class="popup-button" @click="onConfirm">{{confirmText}}</div>
        </slot>
      </div>
      <slot v-else name="header" :confirm="onConfirm" :cancel="onCancel"></slot>
      <slot>

      </slot>
    </div>
  </Popup>
</template>

<style lang="less" scoped>
  
  .popup {
    &-wrapper {
      position: relative;
    }

    &-header {
      height: 44px;
      background-color: #FEFEFE;
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ddd;
    }

    &-title {
      flex: 1;
      text-align: center;
    }
    &-button {
      padding: 0 15px;
      height: 100%;
      display: flex;
      align-items: center;
      color: #108ee9;
      font-size: 16px;
    }
  }

</style>

<script>
  import Popup from './popup.js';

  export default {
    name: 'Dialogue',
    components: {
      Popup
    },
    props: {
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      title: String,
      show: Boolean,
      animation: null,
      mask: null,
      position: {
        type: String,
        default: 'bottom'
      }
    },
    computed: {
      noHeaderSlot() {
        return (
          (!this.$scopedSlots.header || !this.$scopedSlots.header.length) &&
          (!this.$slots.header || !this.$slots.header.length)
        );
      }
    },
    methods: {
      onCancel() {
        this.$emit('close');
      },
      onConfirm() {
        this.$emit('close');
      }
    }
  };
</script>