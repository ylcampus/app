<template>
  <div id="Regbyphone">
    <div id="baseAgrBox" class="actionbar">使用手机号注册</div>
    <div class="marginL-R wrapRegister-padding16">
      <div class="box login-form-marginTop registerContent">
        <div data-v-555c2582="" id="usernameDiv" class="dinput-UI5">
          <input data-v-555c2582="" oncut="return false;" oncopy="return false" type="text" id="username" name="username" maxlength="50" placeholder="手机号/邮件地址" validator="validator11522586449666" class="ar-eg">
        </div>
        <div class="code">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Regbyphone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "./regbyphone.scss"
</style>
<style>
  html,body {
    height:100%;
    background: #fff;
  }
</style>
