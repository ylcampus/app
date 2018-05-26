<!--优乐商城移动端主模块索引页-->
<template>
  <div id="IDX">
    <!--页头-->
    <section id="idxHeader">
      <div class="logo">
        <span class="mall_name">优乐商城</span>
      </div>
      <div class="search">
        <div class="search_input">
          <a href="/index"><input id="keyword" type="text" placeholder="请输入商品SUKID" maxlength="200"></a>
        </div>
      </div>
      <div class="login" @click = "toLoginPage">
        <i class="center-icon"></i>
      </div>
    </section>
    <!--路由-->
    <router-view/>
    <!--页脚-->
    <section id="idxFooter">
      <mt-tabbar v-model="activePage" @click = "togglePage()">
        <mt-tab-item id="index">
          <img slot="icon" src="../../assets/frame/my_order_daifukuan@3x.png">
          <span>首页</span>
        </mt-tab-item>
        <mt-tab-item id="discount">
          <img slot="icon" src="../../assets/frame/my_order_daipinlun@3x.png">
          <span>打折券</span>
        </mt-tab-item>
        <mt-tab-item id="center">
          <img slot="icon" src="../../assets/frame/my_order_tuikuan@3x.png">
          <span>我的</span>
        </mt-tab-item>
      </mt-tabbar>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Frame',
  data () {
    return {
      activePage: 'home'
    }
  },
  watch: {
    activePage (val) { // 路由跳转
      let path = '/' + val
      this.$router.push(path)
    }
  },
  mounted () {
  },
  methods: {
    toLoginPage () {
      this.$router.push('/login')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
