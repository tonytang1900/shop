<template>
  <div >
      <div v-for="(item,index) in cartList" :key="index">
        <cart-list-item :product="item"/>
      </div>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>

</style>
