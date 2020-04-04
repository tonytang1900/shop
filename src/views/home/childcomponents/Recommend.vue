<template>
    <div id="recommend">
      <div v-for="item in recommend" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
      props: {
          recommend: {
            type: Array,
            default(){
              return []
            }
          }
      },
    }
</script>

<style scoped>
  #recommend {
    display: flex;
    /*width: 100%;*/
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
