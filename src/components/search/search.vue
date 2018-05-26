<template>
  <div id="Search">
    <!--搜索框-->
    <section id="breadcrumb">
      <div class="header">
        <a id="btn-back" href="javascript:history.go(-1);"></a>
        <div class="search-input">
          <input  name="keyword" id="keyword" type="text" placeholder="HUAWEI P20 荣耀V10 " maxlength="200">
          <i class="search-clear"></i>
        </div>
        <div class="searchTxt" @click="toGoodsDetailPage">搜索</div>
      </div>
    </section>
    <!--搜索方法提示-->
    <section id="tips">
      <div class="title">
        <h4>温馨提示：</h4>
        <p class="txt">
          注意,设为 Flex 布局以<span id="mall"><a href="https://www.tmall.com" target="_blank">美津浓旗舰店</a></span>后,子元素的float、clear和vertical-align属性将失效。 二、基本概念 采用Flex 布局的元素,称为 Flex 容器(flex container),简称"容器"
        </p>
      </div>
    </section>
    <!--图文详情-->
    <section id="graphic">
      <label class="title">图文详情</label>
      <div class="detail">
        <p class="desc">
          <img src="https://haitao.nosdn1.127.net/1c5liapsq14_710_1004.jpg?imageView&thumbnail=750x0&quality=75&type=webp">
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    toGoodsDetailPage () {
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./style.scss"
</style>
