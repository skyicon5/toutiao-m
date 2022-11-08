<template>
  <div class="home-container">
    <van-nav-bar fixed>
      <template #left>
        <img class="logo" :src="imgObj" alt="" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'
export default {
  name: 'Home',
  data() {
    return {
      imgObj: logo
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  .logo {
    background-color: pink;
    width: 200px;
    height: 100px;
  }
  .van-nav-bar__left,
  .van-nav-bar__right {
    padding: 0;
  }
}
</style>
