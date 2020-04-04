<template>
  <div>
    <el-carousel :autoplay="true">
      <el-carousel-item v-for="item in images">
        <img :src="item" alt="pictures"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "DetailSwiper",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
