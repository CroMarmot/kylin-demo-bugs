<template>
  <div id="app">
    <div>
      <div class="list-item">
        <div class="list-label" style="width: auto;">标签内容</div> 
       
        <input class="list-input"
          v-verify.initial.change="'required|date'"
          placeholder="YYYY-MM-DD"/>
       
     </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
@import "~common/css/base.less";

.list-item {
    color: #000;
    font-size: 17px;
    line-height: 1.4;
    padding: 0 15px;
    min-height: 64px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #EEE;
}

.list-label {
  margin-right: 5px;
  line-height: 1.4;
  color: #333;
  text-align: left;
  min-width: 60px;
}
.list-control {
  line-height: 1.4;
  
}
.list-input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  font-size: 17px;
  color: #000;
  height: 25px;
  display: block;
  line-height: 25px;

  -webkit-appearance: none;
  width: 100%;
  padding: 0;
  border: none;
  background-color: #0000;

  &:focus {
    outline: 0;
  }
}
.verify-error {
  border-top: 1px solid #CCC;
  font-size: 12px;
  color: #ff3860;
  width: 100%;
}

</style>

<script type="text/javascript">
import { Component } from '@ali/kylin-framework';

@Component
export default class ValidatorView {}
</script>
