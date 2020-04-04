<template>
  <div class="toast">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      msg: String,
      default(){
        return ''
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    width: 100px;
    height: 50px;
    top: 50%;
    left: 50%;
    color: white;
    background-color: rgba(0,0,0,0.7);
    z-index: 999;
  }
</style>
