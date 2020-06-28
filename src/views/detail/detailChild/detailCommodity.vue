<template>
  <div class="commodity-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="desc-start"></div>
      <div class="desc-content">{{detailInfo.desc}}</div>
      <div class="desc-end"></div>
    </div>
    <div>
      <div v-for="items in detailInfo.detailImage">
        <div class="info-key" >{{items.key}}</div>
        <div class="info-list" v-for="(item,index) in items.list" :key="index">
          <img  :src="item" alt="" @load="refimg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailCommodity",
    props:{
      detailInfo:{
        type:Object,
        default:{}
      },
    },
    methods:{
      refimg(){
        this.$bus.$emit('refimg')
      },
    },
  }
</script>

<style scoped>
  .info-desc{
    padding: 20px;
    background-color: #fff;
  }
  .desc-content{
    padding: 15px 0;
    font-size: 12px;
    text-indent: 2em;
    color: #a0a0a0;
  }
  .desc-start,.desc-end{
    position: relative;
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
  }
  .desc-start{
    float: left;
  }
  .desc-end{
    float: right;
  }
  .desc-start:before,.desc-end:after{
    content: " ";
    position: absolute;
    bottom: -2px;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
  .desc-end:after{
    right: 0;
  }
  .info-key{
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: 14px;
  }
  .info-list{
    padding: 5px 10px;
  }
  .info-list img {
    width: 100%;

  }
</style>
