<template>
  <div id="Brand">
    <div class="brandinfo">
      <img class="tripimg" src="//haitao.nos.netease.com/io9cry2d63_960_480.jpg?imageView&amp;thumbnail=640x0&amp;quality=95&amp;">
      <div class="info f-cb">
        <table>
          <tbody><tr>
            <td class="logobox">
              <div class="logocase"><img src="//haitao.nos.netease.com/io9crccz88_120_120.jpg?imageView&amp;thumbnail=120x120&amp;quality=95&amp;" class="logo"></div>
              <div class="brandnamebox">
                <div><span class="brandname">Mizuno 美津浓</span></div>
                <div><span class="saledesc">在售商品<span class="onsalecount f-fwb">615</span>个</span></div>
              </div>
            </td>
            <td class="favbox">
              <div class="fbox">
                <div class="m-fav " id="favbtn">
                  <span class="btn favbtn"></span>
                  <span class="btn btn-1 unfavbtn"></span>
                </div>
                <div>
                  <div class="favcount">关注</div>
                  <div class="favcountnum" style="display:none;">
                    <span class="favcount_value">3942</span>人关注
                  </div>
                </div>
              </div>
            </td>
          </tr>
          </tbody></table>
      </div>
      <!---->
      <div class="brand">
        <div class="title"><img src="//haitao.nos.netease.com/a87daf760be0415494512c6759c3d9fa1419662354212i46mb76q10002.png?imageView&amp;thumbnail=30x30&amp;quality=95&amp;"><span class="country">JPN 日本 </span></div>
        <div class="m-detailshort">
          <div class="detailshort detailshort-1" id="detailshort">
            美津浓（Mizuno），是日本美津浓株式会社于1906年创立的运动品牌，经过一个多世纪的不断努力现已成为世界的运动器具、服装和鞋类生产商。美津浓力求服务于各类运动项目，并竭力使运动生活更加愉快和振奋。
          </div>
          <div class="detailshort detailshort-2" id="detailshortExt">
            美津浓（Mizuno），是日本美津浓株式会社于1906年创立的运动品牌，经过一个多世纪的不断努力现已成为世界的运动器具、服装和鞋类生产商。美津浓力求服务于各类运动项目，并竭力使运动生活更加愉快和振奋。产品种类齐全，覆盖几乎全部主要运动项目，达到30万多个品类。产品开发坚持以广泛的科学研究为基础，确保运动是更加舒适安全，同时坚信科技与人类感性结合起来，才能创造完美的品质。
          </div>
        </div>
        <div class="f-tac morebtn">
          <span class="act u-descopen" id="descact"></span>
        </div>
      </div>
    </div>
    <div id="j-stickybar-wrap">
      ddd
    </div>
  </div>
</template>
<script>
export default {
  name: 'Brand',
  data () {
    return {}
  },
  mounted () {
    this.$parent.label = '美津浓官方体验店'
  }
}
</script>
<style scoped lang="sass">
  @import "./style.scss"
</style>
