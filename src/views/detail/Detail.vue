<template>
  <div id="detail">
    {{$store.state.cartlist[0] && $store.state.cartlist[0].count}}
    <detail-nav-bar class="detailnavbar" @itemClicked="itemClicked" ref="navbar"/>
    <scroll class="content" ref="scroll" @scroll="detailContentScroll">
      <detail-swiper :images="topImages"/>
      <detail-goods-info :goodsinfo="goodsInfo"/>
      <detail-shop-info :shopinfo="shopInfo"/>
      <detail-goods-desc ref="desc" :goodsdesc="goodsDesc" @imgloaded="imgLoad"/>
      <detail-goods-comments ref="comments" :goodscomments="comments"/>
      <detail-goods-list ref="goodslist" :goods="goods['pop'].list"/>
    </scroll>
    <detail-bottom-bar  @addToCart="addToCart"/>
    <back-top @click.native="backtop" v-show="isShow"/>
<!--    <toast v-show="isShowOfToast" :msg="'添加商品'"/>-->
  </div>
</template>

<script>
  import DetailNavBar from './childComponent/DetailNavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import DetailSwiper from '@/views/detail/childComponent/DetailSwiper'
  import DetailGoodsInfo from '@/views/detail/childComponent/DetailGoodsInfo'
  import DetailShopInfo from '@/views/detail/childComponent/DetailShopInfo'
  import DetailGoodsDesc from '@/views/detail/childComponent/DetailGoodsDesc'
  import DetailGoodsComments from '@/views/detail/childComponent/DetailGoodsComments'
  import DetailGoodsList from '@/components/content/goods/Goods'
  import DetailBottomBar from '@/views/detail/childComponent/DetailBottomBar'
  import BackTop from '@/components/content/backtop/BackTop'
  // import Toast from '@/views/detail/childComponent/Toast'


  // import {detailGoTop} from '@/common/mixins'
  //注意 大括号{}， 否则出不是函数的错误
  import {getGoodDetail, getGoodsRecommend, GoodsComments, GoodsInfo, ShopInfo} from '@/network/detail'
  import {getHomeGoods} from '@/network/home'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        goodsDesc: {},
        comments: {},
        goodsRecommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        themeTopYs: [],
        index: 0,
        isShow: false,
        isShowOfToast: false
      }
    },
    // mixins: [detailGoTop],
    components: {
      DetailNavBar,
      Scroll,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailGoodsDesc,
      DetailGoodsComments,
      DetailGoodsList,
      DetailBottomBar,
      BackTop
      // Toast
    },
    created() {
      this.iid = this.$route.params.iid

      getGoodDetail(this.iid).then(res => {
        this.topImages = res.data.result.itemInfo.topImages

        // console.log(res.data);
        let data = res.data.result
        this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.goodsDesc = data.detailInfo

        this.comments = new GoodsComments(data.rate.list)
      })
      getGoodsRecommend().then(res => {
        this.goodsRecommends = res.data.data.list
        console.log(this.goodsRecommends);
        console.log(this.goodsInfo);
      })
      this.getHomeGoods('pop')
    },
    methods: {
      imgLoad() {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.desc.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
        this.themeTopYs.push(this.$refs.goodslist.$el.offsetTop)

        this.$refs.scroll && this.$refs.scroll.refresh()
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...(res.data && res.data.data.list))
          this.goods[type].page = page + 1
        })
      },
      itemClicked(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
      },
      detailContentScroll(position) {
        //右下角 向上箭头 是否显示
        this.isShow = (-position.y) > 1000
        // this.showLogo(position)
        // console.log(position);
        switch (true) {
          case -position.y > this.themeTopYs[0] && -position.y < this.themeTopYs[1]:
            this.index = 0
            break
          case -position.y > this.themeTopYs[1] && -position.y < this.themeTopYs[2]:
            this.index = 1
            break
          case -position.y > this.themeTopYs[2] && -position.y < this.themeTopYs[3]:
            this.index = 2
            break
          case -position.y > this.themeTopYs[3]:
            this.index = 3
                break

        }
        this.$refs.navbar.currentIndex = this.index
      },
      backtop() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      },
      addToCart(){
        const product = {}
        product.price = this.goodsInfo.highNowPrice
        product.image = this.topImages[0]
        product.title = this.goodsInfo.title
        product.desc = this.goodsDesc.desc
        product.iid = this.iid
        product.isChecked = true
        // product.count = 0
        // this.$store.commit('addToCart', product)
        this.$store.dispatch('addToCart', product).then(res => {
          console.log(res);
          // this.isShowOfToast = true
          // setTimeout(() => {
          //   this.isShowOfToast = false
          // }, 2000)
          this.$toast.show('test', 2000)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 99;
  }

  .detailnavbar {
    position: relative;
    z-index: 10;
    background-color: var(--color-background);
  }

  .content {
    height: calc(100% - 93px);
    overflow: hidden;
    background-color: #fff;
  }
</style>
