<template>
    <div id="tab-control">
      <div v-for="(item,index) in titles"
           class="tab-control-item"
           :class="{active:index===currentIndex}"
           @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props:{
          titles: {
            type: Array,
            default(){
              return []
            }
          }
      },
      data(){
          return {
            currentIndex: 0
          }
      },
      methods:{
          itemClick(index){
            this.currentIndex = index
            this.$emit('tabClick', index)
          }
      }
    }
</script>

<style scoped>
  #tab-control {
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    font-size: 15px;

    position: sticky;

  }

  .tab-bar-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }

  .active span {
    padding-bottom: 5px;
    border-bottom: solid 3px var(--color-tint);
  }
</style>
