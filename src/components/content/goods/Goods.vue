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
    flex-wrap: wrap;
    justify-content: space-around;

  }
</style>
