<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
  name: 'order',
  components: {
    NavFooter,
    ServiceBar
  },
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  mounted() {
    let path = this.$route.path
    if (path == '/order/confirm') {
      this.title = '订单确认'
      this.tip = '填写您的详细地址'
    } else if (path == '/order/list') {
      this.title = '订单列表'
      this.tip = '请谨防钓鱼链接或者诈骗电话，了解更多>>'
    } else if (path == '/order/pay') {
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接或者诈骗电话，了解更多>>'
    } else {
      this.title = '支付宝'
      this.tip = '请谨防钓鱼链接或者诈骗电话，了解更多>>'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
