<template>
  <div class="item-top">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contentTop",
    props:{
      subcategories:{}
    }
  }
</script>

<style scoped>
  .item-top{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  .item {
    width: 25%;
    justify-content: space-evenly;
    text-align: center;
    font-size: 12px;
  }
  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }

</style>
