<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="service icon"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="shop icon"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="fav icon"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    height: 58px;
    position: fixed;
    background-color: #ffffff;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 999;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-left>div {
    flex: 1;
    margin: auto auto;
  }
  .bar-left .text{
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
    margin: 0 auto;
  }
  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .shop {
    background-position: 0 -98px;
  }
  .bar-right {
    font-size: 15px;
    color: #ffffff;
    line-height: 58px;
  }
  .bar-right .cart {
    flex: 1;
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    flex: 1;
    background-color: #ff6699;
  }
</style>
