<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        v-model="form.mobile"
        name="mobile"
        placeholder="手机号"
        :rules="rules.mobile"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="form.code"
        name="code"
        placeholder="验证码"
        :rules="rules.code"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="totalTime"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            round
            type="default"
            size="small"
            @click="countDown"
            native-type="button"
          >
            {{ content }}
          </van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          :loading="isLoading"
          loading-text="登录中..."
          class="login-btn"
          block
          round
          type="info"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginApi, sendSms } from '@/api'
export default {
  data() {
    return {
      form: {
        mobile: '13911111111',
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
      totalTime: 1000 * 10,
      isCountDownShow: false,
      // canClick: true,
      isLoading: false
    }
  },
  methods: {
    async onSubmit(values) {
      this.isLoading = true
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await loginApi(this.form)
        this.$toast.success('登录成功')
        console.log(res)
      } catch (e) {
        if (e.response.status === 400) {
          this.$toast.fail('你的手机号或者验证码有误')
        } else {
          this.$toast.fail('登录失败,请稍后重试', e)
        }
      }
      this.isLoading = false
    },
    // 验证码按钮
    async countDown() {
      // 1. 校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        this.$toast.success('已发送验证码')
      } catch (e) {
        return console.log('验证失败', e)
      }
      // 2.验证通过，显示倒计时
      /*
      if (!this.canClick) return
      this.canClick = false
      this.content = this.totalTime + 's后重新发送'
      const clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重新发送'
        if (this.totalTime < 1) {
          window.clearInterval(clock)
          this.content = '发送验证码'
          this.totalTime = 10
          this.canClick = true // 解除禁用按钮
        }
      }, 1000)
      */
      this.isCountDownShow = true
      // 3.请求发送验证码
      try {
        const res = await sendSms(this.form.mobile)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
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
