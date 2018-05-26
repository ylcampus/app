<template>
  <!--支付页-->
  <div id="Payment">
    <!--订单信息-->
    <section id="orderSection">
      <div class="amonut">
        <div class="title">付款金额</div>
        <div class="total">￥640.00</div>
      </div>
      <div class="address">
        <span class="dark">收货信息:</span>董纪国,南京.鼓楼区.南京大学.鼓楼校区,18205185737
      </div>
    </section>
    <!--支付方式-->
    <section id="payWay">
      <div class="waySelect">请选择支付方式</div>
      <div class="way">
        <mt-cell title="支付宝" is-link>
          <img slot="icon" src="../../../../assets/ALIPAY.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="微信" is-link>
          <img slot="icon" src="../../../../assets/WXPAY.png" width="24" height="24">
        </mt-cell>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Payment',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '优乐收银台'
  },
  methods: {}
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
<style scoped></style>
