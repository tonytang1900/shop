<template>
  <div id="detailnavbar">
    <nav-bar>
      <div slot="left" @click="backGoClick">
        <img class="backgo" src="@/assets/img/backgo/backgo.jpg">
      </div>
      <div slot="center" class="title">
        <span class="titleitem"
              v-for="(item, index) in titles"
              :class="{active: currentIndex===index}"
              @click="titleClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {NavBar},
    methods: {
      titleClick(index){
        this.currentIndex = index
        this.$emit('itemClicked', index)
      },
      backGoClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .backgo {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }

  .title {
    display: flex;
  }

  .titleitem {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
