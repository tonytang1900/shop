import BackTop from '@/components/content/backtop/BackTop'

export const detailGoTop = {
  data() {
    return {
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    //滚动回到顶部
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    //监听位置信息，以决定是否显示图标
    showLogo(position){
      this.isShow = (-position.y) > 1000
    }
  }
}
