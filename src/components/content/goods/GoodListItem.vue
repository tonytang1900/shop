<template>
  <div class="good-item">
    <img v-lazy="imgUrl" @load="imageLoad" @click="itemClick" alt=""/>
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
      },
      itemClick(){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
    computed: {
      getTitle(){
        return this.goodsItem.title.slice(0,20)
      },
      imgUrl(){
        return this.goodsItem.show ? this.goodsItem.show.img : this.goodsItem.item_url
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
