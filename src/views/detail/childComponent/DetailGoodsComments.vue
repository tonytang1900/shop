<template>
  <div class="comments">
    <div class="avatar">
      <img class="logo" :src="goodscomments.avatar" alt=""/>
      <span>{{goodscomments.uname}}</span>
    </div>
    <div class="content">
      <span>{{goodscomments.content}}</span>
      <div class="localdate">{{localDate}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsComments",
    props: {
      goodscomments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      localDate() {
        return new Date(this.goodscomments.created * 1000).toLocaleString()
      }
    }
  }
</script>

<style scoped>
  .comments {
    margin-left: 10px;
    margin-top: 8px;
    padding-bottom: 8px;
    border-bottom: solid 6px #eeeeee;
  }

  .avatar {
    margin-left: 10px;
  }

  .logo {
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }

  .avatar span {
    margin-left: 20px;
  }

  .content {
    margin-left: 10px;
    margin-top: 10px;
  }

  .content div {
    margin-top: 6px;
  }

  .localdate {
    font-size: 16px;
  }
</style>
