<template>
  <!--收货地址选择-->
  <div id="Area">
    <!--tabs标签-->
    <section id="tabs">
      <div class="area">
        <span class="item">江苏省</span>
        <span class="item highlight">南京市</span>
        <span class="item active">南京大学</span>
      </div>
      <div class="list">
        <div class="row">鼓楼校区</div>
        <div class="row selected">仙林校区</div>
        <div class="row">浦口校区</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Area',
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
