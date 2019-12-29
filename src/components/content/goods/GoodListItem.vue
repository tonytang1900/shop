<template>
    <div class="good-item">
      <img :src="goodsItem.show.img" />
      <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodListItem",
      props: {
          goodsItem: {
            type: Object,
            default(){
              return {}
            }
          }
      },
      methods: {
          print(){
            console.log(this.goodsItem);
          }
      }
    }
</script>

<style scoped>
  .good-item {
    position: relative;
    height: 100px;
    width: 150px;
  }
</style>
