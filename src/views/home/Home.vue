<template>
  <div id="home">
    <nav-bar class="home-nav"/>

    <tab-control :titles="['流行','新款','精选']" ref="tabControl1"
                 class="tab-control"
                 @tabClick="tabTouch" v-show="isTabFixed"/>
    <scroll class="content" ref="s"
            :probetype="3"
            :pull-up-load="true"
            @scroll="contentscroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommend="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" ref="tabControl2"
                   class="tab-control"
                   @tabClick="tabTouch"/>
      <goods :goods="goods[currentType].list"/>
    </scroll>

    <back-top class="backtop"
              @click.native="backtop" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'

  import HomeSwiper from './childcomponents/HomeSwiper'
  import RecommendView from './childcomponents/Recommend'
  import FeatureView from './childcomponents/FeatureView'
  import TabControl from '@/components/content/tabcontrol/TabControl'
  import Goods from '@/components/content/goods/Goods'
  import BackTop from '@/components/content/backtop/BackTop'

  import {getHomeGoods, getHomeMultidata} from "@/network/home";
  import {debounce} from "@/common/utils";

  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      Goods,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow: false,
        tabOffsetTop: 0,
        isTabFixed: false
      }
    },
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      const refresh = debounce(this.$refs.s.refresh)

      //防抖动
      this.$Bus.$on('itemImageLoad', ()=>{
        // this.$refs.s.scroll.refresh()
        refresh()
      })
    },
    methods: {
      /*事件监听*/
      tabTouch(index) {
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backtop(){
        this.$refs.s.scrollTo()
      },
      contentscroll(position){
        //右下角 向上箭头 是否显示
        this.isShow = (-position.y) > 1000

        //判断吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /*网络请求*/
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {

        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page = page + 1
          
          console.log(res)
          this.$refs.s.finishPullUp()
        })
      }
    },
    activated() {
    },
    deactivated() {
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }

  .tab-control {
    position: sticky;
    top: 44px
  }

  .active {
    display: none;
  }


  /*.fixed {*/
  /*  position: fixed;*/
  /*  top: 70px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/
</style>
