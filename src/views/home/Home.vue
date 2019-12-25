<template>
    <div>
      <nav-bar class="home-nav"></nav-bar>
      <el-carousel>
        <el-carousel-item v-for="item in banners" >
          <a :href="item.link"><img :src="item.image"></a>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import {getHomeMultidata} from "@/network/home";

  // import {ElCarousel, ElCarouselItem} from 'element-ui'

  export default {
        name: "Home",
      components: {
        NavBar
        // ElCarousel,
        // ElCarouselItem
      },
    data(){
          return {
            banners: [],
            recommends: []
          }
    },
    created() {
          getHomeMultidata().then(res => {
            console.log(res.data);
            this.banners = res.data.data.banner;
            console.log(this.banners)
            this.recommends = res.data.data.recommend;
            console.log(this.recommends)

          })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
