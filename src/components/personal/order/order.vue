<template>
  <!--订单列表-->
  <div id="Order">
    <section id="orderList">
      <article class="row" @click="toOrderDetailPage">
        <header class="order_msg">
          <div class="order_no">订单号：11312327096</div>
          <div class="order_time">2018-04-05 22:24:37</div>
        </header>
        <div class="goods_msg">
          <div class="g_img">
            <img src="https://res.vmallres.com/pimages//product/6901443217298/428_428_1517624781373mp.jpg" alt="华为畅享7S 4GB+64GB 全网通高配版（蓝色）">
          </div>
          <div class="g_msg">
            <div class="pro_name">华为畅享7S 4GB+64GB 全网通高配版（蓝色）</div>
            <div class="pro_price_number">
              <span class="price">¥1699.00</span>
              <span class="number">×1</span>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="msg">
            <div class="amonut">
              <span class="lab">金额：</span>
              <span class="total">¥1699.00</span>
              <span class="num">共1件商品</span>
            </div>
            <div class="status">
              <span class="lab">状态：</span>
              <span class="status_detail">订单已确认 | 未支付</span>
            </div>
          </div>
          <div class="opa">
            <span class="toPay">去付款</span>
          </div>
        </div>
      </article>
    </section>
    <!--加载更多-->
    <section id="loadMore">
      <span class="more-loading">已加载全部订单！</span>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Order',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '全部订单'
  },
  methods: {
    toOrderDetailPage () {
      this.$router.push('/order/detail')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
