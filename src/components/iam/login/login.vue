<template>
  <div id="login">
    <div id="loginHead" style="min-height: 192.857px;">
      <div class="head-content" id="headContent" style="padding-top: 52.0714px; padding-bottom: 8px;">
        <div class="head-set-more">
          <i id="set_more" class="more-security-icon"></i>
          <div id="more_list" class="more-list" style="display: none;">
            <ul>
              <li id="goSecurity" class="security-menu">安全中心</li>
            </ul>
          </div>
        </div>
        <div class="title-main center">优乐帐号-登录</div>
        <div class="title-sub center" id="useraccount_desc">华为帐号适用于访问所有华为服务。您可登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</div>
      </div>
    </div>
    <div id="content-EMUI5">
      <div class="line8-EMUI5">
        <div class="dinput-UI5" id="usernameDiv">
          <input oncut="return false;" oncopy="return false" type="text" class="ar-eg" id="username" name="username" maxlength="50" placeholder="手机号/邮件地址" validator="validator11522586449666">
        </div>
        <div id="user_msg" class="error-tips-EMUI5"></div>
      </div>
      <div class="line8-EMUI5">
        <div class="dinput-UI5" id="passwordDiv">
          <div class="ico-div"><img class="eyeoff" id="passwdEye" src="https://hwid1.vmallres.com/CAS/up/rss_17/css/mobile/standard_rss/images/eyeoff.png?UP_CAS_2.6.1.102"></div>
          <div class="input-div"><input type="password" maxlength="32" autocomplete="off" id="password" placeholder="密码" validator="validator21522586449666"><span id="pwd_msg"></span></div>
        </div>
        <div id="passwd_msg" class="error-tips-EMUI5 wrapLogin-pwd"></div>
      </div>
      <!--用户登录-->
      <div class="line-EMUI5">
        <div class="btn-EMUI5" id="btnLogin" href="javascript:void(0)">登录</div>
        <span id="msg_login"></span>
      </div>
      <div class="line8-EMUI5 center">
        <a id="registerLink" class="a-EMUI5 margin-right32" href="https://hwid1.vmall.com/CAS/mobile/standard/register/wapRegister.html?reqClientType=26&amp;loginChannel=26000002&amp;countryCode=cn&amp;loginUrl=https%3A%2F%2Fhwid1.vmall.com%2FCAS%2Fmobile%2Fstandard%2FwapLogin.html&amp;service=https%3A%2F%2Fm.vmall.com%2Faccount%2Fcaslogin%3Furl%3D%252F&amp;lang=zh-cn&amp;themeName=red">注册帐号</a>
        <a id="resetPwdLink" href="https://hwid1.vmall.com/CAS/mobile/standard/resetPwd/forgetbyid.html?reqClientType=26&amp;loginChannel=26000002&amp;countryCode=cn&amp;loginUrl=https%3A%2F%2Fhwid1.vmall.com%2FCAS%2Fmobile%2Fstandard%2FwapLogin.html&amp;service=https%3A%2F%2Fm.vmall.com%2Faccount%2Fcaslogin%3Furl%3D%252F&amp;lang=zh-cn&amp;themeName=red" class="a-EMUI5">忘记密码？</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="sass">
  @import "./style.scss"
</style>
