<template>
  <div id="PersonalFrame">
    <!--页头-->
    <section id="PersonalFrameHeader">
      <a id="btn-back" href="javascript:history.go(-1);"></a>
      <h1 id="pageTitle">{{label}}</h1>
    </section>
    <!--路由-->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'PersonalFrame',
  data () {
    return {
      label: '关于优乐'
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
