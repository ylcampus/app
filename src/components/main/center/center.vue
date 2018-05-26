<template>
  <!--用户中心-->
  <div id="UserCenter">
    <!--基本信息-->
    <section id="basicMsg" @click ="toUserInfoPage">
      <div class="photo">
        <img src = "../../../assets/index/center/photo.png" alt="用户头像">
      </div>
      <div class="toDetail">
        <span class="tel">手机用户5737</span>
        <i class="arrow"></i>
      </div>
    </section>
    <!--订单信息-->
    <section id = "orderMsg">
      <mt-tabbar v-model="activePage" @click = "togglePage()">
        <mt-tab-item id="tab1">
          <img slot="icon" src="../../../assets/index/center/my_order_daifukuan@3x.png">
          <span>待付款</span>
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <img slot="icon" src="../../../assets/index/center/my_order_daishouhuo@3x.png">
          <span>待收货</span>
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <img slot="icon" src="../../../assets/index/center/my_order_tuikuan@3x.png">
          <span>退款售后</span>
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <img slot="icon" src="../../../assets/index/center/all_order.png">
          <span>全部订单</span>
        </mt-tab-item>
      </mt-tabbar>
    </section>
    <!--信息列表-->
    <section id="msgList">
      <mt-cell title="折扣券" to ="/discount" is-link><span class="dark_red">3张折扣券</span></mt-cell>
      <mt-cell title="收货地址" to ="/address" is-link></mt-cell>
      <mt-cell title="关于优乐" to ="/aboutus" is-link></mt-cell>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Center',
  data () {
    return {
      activePage: ''
    }
  },
  watch: {
    activePage (val) { // 路由跳转
      this.$router.push('/order')
    }
  },
  mounted () {},
  methods: {
    toUserInfoPage () { // 到个人中心页面
      this.$router.push('/userinfo')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
