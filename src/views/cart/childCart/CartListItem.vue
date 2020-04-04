<template>
  <div class="item">
    <check-box class="checkbox" :is-checked="product.isChecked"
               @click.native="product.isChecked=!product.isChecked"/>
    <img :src="product.image">
    <div class="top-text">
      <div class="top-title">{{product.title}}</div>
      <div class="top-desc">{{product.desc}}</div>
      <div class="bottom-text">
        <span>${{product.price}}</span>
        <span><strong>×</strong>{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckBox from '@/views/cart/childCart/CheckBox'

  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckBox
    }
  }
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    margin-top: 4px;
  }
  .checkbox {
    margin: 4px 4px;
  }
  .item img {
    width: 110px;
  }
  .top-text {
    line-height: 100%;
    align-self: flex-start;
    margin: 6px 6px;
  }
  .top-title {
    border-bottom: 2px solid #bbbbbb;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
  .top-desc{
    border-bottom: 2px solid #bbbbbb;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
  .bottom-text {
    display: flex;
    justify-content: space-between;
    color: var(--color-high-text);
  }

</style>
