<template>
  <div v-if="Object.keys(goodsinfo).length!==0" class="info">
    <div id="title">{{goodsinfo.title}}</div>
    <div id="price">
      <span>${{goodsinfo.highNowPrice}}</span>
      <span>${{goodsinfo.highPrice}}</span>
      <span :style="{backgroundColor: goodsinfo.discountBgColor}">{{goodsinfo.discountDesc}}</span>
    </div>
    <div class="services">
      <span>{{goodsinfo.columns[0]}}</span>
      <span>{{goodsinfo.columns[1]}}</span>
      <span>{{goodsinfo.services[goodsinfo.services.length-1].name}}</span>
    </div>
    <div class="commitment">
      <span v-for="index in goodsinfo.services.length-1" class="commit">
        <img :src="goodsinfo.services[index-1].icon"/> &nbsp;
        <span>{{goodsinfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsinfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info {
    position: relative;
    width: 95%;
    margin: auto;
  }

  #title {
    font-weight: bold;
    margin-top: 8px;
  }

  #price {
    position: relative;
    margin-top: 10px;
    color: var(--color-text);
  }

  #price span:nth-child(1) {
    font-size: 20px;
    color: var(--color-high-text);
  }

  #price span:nth-child(2) {
    margin-left: 6px;
    text-decoration-line: line-through;
  }

  #price span:nth-child(3) {
    position: absolute;
    margin-left: 6px;
    margin-top: -10px;
    font-size: 20px;
    border-radius: 20px;
    padding: 4px 4px;
    color: var(--color-background);
  }

  .services {
    display: flex;
    justify-content: space-between;
    text-align: center;
    border-bottom: solid 4px #eee;

    margin-top: 20px;
    padding-bottom: 10px;
  }

  .services span {
    flex: 1;
  }

  .services span:nth-child(1) {
    text-align: left;
  }

  .services span:nth-child(3) {
    text-align: right;
  }

  .commitment {
    display: flex;
    height: 30px;
    margin-top: 20px;
    border-bottom: solid 4px #eee;
    padding-bottom: 20px;
    font-size: 14px;
  }
  .commitment span {
    flex: 1;
    align-self: center;
  }

  .commitment img {
    width: 18px;
    height: 18px;
  }

</style>
