<!--商城主页-->
<template>
  <div id="Index">
    <!--滚动窗-->
    <section id="Swipe">
      <mt-swipe :auto="5000">
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180328161526478.png"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180330115705340.png"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180329233157838.png"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180330115404847.png"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180330160856530.png"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180327230911786.png"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//sale/2018-03/20180327114418277.png"></mt-swipe-item>
      </mt-swipe>
    </section>
    <!--品牌列表-->
    <section id="brandList">
      <div class="row" @click = "toBrandPage">
        <div class="header">
          <div class="mall">
            <span class="mall_name">ASICS旗舰店</span>
          </div>
          <div class="num">折扣券-本月剩余20张</div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="logo">
              <img src="../../../assets/index/logo/asics.jpg" >
            </div>
            <div class="detail">
              <div class="time">折扣券发售时间：每周一24:00:00</div>
              <div class="sku_coll">期限：永久有效</div>
              <div class="sku_coll">适用范围：全品类</div>
            </div>
          </div>
          <div class="enter">
            <div class="btn">进入品牌</div>
          </div>
        </div>
      </div>
      <div class="row" @click = "toBrandPage">
        <div class="header">
          <div class="mall">
            <span class="mall_name">ASICS旗舰店</span>
          </div>
          <div class="num">折扣券-本月剩余20张</div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="logo">
              <img src="../../../assets/index/logo/underma.jpg" >
            </div>
            <div class="detail">
              <div class="time">折扣券发售时间：每周一24:00:00</div>
              <div class="sku_coll">期限：永久有效</div>
              <div class="sku_coll">适用范围：全品类</div>
            </div>
          </div>
          <div class="enter">
            <div class="btn">进入品牌</div>
          </div>
        </div>
      </div>
      <div class="row" @click = "toBrandPage">
        <div class="header">
          <div class="mall">
            <span class="mall_name">ASICS旗舰店</span>
          </div>
          <div class="num">折扣券-本月剩余20张</div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="logo">
              <img src="../../../assets/index/logo/flile.jpg" >
            </div>
            <div class="detail">
              <div class="time">折扣券发售时间：每周一24:00:00</div>
              <div class="sku_coll">期限：永久有效</div>
              <div class="sku_coll">适用范围：全品类</div>
            </div>
          </div>
          <div class="enter">
            <div class="btn">进入品牌</div>
          </div>
        </div>
      </div>
      <div class="row" @click = "toBrandPage">
        <div class="header">
          <div class="mall">
            <span class="mall_name">ASICS旗舰店</span>
          </div>
          <div class="num">折扣券-本月剩余20张</div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="logo">
              <img src="../../../assets/index/logo/mizuno.jpg" >
            </div>
            <div class="detail">
              <div class="time">折扣券发售时间：每周一24:00:00</div>
              <div class="sku_coll">期限：永久有效</div>
              <div class="sku_coll">适用范围：全品类</div>
            </div>
          </div>
          <div class="enter">
            <div class="btn">进入品牌</div>
          </div>
        </div>
      </div>
      <div class="row" @click = "toBrandPage">
        <div class="header">
          <div class="mall">
            <span class="mall_name">ASICS旗舰店</span>
          </div>
          <div class="num">折扣券-本月剩余20张</div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="logo">
              <img src="../../../assets/index/logo/suonikang.jpg" >
            </div>
            <div class="detail">
              <div class="time">折扣券发售时间：每周一24:00:00</div>
              <div class="sku_coll">期限：永久有效</div>
              <div class="sku_coll">适用范围：全品类</div>
            </div>
          </div>
          <div class="enter">
            <div class="btn">进入品牌</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    toBrandPage () {
      this.$router.push('/brand')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
