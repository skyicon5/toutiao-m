<template>
  <div id="app">
    <router-view />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容"></van-cell>
      <van-cell title="单元格" value="内容"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
