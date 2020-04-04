<template>
  <div class="toast" v-show="isShow">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        msg: '',
        isShow: false
      }
    },
    methods: {
      show(msg, duration=1200){
        this.msg = msg
        this.isShow = true
        setTimeout(()=>{
          this.msg = ''
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    width: 100px;
    height: 50px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
</style>

