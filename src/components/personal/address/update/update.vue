<template>
  <!--收货地址-->
  <div id="AddressUpdate">
    <!--收货地址信息-->
    <section id="addressMsg" @click = "toAreaSelectPage">
      <mt-field label="收货人" placeholder="真实姓名" v-model="userInfo.username"></mt-field>
      <mt-field label="手机号码" placeholder="11为手机号码" type="email" v-model="userInfo.email"></mt-field>
      <mt-field label="收货地址" placeholder="所在地区" v-model="userInfo.area"></mt-field>
    </section>
    <!--保存收货地址-->
    <section id="saveBtn">
      <mt-button type="default">提交</mt-button>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AddressUpdate',
  data () {
    return {
      userInfo: {
        username: '董纪国',
        email: 'dongjiguo2008123@163.com',
        area: '南京.鼓楼区.南京大学.鼓楼校区'
      }
    }
  },
  mounted () {
    this.$parent.label = '新建收货地址'
  },
  methods: {
    toAreaSelectPage () {
      this.$router.push('/address/update/area')
    }
  }
}
</script>
<style  lang="sass">
  @import "./style.scss"
</style>
