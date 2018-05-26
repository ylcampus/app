<template>
  <!--关于我们-->
  <div id="AboutUs">
    <!--描述信息-->
    <section id="desMsg">
      <p class="desc">
        <img src="https://haitao.nos.netease.com/414c0f21-b425-40c8-965e-1bb66c360c82.jpg?imageView&type=webp&thumbnail=750x0&quality=95&">
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '关于优乐'
  },
  methods: {}
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
