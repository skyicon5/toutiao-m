<template>
  <div>
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

<style lang="less" scoped></style>
