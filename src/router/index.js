import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import Register1 from '@/components/register1' // 注册同意
import UserAgreement from '@/components/userAgreement' // 用户协议
import Regbyphone from '@/components/regbyphone' // 通过手机号注册
import 'mint-ui/lib/style.css'
// 重新开始
import Frame from '@/components/main/frame.vue' // 索引页
import Index from '@/components/main/index/index.vue' // 商城主页
import Discount from '@/components/main/discount/discount.vue' // 打折券列表
import Center from '@/components/main/center/center.vue' // 个人中心
import PersonalFrame from '@/components/personal/frame.vue' // 个人中心页头
import Aboutus from '@/components/personal/aboutus/aboutus.vue' // 关于优乐
import Userinfo from '@/components/personal/userinfo/userinfo.vue' // 个人信息
import Address from '@/components/personal/address/address.vue' // 收货地址列表
import UpdateAddress from '@/components/personal/address/update/update.vue' // 新增-编辑收货地址
import Area from '@/components/personal/address/area/area.vue' // 学校选择
import OrderList from '@/components/personal/order/order.vue' // 订单列表
import OrderDetail from '@/components/personal/order/detail/detail.vue' // 订单详情
import AfterSale from '@/components/personal/order/aftersale/aftersale.vue' // 申请售后服务
import Confirm from '@/components/personal/order/confirm/confirm.vue' // 确认订单
import Payment from '@/components/personal/order/payment/payment.vue' // 支付
import Search from '@/components/search/search.vue' // 商品搜索
import MallFrame from '@/components/mall/frame.vue' // 商城模块页头
import GoodsDetail from '@/components/mall/detail/detail.vue' // 商城模块页头
import Brand from '@/components/mall/brand/brand.vue' // 商城主页
import Login from '@/components/iam/login/login.vue' // 用户登录
Vue.use(Router)
// 导入MintUI
Vue.use(Mint)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register1',
      name: 'register1',
      component: Register1
    },
    {
      path: '/userAgreement',
      name: 'userAgreement',
      component: UserAgreement
    },
    {
      path: '/regbyphone',
      name: 'regbyphone',
      component: Regbyphone
    },
    { // 优乐商城主模块
      path: '/frame',
      name: 'frame',
      component: Frame,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/discount',
          name: 'discount',
          component: Discount
        },
        {
          path: '/center',
          name: 'center',
          component: Center
        }
      ]
    },
    { // 个人中心
      path: '/personalFrame',
      name: 'personalFrame',
      component: PersonalFrame,
      children: [
        {
          path: '/aboutus',
          name: 'aboutus',
          component: Aboutus
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: Userinfo
        },
        {
          path: '/address',
          name: 'address',
          component: Address
        },
        {
          path: '/address/update',
          name: 'updateAddress',
          component: UpdateAddress
        },
        {
          path: '/address/update/area',
          name: 'area',
          component: Area
        },
        {
          path: '/order',
          name: 'order',
          component: OrderList
        },
        {
          path: '/order/detail',
          name: 'orderDetail',
          component: OrderDetail
        },
        {
          path: '/order/aftersale',
          name: 'afterSale',
          component: AfterSale
        },
        {
          path: '/order/confirm',
          name: 'confirm',
          component: Confirm
        },
        {
          path: '/order/payment',
          name: 'payment',
          component: Payment
        }
      ]
    },
    { // 商品搜索页面
      path: '/search',
      name: 'search',
      component: Search
    },
    { // 商城模块
      path: '/mallFrame',
      name: 'mallFrame',
      component: MallFrame,
      children: [
        {
          path: '/detail',
          name: 'detail',
          component: GoodsDetail
        },
        {
          path: '/brand',
          name: 'brand',
          component: Brand
        }
      ]
    }
  ]
})
