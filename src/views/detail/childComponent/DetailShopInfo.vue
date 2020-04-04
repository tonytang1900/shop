<template>
  <div>
    <div class="shoplogo">
      <span><img :src="shopinfo.shopLogo"></span>
      <span>{{shopinfo.name}}</span>
    </div>
    <div class="shopdetail">
      <div class="wordalign">
        <div class="shop-left">{{shopinfo.cSells}}</div>
        <div>总销量</div>
      </div>
      <div class="wordalign">
        <div class="shop-middle">{{shopinfo.cGoods}}</div>
        <div>全部宝贝</div>
      </div>
      <div>
        <table cellspacing="5px">
          <tr v-for="(item,index) in shopinfo.score">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td v-if="item.isBetter" class="red">高</td>
            <td v-else class="green">低</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopinfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shoplogo {
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    margin-top: 20px;
  }

  .shoplogo span {
    align-self: center;
  }

  .shoplogo span:nth-child(2) {
    margin-left: 10px;
  }

  .shoplogo img {
    width: 60px;
    height: 60px;
  }

  .shopdetail {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 10px;
    border-bottom: solid 6px #eeeeee;
    padding-bottom: 20px;
  }

  .shop-left {
    margin-bottom: 20px;
  }

  .shop-middle {
    margin-bottom: 20px;
  }

  .wordalign {
    text-align: center;
  }

  .red {
    background-color: var(--color-high-text);
  }

  .green {
    background-color: lightgreen;
  }
</style>
