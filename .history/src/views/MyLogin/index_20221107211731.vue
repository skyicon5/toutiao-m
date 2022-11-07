<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field name="手机号" placeholder="手机号" left-icon="icon-shouji">
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field name="验证码" placeholder="验证码">
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-button class="send-sms-btn" round type="default" size="small">
            发送验证码
          </van-button>
        </template>
      </van-field>
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
      mobile: '',
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

<style lang="less" scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 12px;
    color: #666666;
  }
}
</style>
