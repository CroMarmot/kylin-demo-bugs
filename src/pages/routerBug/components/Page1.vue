<template>
  <div>
    <h1 @click="routerPush">vue-router - replace</h1>
    <h2> 进入页面3秒后调用设置标题</h2>
  </div>
</template>

<script type="text/javascript">
import { Component } from '@ali/kylin-framework';

@Component({
  mapStateToProps: [],
  mapMutationsToMethods: [
    'pushPage'
  ],
  mapActionsToMethods: [
  ]
})
export default class pageA {
  name = 'Page1'
  mounted() {
    setTimeout(() => {
      this.setTitle();
    }, 3000);
  }
  methods = {
    setTitle() {
      window.AlipayJSBridge.call('setTitle', {
        title: 'Page1'
      });
// BaseDevice.initTitle({
//   leftButton: { exist: true, name: '' },
//   rightButton: { exist: false, name: '' },
//   title: 'Page1'
// }, e => {
//   this.setTitle();
//   if (e.index === '0') {
//     BaseDevice.popWindow();
//   }
// });
    },
    routerPush() {
      this.$router.replace('/Page0');
      // this.popPage();
    }
  }
}
</script>

<style lang="less" scoped>
</style>