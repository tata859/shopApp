<template>
  <div class="back-top">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "backTop",
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 60px;
    width: 50px;
    height: 50px;
    z-index: 3;
  }
  .back-top img{
    width: 100%;
    height: 100%;
  }
</style>
