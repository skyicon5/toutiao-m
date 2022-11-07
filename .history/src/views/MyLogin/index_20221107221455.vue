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
        :rules="rules.mobile"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="form.code"
        name="验证码"
        placeholder="验证码"
        :rules="rules.code"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-button
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
import { loginApi } from '@/api/user'
export default {
  data() {
    return {
      form: {
        mobile: '',
        code: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '请填写6位数字验证码' }
        ]
      },
      content: '发送验证码',
      totalTime: 10,
      canClick: true
    }
  },
  methods: {
    async onSubmit(values) {
      try {
        const res = await loginApi(this.form)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
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
