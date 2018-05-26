<template>
  <!--收货地址-->
  <div id="Address">
    <!--收货地址信息-->
    <section id="addressMsg">
      <div class="title">
        <span class="newBtn" @click = "toUpdatePage">编辑</span>
      </div>
      <div class="content">
        <div class="userMsg">
          <div class="name">董纪国</div>
          <div class="phone">18205185737</div>
        </div>
        <div class="address">江苏省.南京市.鼓楼区.南京大学.鼓楼校区</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Address',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '收货地址'
  },
  methods: {
    toUpdatePage () { // 到收货地址更新页面
      this.$router.push('/address/update')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
