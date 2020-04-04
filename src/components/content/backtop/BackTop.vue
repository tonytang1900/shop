<template>
    <div class="backtop">
      <img src="@/assets/img/backtop/backtop.png">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
    }
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 5px;
    bottom: 49px;
  }
  .backtop img {
    width: 50px;
    height: 50px;
  }
</style>
