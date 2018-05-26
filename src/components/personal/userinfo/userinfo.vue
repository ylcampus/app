<template>
  <!--用户信息-->
  <div id="UserInfo">
    <section id="userMsg">
      <mt-cell title="账号" value="yd.9eec053043e34289a@163.com"></mt-cell>
      <mt-cell title="我的手机号" value="182****5737"></mt-cell>
    </section>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '个人基本信息'
  },
  methods: {}
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
