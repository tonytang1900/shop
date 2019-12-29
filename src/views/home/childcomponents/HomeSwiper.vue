<template>
    <div>
      <el-carousel :autoplay="true" :height="'160px'">
        <el-carousel-item v-for="item in banners">
          <a :href="item.link"><img :src="item.image" width="375px"></a>
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
      }
    }
</script>

<style scoped>

</style>
