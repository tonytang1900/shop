<template>
  <div class="w" ref="w">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probetype: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    components: {
      BScroll
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.w, {
        click: true,
        probeType: this.probetype,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll', (postion) => {
        this.$emit('scroll', postion)

      })
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
        this.scroll.finishPullUp()
      })
    },
    methods: {
      scrollTo(x, y ,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }

    }
  }
</script>

<style scoped>

</style>
