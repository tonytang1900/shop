<template>
    <div id="home">
      <nav-bar class="home-nav" />
      <home-swiper :banners="banners" />
      <recommend-view :recommend="recommends"/>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabTouch"/>
      <goods :goods="goods[currentType].list" />


      <ul>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>

      </ul>
    </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  import HomeSwiper from './childcomponents/HomeSwiper'
  import RecommendView from './childcomponents/Recommend'
  import FeatureView from './childcomponents/FeatureView'
  import TabControl from '@/components/content/tabcontrol/TabControl'
  import Goods from '@/components/content/goods/Goods'

  import {getHomeMultidata, getHomeGoods} from "@/network/home";


  export default {
    name: "Home",
    components: {
        FeatureView,
        NavBar,
        HomeSwiper,
        RecommendView,
        TabControl,
        Goods
      },
    data(){
          return {
            banners: [],
            recommends: [],
            goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []}
            },
            currentType: 'pop'
          }
    },
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
          /*事件监听*/
      tabTouch(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
                break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
          /*网络请求*/
          getHomeMultidata(){
            getHomeMultidata().then(res => {
              this.banners = res.data.data.banner.list;
              this.recommends = res.data.data.recommend.list;
            })
          },
          getHomeGoods(type){

            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res=>{
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page = page + 1
            })
          }
    }
  }
</script>

<style scoped>
  .tab-control {
    position: sticky;
    top: 44px
  }

  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>
