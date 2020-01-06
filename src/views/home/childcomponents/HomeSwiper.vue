<template>
    <div>
      <el-carousel :autoplay="true" :height="'160px'">
        <el-carousel-item v-for="item in banners">
          <a :href="item.link"><img :src="item.image" @load="swiperImageLoad"></a>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
      props: {
          banners: {
            type: Array,
            default(){
              return []
            }
          }
      },
      data(){
        return {
          isLoad:false
        }
      },
      methods: {
        swiperImageLoad(){
          if(!this.isLoad){
            this.$emit('swiperImageLoad')
            this.isLoad = true
          }
        }
      }
    }
</script>

<style scoped>
  div img {
    width: 100%;
  }
</style>
