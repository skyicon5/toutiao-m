<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit" :rules="rules">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        prop="username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        prop="password"
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
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: pink;
}
</style>
