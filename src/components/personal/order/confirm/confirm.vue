<template>
  <!--确认订单页-->
  <div id="Confirm">
    <!--收货地址-->
    <section id="address">
      <div class="inner">
        <div class="item">
          <span class="name">董纪国</span>
          <span class="tel">18205185737</span>
        </div>
        <div class="item">江苏.南京.鼓楼.南京大学.鼓楼校区</div>
      </div>
      <div class="arrow">
        <i class="icon-more-right"></i>
      </div>
    </section>
    <!--发票-->
    <section id="invoice">
      <mt-cell title="电子普通发票" is-link><span>个人</span></mt-cell>
    </section>
    <!--订单信息-->
    <section id="orderMsg">
      <header class="express">
        <div class="inner">优乐商城配送</div>
      </header>
      <div class="g_msg">
        <div class="main_msg">
          <img src="https://res.vmallres.com/pimages//product/6901443217298/142_142_1517624781373mp.jpg" alt="">
          <h4 class="product_name">美津浓Mizuno 男款减震跑步鞋 预言6 PROPHECY 6 NOVA J1GC171703</h4>
        </div>
        <div class="other_msg">
          <span>x</span><span>1</span>
        </div>
      </div>
      <div class="g_other">
        <mt-cell title="价格"><span class="dark_red">￥680.00</span></mt-cell>
        <mt-cell title="颜色"><span class="dark">湛蓝/银/黑</span></mt-cell>
        <mt-cell title="尺码"><span class="dark">39</span></mt-cell>
        <mt-cell title="优惠券（折扣）"><span>5折券x1</span></mt-cell>
      </div>
    </section>
    <!--统计信息-->
    <section id="totalMsg">
      <mt-cell title="配送费"><span>￥0.00</span></mt-cell>
      <div class="total">
        <p class="proCont">
          <span>优惠(5折券)：</span>
          <span class="last minus">- ¥680.00</span>
        </p>
        <p class="proCont">
          <span>小计：</span>
          <span class="proPrice last">¥680.00</span>
        </p>
      </div>
    </section>
    <!--提交订单-->
    <section id="submitOrder">
      <div class="address">配送至：南京 鼓楼区 南京大学 鼓楼校区</div>
      <div class="buy_btn">
        <div class="buy_title">应付总额</div>
        <div class="total_price">¥680.00</div>
        <div class="buy_now" @click = "toPaymentPage">提交订单</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Confirm',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '确认订单'
  },
  methods: {
    toPaymentPage () { // 到支付页面
      this.$router.push('/order/payment')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
<style scoped>
  #Confirm .g_other .mint-cell-wrapper{
    font-size: 15px;
  }
</style>
