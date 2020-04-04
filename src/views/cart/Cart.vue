<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{len}})</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import CartList from '@/views/cart/childCart/CartList'
  import CartBottomBar from '@/views/cart/childCart/CartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters({
        len: 'lenOfCartList'
      })
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .navbar {
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
    z-index: 99;
  }
  .left {
    padding-top: 10px;
    background-color: #fff;
  }
  .left img {
    width: 30px;
    height: 30px;
  }
  .scroll {
    height: calc(100% - 93px - 40px);
    overflow: hidden;
  }
</style>
