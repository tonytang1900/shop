<template>
  <div class="goodsdesc" v-if="Object.keys(goodsdesc).length!==0">
    <div class="desc">{{goodsdesc.desc}}</div>
    <hr/>
    <div class="descdetail">
      <h4 class="desckey">{{goodsdesc.detailImage[0].key}}</h4>
      <div v-for="item in goodsdesc.detailImage[0].list"><img :src="item" @load="imgLoad"/></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsDesc",
    props: {
      goodsdesc: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return {
        counter: 0,
        imgLength: 0,
      }
    },
    methods: {
      imgLoad(){
        if(++this.counter === this.imgLength){
          this.$emit('imgloaded')
        }
      }
    },
    watch: {
      goodsdesc(){
        this.imgLength = this.goodsdesc.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goodsdesc {
    width: 95%;
    margin: auto;
    border-bottom: solid 6px #eeeeee;
  }

  .descdetail {
    margin: 20px auto;
  }

  .desckey {
    margin: 10px auto;
  }

  .descdetail img {
    width: 100%;
  }
</style>
