<template>
  <div class="goods">
    <goodslist v-for="item in goods" :goodlist="item"/>
  </div>
</template>

<script>
  import goodslist from './goodslist'

  export default {
    name: "goods",
    props:{
      goods:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      goodslist,
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-evenly;*/
    justify-content: space-evenly;
  }
</style>
