<template>
  <div :class="active ? activeClass : ''" :style="active ? activeStyle : {}"><slot></slot></div>
</template>

<script>
  export default {
    name: 'Touchable',
    props: {
      activeClass: String,
      activeStyle: Object,
    },
    data() {
      return {
        active: false,
      };
    },
    mounted() {
      this.$el.addEventListener('touchstart', this.activate);
      this.$el.addEventListener('touchend', this.deactivate);
      this.$el.addEventListener('touchcancel', this.deactivate);
    },
    beforeDestroy() {
      this.$el.removeEventListener('touchstart', this.activate);
      this.$el.removeEventListener('touchend', this.deactivate);
      this.$el.removeEventListener('touchcancel', this.deactivate);
    },
    methods: {
      activate() {
        this.active = true;
      },
      deactivate() {
        this.active = false;
      }
    },
  };
</script>
