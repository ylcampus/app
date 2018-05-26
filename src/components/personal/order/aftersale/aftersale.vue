<template>
  <!--订单列表-->
  <div id="AfterSale">
    <!--服务类型-->
    <section id="serviceType">
      <div class="type">服务类型</div>
      <div class="inner">
        <div class="item active">退货</div>
        <div class="item">换货</div>
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
    <!--问题描述-->
    <section id="questionDesc">
      <div class="title">问题描述</div>
      <div class="textarea-wrapper">
        <textarea placeholder="请您在此描述问题" maxlength="500" autocomplete="off" cols="" rows="" oninput="keyUpDesc()"></textarea>
        <div class="count"><span>0</span>/500</div>
      </div>
    </section>
    <!--寄回地址-->
    <section id="backAddress">
      <div class="title">寄回地址</div>
      <div class="content">
        <div class="row">
          <div class="title">联系人</div>
          <div class="detail">董纪国</div>
        </div>
        <div class="row">
          <div class="title">联系电话</div>
          <div class="detail">18205185737</div>
        </div>
        <div class="row">
          <div class="title">回寄地址</div>
          <div class="detail">江苏省南京市栖霞区南京大学仙林校区（南大创业园310室）</div>
        </div>
      </div>
    </section>
    <!--提交信息-->
    <section id="submitMsg">
      <div class="tip">提交服务单后，售后专员可能与您电话沟通，请保持手机畅通</div>
      <div class="submit">
        <mt-button type="danger">提交</mt-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Brand',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '申请售后服务'
  },
  methods: {}
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
