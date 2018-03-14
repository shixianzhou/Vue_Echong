<template>
  <div class="E_footer">
    <router-link  to="/home" class="E_footer_tab">
      <span>
        <i class="iconfont icon-store"></i>
      </span>
      <span>首页</span>
    </router-link>
    <router-link  to="/type" class="E_footer_tab">
      <span>
        <i class="iconfont icon-viewgallery"></i>
      </span>
      <span>分类</span>
      </router-link>
    <router-link  to="/shop" class="E_footer_tab">
      <span>
        <i class="iconfont icon-cart"></i>
      </span>
      <span>购物车</span>
    </router-link>
    <router-link  to="/user" class="E_footer_tab">
      <span>
        <i class="iconfont icon-account"></i>
      </span>
      <span>我的E宠</span>
    </router-link>
  </div>
</template>
<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.E_footer
  width 100%
  height 55px
  background-color: white;
  display flex
  align-items center
  justify-content center
  position fixed
  bottom 0
  .E_footer_tab
    display flex
    align-items center
    justify-content space-around
    flex-direction column
    width 25%
    height 100%
    >span
      font-size 12px
      margin 2px 0
      .iconfont
        font-size 20px
</style>
