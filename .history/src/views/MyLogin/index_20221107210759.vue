<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号"
        placeholder="手机号"
        left-icon="icon-shouji"
        :rules="[{ required: true, message: '请填写手机号' }]"
      >
        <i left-icon="icon-shouji"></i>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped></style>
