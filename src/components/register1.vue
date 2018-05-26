<template>
  <div id="register1">
    <div id="baseAgrBox" class="actionbar">优乐帐号通知</div>
    <div id="agreement" style="height: 716px;">
      <div class="chooseCountry">
        <div class="node-intro">
          <div class="DFVersion-slideDiv" style="max-height: 644px;">
            <div class="DFVersion-EMUI6">华为帐号是用于访问所有华为服务的帐号，为实现上述功能，需要收集、使用您的下列信息：</div>
            <div class="DFVersion-item-EMUI6"><i class="DFVersion-item-point">.</i>为防止欺诈行为，华为需采集浏览器信息 (类型、时区、插件、语言、字体、canvas图片渲染哈希值、webgl图片渲染哈希值)，您在页面上的鼠标和键盘操作信息，并使用cookie、local storage和flash cookie；</div>
            <div class="DFVersion-item-EMUI6"><i class="DFVersion-item-point">.</i>个人信息，包括<b class="DFVersion-attentionTip">手机号、邮件地址和密码</b>；</div>
            <div class="DFVersion-item-EMUI6"><i class="DFVersion-item-point">.</i>网络信息，包括 IP 地址。</div><div class="DFVersion-EMUI6">上述数据将会传输并保存至中华人民共和国境内的服务器。</div>
            <div class="DFVersion-EMUI6 marginTop8">若您不同意上述内容的采集，我们将无法为您提供服务。您可通过销户以终止上述数据的收集与处理。</div>
          </div>
          <div class="DFVersion-item-EMUI6 DFVersion-marginFix">点击“同意”，即表示您同意上述内容及
            <a href="https://hwid1.vmall.com/CAS/portal/agreements/userAgreement/zh-cn_userAgreement.html?version=china" target="_blank" class="DFVersion-link-EMUI6">华为帐号用户协议</a>、
            <a href="https://hwid1.vmall.com/CAS/portal/agreements/accPrivacyStatement/zh-cn_accPrivacyStatement.html" target="_blank" class="DFVersion-link-EMUI6">关于华为帐号与隐私的声明</a>。
          </div>
        </div>
      </div>
    </div>
    <div id="btnArea" class="btnArea2 pro-btns body-EMUI5">
      <div class="rightBtn r"><div class="btn-EMUI5-2 subRightBtn" id="next">同意</div></div>
      <div class="leftBtn"><div class="btn-EMUI5-2 subLeftBtn" id="back">取消</div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "./register1.scss"
</style>
<style>
  html,body {
    height:100%;
    background: #fff;
  }
</style>
