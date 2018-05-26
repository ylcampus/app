<!--我的打折券-->
<template>
  <div id="DisCount">
    <!--打折券列表-->
    <section id="disCountList">
      <div class="row" @click="toSearchPage">
        <div class="img">
          <img src="../../../assets/index/discount/dis_c.png">
        </div>
        <div class="content">
          <div class="mall_name">
            ASICS官方体验店
          </div>
          <div class="limit">
            <div class="item">期限：永久有效</div>
            <div class="item">适用范围：全品类</div>
          </div>
        </div>
        <div class="opa">立即使用</div>
      </div>
      <div class="row" @click="toSearchPage">
        <div class="img">
          <img src="../../../assets/index/discount/dis_d.png">
        </div>
        <div class="content">
          <div class="mall_name">
            ASICS官方体验店
          </div>
          <div class="limit">
            <div class="item">期限：永久有效</div>
            <div class="item">适用范围：全品类</div>
          </div>
        </div>
        <div class="opa">立即使用</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Discount',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    toSearchPage () {
      this.$router.push('/search')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
