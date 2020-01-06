<template>
    <div class="goods">
      <good-list-item v-for="item in goods" :goodsItem="item"/>
    </div>
</template>

<script>
  import GoodListItem from '@/components/content/goods/GoodListItem'

    export default {
        name: "Goods",
      props: {
          goods: {
            type: Array,
            default(){
              return []
            }
          }
      },
      components: {
          GoodListItem
      }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
</style>
