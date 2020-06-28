<template>
  <div>
    <div class="shoplist-item"
         v-for="(item,index) in categories"
         @click="listClick(index)"
         :class="{isactive:current===index}"
    >{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "shopList",
    props:{
      categories:{
        type:Array,
        default:[],
      },
    },
    data(){
      return {
        current:0
      }
    },
    methods:{
      listClick(index){
        this.current = index
        this.$emit('listClick',index)
      },
    },
  }
</script>

<style scoped>
  .shoplist-item{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
  }
  .isactive{
    color:red;
  }
</style>
