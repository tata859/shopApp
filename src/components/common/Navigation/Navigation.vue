<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  .nav{
    display: flex;
    width: 100%;
    height: 44px;
    box-shadow: 0 1px 3px rgba(100,100,100,.2);
  }
  .left,.right{
    width: 60px;
    text-align: center;
  }
  .middle{
    flex: 1;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
  }
</style>
