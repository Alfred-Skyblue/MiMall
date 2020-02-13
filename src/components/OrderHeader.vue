<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{ title }}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'order-header',
  props: {
    title: String
  },
  computed: {
    // TODO:使用 mapState 简写的方式获取 vuex 属性
    ...mapState(['username'])
  },
  data() {
    return {
      obj: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #f60;
  .header-logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    font-size: 28px;
    float: left;
    color: #333;
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
      font-weight: 200;
    }
    h2 {
      margin-left: 50px;
      font-size: 28px;
      color: 33px;
    }
  }
  .username {
    float: right;
    a {
      color: #666;
      font-size: 16px;
    }
  }
}
</style>
