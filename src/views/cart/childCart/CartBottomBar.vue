<template>
  <div class="cart-bottom-bar">
    <div class="left">
      <check-box class="checkbox" :is-checked="atLeastOneChecked" @click.native="checkChange"/>
      <span>全选</span>
    </div>
    <div class="totalprice">合计：${{totalPrice.toFixed(2)}}</div>
    <div class="gocheck">去结算({{countToChecked}})</div>
  </div>
</template>

<script>
  import CheckBox from '@/views/cart/childCart/CheckBox'

  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckBox
    },
    computed: {
      ...mapGetters(['cartList']),
      atLeastOneChecked() {
        if (this.cartList.filter(item => item.isChecked).length === 0){
          return false
        }
        return this.cartList.filter(item => item.isChecked).length === this.cartList.length
      },
      totalPrice() {
        return this.cartList
          .filter(item => item.isChecked)
          .reduce((acc, item) => acc + parseFloat(item.price) * item.count, 0)
      },
      countToChecked() {
        return this.cartList.filter(item => item.isChecked).length
      }
    },
    methods: {
      checkChange() {
        let countTotal = this.cartList.length
        if (this.countToChecked < countTotal) {
          return this.cartList.map(product => product.isChecked = true)
        }
        if (this.countToChecked === countTotal) {
          return this.cartList.map(product => product.isChecked = false)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    /*line-height: 40px;*/
    background-color: #eeeeee;
  }

  .left {
    display: flex;
    align-items: center;
    margin-left: 4px;
    width: 100px;
  }

  .left span {
    margin-left: 4px;
  }

  .totalprice {
    width: 150px;
  }

  .gocheck {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: #f6f6f6;
    align-self: stretch;
  }
</style>
