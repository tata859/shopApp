<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabBar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 1px rgba(100,100,100,.2);
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height:49px;
  }
</style>