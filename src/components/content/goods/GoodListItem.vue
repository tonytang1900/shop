<template>
  <div class="good-item">
    <img :src="goodsItem.show.img" @load="imageLoad"/>
    <div class="good-info">
      <p>{{getTitle }}</p>
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
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$Bus.$emit('itemImageLoad')
      }
    },
    computed: {
      getTitle(){
        return this.goodsItem.title.slice(0,20)
      }
    }
  }
</script>

<style scoped>
  .good-item {
    flex-grow: 1;
    width: 150px;
  }
  .good-item img {
    width: 90%;
    border-radius: 5%;
  }
  .good-info {
    width: 90%;
    text-align: left;
    margin-left: 10px;
    color: var(--color-tint);
  }
</style>
