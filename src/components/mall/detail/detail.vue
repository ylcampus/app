<template>
  <!--商品详情页-->
  <div id="GoodsDetail">
    <!--基本信息-->
    <section id="proBasicMSg">
      <!--图片信息-->
      <div class="g_img">
        <img src="https://img.alicdn.com/imgextra/i2/451024527/TB1D0hEl22H8KJjy0FcXXaDlFXa_!!0-item_pic.jpg_960x960Q50s50.jpg_.webp">
        <!--分页-->
        <div class="pagination">
          <span class="current">1</span>/
          <span class="total">1</span>
        </div>
      </div>
      <!--信息-标题、价格、吊牌价-->
      <div class="g_message">
        <h4 class="product_name">美津浓Mizuno 男款减震跑步鞋 预言6 PROPHECY 6 NOVA J1GC171703</h4>
        <p class="points">支付尾款起7天内发货</p>
        <div class="price_msg">
          <div class="row">
            <span class="sale_price">￥640</span>
          </div>
          <div class="row">
            <span class="title">吊牌价</span>
            <span class="tag_price">￥1280</span>
          </div>
          <div class="row">
            <span class="title">折扣</span>
            <span class="title">5折(使用<span class="dark_red">5折券</span>X1)</span>
          </div>
          <div class="row tips">
            <span><span class="dark_red">购买说明：</span>每次购买商品只限制使用<span class="dark">一张</span>打折券，商品销售价格为商品吊牌价乘上打折比率--<span class="dark">1280X0.5=</span><span class="dark_red">640</span>元。</span>
          </div>
        </div>
      </div>
    </section>
    <!--商品SKU信息-->
    <section id="proSKU">
      <div class="row">
        <div class="item">
          <span class="title">SKU-ID</span>
          <span class="dark">3577948572421</span>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <span class="title">颜色</span>
          <span class="dark">湛蓝/银/黑</span>
        </div>
        <div class="item">
          <span class="title">尺码</span>
          <span class="dark">39</span>
        </div>
        <div class="item">
          <span class="title">数量</span>
          <span class="dark">1件</span>
        </div>
      </div>
    </section>
    <!--保障服务-->
    <section id="service">
      <div class="row">
        <div class="title">售后</div>
        <div class="content">
          <span class="item">极速退货</span>
          <span class="item">正品保证</span>
          <span class="item">极速退款</span>
          <span class="item">七天退换</span>
        </div>
      </div>
    </section>
    <!--购买商品-->
    <section id="goodsBuy">
      <div class="address">配送至：南京 鼓楼区 南京大学 鼓楼校区</div>
      <div class="buy_btn">
        <div class="buy_title">应付总额</div>
        <div class="total_price">￥899.00</div>
        <div class="buy_now" @click = "toConfirmPage">立即购买</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'GoodsDetail',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '商品详情'
  },
  methods: {
    toConfirmPage () {
      this.$router.push('/order/confirm')
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./style.scss"
</style>
