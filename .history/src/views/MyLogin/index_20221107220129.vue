<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        clearable
        v-model="form.mobile"
        name="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        name="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-button
            v-model="form.password"
            class="send-sms-btn"
            round
            type="default"
            size="small"
            @click="countDown"
            :disabled="!canClick"
          >
            {{ content }}
          </van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mobile: '',
        password: ''
      },
      content: '发送验证码',
      totalTime: 10,
      canClick: true
    }
  },
  methods: {
    onSubmit(values) {
      // 1. 获取表单数据
      // 2. 表单验证
      // 3. 调教表单请求登录
      // 4. 根据请求响应结果处理后续操作
    },
    // 点击发送验证码计时
    countDown() {
      if (!this.canClick) return
      this.canClick = false
      this.content = this.totalTime + 's后重新发送'
      const clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重新发送'
        if (this.totalTime < 1) {
          window.clearInterval(clock)
          this.content = '重新发送验证码'
          this.totalTime = 10
          this.canClick = true // 重新开启
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 156px;
    height: 56px;
    background-color: #ededed;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
