<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-show">
    <div class="detail-title">{{goods.title}}</div>
    <div class="detail-price">
      <span>{{goods.newPrice}}</span>
      <span v-if="goods.oldPrice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div v-if="goods.columns" class="detail-column">
      <span>{{goods.columns[0]}}</span>
      <span >{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div v-if="goods.services" class="detail-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBaseInfo",
    props:{
      goods:{
        type:Object,
        default:{}
      },
      //lengths:0
    },
    mounted(){

    },
    methods:{

  },
  }
</script>

<style scoped>
  .detail-show{
    padding: 10px;
    background-color: #fff;
  }
  .detail-title{
    font-size: 15px;
    text-indent: 1em;
  }
  .detail-price{
    padding-top: 7px;
  }
  .detail-price span:first-child{
    font-size: 18px;
    color:palevioletred;
  }
  .detail-price span:nth-child(2){
    font-size: 15px;
    color:darkgray;
    text-decoration: line-through;
  }
  .detail-price span:nth-child(3){
    position: relative;
    top:-10px;
    padding: 2px;
    font-size: 10px;
    color:white;
    background-color: red;
    border-radius: 10px;
  }
  .detail-column,.detail-service{
    display: flex;
    padding-top: 4px;
  }
  .detail-column span{
    flex: 1;
    padding: 5px 2px;
    font-size:9px;
    color:darkgray;
  }
  .detail-column span:first-child{
     text-align: left;
   }
  .detail-column span:nth-child(2){
    text-align: center;
  }
  .detail-column span:last-child{
    text-align: right;
  }
  .detail-service span{
    flex: 1;
    padding: 5px 2px;
    vertical-align: middle;
    font-size:9px;
    color:darkgray;
  }
  .detail-service span:first-child{
    text-align: left;
  }
  .detail-service span:nth-child(2){
    text-align: center;
  }
  .detail-service span:last-child{
    text-align: right;
  }
  .detail-service img{
    vertical-align: middle;
    width: 12px;
    height: 12px;
  }
</style>
