<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        clearable
        v-model="mobile"
        name="手机号"
        placeholder="手机号"
        left-icon="icon-shouji"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field name="验证码" placeholder="验证码">
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-button
            v-model="password"
            class="send-sms-btn"
            round
            type="default"
            size="small"
            @click="countDown"
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
      mobile: '',
      password: '',
      content: '发送验证码',
      totalTime: 5,
      canClick: true
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    countDown() {
      if (!this.canClick) return
      this.content = this.totalTime + 's后重新发送'
      const clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重新发送'
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.content = '重新发送验证码'
          this.totalTime = 5
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
    height: 46px;
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
