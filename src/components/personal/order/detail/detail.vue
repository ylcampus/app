<template>
  <!--订单列表-->
  <div id="OrderDetail">
    <!--订单信息-->
    <section id="orderMsg">
      <div class="section_inner">
        <div class="row">
          <span class="title">订单状态：</span>
          <span class="content"><span class="dark_red">待付款</span></span>
        </div>
        <div class="row">
          <span class="title">订单编号：</span>
          <span class="content">72220306203</span>
        </div>
        <div class="row">
          <span class="title">订单金额：</span>
          <span class="content">￥640.00</span>
        </div>
        <div class="row">
          <span class="title">下单时间：</span>
          <span class="content">2018-03-15 12:29:52</span>
        </div>
      </div>
      <div class="btn_content">
        <mt-button type="default" :size = "btnSize">取消订单</mt-button>
        <mt-button type="default" :size = "btnSize" @click="toAfterSalePage">申请售后</mt-button>
      </div>
    </section>
    <!--物流信息-->
    <section id="logisticsMsg">
      <div class="section_inner">
        <div class="row">
          <span class="title">收货地址：</span>
          <span class="content">江苏.南京.南京大学.鼓楼校区</span>
        </div>
        <div class="row">
          <span class="title">收货人：</span>
          <span class="content">董纪国 182****5737</span>
        </div>
        <div class="row">
          <span class="title">快递公司：</span>
          <span class="content">顺丰快递</span>
        </div>
        <div class="row">
          <span class="title">配送费用：</span>
          <span class="content">￥0.00</span>
        </div>
        <div class="row">
          <span class="title">快递单号：</span>
          <span class="content">189878765436534</span>
        </div>
      </div>
    </section>
    <!--发票信息-->
    <section id="invoiceMsg">
      <div class="section_inner">
        <div class="row">
          <span class="title">发票类型：</span>
          <span class="content">普通发票</span>
        </div>
        <div class="row">
          <span class="title">发票抬头：</span>
          <span class="content">个人</span>
        </div>
        <div class="row">
          <span class="title">发票内容：</span>
          <span class="content">商品明细</span>
        </div>
      </div>
    </section>
    <!--商品信息-->
    <section id="goodsMsg">
      <div class="header">
        <div class="mall">
          <span class="mall_name">ASICS旗舰店</span>
        </div>
        <div class="num">共计1件商品</div>
      </div>
      <div class="goods">
        <div class="inner">
          <div class="good_img">
            <img src="//img10.360buyimg.com/n4/jfs/t5512/158/1126558189/277567/ef33b49e/590c199fN62c43d9a.jpg" >
          </div>
          <div class="detail">
            <div class="good_name">ASICS亚瑟士跑鞋透气跑步鞋男运动鞋 GEL-EXALT T4C1N4993 蓝色/银色/黄色 40.5</div>
            <div class="sku_coll">蓝色/银色/黄色，40.5</div>
          </div>
        </div>
        <div class="num_msg">
          <span class="good_price dark_red">¥379.00</span>
          <span class="good_count">×1</span>
        </div>
      </div>
    </section>
    <!--统计信息-->
    <section id="totalMsg">
      <div class="inner">
        <div class="row">
          <div class="title">吊牌价</div>
          <div class="content">￥1280.00</div>
        </div>
        <div class="row">
          <div class="title">折扣（5折券）</div>
          <div class="content">-￥640.00</div>
        </div>
        <div class="row">
          <div class="title">配送费用</div>
          <div class="content">+￥0.00</div>
        </div>
      </div>
      <div class="total">
        <div class="buy_title">实付金额：</div>
        <div class="amonut">¥680.00</div>
      </div>
    </section>
    <!--删除订单-->
    <section id = "delOrder">
      <mt-button type="default">删除订单</mt-button>
    </section>
  </div>
</template>
<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
      btnSize: 'small'
    }
  },
  mounted () {
    this.$parent.label = '订单详情'
  },
  methods: {
    toAfterSalePage () {
      this.$router.push('/order/aftersale')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
