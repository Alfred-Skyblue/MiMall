<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">远方的首页</a><span>|</span>
      <a href="javascript:;">Vue全家桶</a><span>|</span>
      <a href="javascript:;">javascript基础</a><span>|</span>
      <a href="javascript:;">nodejs</a>
    </div>
    <div class="copyright">Copyright © 2018 <span class="daomai">mi.51purse.com</span> All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name:'nav-footer'
}
</script>

<style lang="scss" scoped>
.footer{
  height: 234px;
  border-top: 4px solid #f60;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin: 46px 0 31px 0;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    margin-bottom: 13px;
    a{
      color: #999;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
  }
  .copyright{
    .daomai{
      color: #f60;
      cursor: pointer;
    }
  }
}
</style>