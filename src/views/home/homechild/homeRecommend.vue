<template>
  <div class="recommend">

    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeRecommend",
    props:{
      recommends:{
        type:Array,
        defaults:[]
      }
    },
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 15px 0;
    width: 100%;
    background-color: #fff;
    font-size: 12px;
    text-align: center;
    border-bottom: 6px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 68px;
    height: 68px;
  }
</style>
