<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~@/assets/img/checkbox/tick.svg" alt="" >
  </div>
</template>

<script>
  export default {
    name: "CheckBox",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button{
    width: 20px;
    height: 20px;
    border: 1px grey solid;
    border-radius: 50%;

  }
  .check {
    border-color: grey;
    background: red;
  }
</style>
